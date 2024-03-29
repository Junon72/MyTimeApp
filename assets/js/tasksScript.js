$(document).ready(function setProject() {

    /* --------------------------- task.html page --------------------------- */
    /* STYLES */
    // save project button
    $("#save-tasks").css({
        "background-color": "rgb(5, 199, 5, .3",
        "border-style": "none",
        "box-shadow": "none",
        "cursor": "default"
    });

    $('#nameInput').css({
        "font-size": "1.2rem",
        "font-weight": "200",
        "padding": "0 0 0 .5rem",
        "box-shadow": "none"
    });

    /* SET UP PROJECT TO ADD TASKS */

    const $noProjectName = $('.noProjectName');

    // setting the project name title
    var project;

    if (localStorage.getItem('project')) {
        project = localStorage.getItem('project');
    } else {
        $noProjectName.css({
            "display": "block"
        });
        $('#projectNameOk').on('click', () => {
            location.href = 'index.html';
        });
        $('#projectNameDefault').on('click', () => {
            project = ('Project(default)');
            localStorage.setItem('project', project);
            $(".project-title").text(project);
            console.log('The project is named ' + project);
            $noProjectName.css({
                "display": "none"
            });
        });
    }

    $(".project-title").text(project);

    const startProjectButton = document.getElementById('toRecord');

    // setting the start project button activation function
    // .set/removeAttribute methods were eventually chosen as the jQuery .attr/removeAttr or .prop or .on/off methods did not capture the hoped interaction
    var activateStartRecordingButton = () => {
        startProjectButton.setAttribute("href", "record.html");
        $('#toRecord').css({
            "cursor": "pointer",
            "background-color": "var(--clr-green)",
            "border-color": "rgb(30,126,52)"
        });
    };

    var deactivateStartRecordingButton = () => {
        startProjectButton.removeAttribute("href");
        $('#toRecord').css({
            "cursor": "default",
            "background-color": "rgb(5, 199, 5, .3",
            "border-color": "var(--clr-green)"
        });
        $('#save-tasks').off('click');
    };

    /* SET UP ADD TASKS FUNCTION */
    // Dynamic list with local storage tutorials:
    // https://www.taniarascia.com/how-to-use-local-storage-with-javascript/
    // https://www.youtube.com/watch?v=b8sUhU_eq3g&t=201s


    // Selected html elements
    const $newTaskButton = $('#newTaskButton'); // Initiates a new task entry
    const $newTaskForm = $('#newTaskForm'); // Form containing tasks input and add button
    const $nameInput = $('input:text'); // IS var task

    const $emptyName = $('#emptyNamePrompt'); // Prompt message when task input field is empty 
    const $dupleName = $('#duplicateNamePrompt'); // Prompt message when task name already exists in a list 
    const $taskItems = $('#taskItems'); // <ul> element to display list of new tasks - taskLIST

    // Starting setup of the task form
    $newTaskForm.show();
    $newTaskButton.hide();

    /* LOCAL STORAGE SET UP */
    // Variables
    var taskLIST, id, added, task;
    var time = Date();

    // get task item from the localStorage
    var data = localStorage.getItem("TASKS");
    taskLIST = JSON.parse(data);

    /* Tasks list content test and message with time reference: 
    1. when no entries were submitted before page load.
    2. when no entries found when page refreshed 
    3. when a new task item was added */

   (function () {
        time = Date().toLocaleString();
        if (!taskLIST || taskLIST === null) {
            console.log('At ' + time + ' locale time, no entries have been submitted to the ' + project + ' tasks list yet.');
        } else if (taskLIST.length === 0) {
            console.log('Task list is empty, all tasks from ' + project + ' have been removed at.' + time);
            deactivateStartRecordingButton();
        } else {
            added = time.toLocaleString();
            console.log(added + ', the following task item entries were added to the ' + project + ' task list from local storage:');
            console.table(taskLIST);
            activateStartRecordingButton();
        }
    })();

    /* Before entering anything new - check the state of the localStorage
            if there is a list already existing, load the list be rendered, else provide an empty array to populate */
    if (data) {
        taskLIST = JSON.parse(data); // translate the JSON string back to readable code
        id = Date.now().toString();
        added = time.toLocaleString();
        loadTasks(taskLIST, id); // load the tasks to the display
    } else {
        taskLIST = []; // if no tasks, set taskLIST to an empty array
        id = Date.now().toString();
        added = time.toLocaleString();
    }

    // load tasks saved to the local storage to the tasks display -> add items and execute addToTask function
    function loadTasks(array) {
        array.forEach((item) => {
            addToTasks(item.name, item.id, item.added, item.start, item.end, item.elapsed, item.breaks, item.defaults);
        });
    }

    /* ADD AND REMOVE TASKS */

    // function to add tasks to the task list - taskLIST
    function addToTasks(task, id) {

        let notify = () => { // notify if 'submit' event occurs and log the element id and class
            console.log('Submit at ', (event.target), ' detected.');
        };
        const $item = $( //sets the task item on tasks display
            '<form class="deleteForm" id="' + id + '">' +
            '<li class="taskItem justify-content-between">' +
            '<p class="taskName">' + task +
            '</p>' +
            '<button type="submit" class="btn btn-default remove task-button" data-toggle="tooltip"  title="Remove task" id="' + id + '">' +
            '<i class="fa fa-minus-circle task-icon">' +
            '</i>' +
            '</button>' +
            '</li>' +
            '</form>').on('submit', (e) => {
            e.preventDefault();
            notify();
            const storageKey = event.target.getAttribute('id');
            $(event.target).remove();

            // This code is used for matching the element id and data entry in local storage object for removal
            const targetTask = taskLIST.find(xitem => xitem.id === storageKey);
            const location = taskLIST.indexOf(targetTask);
            console.log('Entry name ' + targetTask.name + ' with entry id ' + targetTask.id + ' at index ' + location + ' was removed!');

            // Removes the target task from the local storage - slice + save the new object
            taskLIST.splice(location, 1);
            localStorage.setItem("TASKS", JSON.stringify(taskLIST));

            /* Testing tasks list content & message:
                    1. when all task list entries have been removed
                    2. actual storage content after item was removed */
            if (taskLIST.length === 0) {
                console.log('Tasks list is currently empty, all tasks from ' + project + ' have been removed..');
                deactivateStartRecordingButton();

            } else {
                console.log('Current task items saved to the local storage after remove task item event.');
                console.table(taskLIST);
            }
        });
        // set the new item at the end of the list
        $taskItems.after($item);
        activateStartRecordingButton();
    }

    // Event handler for the new task item input form
    $newTaskForm.on('submit', (e) => {
        e.preventDefault();
        task = $nameInput.val();
        task = jQuery.trim(task); // trims white space from front and back of the new name - https://api.jquery.com/jQuery.trim/#jQuery-trim-str
        task = task.charAt(0).toUpperCase() + task.slice(1); // Capitalizes the first letter

        // validation of the provided entry - null or empty string/ duplicate name
        if (task === null || task == "" || task.length === 0) {
            emptyNamePrompt();
            console.log('Name was not valid: name was empty string or no name was provided.');
        } else if (isNameDuplicate() === true) {
            nameIsDuplicatePrompt();
            console.log('Name was not valid: name "' + task + '" already exists.');
        } else {
            let notify = () => { // notify if 'submit' event occurs and log the element 
                console.log('New task entry ' + task + ' was submitted to the task list via ', (event.target));
            };
            notify();

            // Date to string method creates a unique ID, which helps to identify associate local storage object with matching ID
            // Method is referenced from https://www.youtube.com/watch?v=W7FaYfuwu70
            id = Date.now().toString(); 
            time = new Date();
            added = time.toLocaleString();
            //console.log(added);

            /* NEW TASKS DATA CONSTRUCTOR */
            addToTasks(task, id, 0, 0, 0, 0, 0, false);
            
            // List object to push each task to taskLIST
            taskLIST.push({ 
                name: task,
                id: id,
                added: added,
                start: '00:00',
                end: '00:00',
                elapsed: '00:00',
                breaks: 0,
                defaults: false
            });

            localStorage.setItem("TASKS", JSON.stringify(taskLIST));
            $newTaskForm.hide();
            $newTaskButton.show();
            $nameInput.val('');

            //console.log('Current task items saved to the local storage after add event.');
            console.table(taskLIST);
        }
    });

    // display the new task button after submitting a task item to the list
    $('#showTasks').on('click', (e) => {
        e.preventDefault();
        $newTaskButton.hide();
        $newTaskForm.show();
    });

    /* TEST IF THE NEW TASK NAME ALREADY EXISTS */
    // the test is build referencing https://www.tutorialrepublic.com/faq/how-to-check-if-an-array-includes-an-object-in-javascript.php

    let isNameDuplicate = () => {

        if (taskLIST.some(taskLIST => taskLIST.name === task)) {
            return true;
        } else {
            return false;
        }
    };

    /* ENTRY VALIDATION - EMPTY INPUT NOTIFICATION / NAME IS DUPLICATE NOTIFICATION*/

    // 'Empty' name prompt.
    let emptyNamePrompt = () => {
        $emptyName.css({
            "display": "block"
        });
        $('#nameInput').css({
            "color": "red",
            "border-style": "none",
            "border-color": "none",
            "background-color": "transparent"
        }).prop("disabled", true);
        $emptyName.on('click', function (e) {
            e.preventDefault();
            $emptyName.css({
                "display": "none"
            });
            $('input').css({
                "color": "rgb(33, 37, 41)",
                "border-style": "",
                "border-color": "",
                "background-color": ""
            });
            $('#nameInput').prop("disabled", false);
            $nameInput.val('');
        });
    };

    // Task name already exists prompt.
    let nameIsDuplicatePrompt = () => {
        $dupleName.css({
            "display": "block"
        });
        $('#nameInput').css({
            "color": "red",
            "border-style": "none",
            "border-color": "none",
            "background-color": "transparent"
        }).prop("disabled", true);
        $dupleName.on('click', function () {
            $dupleName.css({
                "display": "none"
            });
            $('input').css({
                "color": "rgb(33, 37, 41)",
                "border-style": "",
                "border-color": "",
                "background-color": ""
            });
            $('#nameInput').prop("disabled", false);
            $nameInput.val('');
        });
    };
});