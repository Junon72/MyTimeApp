# MyTime

**_Interactive Frontend Development Milestone Project / Milestone 2_**

## Table of Contents

1. [What is MyTime](#what-is-mytime)  
[Users](#users)  
2. [Planning](#planning)  
3. [UX / UI](#ux-/-ui)  
[User Stories](#user-stories)
4. [Functions and features](#functions-and-features)
[MyTime core functions](#mytime-core-functions)  
[MyTime core features and requirements](#mytime-core-features-and-requirements)
5. [Technologies](#technologies)

## What is MyTime

MyTime is a time and project task management application.

MyTime allows the user to manage and record the time they spend in project related tasks and activities and create sharable timesheet.

## Planning

For the Interactive Frontend Development Milestone Project only a part of the MyTime application would be developed.

The application should focus on the technologies and tools discussed in the course material.

The emphasis should be on the simple interactive functions and features.

MyTime application at this phase should focus on the core functions - namely the time recorder for task management.

## UX / UI

The user interface should be intuitive and simple to use. The application is meant for mobile devices. On desktops the window size should limited, so the application can be used together with other applications, for example with text programs or internet, without the MyTime application taking too much of space on viewport.  

### User Stories

1. Students
    - MyTime helps the students to track their time use when studying

2. Self employed
    - MyTime allows tracking time in different project tasks and can be used to produce a timesheet  
    - The time sheet can be send to an employer or used for administration

3. Small businesses working with hour based employees working on company premise or from home
    - the employees can use MyTime to plan tasks and share registration of the used time for different tasks

## Functions and features

At this point, the application contains only the core user functions and related features.
The application explores MVP requirements for eventually more complete time management application featuring more functions and customization options:  
    - The future functions and features will allow the user customizations of projects and tasks, customization of viewing features and sharing options and administration/ user interactions.  
    - The application would also feature a login portal for users and administrators and access to two separate user environments.  
    - The application would allow creating, saving and working with multiple projects.

### MyTime core functions  

The application consists of seven pages - from creating a project to sharing and exiting the project.  
For the Milestone project I have focused on the first part of the applications features, namely creating the project and tasks  
and saving them to the local storage for later use.  
The rest of the application pages are not interactive, but they give an impression of the planned flow of the application.  

### Realized functions

1. Creating projects.  
    - user can create a project.  
2. Creating project tasks.
    - user can create new tasks for the project.  
    - user can delete tasks.

### Planned functions

1. Recording time spend in tasks.
    - user can record time spend in each task.
    - user can pause recording and continue recording.
2. Viewing the time record.
    - user can view the time record of individual tasks.
    - user can view the time record of working on the project.
3. Sharing the record.
    - user can share the time record by email.  

Eventually it would be possible to create multiple projects, each with their own tasks and option to delete, duplicate and modify them.

### MyTime core features and requirements (realized functions) - user interactions and application responses

Create a project interface:  

1. Input field for a project name.
    - input validation and an error prompt for invalid entry.
2. Enter button to accept the name.  
    - displays the name.
3. Cancel button to reset the name.
    - resetting the name input field.  
4. Create button to accept the name and move to create tasks for the project.  
    - activating the button when there is name given, de-activating the button when there is no name provided.  
    - prompt to inform user if they have not yet created project name which gives options:  
        a. OK - to return and create a name now, or  
        b. Cancel - to name the project Project(default) and continue.  
    - stores name to local storage.  
    - navigate to tasks page.  

Create tasks interface:

1. Display the project name.  
    - get project name from local storage
2. Input field for creating tasks.  
    - input validation for empty input field or entries consisting of whitespace alone.
    - input validation for already existing tasks names.
3. Add button to add the task to a task list.
    - displays the task in task list.
    - saves entry to local storage.  
4. Remove button.
    - removes the task entry and remove button from the list display and the local storage.  
    - displays a new task button.  
5. New task button.  
    - displays the add new task input field and with an add button.
6. Start project button.
    - deactivate if there are no tasks created or all tasks have been removed.  
    - activate if user has created at least one task.
    - navigate to recording page.
7. Display default tasks - Break and Lunch.  

Record time spend in each task:

1. Display project name.
    - get the name form the local storage.
2. Record button for each dynamically created task.  
    - get task name from local storage and display it in the button.  
    Clicking the button:  
    - activate other tasks record buttons.  
    - deactivate button while recording.  
Planned:  
    - save time data of each task to local storage.  
    - start recording time users spends in the task and stop recording other tasks.  
3. Time display for each task and for the project:
    a. starting time -> set to zero for now.  
    b. elapsed time -> set to zero for now.  
    - get time from the local storage - values set to zero to start.
Planned:  
    - display the time when the record button was clicked for the first time and the recording of the tasks begun.  
    - display the elapsed time from the moment the recording of the task begun.  
4. Display local time, date and the day of the week.
5. Pause button.
    - display a prompt message the recording has been paused.  
    - display an OK button to continue recording.  
    - deactivate all task buttons.  
Planned:
    - pause all recordings and store the time data to the local storage.
6. Stop button.
    - navigate to recording stopped page for confirmation.
Planned:
    - stop all recordings and store the time data to the local storage.

Sopped recording view:

1. Display project name.
    - get the name form the local storage.
2. Inactive record button for each dynamically created task.  
    - get task name from local storage and display it in the button.  
3. Display the time data of each task - currently set to zero by default.
    - get time data from the local storage.
4. Record button.
    - returns to recording.
5. Accept button.
    - navigates to view tasks page.

View timesheet:

1. Display project name.
    - get the name form the local storage.
2. Display the stopping time, date and the day of the week.  
3. Present the project data in a table:
Planned:
    - Each task with the starting time and elapsed time.
    - Over all project starting time and elapsed time.
    - Time spend for lunch and breaks.
    - Time elapsed on pause.
    - Number of breaks and pauses.
    - Total time spend on tasks.
4. Share button.
    - navigates to share timesheet by email page.  
Planned:
    - translate the data to a suitable format to be send with an email.  
    - attach the file to the email to be send.  

Sharing timesheet page:

1. Display form for email, subject and message fields:
Planned:
    - email validation.  
2. Send button:
    - navigates to the exit page.
Planned:
    - send email.
    - prompt that sending mail succeeded.
    - prompt that sending mail did not succeed and what to do next.  

Exit the project page:

1. Start a new project button.
    - navigates back to the start page.
Planned:
    - prompt with an option to reset all data.

## Technologies  

### technologies and libraries

- HTML ~ markup language used for construction and content structuring of the applications pages.
- CSS ~ styling language was used for applications style, visual outlook and aesthetics.
- JavaScript ~ programming language was used to built interactive user interface UI.  
- [Bootstrap 4 Framework](https://getbootstrap.com/) ~ library was used for structuring the core layout.  
- [jQuery](https://jquery.com) ~ library was used to simplify DOM manipulation.
- [Momentsjs](https://momentjs.com/) ~ library was used to display local time.
