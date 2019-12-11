$(document).ready(function () {

    /* ------------------  PAGE SETUP ------------------ */
    /* --------------------TIMES */
    /* Project ended */

    let ended = localStorage.getItem("STOPTIME");
    let projectEnd = JSON.parse(ended);

    if (!projectEnd || projectEnd === null) {
        /* time stays flexible */
        /* DATE */
        const date = () => $('#date').text(moment().format('ll'));
        date();
    
         /* DAY & TIME */
       let clock = () => $('#dayTime').text(moment().format('ddd HH:mm A'));
       clock();
        setInterval(clock, 1000);

    } else {
        /* time will be set to when stop button was clicked */
        /* DATE */
        let dateEnd = projectEnd[1];
        $('#date').text(dateEnd);

        /* DAY & TIME */
        let clockEnd = projectEnd[2];
        $('#dayTime').text(clockEnd);

        let timeEnd = projectEnd[0];
        console.log('Recording was stopped ' + timeEnd);
    }

    // get the project name title
    let project = localStorage.getItem('project');
    // render the title
    $(".project-title").text(project);
    $("#tableTitle").text(project);

    /* ------------------ SETUP LOCAL STORAGE ------------------ */
    var id;

    /* GET LOCAL STORAGE OBJECTS */

    // new tasks

    var data = localStorage.getItem("TASKS");
    var taskLIST = JSON.parse(data);

    // default tasks

    var defData = localStorage.getItem("DEFAULTS");
    var defaults = JSON.parse(defData);
    console.log('Recorded tasks:');

    //let setDefaultsToLocal = () => localStorage.setItem("DEFAULTS", JSON.stringify(defaults));

    /* ------------------ SETUP RECORDING TASK ELEMENTS ------------------ */

    // Check if recorded new tasks

    if (!taskLIST || taskLIST === null || taskLIST.length === 0) {
        console.log('There are no tasks added');
        $('.defaults-container-bottom').toggleClass('showDefaults');

    } else {
        console.table(taskLIST);
        console.table(defaults);
        console.log('Tasks recording has been set inactive.');
        taskLIST.forEach(recorder => renderTasks(recorder));
    }

    /* RENDER TASKS ON SCREEN */

    function renderTasks(recorder) {
        name = recorder.name;
        id = recorder.id;
        const startId = id + 1;
        const elapsedId = id + 2;
        start = recorder.start;
        elapsed = recorder.elapsed;
        var $item = $(
            '<li class="col-12 d-flex recTask">' +
            '<button disabled class="btn btn-default col-6 stoppedButton">' + name +
            '</button>' +
            '<p class="startTaskTime taskTime col-3 pl-10" id="' + startId + '">' + start +
            '</p>' +
            '<p class="elapsedTaskTime taskTime col-3 pl-10" id="' + elapsedId + '">' + elapsed +
            '</p>' +
            '</li>' +
            '<hr></hr>');
        $('#recordTasks').after($item);
    }

    renderDefaults();

    /*SET THE DEFAULTS*/

    function renderDefaults() {

        const startProject = defaults[0].start;
        const elapsedProject = defaults[0].elapsed;
        const startLunch = defaults[1].start;
        const elapsedLunch = defaults[1].elapsed;
        const startBreak = defaults[2].start;
        const elapsedBreak = defaults[2].elapsed;

        $("#startProject").text(startProject);
        $("#elapsedProject").text(elapsedProject);
        $("#startLunch").text(startLunch);
        $("#elapsedLunch").text(elapsedLunch);
        $("#startBreak").text(startBreak);
        $("#elapsedBreak").text(elapsedBreak);
    }

    $('h5.tasksHeader').on('click', (e) => {
        e.preventDefault();
        $('.defaults-container-bottom').toggleClass('showDefaults');
    });

    $('#backToRec').on('click', () => {
        let url = "record.html";
        $(location).attr("href", url);
    });

    $('#toShare').on('click', (e) => {
        e.preventDefault();
        let url = "view.html";
        $(location).attr("href", url);
        console.log('Tasks were accepted. At this point the data is processed and presented in table format to be viewed and send forward');
    });
});