import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Category } from '@cxcloud/ct-types/categories';
import * as autocomplete from 'autocomplete.js';
import { CommerceService } from '../../core/commerce/commerce.service';
import { environment } from '../../../environments/environment';
import { SearchService } from '../../core/search/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [CommerceService]
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  title = environment.siteName;
  categories: Category[];

  searchForm: FormGroup;
  searchQuery = '';
  event: any;

  constructor(
    private router: Router,
    private commerceService: CommerceService,
    private formBuilder: FormBuilder,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.onToggleMenu();

    this.commerceService
      .getCategories()
      .subscribe(categories => (this.categories = categories));

    this.searchForm = this.formBuilder.group({
      query: ['']
    });
  }

  ngAfterViewInit() {
    autocomplete(this.searchInput.nativeElement, { hint: true }, [
      {
        source: (query, callback) => {
          this.searchService
            .searchByQuery({
              query,
              hitsPerPage: '3',
              attributesToRetrieve: 'id,name.en,description.en,images'
            })
            .subscribe((resp: any) => callback(resp.hits));
        },
        displayKey: 'name.en',
        templates: {
          header: '<div class="aa-suggestions-category">Products</div>',
          suggestion: suggestion => suggestion._highlightResult['name.en'].value
        }
      }
    ]).on('autocomplete:selected', function(event, suggestion, dataset) {
      console.log(suggestion, dataset);
    });
  }

  onToggleMenu() {
    document.addEventListener('DOMContentLoaded', function() {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll('.navbar-burger'),
        0
      );
      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function($el) {
          $el.addEventListener('click', function() {
            // Get the target from the "data-target" attribute
            const target = $el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
          });
        });
      }
    });
  }

  setSearchQuery() {
    // Seach input value
    // this.searchQuery = this.searchForm.get('query').value;
  }

  onSearch(event) {
    // this.event = event;
  }
}
