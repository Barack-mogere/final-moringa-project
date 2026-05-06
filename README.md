# AutoHub – Car Dealership Web App

## Problem statement 
Many small or conceptual car dealership websites suffer from poor user experience, outdated design, and unclear information architecture. This makes it difficult for users to quickly browse available vehicles, understand the business offering, or trust the platform as a professional dealership.

Most existing solutions lack:
A clean, modern, and responsive interface
Clear navigation between key sections such as inventory, about, and contact
A visually appealing presentation of vehicles and services
Consistent design elements that enhance brand credibility

As a result, users often experience friction when trying to explore vehicles or learn more about the dealership, reducing engagement and overall usability.

## Solution
Auto Hub was developed as a modern, responsive car dealership website aimed at improving user experience through clean design, intuitive navigation, and structured content presentation. The project focuses on creating a premium digital presence that makes it easy for users to browse vehicles, understand services, and interact with the dealership seamlessly.

## Project Description

AutoHub is an interactive web application that allows users to browse available cars, view detailed information about each vehicle, and book a test drive.

The application is designed to solve the problem of scattered and hard-to-access car listings by bringing everything into one clean and user-friendly platform. Users can easily explore different cars, view their specifications, and take action without needing to visit multiple websites.

## How It Works

The application works as follows:

The user browses available cars on the homepage.
Each car is displayed dynamically using JavaScript.
When a car is selected, its data is stored using localStorage.
The user is redirected to a details page.
The details page retrieves and displays the selected car’s information.
The user can proceed to book a test drive.
The booking form validates user input and stores the booking data.
Author Information
Name: Barack Mogere
Email: barackannan00@gmail.com
GitHub: https://github.com/Barack-mogere/final-moringa-project.git
# Setup Instructions
Prerequisites
A modern web browser (Chrome, Firefox, Safari, or Edge)
A text editor (optional, for viewing/editing the code)
Installation

Clone or download the project:

git clone https://github.com/Barack-mogere/final-moringa-project.git
cd car-dealership
Open the application

Simply open the index.html file in your web browser.
No additional installation or server setup is required.

Using the application
Browse available cars on the homepage
Click on a car to view more details
Navigate to the booking page
Fill in your details and submit the form
Receive confirmation of your booking

## BDD (Behavior-Driven Development)

Feature: User can browse and interact with cars
### Scenario 1: User views available cars

Given: The user is on the homepage
When: The page loads
Then: A list of available cars is displayed

### Scenario 2: User views car details

Given: The user clicks on a car
When: They are redirected to the details page
Then: The selected car’s information is displayed

### Scenario 3: User books a test drive

Given: The user is on the booking page
When: The user fills all required fields and submits
Then: A success message is displayed

### Scenario 4: User buys a car

Given: The user is on the buy form page
When: The user clicks on buy car and fills all required fields and submits 
Then:A success message is diaplayed


### Scenario 4: Form validation

Given: The user submits the form with missing inputs
When: Required fields are empty
Then: An error message is displayed

## Technologies Used

HTML5: Structure and semantic layout
CSS3: Styling and responsive design (using multiple CSS files for different pages)
JavaScript (ES6): Core logic and interactivity
Key Concepts Used
DOM manipulation
Event listeners
localStorage for data persistence
Dynamic content rendering
Form validation and error handling

## Project Structure
```plaintext

final-moringa-project/
│
├── index.html          # Homepage (car listings)
├── details.html        # Displays selected car details
├── booking.html        # Test drive form
├── buycarform.html     # Buy car form
│
├── css/
│   ├── indexstyles.css      # Homepage styles
│   ├──detailsstyles.css     # Details page styles
│   ├── buycarform.css       #styles the buy car page 
│   └── bookingstyles.css    # Form page styles
│
├── js/
│   ├── script.js         # runs the whole system except the buy car page
│   ├── buycar.js         #runs the buy car page
│
├── images/             # Car images and assets
│
└── README.md
```
 ### How Data Persistence Works

The application uses localStorage to pass data between pages:

User clicks a car → Car data is saved → User is redirected → Data is retrieved → Details are displayed

This allows a single details.html page to dynamically display different cars based on user interaction.

## Known Limitations

Data is stored locally and may be cleared by the browser
No backend or database integration
No real payment system (demo purposes only)

### Contact Information

For questions, feedback, or contributions:

Email: barackannan00@gmail.com
GitHub: https://github.com/Barack-mogere

   License and Copyright

Copyright © 2026

This project is licensed under the MIT License.

 ## Acknowledgments

Inspiration from modern car dealership websites
JavaScript localStorage documentation
