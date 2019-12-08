$(document).ready(function setProject() {

    /* ------------------  PAGE SETUP ------------------ */

    /* DATE */
    const date = () => $('#date').text(moment().format('ll'));
    date();

    /* DAY & TIME */
    let clock = () => $('#dayTime').text(moment().format('ddd HH:mm A'));

    setInterval(clock, 1000);
    // for the displayed time functions I used Moments.js library-  

    // get the project name title
    let project = localStorage.getItem('project');
    // render the title
    $("#rec-project-title").text(project);

    /* ------------------ SETUP LOCAL STORAGE ------------------ */
    var id, added;
    var time = Date();

    /* GET LOCAL STORAGE OBJECTS */

    // new tasks

    var data = localStorage.getItem("TASKS");
    var taskLIST = JSON.parse(data);

    // default tasks

    var defData = localStorage.getItem("DEFAULTS");
    var defaults = JSON.parse(defData);
    console.log('Tasks are ready to be loaded')
    //console.log(defData);
    //console.log(defaults)

    let setDefaultsToLocal = () => localStorage.setItem("DEFAULTS", JSON.stringify(defaults));


    /* ------------------ SETUP RECORDING TASK ELEMENTS ------------------ */

    // for loading already saved defaults 
    var loadDefaults = (array) => {
        array.forEach((item) => {
            /* Values used for testing -> test removed
            //addToTasks(item.name, item.id, item.added, item.axed, item.start, item.end, item.elapsed, item.breaks, item.defaults);*/
            setDefaultsToLocal(item.name, item.id, item.added, item.start, item.end, item.elapsed, item.counter, item.defaults);
        });
    };

    // Check if tasks were added 

    if (!taskLIST || taskLIST === null || taskLIST.length === 0) {
        console.log('There are no tasks added');

    } else {
        console.table(taskLIST);
        console.log('Tasks are added to time recorder');
        renderNew();
    };

    if (defData) { // if defaults have been already saved to local storage -> load
        id = Date.now().toString();
        added = time.toLocaleString();
        loadDefaults(defaults, id);
        console.table(defaults);
        if (defaults.length !== 0) {
            console.log('Defaults were loaded successfully');
        } else {
            console.log('Error has ocurred: default tasks are missing');
        };
    } else { // if no defaults were loaded before -> load and save now
        time = new Date();
        added = time.toLocaleString();
        defaults = [{
                name: 'Project',
                id: id,
                added: added,
                start: "00:00",
                end: "00:00",
                elapsed: "00:00",
                breaks: 0,
                defaults: true
            },
            {
                name: 'Break',
                id: id,
                added: added,
                start: "00:00",
                end: "00:00",
                elapsed: "00:00",
                breaks: 0,
                defaults: true
            },
            {
                name: 'Lunch',
                id: id,
                added: added,
                start: "00:00",
                end: "00:00",
                elapsed: "00:00",
                breaks: 0,
                defaults: true
            }
        ];
        setDefaultsToLocal();
        console.table(defaults);
        if (defaults.length !== 0) {
            console.log('Defaults were loaded successfully');
        } else {
            console.log('Error has ocurred: default tasks are missing');
        };
    };

    /* RENDER TASKS ON SCREEN */
    // new tasks - 
    // for rendering local storage content dynamically I used code reference from 
    // https://medium.com/@pearlmcphee/build-a-dynamic-app-using-javascript-html-and-css-f0dfc136007a
    
    function renderNew() {
        function notify() { // notify if 'submit' event occurs and log the element id and class
            console.log('Click event occurred on task', (event.target));
        };

        const renderTasks = recorder => {
            name = recorder.name;
            id = recorder.id;
            const startId = id + 1;
            const elapsedId = id + 2;
            start = recorder.start;
            elapsed = recorder.elapsed;
            var $item = $(
                '<li class="col-12 d-flex recTask">' +
                '<button type="click" class="btn btn-success col-6 tasksButton" id="' + id + '">' + name +
                '</button>' +
                '<p class="startTaskTime taskTime col-3 pl-10" id="' + startId + '">' + start +
                '</p>' +
                '<p class="elapsedTaskTime taskTime col-3 pl-10" id="' + elapsedId + '">' + elapsed +
                '</p>' +
                '</li>' +
                '<hr></hr>').on('click', (e) => {
                e.preventDefault();
                $('.recTaskButton').prop("disabled", false);
                $('.recTaskButton').removeClass('recTaskButton').addClass('btn-success');
                $('.taskTime').removeClass('timeColor');

                $(event.target).prop("disabled", true);
                $(event.target).removeClass('btn-success').addClass('recTaskButton');
                $(event.target).siblings('.taskTime').addClass('timeColor');


                const storageKeyButton = event.target.getAttribute('id');
                console.log('This object ID is ' + storageKeyButton);
                const startElement = $(event.target).siblings('.startTaskTime');
                console.log(startElement);
                const elapsedElement = $(event.target).siblings('.elapsedTaskTime');
                console.log(elapsedElement);
                notify(startElement, elapsedElement);
            });
            $('#recordTasks').after($item);
        };
        taskLIST.forEach(recorder => renderTasks(recorder));
    };
    renderDefaults();


    /*SET THE DEFAULTS*/
    //const renderDefaults = defaultsRecorder

    function renderDefaults() {

        const startProject = defaults[0]["start"];
        const elapsedProject = defaults[0]["elapsed"];
        const startLunch = defaults[1]["start"];
        const elapsedLunch = defaults[1]["elapsed"];
        const startBreak = defaults[2]["start"];
        const elapsedBreak = defaults[2]["elapsed"];

        $("#startProject").text(startProject)
        $("#elapsedProject").text(elapsedProject)
        $("#startLunch").text(startLunch)
        $("#elapsedLunch").text(elapsedLunch)
        $("#startBreak").text(startBreak)
        $("#elapsedBreak").text(elapsedBreak)
    };

    $('h5.tasksHeader').on('click', (e) => {
        e.preventDefault();
        $('.defaults-container-bottom').toggleClass('showDefaults');
    })

    $('#recLunch').on('click', (e) => {
        e.preventDefault();
        $('.recTaskButton').prop("disabled", false);
        $('.recTaskButton').removeClass('recTaskButton').addClass('btn-success');
        $('.taskTime').removeClass('timeColor');

        $('#recLunch').prop("disabled", true);
        $('#recLunch').removeClass('btn-success').addClass('recTaskButton');
        $('#recLunch').siblings('.taskTime').addClass('timeColor');
    });

    $('#recBreak').on('click', (e) => {
        e.preventDefault();
        $('.recTaskButton').prop("disabled", false);
        $('.recTaskButton').removeClass('recTaskButton').addClass('btn-success');
        $('.taskTime').removeClass('timeColor');

        $('#recBreak').prop("disabled", true);
        $('#recBreak').removeClass('btn-success').addClass('recTaskButton');
        $('#recBreak').siblings('.taskTime').addClass('timeColor');
    });

    /* Recording paused prompt */

    $('#recPause').on('click', (e) => {
        e.preventDefault();
        $('#pausePrompt').css({
            "display": "block"
        });
        $('.tasksButton').addClass('btn-success').css({
            "background-color": "rgb(199, 102, 5)"
        }).prop("disabled", true);
        $('#faRecTitle').removeClass('fa-circle').addClass('fa-circle-o');
    });

    $('#continue').on('click', (e) => {
        e.preventDefault();
        $('#pausePrompt').css({
            "display": "none"
        });
        $('.tasksButton').css({
            "background-color": ""
        }).prop("disabled", false);
        $('#faRecTitle').removeClass('fa-circle-o').addClass('fa-circle');
    });
});

$('#recStop').on('click', (e) => {
    e.preventDefault();
    $('.tasksButton').prop("disabled", true);
    $('.tasksButton').removeClass('recTaskButton').css({
        "background-color": "rgb(1, 69, 143, .4)"
    });
    $('.taskTime').removeClass('timeColor');
});