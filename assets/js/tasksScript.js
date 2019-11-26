$(document).ready(function setProject() {

/*Styles*/
// save project button
$("#save-project").css({"background-color": "rgb(5, 199, 5, .5", "border-color": "var(--clr-green)"})
$("#save-tasks").css({"background-color": "rgb(5, 199, 5, .5", "border-color": "var(--clr-green)"})

    var getProject = localStorage.getItem('project');
    $(".project-title").text(getProject)


});