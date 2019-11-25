$(document).ready(function() {

/*Styles*/
// save project button
$("#save-project").css({"background-color": "rgb(5, 199, 5, .5", "border-color": "var(--clr-green)"})
$("#save-tasks").css({"background-color": "rgb(5, 199, 5, .5", "border-color": "var(--clr-green)"})

//index
//query selectors
const projectNameForm = document.getElementById('create-project-form')
const projectName = document.getElementById('accept-project')
const projectNameDisplay = document.getElementById('project-name-display')
const projectCreateButton = document.getElementById('create-project-button')
const projectResetButton = document.getElementById('projectReset')
const projectNameInput = document.getElementById('projectName')
const saveProjectButton = document.getElementById('save-project')

let savedProject = localStorage.getItem('project')
const getProject = localStorage.getItem('project');
 
//project creator gets the name input and creates a <p> element to display the name
const projectCreator = (text) => {
    const pName = document.createElement('p')
    pName.textContent = text
    projectNameDisplay.appendChild(pName)
}
 
// clicking 'enter' submits the name value and the name form is hidden from view
projectCreateButton.addEventListener('click', function (e) {
    e.preventDefault()
    projectCreator(projectNameInput.value)
    if(projectNameInput.value === null || projectNameInput.value == "") {
    alert ("Please give project a name");
    } else {
    if(projectNameForm.style.display === "none") {
        projectNameForm.style.display = "flex";
        
    } else {
        projectNameForm.style.display = "none";
        projectName.style.display = "flex";
    }

    saveProjectButton.addEventListener('click', saveProjectToLocal);
    $("#toTasks").attr("href", "tasks.html")
    $("#save-project").css({"background-color": "var(--clr-green)", "border-color": "var(--clr-green)"})
}
})
 
// the name value is displayed with a cancel button. On click,,
//the <p> element displaying the name removed, name form displayed and the name form field is emptied.
projectResetButton.addEventListener('click', function(e) {
    e.preventDefault()
    
    while (projectNameDisplay.firstChild) {
        projectNameDisplay.removeChild(projectNameDisplay.firstChild)
      }
    if(projectName.style.display === "flex") {
        projectName.style.display = "none";
        projectNameForm.style.display = "flex";
    }

    saveProjectButton.removeEventListener('click', saveProjectToLocal);
    $("#toTasks").removeAttr("href")
    $("#save-project").css({"background-color": "rgb(5, 199, 5, .5", "border-color": "var(--clr-green)"})

    projectNameInput.value = ''
})
 

function saveProjectToLocal() {
    savedProject = projectNameInput.value;
    localStorage.setItem('project', savedProject);
    
}














});
