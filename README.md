# Modern Calculator (Angular)

A simple calculator application built with Angular, based on the "Solutions Architect Path" example. This project demonstrates basic Angular concepts including components, templates, styling, and reactive forms.

## Features

* Performs basic arithmetic operations: Addition, Subtraction, Multiplication, Division.
* Uses Angular Reactive Forms for input handling and validation.
* Simple, clean user interface styled to resemble the target design.

## Technology Stack

* Angular (~v17.0.0)
* TypeScript (~v5.2.2)
* RxJS (~v7.8.0)
* Angular ESLint (~v17.0.0) for linting
* HTML5 & CSS3

## Prerequisites

Before you begin, ensure you have met the following requirements:

* **Node.js:** Version 18.x or higher recommended (as used in `buildspec.yaml`). Download from [nodejs.org](https://nodejs.org/). (npm is included with Node.js).
* **Angular CLI:** Version 17.x installed globally. If you don't have it, install using:
    ```bash
    npm install -g @angular/cli@^17.0.0
    ```

## Getting Started

Follow these steps to get the project running locally:

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd modern-calculator
    ```

2.  **Install dependencies:**
    This command installs all the necessary packages listed in `package.json`.
    ```bash
    npm install
    ```

3.  **Run the development server:**
    This command starts a local development server and opens the application in your default browser. The app will automatically reload if you change any source files. This uses the `start` script defined in `package.json`.
    ```bash
    ng serve
    # or
    npm start
    ```
    Navigate to `http://localhost:4200/`.

## Build

To create a production build of the application:

1.  Run the build command (defined in `package.json`):
    ```bash
    ng build --configuration production
    # or simply (as production is default in angular.json)
    ng build
    ```
2.  The build artifacts will be stored in the `dist/modern-calculator/browser/` directory (based on `angular.json` and `buildspec.yaml`).

## Linting and Testing

* **Linting:** Check code style and potential errors using ESLint (configured via `angular.json` and `package.json`):
    ```bash
    ng lint
    # or
    npm run lint
    ```

* **Unit Tests:** Run unit tests using Karma (if tests are configured - `karma.conf.js` was not provided but is mentioned in `angular.json`):
    ```bash
    ng test
    # or
    npm run test
    ```

## CodeBuild Configuration

This project includes a `buildspec.yaml` file for potential integration with AWS CodeBuild, using Node.js 18, `npm ci` for installation, and `ng build --configuration production` for the build step.