$(document).ready(function () {

    /* ------------------  PAGE SETUP ------------------ */

    /* DATE */
    const date = () => $('#date').text(moment().format('ll'));
    date();

    /* DAY & TIME */
    let clock = () => $('#dayTime').text(moment().format('ddd hh:mm A'));

    setInterval(clock, 1000);
    // for the displayed time functions I used Moments.js library-  https://momentjs.com/ and provided documents https://momentjs.com/docs/
    // how to actually get Momentsjs working https://www.keycdn.com/support/moment-js-cdn and https://www.webfx.com/blog/web-design/javascript-dates-moment-js/ gave the needed answer

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
        console.log('There are no new tasks to add.');
    } else {
        console.table(taskLIST);
        console.log('New tasks are added to the time recorder.');
        renderNew();
    };

    // if defaults have been already saved to local storage -> load
    if (defData) { 
        id = Date.now().toString();
        added = time.toLocaleString();
        loadDefaults(defaults, id);
        console.table(defaults);
        if (defaults.length !== 0) {
            console.log('Default tasks will be loaded, and recorded values restored.');
        } else {
            console.log('Error has ocurred: default tasks are missing.');
        };
    } else {
         // if no defaults were loaded before -> load and save now
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

        // Check tand communicate if the defaults are saved.
        if (defaults.length !== 0) {
            console.log('Default tasks were loaded successfully.');
        } else {
            console.log('Error has ocurred: default tasks are missing.');
        };
    };

    /* RENDER TASKS ON SCREEN */
    // new tasks - 
    // for rendering local storage content dynamically I used code reference from 
    // https://medium.com/@pearlmcphee/build-a-dynamic-app-using-javascript-html-and-css-f0dfc136007a
    function renderNew() {
        const renderTasks = recorder => {
            name = recorder.name;
            id = recorder.id;
            const startId = id + 1;
            const elapsedId = id + 2;
            start = recorder.start;
            elapsed = recorder.elapsed;
            var $item = $(
                '<li class="col-12 d-flex recTask">' +
                '<button type="click" class="btn btn-success col-6 tasksButton" id="' + id + '" data-toggle="tooltip" title="Time recorder">' + name +
                '</button>' +
                '<p class="startTaskTime taskTime col-3" id="' + startId + '">' + start +
                '</p>' +
                '<p class="elapsedTaskTime taskTime col-3" id="' + elapsedId + '">' + elapsed +
                '</p>' +
                '</li>' +
                '<hr></hr>').on('click', (e) => {
                e.preventDefault();
                $('.recTaskButton').prop("disabled", false).prop("title", "Recording").removeClass('recTaskButton').addClass('btn-success');
                $('.taskTime').removeClass('timeColor');
                $(event.target).prop("disabled", true).removeClass('btn-success').addClass('recTaskButton').siblings('.taskTime').addClass('timeColor');

                const storageKeyButton = event.target.getAttribute('id');
                console.log('Task ' + name + ' with id ' + storageKeyButton + ' is being recorded');
            });
            $('#recordTasks').after($item);
        };
        taskLIST.forEach(recorder => renderTasks(recorder));
    };
    renderDefaults();

    /*SET THE DEFAULTS*/
    function renderDefaults() {
        // Values to get from local storage 
        const startProject = defaults[0]["start"];
        const elapsedProject = defaults[0]["elapsed"];
        const startLunch = defaults[1]["start"];
        const elapsedLunch = defaults[1]["elapsed"];
        const startBreak = defaults[2]["start"];
        const elapsedBreak = defaults[2]["elapsed"];

        // Rendering values
        $("#startProject").text(startProject)
        $("#elapsedProject").text(elapsedProject)
        $("#startLunch").text(startLunch)
        $("#elapsedLunch").text(elapsedLunch)
        $("#startBreak").text(startBreak)
        $("#elapsedBreak").text(elapsedBreak)
    };

    // Event listeners
    $('h5.tasksHeader').on('click', (e) => {
        e.preventDefault();
        $('.defaults-container-bottom').toggleClass('showDefaults');
    })

    $('#recLunch').on('click', (e) => {
        e.preventDefault();
        $('.recTaskButton').prop("disabled", false).removeClass('recTaskButton').addClass('btn-success');
        $('.taskTime').removeClass('timeColor');
        $('#recLunch').prop("disabled", true).removeClass('btn-success').addClass('recTaskButton').siblings('.taskTime').addClass('timeColor');
        console.log('Lunch time!');
    });

    $('#recBreak').on('click', (e) => {
        e.preventDefault();
        $('.recTaskButton').prop("disabled", false).removeClass('recTaskButton').addClass('btn-success');
        $('.taskTime').removeClass('timeColor');
        $('#recBreak').prop("disabled", true).removeClass('btn-success').addClass('recTaskButton').siblings('.taskTime').addClass('timeColor');
        console.log('Break time!');
    });

    // Recording paused prompt 
    $('#recPause').on('click', (e) => {
        e.preventDefault();
        $('#pausePrompt').css({
            "display": "block"
        });
        $('.tasksButton').addClass('btn-success').css({
            "background-color": "rgb(199, 102, 5)"
        }).prop("disabled", true).prop("title", "Paused");
        $('#faRecTitle').removeClass('fa-circle').addClass('fa-circle-o');
        console.log('Recording is paused');
    });

    $('#recOk').on('click', (e) => {
        e.preventDefault();
        $('#pausePrompt').css({
            "display": "none"
        });
        $('.tasksButton').css({
            "background-color": ""
        }).prop("disabled", false).prop("title", "Time recorder");
        $('#faRecTitle').removeClass('fa-circle-o').addClass('fa-circle');
        console.log('Recording continues');
    });

    // Catch the project end time and save it to local storage
    $('#recStop').on('click', () => {

        let projectEnd = [];
        let timeEnd = new moment().format('dddd, ll, hh:mm A');
        let dateEnd = new moment().format('ll');
        let clockEnd = new moment().format('ddd hh:mm A');
        let url = "stop.html";

        projectEnd.push(timeEnd, dateEnd, clockEnd);
        localStorage.setItem("STOPTIME", JSON.stringify(projectEnd));

        localStorage.getItem("STOPTIME", JSON.stringify(projectEnd));
        $(location).attr("href", url); // https://www.java67.com/2017/07/6-ways-to-redirect-web-page-using-JavaScript-and-jQuery.html
    });
});
