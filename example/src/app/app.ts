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
        <p class="signature">Created by <a href="https://luismtapiab.github.io" target="_blank" rel="noopener">Luis Tapia</a></p>
        <div class="links">
          <a class="link-btn github" href="https://github.com/luismtapiab/ngx-multi-field-dropdown" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" class="icon"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
          <a class="link-btn npm" href="https://www.npmjs.com/package/ngx-multi-field-dropdown" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" class="icon"><path d="M0 7.396h24v9.208h-12v1.516h-4.802v-1.516h-7.198v-9.208zm1.637 1.624v5.96h2.748v-4.323h1.374v4.323h1.374v-5.96h-5.496zm7.262 0v7.476h2.749v-1.516h2.748v-5.96h-5.497zm4.122 1.624v2.712h-1.374v-2.712h1.374zm5.556-1.624v5.96h2.748v-4.323h1.374v4.323h1.374v-5.96h-5.496z"/></svg>
            NPM Package
          </a>
        </div>
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
      color: #64748b;
      font-size: 0.875rem;
      border-top: 1px solid #e2e8f0;
      padding-top: 2rem;

      .signature {
        margin-top: 0;
        margin-bottom: 1rem;

        a {
          color: #2563eb;
          text-decoration: none;
          font-weight: 600;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      .links {
        display: flex;
        justify-content: center;
        gap: 1rem;

        .link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s ease;

          .icon {
            width: 16px;
            height: 16px;
            fill: currentColor;
          }

          &.github {
            background: #24292f;
            color: #ffffff;

            &:hover {
              background: #1c1f23;
            }
          }

          &.npm {
            background: #cb3837;
            color: #ffffff;

            &:hover {
              background: #ab2f2e;
            }
          }
        }
      }
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
