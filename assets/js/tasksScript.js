$(document).ready(function setProject() {

    /*Styles*/
    // save project button
    $("#save-project").css({
        "background-color": "rgb(5, 199, 5, .5",
        "border-color": "var(--clr-green)"
    })
    $("#save-tasks").css({
        "background-color": "rgb(5, 199, 5, .5",
        "border-color": "var(--clr-green)"
    })

    // setting the project name title
    let getProject = localStorage.getItem('project');
    $(".project-title").text(getProject);

    /*let task 

    [
        {
            "id": id,
            "name": name,
            "startTime": null,
            "endTime": null,
            "breaks": 0
        }
    ]*/

    //let taskList = localStorage.setItem()


    const $newTaskButton = $('#newTaskButton');
    const $newTaskForm = $('#newTaskForm');
    const $nameInput = $('input:text');

    const $emptyName = $('#emptyNamePrompt');
    const $taskItems = $('#taskItems')

    $newTaskForm.show();
    $newTaskButton.hide();

    $newTaskForm.on('submit', (e) => {
        e.preventDefault();
        var newName = $nameInput.val();
        newName = jQuery.trim(newName);
            console.log(newName)
            console.log(newName.length) /* add input validation!!*/
        if (newName === null || newName == "" || newName.length === 0) {
            emptyNamePrompt();
            console.log(typeof(newName));
        } else {
            newName = newName.charAt(0).toUpperCase() + newName.slice(1);
            $taskItems.after(
                '<form>' +
                '<li class="task">' + newName +
                '<button type="submit" class="btn btn-default remove task-button" id="removeTask" data-toggle="tooltip" title="Remove task"><i class="fa fa-minus-circle task-icon"></i></button>' +
                '</li>' + '</form>');

            $newTaskForm.hide();
            $newTaskButton.show();
            $nameInput.val('');
        }
    });

    $('#showTasks').on('click', () => {
        $newTaskButton.hide();
        $newTaskForm.show();
        $('.newTasks').scrollTop($('.newTasks')[0].scrollHeight);
    });


    /* Removing Tasks */

    $("#removeTask").on('submit', (e) => {
        $(this).remove(".task");
    });


    function emptyNamePrompt() {
        $emptyName.css({
            "display": "block"
        });

        $emptyName.on('click', function () {
            $emptyName.css({
                "display": "none"
            });
            $nameInput.val('')
        });
    };






});