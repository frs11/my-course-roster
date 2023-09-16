
## Features

- View list of all available courses.
- Select multiple courses.
- View course description, price & credit hour.
- User friendly UI.
- Beautiful error messages.

## State Handling

I used 5 states in this project. Those are:
- allCourse
- chosenCourses
- totalCredit
- totalPrice
- remainingCredit


At first, I used `allCourses` state to store fetched data from json file. Then when user clicks `Select` button then I used `chosenCourses` state to store all the selected course to show it in the website. Whenever a certain Course is selected, I used `totalCredit`, `totalPrice` and `remainingCredit` state to store the updated value after calculating total credit, total price and remaining credit and then show the updated value in the website.