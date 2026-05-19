import { Component, signal } from '@angular/core';
import { MultiFieldDropdownComponent } from 'ngx-multi-field-dropdown';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MultiFieldDropdownComponent],
  template: `
    <div class="demo-container">
      <header>
        <h1>ngx-multi-field-dropdown Demo</h1>
        <p>Search users by name, last name, or role. Try searching for "Admin John" or "Jane User".</p>
      </header>

      <main>
        <div class="dropdown-wrapper">
          <label>Select a User</label>
          <ngx-multi-field-dropdown
            [items]="users()"
            [displayKeys]="['name', 'lastName', 'role']"
            [placeholder]="'Search users...'"
            (selectionChange)="onSelectionChange($event)"
          ></ngx-multi-field-dropdown>
        </div>

        @if(selectedUser()) {
          <div class="selection-details card">
            <h3>Selected User Details</h3>
            <div class="detail-row">
              <span class="label">ID:</span>
              <span class="value">{{ selectedUser().id }}</span>
            </div>
            <div class="detail-row">
              <span class="label">Full Name:</span>
              <span class="value">{{ selectedUser().name }} {{ selectedUser().lastName }}</span>
            </div>
            <div class="detail-row">
              <span class="label">Role:</span>
              <span class="value badge">{{ selectedUser().role }}</span>
            </div>
          </div>
        }
      </main>

      <footer>
        <p>Built with Angular Signals & ☕</p>
      </footer>
    </div>
  `,
  styles: [`
    .demo-container {
      max-width: 600px;
      margin: 4rem auto;
      padding: 2rem;
      background: #ffffff;
      border-radius: 1rem;
      box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
      font-family: 'Inter', system-ui, sans-serif;
    }

    header {
      text-align: center;
      margin-bottom: 2rem;

      h1 {
        font-size: 1.875rem;
        color: #1e293b;
        margin-bottom: 0.5rem;
        margin-top: 0;
      }

      p {
        color: #64748b;
        font-size: 0.875rem;
      }
    }

    .dropdown-wrapper {
      margin-bottom: 2rem;

      label {
        display: block;
        font-size: 0.875rem;
        font-weight: 600;
        color: #475569;
        margin-bottom: 0.5rem;
      }
    }

    .card {
      padding: 1.5rem;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 0.75rem;
      margin-top: 2rem;

      h3 {
        margin-top: 0;
        font-size: 1rem;
        color: #1e293b;
        margin-bottom: 1rem;
      }
    }

    .detail-row {
      display: flex;
      margin-bottom: 0.5rem;
      font-size: 0.875rem;

      .label {
        color: #64748b;
        width: 100px;
        flex-shrink: 0;
      }

      .value {
        color: #1e293b;
        font-weight: 500;
      }

      .badge {
        background: #dcfce7;
        color: #166534;
        padding: 0.125rem 0.5rem;
        border-radius: 9999px;
        font-size: 0.75rem;
      }
    }

    footer {
      margin-top: 4rem;
      text-align: center;
      color: #94a3b8;
      font-size: 0.75rem;
    }
  `]
})
export class App {
  users = signal([
    { id: 1, name: 'John', lastName: 'Doe', role: 'Administrator' },
    { id: 2, name: 'Jane', lastName: 'Smith', role: 'User' },
    { id: 3, name: 'Robert', lastName: 'Johnson', role: 'Moderator' },
    { id: 4, name: 'Emily', lastName: 'Davis', role: 'User' },
    { id: 5, name: 'Michael', lastName: 'Wilson', role: 'Admin' },
    { id: 6, name: 'Sarah', lastName: 'Brown', role: 'Developer' },
  ]);

  selectedUser = signal<any>(null);

  onSelectionChange(user: any) {
    this.selectedUser.set(user);
  }
}
