import { 
  Component, 
  ElementRef, 
  HostListener, 
  signal, 
  viewChild, 
  inject, 
  Output, 
  EventEmitter, 
  ChangeDetectionStrategy, 
  input, 
  computed,
  OnInit
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DebouncedInputDirective } from '../../directives/debounced-input.directive';

@Component({
  selector: 'ngx-multi-field-dropdown',
  standalone: true,
  imports: [FormsModule, DebouncedInputDirective],
  templateUrl: './multi-field-dropdown.component.html',
  styleUrls: ['./multi-field-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiFieldDropdownComponent implements OnInit {
  isOpen = signal<boolean>(false);

  constructor(private eRef: ElementRef) {}

  /** Items to display in the dropdown */
  items = input<any[]>([]);
  
  /** Keys of the object to use for searching and display */
  displayKeys = input<string[]>(['name']);
  
  /** Text to display when no results are found */
  notFoundText = input<string>('No results found');
  
  /** Placeholder for the search input */
  placeholder = input<string>('Search...');

  /** Debounce time in milliseconds for the search input */
  debounceTime = input<number>(300);

  @Output() selectionChange = new EventEmitter<any>();

  selectedItemIndex = signal<number>(-1);
  displayed = signal<string>('');
  searchTerm = signal<string>('');

  filteredItems = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    const searchWords = term.split(/\s+/).filter((word: string) => word.length > 0);
    const currentItems = this.items();

    if (searchWords.length === 0) {
      return currentItems;
    }

    return currentItems.filter((item: any) => {
      return searchWords.every((word: string) => {
        return this.displayKeys().some((key: string) => {
          const itemValue = String(item[key] ?? '').toLowerCase();
          return itemValue.includes(word);
        });
      });
    });
  });

  dropdownBox = viewChild<ElementRef>('dropdownBox');
  searchInput = viewChild<ElementRef>('searchInput');

  ngOnInit(): void {}

  toggleDropdown(): void {
    this.isOpen.update((v: boolean) => !v);
    if (this.isOpen()) {
      setTimeout(() => {
        this.searchInput()?.nativeElement.focus();
      }, 0);
    }
  }

  selectItem(item: any, index: number): void {
    this.selectedItemIndex.set(index);
    if (item) {
      const displayValue = this.displayKeys()
        .map((key: string) => item[key])
        .filter((val: any) => !!val)
        .join(' ');
      this.displayed.set(displayValue);
    } else {
      this.displayed.set('');
    }
    
    this.selectionChange.emit(item);
    this.searchTerm.set('');
    this.isOpen.set(false);
  }

  onSearchChange(value: string) {
    this.searchTerm.set(value);
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }

  onFocus() {
    this.isOpen.set(true);
  }
}
