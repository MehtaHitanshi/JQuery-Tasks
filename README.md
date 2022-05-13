# jQuery-Tasks

## _Task-1 Tabs_
- Develop 3 tabs including some messages 

## _Task-1.2 Accordian_
- Develop an Accordian with text.
- By default the first one always open and by clicking on that it collapse with othre.
- The arrows were also keep changing when closing and opening.

## _Task-2 Countdown Timer_
- Create a countdown timer which starts when the user enters time.
    ## Features
    - There were Start, Pause, Stop, Restart, Resume and Reset buttons.
    - When user click on the Start button the countdown will start from the given time in descreasing way.
    - When user click on the Pause button the countdown will pause at a time and by clicking on Resume button the time starts from
      where it is paused.
    - When user Stops the countdown it will be stopped and by clicking on Restart button the timer will restarts the time from 
      beginning.
    - By clicking on Reset button timer reset to 0:0:0.
    - By the time there is a log which shows the activity like Timer is Running, Stopped, Paused at what time, Resumed, etc.

## _Task-3 Stopwatch_
- Create a Stopwatch Mechanism
    ## Features
    - There were Start, Pause, Stop, Restart, Resume and Reset buttons.
    - When user click on the Start button the stopwatch will start feom the beginning.
    - When user click on the Pause button the stopwatch will pause at a time and display log at what time it is paused and by 
      clicking on Resume button the time starts from where it is paused.
    - When user Stops the stopwatch it will be stopped  display log at what time it is stopped and by clicking on Restart button    
      the timer will restarts the time from beginning.
    - By clicking on Reset button timer reset to 0:0:0.
    - By the time there is a log which shows the activity like Timer is Running, Resumed and the history log of paused and stopped
      etc.

## _Task-4 Wizard Form_ 
- Create a Multiple Pages form
    ## Features
    - There were 3 tabs to navigate and show at which tab user is.
    - There were also Save&Next and Previous buttons to navigate.
    - There were Validations on each field.
    - When user clicks on Submit button then if any field is missing or have inappropriate content then it will redirect to that 
      field and if Submit successfully then it will by default redirect to Home/First page.
    - The submited data will display at the bottom of the page with Edit and Delete buttons.
    - The Edit button will refill the data and helps user to update the form.
    - The Delete button will delete that data.
    - When Edit any data the Submit button will disappera and Update and Cancle button will Appear.
    - Cancel button will clear the form.
    - When user Edit any data then the user is not able to Delete that particular field.

## _Task-5 Calendar_
- Create a dynamic calendar.
    ## Features
    - Calendar will shows current month and current date.
    - Current date will Highlighted by default.
    - There is find date option at the bottom of calendar which helps to find any perticular date with the field of Year,Month and
      Date.
    - If the user has not select the date and by seleting only Month and Year and clicks on Find date then it will redirect to that
      month of selected year.
    - And if all three were selected then it will redirect to that month and highlight that date.
    - From the top of Calendar current Month and Year will be display and two arrows Previous and Next.

## _Task-6 Calculator_
## Features
- Buttons: 0 to 9, Plus, Minus, Division, Multiplication and Modulo, Decimal point, Equal, Backspace, Clear All, Parenthesis,  
  Square Root, Square.
- All calculations must be similar as Ubuntu calculator.
- Bind the keyboard with your calculator, So the user can use the calculator without using mouse
- Display error like: Malformed expression, For unusual inputs like: 5656/0 or 54*5145/*-+

## _Task-7 Add More Phase-1_
## Features
- Initially, two things will appear on the page:
       1. ADD MORE Button
       2. One box with the Title field and two buttons (ADD CHILD, SUBMIT and DELETE PARENT)
- The "ADD MORE" button will add such boxes.
- The "ADD CHILD" button will add a child box to the respective parent.
- The Child box contains two text fields (Subtitle and Values) and a delete button
- The "SUBMIT" button will copy all input details and append them to the right side table
- The main "DELETE PARENT" button will delete the entire box with all child boxes and remove that box from "Right Side Table" too.
- The order of the left side boxes and right side table will remain the same. Doesn't matter user submits which table first.
- If you Add/Delete a child after submitting that table then it will affect the right side when you submit that table a second time.
- Add an alert box from the bootbox plugin to confirm every time before adding or deleting anything.

## _Task-8 Add More Phase-2_
## Features:
- Remove the submit button from the previous task.
- When the user write anything in the text box at the same time that character will be added to the right  
  side table.
- Display "Delete button" for parent, only if it have zero child.
- You can not delete any parent without deleting their all children.
- Do not allow to delete last remaining parent box.

## _Review Task 1 - Business Card Maker_
## Feature
- Create a webpage to design Business Card online.
- Divide your screen into two parts:
  1. Wizard Area
  2. Display Area

## _Wizard Area:_
## Wizard 1: Template
- It contains two template options for the business card. By default clean is selected. Users can select anyone.
  1. Clean (It will look like the attached example image)
  2. Standard (It will look like the attached example image)

## _Wizard 2: Theme_
- It contains three colors picker for the color theme. By default, any basic color theme is selected. You can set the same default 
  color theme for all templates. Users can select anyone. The reset button will reset colors to default.
  1. Light Color (Attach Color Picker)
  2. Main Color (Attach Color Picker)
  3. Dark Color (Attach Color Picker)
  4. Reset Button (Set to theme color)

## _Wizard 3: Personalization_
- It contains form fields which are listed below.

1. Company Name : 
- Must be not empty
- Length between 2 - 20
- Doesn’t contain any
- special character except “.”

2. Logo :
- Enter Font Awesome 4 Logo Class (Like, fa-coffee) Refer: https://fontawesome.com/v4/icons/ 
- Must be not empty
- Length between 2-20
- Doesn’t contain any
- special character except “-”

3. Website :
- Must be not empty
- Valid URL

4. Full Name :
- Must be not empty
- Length between 2 - 20
- Doesn’t contain any special character

5. Designation :
- Must be not empty
- Length between 2 - 20
- Doesn’t contain any special character

6. Contact Number :
- Must be not empty
- Valid Contact Number (10 Digits)

7. Email Address :
- Must be not empty
- Valid Email Address

## _Display Area:_
## Front and Back:
- Display how the business card will look like
- Every change must reflect on the change of every event.
- For example, If you change the theme color then it instantly reflects at the display area.
- By default Front and the Back area contains descriptions like “<name of your compnay>”

## Download:
- The download button will validate the Personalization form (Wizard - 3)
- If all fields are validated then it will allow the user to download PDF.

## Reset:
- Reset button will clear all the fields in the wizard area
- It will take the user to the Templates (Wizard - 1)
- Reset button will clear all the designs in the display area

## _Other Features:_
## QR Code:
- Display QR code in every card which redirects the user to the link of their website.

## _Examples:_
## Clean Designs:
- It should contain minimum elements.
- Background color is fixed: white/black

## Standard Designs:
- It should contain at least two shapes/graphics.
- Background color must be dynamic (User can change it)


## _Review Task - 2 Dynamic Menu Creation_
## Feature

- When you click on add button the element entered in the input field will be added to the right side with two buttons edit & 
  remove. And the same value will be added in the default drop-down.
- When the value is selected from dropdown and value entered from input field, then the value will be added as sub children of the 
  parent ( the element selected in the dropdown will be considered as parent ) in the right side. Similarly at the same time,  new dropdown will be created which contains values of children.
- On change of dropdown, find the sub-children and create the dropdown for the same containing proper hierarchical structure.
- On edit, parent/children can be edited and then can be updated ( can't edit any other parent/children while editing ).
- On remove, the element will be removed and if the element is parent then all the sub-children will be removed too.


## _Review Task - 3 Fun and Learn_
## Feature

- Create a 6*4 clickable box grid as displayed in the following images
- Click on any box will show a pre-defined icon.
- When the user clicks on the 2nd box, match the icons. If icons are the same then display both icons and disable that box. If 
  icons are not identical then close both boxes after 2 seconds.
- Once the user opens all boxes, display the message with the time and refresh button.
- The refresh button will close all boxes with new random icons. Do not refresh the page.

## Other Features:
- Use font-awesome icons.
- Select at least 50 icons then randomly display any 12 icons in each game.
- Icon pair and location must be random in every game.
