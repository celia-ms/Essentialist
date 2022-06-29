# Essentialist

You can try it in [Essentialist](https://celia-ms.github.io/Essentialist)

## Summary
The main objective of this exercise is to create three different views related to the displaying, creation, and detail of trips of an Essentialist client:
* My Trips - to display the current, upcoming, and past trips.
* New Trip - to create a new Trip.
* Trip detail - to display details of a trip.

### My trips
This is the main view and should display the current trip of the client in a “hero section”, as well as list upcoming trips and past trips in their
respective sections.

####Toolbar

In the toolbar you could click in:
* The logo of Essentialist to return the Home / Dashboard ![image](https://user-images.githubusercontent.com/6065194/176423039-bc5e5318-4951-43cf-a8cd-c1fb2914f735.png)
* The logo of `Setting` and bring up a menu with one option:
  * Languages: that Change the language of the application.
![image](https://user-images.githubusercontent.com/6065194/176423126-1b7e8eda-7d19-4124-8cd7-85240dec412a.png)


![image](https://user-images.githubusercontent.com/6065194/176422477-23bf7e10-4e9b-400d-af42-09d3a50b14e6.png)
![image](https://user-images.githubusercontent.com/6065194/176423390-03e167c2-e98c-4144-9f26-689d9de5d641.png)

### New-trip
This section will open when the user presses the Add trip button. After submitting the form, a successful message is
shown to the user, with a button to return to the main page where the new trip is shown in the corresponding section.

![image](https://user-images.githubusercontent.com/6065194/176424046-81bc6522-ee26-4af4-9073-d1a8b452bb80.png)
![image](https://user-images.githubusercontent.com/6065194/176424687-93519859-7882-4923-9a01-dfa5e2095497.png)

### Trip details
This section will open when the user clicks any of the trips listed on the “My-trips” view.

![image](https://user-images.githubusercontent.com/6065194/176424944-986f28b2-e0c0-4956-b03a-98deff287c39.png)

## Responsive
### iPhone 12
![image](https://user-images.githubusercontent.com/6065194/176426394-b264f5c6-0b12-431d-871a-8f06c1eeddd8.png)
![image](https://user-images.githubusercontent.com/6065194/176426622-c2f1481a-ad65-4e3b-9d0d-622cb15b5add.png)
![image](https://user-images.githubusercontent.com/6065194/176426715-70cbc1b6-c61f-49fe-a991-fdf134dd98dc.png)

### Samsung Galaxy S20
![image](https://user-images.githubusercontent.com/6065194/176425606-a7ca635f-3edf-4dd3-b76c-b0f66c9d6a55.png)
![image](https://user-images.githubusercontent.com/6065194/176425735-215ff04e-9896-4082-8bfc-aad20fa5f7a5.png)
![image](https://user-images.githubusercontent.com/6065194/176425890-2def69f9-c8c4-487b-a5bf-dda611dbe2d5.png)

# Important things

## External libraries used

* [NgRx](https://ngrx.io) to manage the application state, based on the Redux pattern.
* [moment](https://momentjs.com/) to working with dates.

## UI component libraries used
* [Material](https://material.angular.io) to create UI component infrastructure and Material Design components for mobile and desktop Angular web applications.
* [Bootstrap utility classes](https://getbootstrap.com/docs/5.1/utilities) to showing, hiding, aligning, and spacing content.

## Unit and Integration testing results

* TripService
* FormTripComponent

![image](https://user-images.githubusercontent.com/6065194/176427327-bacd0a68-ad8e-4187-9d71-7aa341b99f22.png)

## Git-flow
![image](https://user-images.githubusercontent.com/6065194/176427567-0cf327ff-3d80-4e1f-9ae1-c3127fb4070f.png)

# Running application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.8.
   
* Angular CLI: 13.3.8
* Node: 14.17.0
* Package Manager: npm 8.3.0
* Angular: 13.3.11

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
