$(document).ready(function () {

    

    /*Styles*/
    // save project button
    $("#save-project").css({
        "background-color": "rgb(5, 199, 5, .3",
        "border-style": "none",
        "box-shadow": "none"
    });

    $('#projectName').css({
        "font-size": "1.2rem",
        "font-weight": "200",
        "padding": "0 0 0 .5rem",
        "box-shadow": "none"
    });

    $('#projectReset').css({
        "background-color": "var(--clr-middle)",
        "border-style": "none"
    });

    $('#create-project-button').css({
        "background-color": "var(--clr-green)",
        "border-style": "none",
        "box-shadow": "none"
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

    let projectTitle;
    //project creator gets the name input and creates a <p> element to display the name
    // for this constructor I used the code example from https://www.taniarascia.com/how-to-use-local-storage-with-javascript/
    const projectCreator = (text) => {
        const pName = document.createElement('p');
        projectTitle = text;
        projectTitle = jQuery.trim(projectTitle);
        projectTitle = projectTitle.charAt(0).toUpperCase() + projectTitle.slice(1);
        pName.textContent = projectTitle;
        projectNameDisplay.appendChild(pName);
    };

    // clicking 'enter' submits the name value and the name form is hidden from view

    projectCreateButton.addEventListener('click', (e) => {
        e.preventDefault();
        projectCreator(projectNameInput.value);
        if (projectTitle === null || projectTitle == "" || projectTitle.length === 0 || projectTitle === 'undefined') {
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
            "cursor": "default",
            "background-color": "rgb(5, 199, 5, .5",
            "border-color": "var(--clr-green)"
        });

        projectNameInput.value = ''
    });

    function addProjectButtonListener() {

        saveProjectButton.addEventListener('click', saveProjectToLocal());
        $("#toTasks").attr("href", "tasks.html");
        $('#save-project').css({
            "cursor": "pointer",
            "background-color": "var(--clr-green)",
            "border-color": "rgb(30,126,52)"
        });

    };

    function noNamePrompt() {
        $("#noNamePrompt").css({
            "display": "block"
        });
        $(".fa-hourglass").css({
            "color": "rgba(94, 1, 94, 0.3)"
        });
        projectNameInput.disabled = true;
        $('#projectName').css({
            "color": "red",
            "border-style": "none",
            "border-color": "none",
            "background-color": "transparent"
        });
        $('body').css({
            "background-color": "transparent"
        })
        nameNotOkPrompt.addEventListener('click', function () {
            $("#noNamePrompt").css({
                "display": "none"
            });
            $('#projectName').css({
                "color": "rgb(33, 37, 41)",
                "border-style": "",
                "border-color": "",
                "background-color": ""
            });
            nameNotOkPrompt.addEventListener('click', (this));
            $(".fa-hourglass").css({
                "color": "rgba(94, 1, 94, 0.6)"
            });
            projectNameInput.disabled = false;
        });

    };

    function saveProjectToLocal() {
        localStorage.setItem('project', projectTitle);
        let project = localStorage.getItem('project');
        console.log(project);
    };

















});