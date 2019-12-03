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

    // setting the project name title
    let project;

    if (localStorage.getItem('project')) {
        project = localStorage.getItem('project')
    } else {
        if (confirm('You haven yet to give your project a name. Would you like to name it now?')) {
            location.href = 'index.html';
        } else {
            project = ('Project(default)');
            localStorage.setItem('project', project);
        };
    };

    $(".project-title").text(project);

    // setting the start project button activation function
    function activateStartRecordingButton() {
        $("#toRecord").attr("href", "tasksOO.html");
        $('#save-tasks').css({
            "cursor": "pointer",
            "background-color": "var(--clr-green)",
            "border-color": "rgb(30,126,52)"
        });
        $('#save-tasks').on('click', () => {
            setupRecord();
        });
    };

    function deactivateStartRecordingButton() {
        $("#toRecord").removeAttr("href");
        $('#save-tasks').css({
            "cursor": "default",
            "background-color": "rgb(5, 199, 5, .3",
            "border-color": "var(--clr-green)"
        });
        $('#save-tasks').off('click');
    };

    /* SET UP ADD TASKS FUNCTION */

    // Selected elements
    const $newTaskButton = $('#newTaskButton'); // Initiates a new task entry
    const $newTaskForm = $('#newTaskForm'); // Form containing tasks input and add button
    const $nameInput = $('input:text'); // IS var task

    const $emptyName = $('#emptyNamePrompt'); // Prompt message when task input field is empty 
    const $taskItems = $('#taskItems'); // <ul> element to display list of new tasks - taskLIST

    // Beginning setup of the task form
    $newTaskForm.show();
    $newTaskButton.hide();


    /* LOCAL STORAGE SET UP */
    // Variables
    var taskLIST, id, added;
    var time = Date();

    // get task item from the localStorage
    var data = localStorage.getItem("TASKS");
    var taskLIST = JSON.parse(data);

    /* I. tasks list content message with time reference: 
    1. when no entries were submitted before page load.
    2. when no entries found when page refreshed 
    3. when a new task item was added */

    (function () {
        time = Date();
        var initTasks = time.toLocaleString();
        if (!taskLIST) {
            console.log(initTasks);
            console.log('No entries have been submitted to the task list yet');
        } else if (taskLIST.length === 0) {
            console.log('Task list is empty');
            deactivateStartRecordingButton();
        } else {
            added = time.toLocaleString();
            console.log('At ' + added);
            console.log('Following task item entries were added to the task list from local storage');
            console.table(taskLIST);
            activateStartRecordingButton();
        };
    })();

    /* Before entering anything new - check the state of the localStorage
            if there is a list already existing, render it to the tasks display ($taskItems) */
    if (data) {
        taskLIST = JSON.parse(data); // translate the JSON string back to readable code
        id = Date.now().toString();
        added = time.toLocaleString();
        loadTasks(taskLIST, id); // load the tasks to the display
    } else {
        taskLIST = []; // if no tasks, set taskLIST to an empty array
        id = Date.now().toString();
        added = time.toLocaleString();
    };

    // load tasks saved to the local storage to the tasks display -> add items and execute addToTask function
    function loadTasks(array) {
        array.forEach((item) => {
            /* Removed code block was used to test the target item in tasks list object - if remove button was submitted axed value true;
            //addToTasks(item.name, item.id, item.added, item.axed, item.start, item.end, item.elapsed, item.breaks, item.defaults);*/
            addToTasks(item.name, item.id, item.added, item.start, item.end, item.elapsed, item.breaks, item.defaults);
        });
    };

    /* ADD AND REMOVE TASKS */

    // function to add tasks to the task list - taskLIST
    function addToTasks(task, id) {

        function notify() { // notify if 'submit' event occurs and log the element id and class
            console.log('Submit event occurred and a form', (event.target), 'was activated')
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
            const targetTask = taskLIST.find(xitem => xitem.id === storageKey);


            const location = taskLIST.indexOf(targetTask);
            console.log('Confirming the activated element id ' + storageKey + ' is the localStorage key for the task entry ' + targetTask.name);
            console.log('Confirming entry name ' + targetTask.name + ' with entry id ' + targetTask.id + ' at index location ' + location + ' was removed!');

            /* Removed test (axed ? false : true)
            //targetTask['axed'] = true; 
            //console.table(taskLIST); */
            // Code block was used to test the target item in tasks list object - if remove button was submitted axed value true;
            // Test result: target task item axed key value was changed from false to true


            taskLIST.splice(location, 1);
            localStorage.setItem("TASKS", JSON.stringify(taskLIST));

            /* II. tasks list content message:
                    1. when all task list entries have been removed
                    2. actual storage content after item was removed */
            if (taskLIST.length === 0) {
                console.log('Tasks list is currently empty.');
                deactivateStartRecordingButton();

            } else {
                console.log('Current task items saved to the local storage after remove task item event.');
                console.table(taskLIST);
            };
        });
        // set the new item at the end of the list
        $taskItems.after($item);        
        activateStartRecordingButton();
    };
    /* Removed test
    //Test: axed: false to true.
//};*/

    // Event handler for new task item entries 
    $newTaskForm.on('submit', (e) => {
        e.preventDefault();
        var task = $nameInput.val();
        // validation of the provided entry
        task = jQuery.trim(task);
        if (task === null || task == "" || task.length === 0) {
            emptyNamePrompt();
            console.log('Name was not valid: name was empty string or no name was provided.');
        } else {

            function notify() { // notify if 'submit' event occurs and log the element 
                console.log('New task entry ' + task + ' was submitted to the task list via ', (event.target))
            };

            task = task.charAt(0).toUpperCase() + task.slice(1);

            notify();
            id = Date.now().toString(); // date to string creates a unique id (https://www.youtube.com/watch?v=W7FaYfuwu70)
            time = new Date();
            added = time.toLocaleString();
            //console.log(added);

            /* Removed test
            //Test: axed: false to true.
            //addToTasks(task, id, 0, false, 0, 0, 0, 0, false); - tasks list object including 'axed' key*/
            addToTasks(task, id, 0, 0, 0, 0, 0, false);

            taskLIST.push({ // List object to push each task to taskLIST
                name: task,
                id: id,
                added: added,
                /* Removed test
                //axed: false,*/
                start: 0,
                end: 0,
                elapsed: 0,
                breaks: 0,
                defaults: false
            });

            localStorage.setItem("TASKS", JSON.stringify(taskLIST));
            $newTaskForm.hide();
            $newTaskButton.show();
            $nameInput.val('');

            //console.log('Current task items saved to the local storage after add event.');
            console.table(taskLIST);
        };
    });

    // display the new task button after submitting a task item to the list
    $('#showTasks').on('click', () => {
        $newTaskButton.hide();
        $newTaskForm.show();
        $('.newTasks').scrollTop($('.newTasks')[0].scrollHeight);
    });


    /* ENTRY VALIDATION - EMPTY INPUT NOTIFICATION */

    // 'Empty' name notification.
    function emptyNamePrompt() {
        $emptyName.css({
            "display": "block"
        });
        $('#nameInput').css({
            "color": "red",
            "border-style": "none",
            "border-color": "none",
            "background-color": "transparent"
        });
        $('#nameInput').prop("disabled", true);
        $emptyName.on('click', function () {
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

    /* --------------------------- record.html page --------------------------- */

    


});