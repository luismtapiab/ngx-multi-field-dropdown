# ngx-multi-field-dropdown

A customizable, lightweight Angular searchable dropdown component that allows searching across multiple object fields with word-based filtering.

## Features

- 🔍 **Multi-field Search**: Search across multiple object keys (e.g., name, ID, category).
- 🧩 **Word-based Filtering**: Splits search terms into words and ensures every word is present in at least one of the specified fields.
- ⚡ **Signal-based**: Built using modern Angular Signals for optimal performance.
- 🎨 **Premium Design**: Modern, clean UI with smooth transitions and customizable via CSS variables.
- ⌨️ **Keyboard Support**: Focuses search on open and supports standard interactions.
- ⏱️ **Debounced Input**: Built-in debouncing for search queries.

## Installation

```bash
npm install ngx-multi-field-dropdown
```

## Usage

### 1. Import the Component

```typescript
import { MultiFieldDropdownComponent } from 'ngx-multi-field-dropdown';

@Component({
  standalone: true,
  imports: [MultiFieldDropdownComponent],
  // ...
})
export class MyComponent {
  users = [
    { id: 1, name: 'John', lastName: 'Doe', role: 'Admin' },
    { id: 2, name: 'Jane', lastName: 'Smith', role: 'User' },
    // ...
  ];

  onSelectionChange(selected: any) {
    console.log('Selected user:', selected);
  }
}
```

### 2. Add to Template

```html
<ngx-multi-field-dropdown
  [items]="users"
  [displayKeys]="['name', 'lastName', 'role']"
  [placeholder]="'Search users by name or role...'"
  (selectionChange)="onSelectionChange($event)"
></ngx-multi-field-dropdown>
```

## Configuration

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `items` | `any[]` | `[]` | The array of objects to display. |
| `displayKeys` | `string[]` | `['name']` | The keys to search and display. |
| `placeholder` | `string` | `'Search...'` | Input placeholder text. |
| `notFoundText` | `string` | `'No results found'` | Text shown when no results match. |
| `debounceTime` | `number` | `300` | Debounce delay in milliseconds for the search input. |

## Custom Styling

The component uses a standard BEM-like class structure prefixed with `ngx-mfd-` for easy targeting. 

### CSS Classes

- `.ngx-mfd`: Main container
- `.ngx-mfd-trigger`: The clickable input area
- `.ngx-mfd-panel`: The dropdown panel containing the search and list
- `.ngx-mfd-search`: The search box container
- `.ngx-mfd-option`: Individual list items
- `.ngx-mfd-option--selected`: Modifier for selected items

### CSS Variables

You can override the following CSS variables globally (e.g., in your `:root` or a parent container) to match your brand:

```css
:root {
  --mfd-primary: #3b82f6;      /* Primary accent color */
  --mfd-bg: #ffffff;           /* Background color */
  --mfd-border: #e2e8f0;       /* Border color */
  --mfd-text: #1e293b;         /* Default text color */
  --mfd-text-muted: #64748b;   /* Muted/placeholder text color */
  --mfd-hover: #f8fafc;        /* Hover background color */
  --mfd-selected-bg: #eff6ff;  /* Selected item background */
  --mfd-radius: 0.5rem;        /* Border radius for all elements */
}
```

## License

MIT
