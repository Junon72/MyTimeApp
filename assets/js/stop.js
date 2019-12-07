$(document).ready(function setProject() {

    /* ------------------  PAGE SETUP ------------------ */

    /* DATE */
    const date = () => $('#date').text(moment().format('ll'));
    date();

    /* DAY & TIME */
    let clock = () => $('#dayTime').text(moment().format('ddd HH:mm A'));

    setInterval(clock, 1000);

    // get the project name title
    let project = localStorage.getItem('project');
    // render the title
    $("#rec-project-title").text(project);
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
    console.log('Tasks are ready to be loaded')

    //let setDefaultsToLocal = () => localStorage.setItem("DEFAULTS", JSON.stringify(defaults));

    /* RENDER TASKS ON SCREEN */

    const renderTasks = recorder => {
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
            '<hr></hr>')
            $('#recordTasks').after($item);
        };
  
    taskLIST.forEach(recorder => renderTasks(recorder));
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
});