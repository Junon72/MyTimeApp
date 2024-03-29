$(document).ready(function () {
        
    /*Styles*/
    // save project button
    $("#save-project").css({
        "background-color": "rgb(5, 199, 5, .3",
        "border-style": "none",
        "box-shadow": "none",
        "cursor": "default"
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
    

    // Selectors
    const projectNameForm = document.getElementById('create-project-form');
    const projectName = document.getElementById('accept-project');
    const projectNameDisplay = document.getElementById('project-name-display');
    const projectCreateButton = document.getElementById('create-project-button');
    const projectResetButton = document.getElementById('projectReset');
    const projectNameInput = document.getElementById('projectName');
    const saveProjectButton = document.getElementById('save-project');
    const nameNotOkPrompt = document.getElementById('nameOk');

    // Input validation
    let projectTitle = localStorage.getItem('project');
    if (projectTitle === null || projectTitle == "" || projectTitle.length === 0 || projectTitle === 'undefined') {
        console.log('There were no previously stored projects in local storage');
        projectCreator();
    } else {
        if (projectNameForm.style.display === "none") {
            projectNameForm.style.display = "flex";

        } else {
            projectNameForm.style.display = "none";
            projectName.style.display = "flex";
        }
        addProjectButtonListener();
        const pName = document.createElement('p');
        pName.textContent = projectTitle;
        projectNameDisplay.appendChild(pName);
    }

    //project creator gets the name input and creates a <p> element to display the name
    // for this constructor I used the code example from https://www.taniarascia.com/how-to-use-local-storage-with-javascript/
    function projectCreator(text) {
        const pName = document.createElement('p');
        projectTitle = text;
        projectTitle = jQuery.trim(projectTitle);
        projectTitle = projectTitle.charAt(0).toUpperCase() + projectTitle.slice(1);
        pName.textContent = projectTitle;
        projectNameDisplay.appendChild(pName);
    }

    // Pressing enter key or clicking 'enter' submits the name value and the name form is hidden from view
    projectCreateButton.addEventListener('click', (e) => {
        e.preventDefault();
        projectCreator(projectNameInput.value);
        if (projectTitle === null || projectTitle == "" || projectTitle.length === 0 || projectTitle === 'undefined') {
            console.log('Project name entry was not valid: name included no characters or was made up of whitespace');
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

    // Event listeners

    // the name value is displayed with a cancel button. On click,,
    //the <p> element displaying the name removed, name form displayed and the name form field is emptied.
    projectResetButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Project name input was reset');
        while (projectNameDisplay.firstChild) {
            projectNameDisplay.removeChild(projectNameDisplay.firstChild);
        }
        if (projectName.style.display === "flex") {
            projectName.style.display = "none";
            projectNameForm.style.display = "flex";
        }

        saveProjectButton.removeEventListener('submit', saveProjectToLocal);
        saveProjectButton.removeAttribute("href");
        $("#save-project").css({
            "cursor": "default",
            "background-color": "rgb(5, 199, 5, .5",
            "border-color": "var(--clr-green)"
        });

        projectNameInput.value = '';
    });

    function addProjectButtonListener() {

        saveProjectButton.addEventListener('submit', saveProjectToLocal());
        saveProjectButton.setAttribute("href", "tasks.html");
        $('#save-project').css({
            "cursor": "pointer",
            "background-color": "var(--clr-green)",
            "border-color": "rgb(30,126,52)"
        });
    }

    // Prompt
    function noNamePrompt() {
        console.log('Not valid input prompt activated');
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
        });
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
            console.log('Input field was activated');
        });
    }

    // Save the name to local storage
    function saveProjectToLocal() {
        localStorage.setItem('project', projectTitle);
        //let project = localStorage.getItem('project');
        console.log('Project was named ' + projectTitle);
    }
});