# MyTime

**_Interactive Frontend Development Milestone Project / Milestone 2_**

## Table of Contents

1. [What is MyTime](#what-is-mytime)  
    *   [Users](#users)  
2. [Planning](#planning)  
3. [UX / UI](#ux-/-ui)  
    *   [Resourses](#resources)
    *   [Wireframes and mockups](#wireframing-and-mockups)  
    *   [User Stories](#user-stories)  
4. [Functions and features](#functions-and-features)  
    *   [Core functions](#core-functions)  
    *   [Realized functions](#realized-functions)  
    *   [Planned functions](#planned-functions)  
    *   [Using console with the app](#using-console-with-the-app)  
5. [MyTime core features and requirements](#MyTime-core-features-and-requirements)  
    *   [Create a project interface](#create-a-project-interface)  
    *   [Create tasks interface](#create-tasks-interface)  
    *   [Recording interface to record time spend in tasks](#recording-interface-to-record-time-spend-in-tasks)  
    *   [Stopped recording view](#stopped-recording-view)  
    *   [Timesheet viewer](#timesheet-viewer)  
    *   [Share timesheet document](#share-timesheet-document)  
    *   [Exit the project page](#exit-the-project-page)  
6. [Technologies and libraries](#technologies-and-libraries)  
    *   [Technologies](#technologies)  
    *   [Libraries](#libraries)  
7. [Deployment](#deployment)  
    *   [Caution for security](#caution-for-security)
8. [Testing](#testing)  
9. [References](#references)  
    *   [Disclaimer](#disclaimer)  

## What is MyTime

MyTime is a time and project task management application.

MyTime allows the user to manage and record the time they spend in project related tasks and activities and create sharable timesheet.

## Milestone project goals

I am developing only a part of the visioned MyTime application for the Interactive Frontend Development Milestone Project.

At this phase my focus is on the creating the project and tasks feature of the application. The rest of the application is not interactive, but will demonstrate the planned functions and the interaction flow. Ultimately, the application would relay more on the back end features, which I hope to develop in the later milestones.  

## UX / UI

The user interface should be intuitive and simple to use. The application is meant primarily to be used with mobile devices. On desktops the application width is limited, which I assume to encourages the user to fit the browser window to the application width on bigger screens of table tops. The application is designed to be used also together with other applications, for example with text programs or internet, without the MyTime application taking too much of browser windows space.  

The overall color schema I thought to be quite neutral to focus on to the functions of the application for now. Together with the colors, icons are intended to emphasize the utility and the purpose of the visual and functional features, such as record, pause and stop buttons or icons that strengthens the message conveyed via the page titles they are attached to.  

### Resources

[HTML CSS Color Picker](https://www.htmlcsscolor.com/) provides an online color tool, which I used for the color scheming.  

The buttons, icons and other visual cues are from [Font Awesome](https://fontawesome.com/).

The favicon icon is a free download from [Iconfinder](https://www.iconfinder.com/) to be found with a keyword 'hourglass'.

### Wireframes and mockups

[Balsamiq](https://balsamiq.com/?gclid=CjwKCAiAxMLvBRBNEiwAKhr-nIM261LiSSvKLP_VuIXqLTNH1Akjws8fgCSegVCICcpfVSsW78Rv_RoCod8QAvD_BwE) Mockup 3, was used to create the wireframing and mockups in the design phase of the application.

Mockups can be found from [here](https://github.com/Junon72/MyTimeApp/blob/master/assets/documents/MyTime1.pdf).  

### User Stories

1. Students
    - MyTime helps students to track and plan their time use.  


    _"As a 'Student', I want to keep track on time I use for studying separate subjects, while making sure I take enough breaks so I can sustain concentration."_    

    _"As a "Student", I want to learn to know better my own habits, so I can change the habits that are distracting or hindering my progress."_  


2. Self employed
    - MyTime allows tracking time in different project tasks and can be used to produce a timesheet.  
    - The time sheet can be send to an employer or used for administration.  

    _"As a 'Self employed', I want to be able to provide clear specification of time I have spend in different tasks I can refer to in billing."_

    _"As a 'Self employed', I want to have a simple solution to create timesheets I can share with my employers by email."_

    _"As a 'Self employed', I want to be able to keep track on time use to keep an eye on budget constrains of projects I do for others."_ 


3. Small businesses working with hour based employees working on company premise or from home.  
    - the employees can use MyTime to plan tasks and share registration of the used time for different tasks. 
    
    _"As a 'Small business", I want to have a simple solution for people we hire to register their working hours per task per project, they can easily share with the administration, without delays and extra paper hustle."_

    _"As a 'Small business", I want to have a focused channel for communicating the working hours with employees who are not working on premise on daily bases."_

4. Anybody interested in where does the time actually go.
    - anybody can track their time use in various different instances, be it keeping track on fitness goals or sharing the burden of household chores.  

[Back to UX / UI](#UX-/-UI)  

[Back to menu](#table-of-contents)  

## Functions and features

At this point, the application contains only the core user functions and related features.
The application explores MVP requirements for eventually more complete time management application featuring more functions and customization options:  
    - The future functions and features will allow the user customizations of projects and tasks, customization of viewing features and sharing options and administration/ user interactions.  
    - The application would also feature a login portal for users and administrators and access to two separate user environments.  
    - The application would allow creating, saving and working with multiple projects.

### MyTime core functions  

The application consists of seven pages - from creating a project to sharing and exiting the project.  
For this Milestone project I have focused on the first part of the applications features, namely creating the project and tasks. The data is also saved to the local storage for later use, for example to create dynamic elements on following pages.  
Unlike the starting pages, the rest of the interfaces are not interactive.

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

### MyTime core features and requirements (realized functions)

- user interactions and application responses.

#### Create a project interface  

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

[Back to functions and features](#functions-and-features)  

#### Create tasks interface

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

[Back to functions and features](#functions-and-features)  

#### Recording interface to record time spend in tasks

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

[Back to functions and features](#functions-and-features)  

#### Stopped recording view

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

[Back to functions and features](#functions-and-features)  

#### Timesheet viewer

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

[Back to functions and features](#functions-and-features)  

#### Share timesheet document  

1. Display form for email, subject and message fields:  
Planned:  
    - email validation.  
2. Send button:  
    - navigates to the exit page.  
Planned:  
    - send email.  
    - prompt that sending mail succeeded.  
    - prompt that sending mail did not succeed and what to do next.  

[Back to functions and features](#functions-and-features)  

#### Exit the project page

1. Start a new project button.  
    - navigates back to the start page.  
Planned:  
    - prompt with an option to reset all data.  

[Back to functions and features](#functions-and-features)  

### Using console with the app

The application can be consumed as such, but for my own learning purposes I built in explanatory logs that are accessible via the developer tools console. The logs are designed to explain the intended workings of the application for learning and for entertainment.  

To access the console in Chrome you can use (alt + cmd + i) for Mac or (ctrl + shift + i) for Windows to open the development tools. Then select Console from the Dev Tools menu.  

To access the console in Firefox you can use (alt + cmd + k) for Mac or (Ctrl + Shift + k) for Windows to directly open the development tools console.  

To clear the local storage from the stored data you can use `localStorage.clear();` command. This will reset the saved project data and results different log information.  

[Back to functions and features](#functions-and-features)  

[Back to menu](#table-of-contents)  

## Technologies  and libraries

### Technologies

- [HTML](https://html.spec.whatwg.org/multipage/) ~ markup language used for construction and content structuring of the applications pages.
- CSS ~ styling language was used for applications style, visual outlook and aesthetics.
- JavaScript ~ programming language was used to built interactive user interface UI.
- [Visual Studio Code](https://code.visualstudio.com/) ~ I used for my IDE in this project.
- Visual Studio Code integrated terminal and local git repository were used for the version control and then pushed to GitHub.
- [GitHub](https://github.com/) ~ is used for hosting the application and the repositories of previous versions.
- Google Chrome and Firefox developer tools ~ were used through out the development process, to test applications browser behavior, code involving local storage and for css visuals.
- [Digital Color Meter](#https://support.apple.com/guide/digital-color-meter/welcome/mac) ~ was used for color values, to get colors and convert between rgb and hexadecimals.
- [Balsamiq Mockups](https://balsamiq.com/) ~ was used to create wireframing and mockups.  

### Libraries

- [Bootstrap 4 Framework](https://getbootstrap.com/) ~ library was used for structuring the core layout.  
- [jQuery](https://jquery.com) ~ library was used to simplify DOM manipulation.
- [Momentsjs](https://momentjs.com/) ~ library was used to display local time.


[Back to menu](#table-of-contents)  

## Deployment

The application was created using VSCode (Visual Studio Code) IDE. Local Git Repository was initialized through VSCode to hold version control repository, and used in parallel with GitHub. GitHub was used also for deployment of the application. Gitpod helped to communicate code related questions towards the tutors.  

Deployment:

- after selecting the repository in Github Dashboard navigate to _"Settings"_.
- scroll down the settings page to _"GitHub Pages"_ sections.
- in the list of drop menu, which can be accessed by clicking the button, under the title _"Source"_, select _"Master Branch"_ .
- the page will refresh automatically, and a message should appear  at the top of the GitHub Pages section, announcing the site is ready to be published, with a link to the website.

Currently the application is hosted by GitHub and runs at [MyTime App](https://junon72.github.io/MyTimeApp/)

Cloning:

- the project is available for cloning and downloading at the GitHub repository [MyTimeApp](https://github.com/Junon72/MyTimeApp)
- both can be done by clicking the Clone or download button found at the upper right side corner of the Repository menu.
- clicking the button opens a dialogue, where the URL to the project can be copied. It is also possible to open the project in desktop or download the file in ZIP form.  
- the URL address can be accessed, for example, from your preferred IDE bash terminal to clone the Repository to your IDE workspace.  

[Back to menu](#table-of-contents)  

## Caution for security

- the application uses local storage.  Currently the application does not provide unique session identifier key to prevent possible storage event conflicts.  

As quoted from [HTML Living Standard page](https://html.spec.whatwg.org/multipage/webstorage.html):

>_"The localStorage attribute provides access to shared state. This specification does not define the interaction with other browsing contexts in a multiprocess user agent, and authors are encouraged to assume that there is no locking mechanism. A site could, for instance, try to read the value of a key, increment its value, then write it back out, using the new value as a unique identifier for the session; if the site does this twice in two different browser windows at the same time, it might end up using the same "unique" identifier for both sessions, with potentially disastrous effects."_

More information about the subject can be found [here](https://html.spec.whatwg.org/multipage/webstorage.html#the-localstorage-attribute).

- not using unique session identifier can pose a risk by exposing the session and local storage content for third party threats.  

- although the stored information consist only of string data and time objects, it is not recommended to enter any sensitive private information to the application interface.  

More about the security risks associated with the use of local storage, risk mitigation and what are the alternatives can be found for example [here](https://dev.to/rdegges/please-stop-using-local-storage-1i04).

p.s. the following discussion after the above article is worth of skimming through as well... just saying...

[Back to menu](#table-of-contents)  

## Testing

Testing services:  
HTML testing - [W3C Markup Validation Service](https://validator.w3.org/).  
CSS testing - [W3C Validation Service](https://jigsaw.w3.org/css-validator/).  
JavaScript - [JSHint](https://jshint.com/).  

The app was also tested for responsiveness and compatibility.  
The full testing document can be found from [here](https://github.com/Junon72/MyTimeApp/blob/master/assets/documents/MyTime%20testing.pdf).  

## References

In general:
For using the localStorage, JSON parsing, object constructors and arrow functions [TutorialRepublic](https://www.tutorialrepublic.com/)  
website provided clear and instructive material.  
ToDoList tutorials from [Web Dev Simplified](https://www.youtube.com/watch?v=W7FaYfuwu70) and  
[Code Explained](https://www.youtube.com/watch?v=b8sUhU_eq3g&t=201s) were most helpful source of information to understand dynamically created elements and use of local storage.  
Javascript & jQuery, by Jon Duckett (2104), has been as well very helpful source of knowledge, providing well structured package of information and illustrative examples.  
Other helpful resources tackling HTML, CSS and JavaScript have been [W3School](shttps://www.w3schools.com/), [MDN web docs](https://developer.mozilla.org/en-US/) and [StackOverflow](https://stackoverflow.com/).
Specifically [jQuery](https://jquery.com/) related questions were often answered by carefully studying [jQuery Documentation](https://api.jquery.com/).
Similarly [Momentsjs](https://momentjs.com/) provides good [documentation](https://momentjs.com/docs/).  

### Disclaimer

Many different web sources were used to research techniques and methods to accomplish the application.  
Main sources for particular code blocks are mentioned in comments with the code.  
The application is put together using several sources of code offering solution in specific context,
which I have deconstructed and reconstructed to suit the needs of this application. As the coding is reiterative process, the code is the outcome of origins, variations, mutations and permutations. Despite my efforts to reference, at least the main sources justly, there might be overlapping and identical code snippets floating around in the vastness of the web. In case you suspect the code or the content violates copyrights, I have forgot to reference a clear origin or the code has any other  copyright issues, please contact me at juno.athome@gmail.com.

[Back to menu](#table-of-contents)  
