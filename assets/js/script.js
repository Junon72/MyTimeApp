$(document).ready(function () {

    /*Styles*/
    // save project button
    $("#save-project").css({
        "background-color": "rgb(5, 199, 5, .5",
        "border-color": "var(--clr-green)"
    });
    $("#save-tasks").css({
        "background-color": "rgb(5, 199, 5, .5",
        "border-color": "var(--clr-green)"
    });


    //index
    //query selectors - this section is done using mainly JavaScript code, jQuery selectors  used for styling
    const projectNameForm = document.getElementById('create-project-form');
    const projectName = document.getElementById('accept-project');
    const projectNameDisplay = document.getElementById('project-name-display');
    const projectCreateButton = document.getElementById('create-project-button');
    const projectResetButton = document.getElementById('projectReset');
    const projectNameInput = document.getElementById('projectName');
    const saveProjectButton = document.getElementById('save-project');
    const nameNotOkPrompt = document.getElementById('nameOk');

    let savedProject = localStorage.getItem('project');
    let getProject;

    //project creator gets the name input and creates a <p> element to display the name
    // for this constructor I used the code example from https://www.taniarascia.com/how-to-use-local-storage-with-javascript/
    const projectCreator = (text) => {
        const pName = document.createElement('p');
        pName.textContent = text
        projectNameDisplay.appendChild(pName);
    };

    // clicking 'enter' submits the name value and the name form is hidden from view

    projectCreateButton.addEventListener('click', (e) => {
        e.preventDefault();

        projectCreator(projectNameInput.value);
        if (projectNameInput.value === null || projectNameInput.value == "") {
            noNamePrompt();
        } else {
            if (projectNameForm.style.display === "none") {
                projectNameForm.style.display = "flex";

            } else {
                projectNameForm.style.display = "none";
                projectName.style.display = "flex";
            }
            addProjectButtonListener();
        }
    });


    // the name value is displayed with a cancel button. On click,,
    //the <p> element displaying the name removed, name form displayed and the name form field is emptied.
    projectResetButton.addEventListener('click', (e) => {
        e.preventDefault();

        while (projectNameDisplay.firstChild) {
            projectNameDisplay.removeChild(projectNameDisplay.firstChild)
        }
        if (projectName.style.display === "flex") {
            projectName.style.display = "none";
            projectNameForm.style.display = "flex";
        };

        saveProjectButton.removeEventListener('click', saveProjectToLocal);
        $("#toTasks").removeAttr("href");
        $("#save-project").css({
            "background-color": "rgb(5, 199, 5, .5",
            "border-color": "var(--clr-green)"
        });

        projectNameInput.value = ''
    });

    function addProjectButtonListener() {

        saveProjectButton.addEventListener('click', saveProjectToLocal);
        $("#toTasks").attr("href", "tasks.html", "target", "_blank");
        $("#save-project").css({
            "background-color": "var(--clr-green)",
            "border-color": "var(--clr-green)"
        });

    };

    function noNamePrompt() {
        $("#noNamePrompt").css({
            "display": "block"
        });
        $(".fa-hourglass").css({
            "color": "rgba(94, 1, 94, 0.3)"
        });
        nameNotOkPrompt.addEventListener('click', function () {
            $("#noNamePrompt").css({
                "display": "none"
            });
            nameNotOkPrompt.addEventListener('click', (this));
            $(".fa-hourglass").css({
                "color": "rgba(94, 1, 94, 0.6)"
            });
        });

    };

    function saveProjectToLocal() {
        savedProject = projectNameInput.value;
        localStorage.setItem('project', savedProject);
    };

















});