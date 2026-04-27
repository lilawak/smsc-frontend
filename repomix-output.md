This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where comments have been removed, empty lines have been removed.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Code comments have been removed from supported file types
- Empty lines have been removed from all files
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.editorconfig
.gitignore
angular.json
package.json
public/client.png
public/favicon.ico
public/planification.png
public/solution.png
public/version.png
README.md
repomix-output.xml
src/app/app.component.css
src/app/app.component.html
src/app/app.component.spec.ts
src/app/app.component.ts
src/app/app.config.ts
src/app/app.routes.ts
src/app/layout/navbar/navbar.component.css
src/app/layout/navbar/navbar.component.html
src/app/layout/navbar/navbar.component.spec.ts
src/app/layout/navbar/navbar.component.ts
src/app/pages/clients/clients.component.css
src/app/pages/clients/clients.component.html
src/app/pages/clients/clients.component.spec.ts
src/app/pages/clients/clients.component.ts
src/app/pages/dashboard/dashboard.component.css
src/app/pages/dashboard/dashboard.component.html
src/app/pages/dashboard/dashboard.component.spec.ts
src/app/pages/dashboard/dashboard.component.ts
src/app/pages/planifications/planifications.component.css
src/app/pages/planifications/planifications.component.html
src/app/pages/planifications/planifications.component.spec.ts
src/app/pages/planifications/planifications.component.ts
src/app/pages/solutions/solutions.component.css
src/app/pages/solutions/solutions.component.html
src/app/pages/solutions/solutions.component.spec.ts
src/app/pages/solutions/solutions.component.ts
src/app/pages/versions/versions.component.css
src/app/pages/versions/versions.component.html
src/app/pages/versions/versions.component.spec.ts
src/app/pages/versions/versions.component.ts
src/app/services/client.service.ts
src/app/services/planification.service.ts
src/app/services/solution.service.ts
src/app/services/version.service.ts
src/index.html
src/main.ts
src/styles.css
tsconfig.app.json
tsconfig.json
tsconfig.spec.json
```

# Files

## File: .editorconfig
````
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single
ij_typescript_use_double_quotes = false

[*.md]
max_line_length = off
trim_trailing_whitespace = false
````

## File: .gitignore
````
# See https://docs.github.com/get-started/getting-started-with-git/ignoring-files for more about ignoring files.

# Compiled output
/dist
/tmp
/out-tsc
/bazel-out

# Node
/node_modules
npm-debug.log
yarn-error.log

# IDEs and editors
.idea/
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# Visual Studio Code
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
.history/*

# Miscellaneous
/.angular/cache
.sass-cache/
/connect.lock
/coverage
/libpeerconnection.log
testem.log
/typings

# System files
.DS_Store
Thumbs.db
````

## File: angular.json
````json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "pfe-angular": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/pfe-angular",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": []
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "pfe-angular:build:production"
            },
            "development": {
              "buildTarget": "pfe-angular:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n"
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "polyfills": [
              "zone.js",
              "zone.js/testing"
            ],
            "tsConfig": "tsconfig.spec.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": []
          }
        }
      }
    }
  }
}
````

## File: package.json
````json
{
  "name": "pfe-angular",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "^19.2.0",
    "@angular/compiler": "^19.2.0",
    "@angular/core": "^19.2.0",
    "@angular/forms": "^19.2.0",
    "@angular/platform-browser": "^19.2.0",
    "@angular/platform-browser-dynamic": "^19.2.0",
    "@angular/router": "^19.2.0",
    "primeicons": "^7.0.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.15.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^19.2.24",
    "@angular/cli": "^19.2.24",
    "@angular/compiler-cli": "^19.2.0",
    "@types/jasmine": "~5.1.0",
    "jasmine-core": "~5.6.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "typescript": "~5.7.2"
  }
}
````

## File: README.md
````markdown
# PfeAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.24.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
````

## File: repomix-output.xml
````xml
This file is a merged representation of the entire codebase, combined into a single document by Repomix.
<file_summary>
This section contains a summary of this file.
<purpose>
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>
<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>
<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>
<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>
</file_summary>
<directory_structure>
.editorconfig
.gitignore
angular.json
package.json
public/client.png
public/favicon.ico
public/planification.png
public/solution.png
public/version.png
README.md
src/app/app.component.css
src/app/app.component.html
src/app/app.component.spec.ts
src/app/app.component.ts
src/app/app.config.ts
src/app/app.routes.ts
src/app/layout/navbar/navbar.component.css
src/app/layout/navbar/navbar.component.html
src/app/layout/navbar/navbar.component.spec.ts
src/app/layout/navbar/navbar.component.ts
src/app/pages/clients/clients.component.css
src/app/pages/clients/clients.component.html
src/app/pages/clients/clients.component.spec.ts
src/app/pages/clients/clients.component.ts
src/app/pages/dashboard/dashboard.component.css
src/app/pages/dashboard/dashboard.component.html
src/app/pages/dashboard/dashboard.component.spec.ts
src/app/pages/dashboard/dashboard.component.ts
src/app/pages/planifications/planifications.component.css
src/app/pages/planifications/planifications.component.html
src/app/pages/planifications/planifications.component.spec.ts
src/app/pages/planifications/planifications.component.ts
src/app/pages/solutions/solutions.component.css
src/app/pages/solutions/solutions.component.html
src/app/pages/solutions/solutions.component.spec.ts
src/app/pages/solutions/solutions.component.ts
src/app/pages/versions/versions.component.css
src/app/pages/versions/versions.component.html
src/app/pages/versions/versions.component.spec.ts
src/app/pages/versions/versions.component.ts
src/app/services/client.service.ts
src/app/services/planification.service.ts
src/app/services/solution.service.ts
src/app/services/version.service.ts
src/index.html
src/main.ts
src/styles.css
tsconfig.app.json
tsconfig.json
tsconfig.spec.json
</directory_structure>
<files>
This section contains the contents of the repository's files.
<file path=".editorconfig">
# Editor configuration, see https://editorconfig.org
root = true
[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true
[*.ts]
quote_type = single
ij_typescript_use_double_quotes = false
[*.md]
max_line_length = off
trim_trailing_whitespace = false
</file>
<file path=".gitignore">
# See https://docs.github.com/get-started/getting-started-with-git/ignoring-files for more about ignoring files.
# Compiled output
/dist
/tmp
/out-tsc
/bazel-out
# Node
/node_modules
npm-debug.log
yarn-error.log
# IDEs and editors
.idea/
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace
# Visual Studio Code
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
.history/*
# Miscellaneous
/.angular/cache
.sass-cache/
/connect.lock
/coverage
/libpeerconnection.log
testem.log
/typings
# System files
.DS_Store
Thumbs.db
</file>
<file path="angular.json">
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "pfe-angular": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/pfe-angular",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": []
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "pfe-angular:build:production"
            },
            "development": {
              "buildTarget": "pfe-angular:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n"
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "polyfills": [
              "zone.js",
              "zone.js/testing"
            ],
            "tsConfig": "tsconfig.spec.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": []
          }
        }
      }
    }
  }
}
</file>
<file path="package.json">
{
  "name": "pfe-angular",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "^19.2.0",
    "@angular/compiler": "^19.2.0",
    "@angular/core": "^19.2.0",
    "@angular/forms": "^19.2.0",
    "@angular/platform-browser": "^19.2.0",
    "@angular/platform-browser-dynamic": "^19.2.0",
    "@angular/router": "^19.2.0",
    "primeicons": "^7.0.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.15.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^19.2.24",
    "@angular/cli": "^19.2.24",
    "@angular/compiler-cli": "^19.2.0",
    "@types/jasmine": "~5.1.0",
    "jasmine-core": "~5.6.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "typescript": "~5.7.2"
  }
}
</file>
<file path="README.md">
# PfeAngular
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.24.
## Development server
To start a local development server, run:
```bash
ng serve
```
Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.
## Code scaffolding
Angular CLI includes powerful code scaffolding tools. To generate a new component, run:
```bash
ng generate component component-name
```
For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:
```bash
ng generate --help
```
## Building
To build the project run:
```bash
ng build
```
This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.
## Running unit tests
To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:
```bash
ng test
```
## Running end-to-end tests
For end-to-end (e2e) testing, run:
```bash
ng e2e
```
Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.
## Additional Resources
For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
</file>
<file path="src/app/app.component.css">
</file>
<file path="src/app/app.component.html">
<app-navbar></app-navbar>
<div class="page-container">
  <router-outlet></router-outlet>
</div>
</file>
<file path="src/app/app.component.spec.ts">
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it(`should have the 'pfe-angular' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pfe-angular');
  });
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, pfe-angular');
  });
});
</file>
<file path="src/app/app.component.ts">
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
</file>
<file path="src/app/app.config.ts">
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: { darkModeSelector: false }
      }
    })
  ]
};
</file>
<file path="src/app/app.routes.ts">
import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { VersionsComponent } from './pages/versions/versions.component';
import { PlanificationsComponent } from './pages/planifications/planifications.component';
export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'versions', component: VersionsComponent },
  { path: 'planifications', component: PlanificationsComponent },
];
</file>
<file path="src/app/layout/navbar/navbar.component.css">
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #8ECCE6;
  padding: 0 32px;
  height: 60px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
.navbar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 20px;
  font-weight: 700;
}
.navbar-links {
  display: flex;
  gap: 8px;
}
.navbar-links a {
  color: #ccc;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.2s;
}
.navbar-links a:hover {
  background-color: rgba(255,255,255,0.1);
  color: white;
}
.navbar-links a.active {
  background-color: #003366;
  color: white;
}
</file>
<file path="src/app/layout/navbar/navbar.component.html">
<nav class="navbar">
  <div class="navbar-brand">
    <span class="brand-icon"><img src="https://t2s.group/wp-content/uploads/2024/04/logo-1.png" alt="T2S Group" width="75" ></span>
  </div>
  <div class="navbar-links">
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/planifications" routerLinkActive="active">Planifications</a>
    <a routerLink="/clients" routerLinkActive="active">Clients</a>
    <a routerLink="/solutions" routerLinkActive="active">Solutions</a>
    <a routerLink="/versions" routerLinkActive="active">Versions</a>
  </div>
</nav>
</file>
<file path="src/app/layout/navbar/navbar.component.spec.ts">
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
</file>
<file path="src/app/layout/navbar/navbar.component.ts">
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {}
</file>
<file path="src/app/pages/clients/clients.component.css">
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.dialog-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 0;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.field label {
  font-size: 13px;
  font-weight: 600;
  color: #555;
}
.field input {
  width: 100%;
}
</file>
<file path="src/app/pages/clients/clients.component.html">
<div class="page-header">
  <h2 class="page-title">Gestion des Clients</h2>
  <button pButton label="+ Ajouter" (click)="openNew()"></button>
</div>
<p-table [value]="clients" [paginator]="true" [rows]="10"
         styleClass="p-datatable-striped" [tableStyle]="{'width':'100%'}">
  <ng-template pTemplate="header">
    <tr>
      <th>Nom</th>
      <th>Email</th>
      <th>Téléphone</th>
      <th>Secteur</th>
      <th>Actions</th>
    </tr>
  </ng-template>
  <ng-template pTemplate="body" let-c>
    <tr>
      <td>{{ c.nom }}</td>
      <td>{{ c.email }}</td>
      <td>{{ c.telephone }}</td>
      <td>{{ c.secteur }}</td>
      <td>
        <button pButton icon="pi pi-pencil" class="p-button-text p-button-sm"
                (click)="openEdit(c)"></button>
        <button pButton icon="pi pi-trash" class="p-button-text p-button-danger p-button-sm"
                (click)="delete(c.idClient)"></button>
      </td>
    </tr>
  </ng-template>
  <ng-template pTemplate="emptymessage">
    <tr><td colspan="5" style="text-align:center">Aucun client trouvé</td></tr>
  </ng-template>
</p-table>
<p-dialog [(visible)]="showDialog"
          [header]="editMode ? 'Modifier Client' : 'Nouveau Client'"
          [modal]="true" [style]="{width:'450px'}">
  <div class="dialog-form">
    <div class="field">
      <label>Nom *</label>
      <input pInputText [(ngModel)]="form.nom" placeholder="Nom complet" />
    </div>
    <div class="field">
      <label>Email *</label>
      <input pInputText [(ngModel)]="form.email" placeholder="email@exemple.com" />
    </div>
    <div class="field">
      <label>Téléphone</label>
      <input pInputText [(ngModel)]="form.telephone" placeholder="+212 6xx xxx xxx" />
    </div>
    <div class="field">
      <label>Secteur</label>
      <input pInputText [(ngModel)]="form.secteur" placeholder="Ex: Finance, IT..." />
    </div>
    <div class="field">
      <label>Notes</label>
      <input pInputText [(ngModel)]="form.notes" placeholder="Notes..." />
    </div>
  </div>
  <ng-template pTemplate="footer">
    <button pButton label="Annuler" class="p-button-text" (click)="showDialog=false"></button>
    <button pButton label="Enregistrer" (click)="save()"></button>
  </ng-template>
</p-dialog>
</file>
<file path="src/app/pages/clients/clients.component.spec.ts">
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientsComponent } from './clients.component';
describe('ClientsComponent', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
</file>
<file path="src/app/pages/clients/clients.component.ts">
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ClientService, Client } from '../../services/client.service';
@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, ButtonModule, InputTextModule, DialogModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];
  showDialog = false;
  editMode = false;
  selectedId: number | null = null;
  form: Client = { nom: '', email: '' };
  constructor(private clientService: ClientService) {}
  ngOnInit() { this.load(); }
  load() {
    this.clientService.getAll().subscribe((data: Client[]) => this.clients = data);
  }
  openNew() {
    this.form = { nom: '', email: '' };
    this.editMode = false;
    this.selectedId = null;
    this.showDialog = true;
  }
  openEdit(c: Client) {
    this.form = { ...c };
    this.editMode = true;
    this.selectedId = c.idClient!;
    this.showDialog = true;
  }
  save() {
    if (this.editMode && this.selectedId) {
      this.clientService.update(this.selectedId, this.form).subscribe(() => {
        this.load(); this.showDialog = false;
      });
    } else {
      this.clientService.create(this.form).subscribe(() => {
        this.load(); this.showDialog = false;
      });
    }
  }
  delete(id: number) {
    if (confirm('Supprimer ce client ?')) {
      this.clientService.delete(id).subscribe(() => this.load());
    }
  }
}
</file>
<file path="src/app/pages/dashboard/dashboard.component.css">
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 10px;
}
.stat-card {
  background: white;
  border-radius: 12px;
  padding: 28px 24px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border-top: 4px solid;
}
.stat-card.blue  { border-color: #003366; }
.stat-card.green { border-color: #003366; }
.stat-card.orange{ border-color: #003366; }
.stat-card.red   { border-color: #003366; }
.stat-icon   { font-size: 36px; margin-bottom: 12px; }
.stat-number { font-size: 40px; font-weight: 700; color: #1a1a2e; }
.stat-label  { font-size: 14px; color: #888; margin-top: 4px; }
</file>
<file path="src/app/pages/dashboard/dashboard.component.html">
<h2 class="page-title">Tableau de Bord</h2>
<div class="cards-grid">
  <div class="stat-card blue">
    <div class="stat-icon"><img decoding="async" src="client.png" width="75" alt="client.png"></div>
    <div class="stat-number">{{ totalClients }}</div>
    <div class="stat-label">Clients</div>
  </div>
  <div class="stat-card green">
    <div class="stat-icon"><img decoding="async" src="https://t2s.group/wp-content/uploads/2024/06/Accroitre-lefficacite.png" width="75" alt="solution.png"></div>
    <div class="stat-number">{{ totalSolutions }}</div>
    <div class="stat-label">Solutions</div>
  </div>
  <div class="stat-card orange">
    <div class="stat-icon"><img decoding="async" src="version.png" width="75" alt="version.png"></div>
    <div class="stat-number">{{ totalVersions }}</div>
    <div class="stat-label">Versions</div>
  </div>
  <div class="stat-card red">
    <div class="stat-icon"><img decoding="async" src="planification.png" width="75" alt="planification.png"></div>
    <div class="stat-number">{{ totalPlanifications }}</div>
    <div class="stat-label">Planifications</div>
  </div>
</div>
</file>
<file path="src/app/pages/dashboard/dashboard.component.spec.ts">
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
</file>
<file path="src/app/pages/dashboard/dashboard.component.ts">
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client.service';
import { SolutionService } from '../../services/solution.service';
import { VersionService } from '../../services/version.service';
import { PlanificationService } from '../../services/planification.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  totalClients = 0;
  totalSolutions = 0;
  totalVersions = 0;
  totalPlanifications = 0;
  constructor(
    private clientService: ClientService,
    private solutionService: SolutionService,
    private versionService: VersionService,
    private planificationService: PlanificationService
  ) {}
  ngOnInit() {
    this.clientService.getAll().subscribe((d: any[]) => this.totalClients = d.length);
    this.solutionService.getAll().subscribe((d: any[]) => this.totalSolutions = d.length);
    this.versionService.getAll().subscribe((d: any[]) => this.totalVersions = d.length);
    this.planificationService.getAll().subscribe((d: any[]) => this.totalPlanifications = d.length);
  }
}
</file>
<file path="src/app/pages/planifications/planifications.component.css">
.page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.dialog-form { display: flex; flex-direction: column; gap: 16px; padding: 8px 0; }
.field { display: flex; flex-direction: column; gap: 6px; }
.field label { font-size: 13px; font-weight: 600; color: #555; }
.field input { width: 100%; }
</file>
<file path="src/app/pages/planifications/planifications.component.html">
<div class="page-header">
  <h2 class="page-title">Gestion des Planifications</h2>
  <button pButton label="+ Ajouter" (click)="openNew()"></button>
</div>
<p-table [value]="planifications" [paginator]="true" [rows]="10"
         styleClass="p-datatable-striped" [tableStyle]="{'width':'100%'}">
  <ng-template pTemplate="header">
    <tr>
      <th>Titre</th>
      <th>Client</th>
      <th>Version</th>
      <th>Date Commande</th>
      <th>Livraison Prévue</th>
      <th>Livraison Réelle</th>
      <th>Actions</th>
    </tr>
  </ng-template>
  <ng-template pTemplate="body" let-p>
    <tr>
      <td>{{ p.titre }}</td>
      <td>{{ p.client?.nom }}</td>
      <td>{{ p.version?.numeroVersion }}</td>
      <td>{{ p.dateCommande || '—' }}</td>
      <td>{{ p.dateLivraisonPrevue || '—' }}</td>
      <td>{{ p.dateLivraisonReelle || '—' }}</td>
      <td>
        <button pButton icon="pi pi-pencil" class="p-button-text p-button-sm" (click)="openEdit(p)"></button>
        <button pButton icon="pi pi-trash" class="p-button-text p-button-danger p-button-sm" (click)="delete(p.idPlanification)"></button>
      </td>
    </tr>
  </ng-template>
  <ng-template pTemplate="emptymessage">
    <tr><td colspan="7" style="text-align:center">Aucune planification trouvée</td></tr>
  </ng-template>
</p-table>
<p-dialog [(visible)]="showDialog"
          [header]="editMode ? 'Modifier Planification' : 'Nouvelle Planification'"
          [modal]="true" [style]="{width:'480px'}">
  <div class="dialog-form">
    <div class="field">
      <label>Titre *</label>
      <input pInputText [(ngModel)]="form.titre" placeholder="Titre de la planification" />
    </div>
    <div class="field">
      <label>Client *</label>
      <p-select [options]="clients" [(ngModel)]="form.client"
                optionLabel="nom" placeholder="Choisir un client"
                [style]="{width:'100%'}"></p-select>
    </div>
    <div class="field">
      <label>Version *</label>
      <p-select [options]="versions" [(ngModel)]="form.version"
                optionLabel="numeroVersion" placeholder="Choisir une version"
                [style]="{width:'100%'}"></p-select>
    </div>
    <div class="field">
      <label>Date de Commande</label>
      <input pInputText type="date" [(ngModel)]="form.dateCommande" />
    </div>
    <div class="field">
      <label>Date Livraison Prévue</label>
      <input pInputText type="date" [(ngModel)]="form.dateLivraisonPrevue" />
    </div>
    <div class="field">
      <label>Date Livraison Réelle</label>
      <input pInputText type="date" [(ngModel)]="form.dateLivraisonReelle" />
    </div>
  </div>
  <ng-template pTemplate="footer">
    <button pButton label="Annuler" class="p-button-text" (click)="showDialog=false"></button>
    <button pButton label="Enregistrer" (click)="save()"></button>
  </ng-template>
</p-dialog>
</file>
<file path="src/app/pages/planifications/planifications.component.spec.ts">
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanificationsComponent } from './planifications.component';
describe('PlanificationsComponent', () => {
  let component: PlanificationsComponent;
  let fixture: ComponentFixture<PlanificationsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanificationsComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(PlanificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
</file>
<file path="src/app/pages/planifications/planifications.component.ts">
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { PlanificationService, Planification } from '../../services/planification.service';
import { ClientService, Client } from '../../services/client.service';
import { VersionService, Version } from '../../services/version.service';
@Component({
  selector: 'app-planifications',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, ButtonModule,
    InputTextModule, DialogModule, SelectModule],
  templateUrl: './planifications.component.html',
  styleUrl: './planifications.component.css'
})
export class PlanificationsComponent implements OnInit {
  planifications: Planification[] = [];
  clients: Client[] = [];
  versions: Version[] = [];
  showDialog = false;
  editMode = false;
  selectedId: number | null = null;
  form: any = { titre: '' };
  constructor(
    private planificationService: PlanificationService,
    private clientService: ClientService,
    private versionService: VersionService
  ) {}
  ngOnInit() {
    this.load();
    this.clientService.getAll().subscribe((d: Client[]) => this.clients = d);
    this.versionService.getAll().subscribe((d: Version[]) => this.versions = d);
  }
  load() {
    this.planificationService.getAll().subscribe((data: Planification[]) => this.planifications = data);
  }
  openNew() {
    this.form = { titre: '', client: null, version: null };
    this.editMode = false;
    this.showDialog = true;
  }
  openEdit(p: Planification) {
    this.form = { ...p };
    this.editMode = true;
    this.selectedId = p.idPlanification!;
    this.showDialog = true;
  }
  save() {
    if (this.editMode && this.selectedId) {
      this.planificationService.update(this.selectedId, this.form).subscribe(() => {
        this.load(); this.showDialog = false;
      });
    } else {
      this.planificationService.create(this.form).subscribe(() => {
        this.load(); this.showDialog = false;
      });
    }
  }
  delete(id: number) {
    if (confirm('Supprimer cette planification ?')) {
      this.planificationService.delete(id).subscribe(() => this.load());
    }
  }
}
</file>
<file path="src/app/pages/solutions/solutions.component.css">
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.dialog-form { display: flex; flex-direction: column; gap: 16px; padding: 8px 0; }
.field { display: flex; flex-direction: column; gap: 6px; }
.field label { font-size: 13px; font-weight: 600; color: #555; }
.field input { width: 100%; }
</file>
<file path="src/app/pages/solutions/solutions.component.html">
<div class="page-header">
  <h2 class="page-title">Gestion des Solutions</h2>
  <button pButton label="+ Ajouter" (click)="openNew()"></button>
</div>
<p-table [value]="solutions" [paginator]="true" [rows]="10"
         styleClass="p-datatable-striped" [tableStyle]="{'width':'100%'}">
  <ng-template pTemplate="header">
    <tr>
      <th>Nom</th>
      <th>Description</th>
      <th>Actions</th>
    </tr>
  </ng-template>
  <ng-template pTemplate="body" let-s>
    <tr>
      <td>{{ s.nom }}</td>
      <td>{{ s.description }}</td>
      <td>
        <button pButton icon="pi pi-pencil" class="p-button-text p-button-sm" (click)="openEdit(s)"></button>
        <button pButton icon="pi pi-trash" class="p-button-text p-button-danger p-button-sm" (click)="delete(s.idSolution)"></button>
      </td>
    </tr>
  </ng-template>
  <ng-template pTemplate="emptymessage">
    <tr><td colspan="3" style="text-align:center">Aucune solution trouvée</td></tr>
  </ng-template>
</p-table>
<p-dialog [(visible)]="showDialog"
          [header]="editMode ? 'Modifier Solution' : 'Nouvelle Solution'"
          [modal]="true" [style]="{width:'450px'}">
  <div class="dialog-form">
    <div class="field">
      <label>Nom *</label>
      <input pInputText [(ngModel)]="form.nom" placeholder="Nom de la solution" />
    </div>
    <div class="field">
      <label>Description</label>
      <input pInputText [(ngModel)]="form.description" placeholder="Description..." />
    </div>
  </div>
  <ng-template pTemplate="footer">
    <button pButton label="Annuler" class="p-button-text" (click)="showDialog=false"></button>
    <button pButton label="Enregistrer" (click)="save()"></button>
  </ng-template>
</p-dialog>
</file>
<file path="src/app/pages/solutions/solutions.component.spec.ts">
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolutionsComponent } from './solutions.component';
describe('SolutionsComponent', () => {
  let component: SolutionsComponent;
  let fixture: ComponentFixture<SolutionsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionsComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
</file>
<file path="src/app/pages/solutions/solutions.component.ts">
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { SolutionService, Solution } from '../../services/solution.service';
@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, ButtonModule, InputTextModule, DialogModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent implements OnInit {
  solutions: Solution[] = [];
  showDialog = false;
  editMode = false;
  selectedId: number | null = null;
  form: Solution = { nom: '' };
  constructor(private solutionService: SolutionService) {}
  ngOnInit() { this.load(); }
  load() {
    this.solutionService.getAll().subscribe((data: Solution[]) => this.solutions = data);
  }
  openNew() {
    this.form = { nom: '' };
    this.editMode = false;
    this.showDialog = true;
  }
  openEdit(s: Solution) {
    this.form = { ...s };
    this.editMode = true;
    this.selectedId = s.idSolution!;
    this.showDialog = true;
  }
  save() {
    if (this.editMode && this.selectedId) {
      this.solutionService.update(this.selectedId, this.form).subscribe(() => {
        this.load(); this.showDialog = false;
      });
    } else {
      this.solutionService.create(this.form).subscribe(() => {
        this.load(); this.showDialog = false;
      });
    }
  }
  delete(id: number) {
    if (confirm('Supprimer cette solution ?')) {
      this.solutionService.delete(id).subscribe(() => this.load());
    }
  }
}
</file>
<file path="src/app/pages/versions/versions.component.css">
.page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.dialog-form { display: flex; flex-direction: column; gap: 16px; padding: 8px 0; }
.field { display: flex; flex-direction: column; gap: 6px; }
.field label { font-size: 13px; font-weight: 600; color: #555; }
.field input, .field p-select { width: 100%; }
.badge { padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; }
.badge-DEMO    { background: #e0e7ff; color: #4338ca; }
.badge-EN_DEV  { background: #fef9c3; color: #854d0e; }
.badge-EN_TEST { background: #ffedd5; color: #9a3412; }
.badge-LIVRE   { background: #dcfce7; color: #166534; }
.badge-ARCHIVE { background: #f1f5f9; color: #64748b; }
</file>
<file path="src/app/pages/versions/versions.component.html">
<div class="page-header">
  <h2 class="page-title">Gestion des Versions</h2>
  <button pButton label="+ Ajouter" (click)="openNew()"></button>
</div>
<p-table [value]="versions" [paginator]="true" [rows]="10"
         styleClass="p-datatable-striped" [tableStyle]="{'width':'100%'}">
  <ng-template pTemplate="header">
    <tr>
      <th>Numéro</th>
      <th>Solution</th>
      <th>État</th>
      <th>Date Release Prévue</th>
      <th>Date Release Réelle</th>
      <th>Actions</th>
    </tr>
  </ng-template>
  <ng-template pTemplate="body" let-v>
    <tr>
      <td>{{ v.numeroVersion }}</td>
      <td>{{ v.solution?.nom }}</td>
      <td><span [class]="'badge badge-' + v.etat">{{ getEtatLabel(v.etat) }}</span></td>
      <td>{{ v.dateReleasePrevue }}</td>
      <td>{{ v.dateReleaseReelle || '—' }}</td>
      <td>
        <button pButton icon="pi pi-pencil" class="p-button-text p-button-sm" (click)="openEdit(v)"></button>
        <button pButton icon="pi pi-trash" class="p-button-text p-button-danger p-button-sm" (click)="delete(v.idVersion)"></button>
      </td>
    </tr>
  </ng-template>
  <ng-template pTemplate="emptymessage">
    <tr><td colspan="6" style="text-align:center">Aucune version trouvée</td></tr>
  </ng-template>
</p-table>
<p-dialog [(visible)]="showDialog"
          [header]="editMode ? 'Modifier Version' : 'Nouvelle Version'"
          [modal]="true" [style]="{width:'480px'}">
  <div class="dialog-form">
    <div class="field">
      <label>Solution *</label>
      <p-select [options]="solutions" [(ngModel)]="form.solution"
                optionLabel="nom" placeholder="Choisir une solution"
                [style]="{width:'100%'}"></p-select>
    </div>
    <div class="field">
      <label>Numéro de version *</label>
      <input pInputText [(ngModel)]="form.numeroVersion" placeholder="Ex: 1.0.0" />
    </div>
    <div class="field">
      <label>Description</label>
      <input pInputText [(ngModel)]="form.description" placeholder="Description des changements" />
    </div>
    <div class="field">
      <label>État *</label>
      <p-select [options]="etats" [(ngModel)]="form.etat"
                optionLabel="label" optionValue="value"
                [style]="{width:'100%'}"></p-select>
    </div>
    <div class="field">
      <label>Date Release Prévue *</label>
      <input pInputText type="date" [(ngModel)]="form.dateReleasePrevue" />
    </div>
    <div class="field">
      <label>Date Release Réelle</label>
      <input pInputText type="date" [(ngModel)]="form.dateReleaseReelle" />
    </div>
  </div>
  <ng-template pTemplate="footer">
    <button pButton label="Annuler" class="p-button-text" (click)="showDialog=false"></button>
    <button pButton label="Enregistrer" (click)="save()"></button>
  </ng-template>
</p-dialog>
</file>
<file path="src/app/pages/versions/versions.component.spec.ts">
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VersionsComponent } from './versions.component';
describe('VersionsComponent', () => {
  let component: VersionsComponent;
  let fixture: ComponentFixture<VersionsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersionsComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(VersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
</file>
<file path="src/app/pages/versions/versions.component.ts">
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { VersionService, Version } from '../../services/version.service';
import { SolutionService, Solution } from '../../services/solution.service';
@Component({
  selector: 'app-versions',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, ButtonModule,
    InputTextModule, DialogModule, SelectModule],
  templateUrl: './versions.component.html',
  styleUrl: './versions.component.css'
})
export class VersionsComponent implements OnInit {
  versions: Version[] = [];
  solutions: Solution[] = [];
  showDialog = false;
  editMode = false;
  selectedId: number | null = null;
  form: any = { numeroVersion: '', etat: 'DEMO', dateReleasePrevue: '' };
  etats = [
    { label: 'Démo',           value: 'DEMO' },
    { label: 'En développement', value: 'EN_DEV' },
    { label: 'En test',        value: 'EN_TEST' },
    { label: 'Livré',          value: 'LIVRE' },
    { label: 'Archivé',        value: 'ARCHIVE' },
  ];
  constructor(
    private versionService: VersionService,
    private solutionService: SolutionService
  ) {}
  ngOnInit() {
    this.load();
    this.solutionService.getAll().subscribe((d: Solution[]) => this.solutions = d);
  }
  load() {
    this.versionService.getAll().subscribe((data: Version[]) => this.versions = data);
  }
  openNew() {
    this.form = { numeroVersion: '', etat: 'DEMO', dateReleasePrevue: '', solution: null };
    this.editMode = false;
    this.showDialog = true;
  }
  openEdit(v: Version) {
    this.form = { ...v };
    this.editMode = true;
    this.selectedId = v.idVersion!;
    this.showDialog = true;
  }
  save() {
    if (this.editMode && this.selectedId) {
      this.versionService.update(this.selectedId, this.form).subscribe(() => {
        this.load(); this.showDialog = false;
      });
    } else {
      this.versionService.create(this.form).subscribe(() => {
        this.load(); this.showDialog = false;
      });
    }
  }
  delete(id: number) {
    if (confirm('Supprimer cette version ?')) {
      this.versionService.delete(id).subscribe(() => this.load());
    }
  }
  getEtatLabel(value: string): string {
    return this.etats.find(e => e.value === value)?.label || value;
  }
}
</file>
<file path="src/app/services/client.service.ts">
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Client {
  idClient?: number;
  nom: string;
  email: string;
  telephone?: string;
  secteur?: string;
  notes?: string;
}
@Injectable({ providedIn: 'root' })
export class ClientService {
  private api = 'http://localhost:8081/api/clients';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Client[]> { return this.http.get<Client[]>(this.api); }
  getById(id: number): Observable<Client> { return this.http.get<Client>(`${this.api}/${id}`); }
  create(c: Client): Observable<Client> { return this.http.post<Client>(this.api, c); }
  update(id: number, c: Client): Observable<Client> { return this.http.put<Client>(`${this.api}/${id}`, c); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.api}/${id}`); }
}
</file>
<file path="src/app/services/planification.service.ts">
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Planification {
  idPlanification?: number;
  version?: any;
  client?: any;
  titre: string;
  dateLivraisonPrevue?: string;
  dateLivraisonReelle?: string;
  dateCommande?: string;
}
@Injectable({ providedIn: 'root' })
export class PlanificationService {
  private api = 'http://localhost:8081/api/planifications';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Planification[]> { return this.http.get<Planification[]>(this.api); }
  getById(id: number): Observable<Planification> { return this.http.get<Planification>(`${this.api}/${id}`); }
  create(p: Planification): Observable<Planification> { return this.http.post<Planification>(this.api, p); }
  update(id: number, p: Planification): Observable<Planification> { return this.http.put<Planification>(`${this.api}/${id}`, p); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.api}/${id}`); }
}
</file>
<file path="src/app/services/solution.service.ts">
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Solution {
  idSolution?: number;
  nom: string;
  description?: string;
}
@Injectable({ providedIn: 'root' })
export class SolutionService {
  private api = 'http://localhost:8081/api/solutions';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Solution[]> { return this.http.get<Solution[]>(this.api); }
  getById(id: number): Observable<Solution> { return this.http.get<Solution>(`${this.api}/${id}`); }
  create(s: Solution): Observable<Solution> { return this.http.post<Solution>(this.api, s); }
  update(id: number, s: Solution): Observable<Solution> { return this.http.put<Solution>(`${this.api}/${id}`, s); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.api}/${id}`); }
}
</file>
<file path="src/app/services/version.service.ts">
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Version {
  idVersion?: number;
  solution?: any;
  numeroVersion: string;
  description?: string;
  dateReleasePrevue: string;
  dateReleaseReelle?: string;
  etat: string;
}
@Injectable({ providedIn: 'root' })
export class VersionService {
  private api = 'http://localhost:8081/api/versions';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Version[]> { return this.http.get<Version[]>(this.api); }
  getById(id: number): Observable<Version> { return this.http.get<Version>(`${this.api}/${id}`); }
  create(v: Version): Observable<Version> { return this.http.post<Version>(this.api, v); }
  update(id: number, v: Version): Observable<Version> { return this.http.put<Version>(`${this.api}/${id}`, v); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.api}/${id}`); }
}
</file>
<file path="src/index.html">
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>PfeAngular</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
</file>
<file path="src/main.ts">
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
</file>
<file path="src/styles.css">
@import "primeicons/primeicons.css";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f5f5f5;
  color: #333;
}
.page-container {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}
.page-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #1a1a2e;
}
</file>
<file path="tsconfig.app.json">
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": []
  },
  "files": [
    "src/main.ts"
  ],
  "include": [
    "src/**/*.d.ts"
  ]
}
</file>
<file path="tsconfig.json">
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "moduleResolution": "bundler",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}
</file>
<file path="tsconfig.spec.json">
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jasmine"
    ]
  },
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}
</file>
</files>
````

## File: src/app/app.component.css
````css

````

## File: src/app/app.component.html
````html
<app-navbar></app-navbar>
<div class="page-container">
  <router-outlet></router-outlet>
</div>
````

## File: src/app/app.component.spec.ts
````typescript
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it(`should have the 'pfe-angular' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pfe-angular');
  });
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, pfe-angular');
  });
});
````

## File: src/app/app.component.ts
````typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
````

## File: src/app/app.config.ts
````typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: { darkModeSelector: false }
      }
    })
  ]
};
````

## File: src/app/app.routes.ts
````typescript
import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { VersionsComponent } from './pages/versions/versions.component';
import { PlanificationsComponent } from './pages/planifications/planifications.component';
export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'versions', component: VersionsComponent },
  { path: 'planifications', component: PlanificationsComponent },
];
````

## File: src/app/layout/navbar/navbar.component.css
````css
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #8ECCE6;
  padding: 0 32px;
  height: 60px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
.navbar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 20px;
  font-weight: 700;
}
.navbar-links {
  display: flex;
  gap: 8px;
}
.navbar-links a {
  color: #ccc;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.2s;
}
.navbar-links a:hover {
  background-color: rgba(255,255,255,0.1);
  color: white;
}
.navbar-links a.active {
  background-color: #003366;
  color: white;
}
````

## File: src/app/layout/navbar/navbar.component.html
````html
<nav class="navbar">
  <div class="navbar-brand">
    <span class="brand-icon"><img src="https://t2s.group/wp-content/uploads/2024/04/logo-1.png" alt="T2S Group" width="75" ></span>
  </div>
  <div class="navbar-links">
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/planifications" routerLinkActive="active">Planifications</a>
    <a routerLink="/clients" routerLinkActive="active">Clients</a>
    <a routerLink="/solutions" routerLinkActive="active">Solutions</a>
    <a routerLink="/versions" routerLinkActive="active">Versions</a>
  </div>
</nav>
````

## File: src/app/layout/navbar/navbar.component.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
````

## File: src/app/layout/navbar/navbar.component.ts
````typescript
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {}
````

## File: src/app/pages/clients/clients.component.css
````css
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.dialog-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 0;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.field label {
  font-size: 13px;
  font-weight: 600;
  color: #555;
}
.field input {
  width: 100%;
}
````

## File: src/app/pages/clients/clients.component.html
````html
<div class="page-header">
  <h2 class="page-title">Gestion des Clients</h2>
  <button pButton label="+ Ajouter" (click)="openNew()"></button>
</div>
<p-table [value]="clients" [paginator]="true" [rows]="10"
         styleClass="p-datatable-striped" [tableStyle]="{'width':'100%'}">
  <ng-template pTemplate="header">
    <tr>
      <th>Nom</th>
      <th>Email</th>
      <th>Téléphone</th>
      <th>Secteur</th>
      <th>Actions</th>
    </tr>
  </ng-template>
  <ng-template pTemplate="body" let-c>
    <tr>
      <td>{{ c.nom }}</td>
      <td>{{ c.email }}</td>
      <td>{{ c.telephone }}</td>
      <td>{{ c.secteur }}</td>
      <td>
        <button pButton icon="pi pi-pencil" class="p-button-text p-button-sm"
                (click)="openEdit(c)"></button>
        <button pButton icon="pi pi-trash" class="p-button-text p-button-danger p-button-sm"
                (click)="delete(c.idClient)"></button>
      </td>
    </tr>
  </ng-template>
  <ng-template pTemplate="emptymessage">
    <tr><td colspan="5" style="text-align:center">Aucun client trouvé</td></tr>
  </ng-template>
</p-table>
<p-dialog [(visible)]="showDialog"
          [header]="editMode ? 'Modifier Client' : 'Nouveau Client'"
          [modal]="true" [style]="{width:'450px'}">
  <div class="dialog-form">
    <div class="field">
      <label>Nom *</label>
      <input pInputText [(ngModel)]="form.nom" placeholder="Nom complet" />
    </div>
    <div class="field">
      <label>Email *</label>
      <input pInputText [(ngModel)]="form.email" placeholder="email@exemple.com" />
    </div>
    <div class="field">
      <label>Téléphone</label>
      <input pInputText [(ngModel)]="form.telephone" placeholder="+212 6xx xxx xxx" />
    </div>
    <div class="field">
      <label>Secteur</label>
      <input pInputText [(ngModel)]="form.secteur" placeholder="Ex: Finance, IT..." />
    </div>
    <div class="field">
      <label>Notes</label>
      <input pInputText [(ngModel)]="form.notes" placeholder="Notes..." />
    </div>
  </div>
  <ng-template pTemplate="footer">
    <button pButton label="Annuler" class="p-button-text" (click)="showDialog=false"></button>
    <button pButton label="Enregistrer" (click)="save()"></button>
  </ng-template>
</p-dialog>
````

## File: src/app/pages/clients/clients.component.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientsComponent } from './clients.component';
describe('ClientsComponent', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
````

## File: src/app/pages/clients/clients.component.ts
````typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ClientService, Client } from '../../services/client.service';
@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, ButtonModule, InputTextModule, DialogModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];
  showDialog = false;
  editMode = false;
  selectedId: number | null = null;
  form: Client = { nom: '', email: '' };
  constructor(private clientService: ClientService) {}
  ngOnInit() { this.load(); }
  load() {
    this.clientService.getAll().subscribe((data: Client[]) => this.clients = data);
  }
  openNew() {
    this.form = { nom: '', email: '' };
    this.editMode = false;
    this.selectedId = null;
    this.showDialog = true;
  }
  openEdit(c: Client) {
    this.form = { ...c };
    this.editMode = true;
    this.selectedId = c.idClient!;
    this.showDialog = true;
  }
  save() {
    if (this.editMode && this.selectedId) {
      this.clientService.update(this.selectedId, this.form).subscribe(() => {
        this.load(); this.showDialog = false;
      });
    } else {
      this.clientService.create(this.form).subscribe(() => {
        this.load(); this.showDialog = false;
      });
    }
  }
  delete(id: number) {
    if (confirm('Supprimer ce client ?')) {
      this.clientService.delete(id).subscribe(() => this.load());
    }
  }
}
````

## File: src/app/pages/dashboard/dashboard.component.css
````css
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 10px;
}
.stat-card {
  background: white;
  border-radius: 12px;
  padding: 28px 24px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border-top: 4px solid;
}
.stat-card.blue  { border-color: #003366; }
.stat-card.green { border-color: #003366; }
.stat-card.orange{ border-color: #003366; }
.stat-card.red   { border-color: #003366; }
.stat-icon   { font-size: 36px; margin-bottom: 12px; }
.stat-number { font-size: 40px; font-weight: 700; color: #1a1a2e; }
.stat-label  { font-size: 14px; color: #888; margin-top: 4px; }
````

## File: src/app/pages/dashboard/dashboard.component.html
````html
<h2 class="page-title">Tableau de Bord</h2>
<div class="cards-grid">
  <div class="stat-card blue">
    <div class="stat-icon"><img decoding="async" src="client.png" width="75" alt="client.png"></div>
    <div class="stat-number">{{ totalClients }}</div>
    <div class="stat-label">Clients</div>
  </div>
  <div class="stat-card green">
    <div class="stat-icon"><img decoding="async" src="https://t2s.group/wp-content/uploads/2024/06/Accroitre-lefficacite.png" width="75" alt="solution.png"></div>
    <div class="stat-number">{{ totalSolutions }}</div>
    <div class="stat-label">Solutions</div>
  </div>
  <div class="stat-card orange">
    <div class="stat-icon"><img decoding="async" src="version.png" width="75" alt="version.png"></div>
    <div class="stat-number">{{ totalVersions }}</div>
    <div class="stat-label">Versions</div>
  </div>
  <div class="stat-card red">
    <div class="stat-icon"><img decoding="async" src="planification.png" width="75" alt="planification.png"></div>
    <div class="stat-number">{{ totalPlanifications }}</div>
    <div class="stat-label">Planifications</div>
  </div>
</div>
````

## File: src/app/pages/dashboard/dashboard.component.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
````

## File: src/app/pages/dashboard/dashboard.component.ts
````typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client.service';
import { SolutionService } from '../../services/solution.service';
import { VersionService } from '../../services/version.service';
import { PlanificationService } from '../../services/planification.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  totalClients = 0;
  totalSolutions = 0;
  totalVersions = 0;
  totalPlanifications = 0;
  constructor(
    private clientService: ClientService,
    private solutionService: SolutionService,
    private versionService: VersionService,
    private planificationService: PlanificationService
  ) {}
  ngOnInit() {
    this.clientService.getAll().subscribe((d: any[]) => this.totalClients = d.length);
    this.solutionService.getAll().subscribe((d: any[]) => this.totalSolutions = d.length);
    this.versionService.getAll().subscribe((d: any[]) => this.totalVersions = d.length);
    this.planificationService.getAll().subscribe((d: any[]) => this.totalPlanifications = d.length);
  }
}
````

## File: src/app/pages/planifications/planifications.component.css
````css
.page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.dialog-form { display: flex; flex-direction: column; gap: 16px; padding: 8px 0; }
.field { display: flex; flex-direction: column; gap: 6px; }
.field label { font-size: 13px; font-weight: 600; color: #555; }
.field input { width: 100%; }
````

## File: src/app/pages/planifications/planifications.component.html
````html
<div class="page-header">
  <h2 class="page-title">Gestion des Planifications</h2>
  <button pButton label="+ Ajouter" (click)="openNew()"></button>
</div>
<p-table [value]="planifications" [paginator]="true" [rows]="10"
         styleClass="p-datatable-striped" [tableStyle]="{'width':'100%'}">
  <ng-template pTemplate="header">
    <tr>
      <th>Titre</th>
      <th>Client</th>
      <th>Version</th>
      <th>Date Commande</th>
      <th>Livraison Prévue</th>
      <th>Livraison Réelle</th>
      <th>Actions</th>
    </tr>
  </ng-template>
  <ng-template pTemplate="body" let-p>
    <tr>
      <td>{{ p.titre }}</td>
      <td>{{ p.client?.nom }}</td>
      <td>{{ p.version?.numeroVersion }}</td>
      <td>{{ p.dateCommande || '—' }}</td>
      <td>{{ p.dateLivraisonPrevue || '—' }}</td>
      <td>{{ p.dateLivraisonReelle || '—' }}</td>
      <td>
        <button pButton icon="pi pi-pencil" class="p-button-text p-button-sm" (click)="openEdit(p)"></button>
        <button pButton icon="pi pi-trash" class="p-button-text p-button-danger p-button-sm" (click)="delete(p.idPlanification)"></button>
      </td>
    </tr>
  </ng-template>
  <ng-template pTemplate="emptymessage">
    <tr><td colspan="7" style="text-align:center">Aucune planification trouvée</td></tr>
  </ng-template>
</p-table>
<p-dialog [(visible)]="showDialog"
          [header]="editMode ? 'Modifier Planification' : 'Nouvelle Planification'"
          [modal]="true" [style]="{width:'480px'}">
  <div class="dialog-form">
    <div class="field">
      <label>Titre *</label>
      <input pInputText [(ngModel)]="form.titre" placeholder="Titre de la planification" />
    </div>
    <div class="field">
      <label>Client *</label>
      <p-select [options]="clients" [(ngModel)]="form.client"
                optionLabel="nom" placeholder="Choisir un client"
                [style]="{width:'100%'}"></p-select>
    </div>
    <div class="field">
      <label>Version *</label>
      <p-select [options]="versions" [(ngModel)]="form.version"
                optionLabel="numeroVersion" placeholder="Choisir une version"
                [style]="{width:'100%'}"></p-select>
    </div>
    <div class="field">
      <label>Date de Commande</label>
      <input pInputText type="date" [(ngModel)]="form.dateCommande" />
    </div>
    <div class="field">
      <label>Date Livraison Prévue</label>
      <input pInputText type="date" [(ngModel)]="form.dateLivraisonPrevue" />
    </div>
    <div class="field">
      <label>Date Livraison Réelle</label>
      <input pInputText type="date" [(ngModel)]="form.dateLivraisonReelle" />
    </div>
  </div>
  <ng-template pTemplate="footer">
    <button pButton label="Annuler" class="p-button-text" (click)="showDialog=false"></button>
    <button pButton label="Enregistrer" (click)="save()"></button>
  </ng-template>
</p-dialog>
````

## File: src/app/pages/planifications/planifications.component.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanificationsComponent } from './planifications.component';
describe('PlanificationsComponent', () => {
  let component: PlanificationsComponent;
  let fixture: ComponentFixture<PlanificationsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanificationsComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(PlanificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
````

## File: src/app/pages/planifications/planifications.component.ts
````typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { PlanificationService, Planification } from '../../services/planification.service';
import { ClientService, Client } from '../../services/client.service';
import { VersionService, Version } from '../../services/version.service';
@Component({
  selector: 'app-planifications',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, ButtonModule,
    InputTextModule, DialogModule, SelectModule],
  templateUrl: './planifications.component.html',
  styleUrl: './planifications.component.css'
})
export class PlanificationsComponent implements OnInit {
  planifications: Planification[] = [];
  clients: Client[] = [];
  versions: Version[] = [];
  showDialog = false;
  editMode = false;
  selectedId: number | null = null;
  form: any = { titre: '' };
  constructor(
    private planificationService: PlanificationService,
    private clientService: ClientService,
    private versionService: VersionService
  ) {}
  ngOnInit() {
    this.load();
    this.clientService.getAll().subscribe((d: Client[]) => this.clients = d);
    this.versionService.getAll().subscribe((d: Version[]) => this.versions = d);
  }
  load() {
    this.planificationService.getAll().subscribe((data: Planification[]) => this.planifications = data);
  }
  openNew() {
    this.form = { titre: '', client: null, version: null };
    this.editMode = false;
    this.showDialog = true;
  }
  openEdit(p: Planification) {
    this.form = { ...p };
    this.editMode = true;
    this.selectedId = p.idPlanification!;
    this.showDialog = true;
  }
  save() {
    if (this.editMode && this.selectedId) {
      this.planificationService.update(this.selectedId, this.form).subscribe(() => {
        this.load(); this.showDialog = false;
      });
    } else {
      this.planificationService.create(this.form).subscribe(() => {
        this.load(); this.showDialog = false;
      });
    }
  }
  delete(id: number) {
    if (confirm('Supprimer cette planification ?')) {
      this.planificationService.delete(id).subscribe(() => this.load());
    }
  }
}
````

## File: src/app/pages/solutions/solutions.component.css
````css
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.dialog-form { display: flex; flex-direction: column; gap: 16px; padding: 8px 0; }
.field { display: flex; flex-direction: column; gap: 6px; }
.field label { font-size: 13px; font-weight: 600; color: #555; }
.field input { width: 100%; }
````

## File: src/app/pages/solutions/solutions.component.html
````html
<div class="page-header">
  <h2 class="page-title">Gestion des Solutions</h2>
  <button pButton label="+ Ajouter" (click)="openNew()"></button>
</div>
<p-table [value]="solutions" [paginator]="true" [rows]="10"
         styleClass="p-datatable-striped" [tableStyle]="{'width':'100%'}">
  <ng-template pTemplate="header">
    <tr>
      <th>Nom</th>
      <th>Description</th>
      <th>Actions</th>
    </tr>
  </ng-template>
  <ng-template pTemplate="body" let-s>
    <tr>
      <td>{{ s.nom }}</td>
      <td>{{ s.description }}</td>
      <td>
        <button pButton icon="pi pi-pencil" class="p-button-text p-button-sm" (click)="openEdit(s)"></button>
        <button pButton icon="pi pi-trash" class="p-button-text p-button-danger p-button-sm" (click)="delete(s.idSolution)"></button>
      </td>
    </tr>
  </ng-template>
  <ng-template pTemplate="emptymessage">
    <tr><td colspan="3" style="text-align:center">Aucune solution trouvée</td></tr>
  </ng-template>
</p-table>
<p-dialog [(visible)]="showDialog"
          [header]="editMode ? 'Modifier Solution' : 'Nouvelle Solution'"
          [modal]="true" [style]="{width:'450px'}">
  <div class="dialog-form">
    <div class="field">
      <label>Nom *</label>
      <input pInputText [(ngModel)]="form.nom" placeholder="Nom de la solution" />
    </div>
    <div class="field">
      <label>Description</label>
      <input pInputText [(ngModel)]="form.description" placeholder="Description..." />
    </div>
  </div>
  <ng-template pTemplate="footer">
    <button pButton label="Annuler" class="p-button-text" (click)="showDialog=false"></button>
    <button pButton label="Enregistrer" (click)="save()"></button>
  </ng-template>
</p-dialog>
````

## File: src/app/pages/solutions/solutions.component.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolutionsComponent } from './solutions.component';
describe('SolutionsComponent', () => {
  let component: SolutionsComponent;
  let fixture: ComponentFixture<SolutionsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionsComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
````

## File: src/app/pages/solutions/solutions.component.ts
````typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { SolutionService, Solution } from '../../services/solution.service';
@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, ButtonModule, InputTextModule, DialogModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent implements OnInit {
  solutions: Solution[] = [];
  showDialog = false;
  editMode = false;
  selectedId: number | null = null;
  form: Solution = { nom: '' };
  constructor(private solutionService: SolutionService) {}
  ngOnInit() { this.load(); }
  load() {
    this.solutionService.getAll().subscribe((data: Solution[]) => this.solutions = data);
  }
  openNew() {
    this.form = { nom: '' };
    this.editMode = false;
    this.showDialog = true;
  }
  openEdit(s: Solution) {
    this.form = { ...s };
    this.editMode = true;
    this.selectedId = s.idSolution!;
    this.showDialog = true;
  }
  save() {
    if (this.editMode && this.selectedId) {
      this.solutionService.update(this.selectedId, this.form).subscribe(() => {
        this.load(); this.showDialog = false;
      });
    } else {
      this.solutionService.create(this.form).subscribe(() => {
        this.load(); this.showDialog = false;
      });
    }
  }
  delete(id: number) {
    if (confirm('Supprimer cette solution ?')) {
      this.solutionService.delete(id).subscribe(() => this.load());
    }
  }
}
````

## File: src/app/pages/versions/versions.component.css
````css
.page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.dialog-form { display: flex; flex-direction: column; gap: 16px; padding: 8px 0; }
.field { display: flex; flex-direction: column; gap: 6px; }
.field label { font-size: 13px; font-weight: 600; color: #555; }
.field input, .field p-select { width: 100%; }
.badge { padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; }
.badge-DEMO    { background: #e0e7ff; color: #4338ca; }
.badge-EN_DEV  { background: #fef9c3; color: #854d0e; }
.badge-EN_TEST { background: #ffedd5; color: #9a3412; }
.badge-LIVRE   { background: #dcfce7; color: #166534; }
.badge-ARCHIVE { background: #f1f5f9; color: #64748b; }
````

## File: src/app/pages/versions/versions.component.html
````html
<div class="page-header">
  <h2 class="page-title">Gestion des Versions</h2>
  <button pButton label="+ Ajouter" (click)="openNew()"></button>
</div>
<p-table [value]="versions" [paginator]="true" [rows]="10"
         styleClass="p-datatable-striped" [tableStyle]="{'width':'100%'}">
  <ng-template pTemplate="header">
    <tr>
      <th>Numéro</th>
      <th>Solution</th>
      <th>État</th>
      <th>Date Release Prévue</th>
      <th>Date Release Réelle</th>
      <th>Actions</th>
    </tr>
  </ng-template>
  <ng-template pTemplate="body" let-v>
    <tr>
      <td>{{ v.numeroVersion }}</td>
      <td>{{ v.solution?.nom }}</td>
      <td><span [class]="'badge badge-' + v.etat">{{ getEtatLabel(v.etat) }}</span></td>
      <td>{{ v.dateReleasePrevue }}</td>
      <td>{{ v.dateReleaseReelle || '—' }}</td>
      <td>
        <button pButton icon="pi pi-pencil" class="p-button-text p-button-sm" (click)="openEdit(v)"></button>
        <button pButton icon="pi pi-trash" class="p-button-text p-button-danger p-button-sm" (click)="delete(v.idVersion)"></button>
      </td>
    </tr>
  </ng-template>
  <ng-template pTemplate="emptymessage">
    <tr><td colspan="6" style="text-align:center">Aucune version trouvée</td></tr>
  </ng-template>
</p-table>
<p-dialog [(visible)]="showDialog"
          [header]="editMode ? 'Modifier Version' : 'Nouvelle Version'"
          [modal]="true" [style]="{width:'480px'}">
  <div class="dialog-form">
    <div class="field">
      <label>Solution *</label>
      <p-select [options]="solutions" [(ngModel)]="form.solution"
                optionLabel="nom" placeholder="Choisir une solution"
                [style]="{width:'100%'}"></p-select>
    </div>
    <div class="field">
      <label>Numéro de version *</label>
      <input pInputText [(ngModel)]="form.numeroVersion" placeholder="Ex: 1.0.0" />
    </div>
    <div class="field">
      <label>Description</label>
      <input pInputText [(ngModel)]="form.description" placeholder="Description des changements" />
    </div>
    <div class="field">
      <label>État *</label>
      <p-select [options]="etats" [(ngModel)]="form.etat"
                optionLabel="label" optionValue="value"
                [style]="{width:'100%'}"></p-select>
    </div>
    <div class="field">
      <label>Date Release Prévue *</label>
      <input pInputText type="date" [(ngModel)]="form.dateReleasePrevue" />
    </div>
    <div class="field">
      <label>Date Release Réelle</label>
      <input pInputText type="date" [(ngModel)]="form.dateReleaseReelle" />
    </div>
  </div>
  <ng-template pTemplate="footer">
    <button pButton label="Annuler" class="p-button-text" (click)="showDialog=false"></button>
    <button pButton label="Enregistrer" (click)="save()"></button>
  </ng-template>
</p-dialog>
````

## File: src/app/pages/versions/versions.component.spec.ts
````typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VersionsComponent } from './versions.component';
describe('VersionsComponent', () => {
  let component: VersionsComponent;
  let fixture: ComponentFixture<VersionsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersionsComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(VersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
````

## File: src/app/pages/versions/versions.component.ts
````typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { VersionService, Version } from '../../services/version.service';
import { SolutionService, Solution } from '../../services/solution.service';
@Component({
  selector: 'app-versions',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, ButtonModule,
    InputTextModule, DialogModule, SelectModule],
  templateUrl: './versions.component.html',
  styleUrl: './versions.component.css'
})
export class VersionsComponent implements OnInit {
  versions: Version[] = [];
  solutions: Solution[] = [];
  showDialog = false;
  editMode = false;
  selectedId: number | null = null;
  form: any = { numeroVersion: '', etat: 'DEMO', dateReleasePrevue: '' };
  etats = [
    { label: 'Démo',           value: 'DEMO' },
    { label: 'En développement', value: 'EN_DEV' },
    { label: 'En test',        value: 'EN_TEST' },
    { label: 'Livré',          value: 'LIVRE' },
    { label: 'Archivé',        value: 'ARCHIVE' },
  ];
  constructor(
    private versionService: VersionService,
    private solutionService: SolutionService
  ) {}
  ngOnInit() {
    this.load();
    this.solutionService.getAll().subscribe((d: Solution[]) => this.solutions = d);
  }
  load() {
    this.versionService.getAll().subscribe((data: Version[]) => this.versions = data);
  }
  openNew() {
    this.form = { numeroVersion: '', etat: 'DEMO', dateReleasePrevue: '', solution: null };
    this.editMode = false;
    this.showDialog = true;
  }
  openEdit(v: Version) {
    this.form = { ...v };
    this.editMode = true;
    this.selectedId = v.idVersion!;
    this.showDialog = true;
  }
  save() {
    if (this.editMode && this.selectedId) {
      this.versionService.update(this.selectedId, this.form).subscribe(() => {
        this.load(); this.showDialog = false;
      });
    } else {
      this.versionService.create(this.form).subscribe(() => {
        this.load(); this.showDialog = false;
      });
    }
  }
  delete(id: number) {
    if (confirm('Supprimer cette version ?')) {
      this.versionService.delete(id).subscribe(() => this.load());
    }
  }
  getEtatLabel(value: string): string {
    return this.etats.find(e => e.value === value)?.label || value;
  }
}
````

## File: src/app/services/client.service.ts
````typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Client {
  idClient?: number;
  nom: string;
  email: string;
  telephone?: string;
  secteur?: string;
  notes?: string;
}
@Injectable({ providedIn: 'root' })
export class ClientService {
  private api = 'http://localhost:8081/api/clients';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Client[]> { return this.http.get<Client[]>(this.api); }
  getById(id: number): Observable<Client> { return this.http.get<Client>(`${this.api}/${id}`); }
  create(c: Client): Observable<Client> { return this.http.post<Client>(this.api, c); }
  update(id: number, c: Client): Observable<Client> { return this.http.put<Client>(`${this.api}/${id}`, c); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.api}/${id}`); }
}
````

## File: src/app/services/planification.service.ts
````typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Planification {
  idPlanification?: number;
  version?: any;
  client?: any;
  titre: string;
  dateLivraisonPrevue?: string;
  dateLivraisonReelle?: string;
  dateCommande?: string;
}
@Injectable({ providedIn: 'root' })
export class PlanificationService {
  private api = 'http://localhost:8081/api/planifications';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Planification[]> { return this.http.get<Planification[]>(this.api); }
  getById(id: number): Observable<Planification> { return this.http.get<Planification>(`${this.api}/${id}`); }
  create(p: Planification): Observable<Planification> { return this.http.post<Planification>(this.api, p); }
  update(id: number, p: Planification): Observable<Planification> { return this.http.put<Planification>(`${this.api}/${id}`, p); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.api}/${id}`); }
}
````

## File: src/app/services/solution.service.ts
````typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Solution {
  idSolution?: number;
  nom: string;
  description?: string;
}
@Injectable({ providedIn: 'root' })
export class SolutionService {
  private api = 'http://localhost:8081/api/solutions';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Solution[]> { return this.http.get<Solution[]>(this.api); }
  getById(id: number): Observable<Solution> { return this.http.get<Solution>(`${this.api}/${id}`); }
  create(s: Solution): Observable<Solution> { return this.http.post<Solution>(this.api, s); }
  update(id: number, s: Solution): Observable<Solution> { return this.http.put<Solution>(`${this.api}/${id}`, s); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.api}/${id}`); }
}
````

## File: src/app/services/version.service.ts
````typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Version {
  idVersion?: number;
  solution?: any;
  numeroVersion: string;
  description?: string;
  dateReleasePrevue: string;
  dateReleaseReelle?: string;
  etat: string;
}
@Injectable({ providedIn: 'root' })
export class VersionService {
  private api = 'http://localhost:8081/api/versions';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Version[]> { return this.http.get<Version[]>(this.api); }
  getById(id: number): Observable<Version> { return this.http.get<Version>(`${this.api}/${id}`); }
  create(v: Version): Observable<Version> { return this.http.post<Version>(this.api, v); }
  update(id: number, v: Version): Observable<Version> { return this.http.put<Version>(`${this.api}/${id}`, v); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.api}/${id}`); }
}
````

## File: src/index.html
````html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>PfeAngular</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
````

## File: src/main.ts
````typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
````

## File: src/styles.css
````css
@import "primeicons/primeicons.css";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f5f5f5;
  color: #333;
}
.page-container {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}
.page-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #1a1a2e;
}
````

## File: tsconfig.app.json
````json
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": []
  },
  "files": [
    "src/main.ts"
  ],
  "include": [
    "src/**/*.d.ts"
  ]
}
````

## File: tsconfig.json
````json
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "moduleResolution": "bundler",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}
````

## File: tsconfig.spec.json
````json
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jasmine"
    ]
  },
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}
````
