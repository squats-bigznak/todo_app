import {allProjects, Todo, Project, addTodoToProject, delTodoFromProject,
    delTodo, viewAllInProject, viewTodo} from './logic';
import './style.css';

function showNewProjectForm(){

    let para = document.createElement("p");
    para.classList.add('form');
    para.id = 'hideme';

    let element = document.getElementById("newcont");
    element.appendChild(para);
    
    let titlelabel = document.createElement("LABEL");
    let titlelabeltext = document.createTextNode("title");
    titlelabel.setAttribute("for", "title");
    titlelabel.appendChild(titlelabeltext);

    let titlefield = document.createElement("INPUT");
    titlefield.setAttribute("type", "text");
    para.appendChild(titlelabel);
    para.appendChild(titlefield);

    let descriptionlabel = document.createElement("LABEL");
    let descriptionlabeltext = document.createTextNode("description");
    descriptionlabel.setAttribute("for", "description");
    descriptionlabel.appendChild(descriptionlabeltext);

    let descriptionfield = document.createElement("INPUT");
    descriptionfield.setAttribute("type", "text");
    para.appendChild(descriptionlabel);
    para.appendChild(descriptionfield);

    let submitbtn = document.createElement("BUTTON");
    let submitbtntext = document.createTextNode("submit");

    submitbtn.appendChild(submitbtntext);
    para.appendChild(submitbtn);

    submitbtn.addEventListener("click", () => {
        let newproject = new Project(titlefield.value, descriptionfield.value);
        allProjects.push(newproject);
        console.log(allProjects);
        para.parentNode.removeChild(para);
        
    });
         
}

function showNewTodoForm(){
    console.log("newtodo")

}



//tests

//create new todo
const todo1 = new Todo("wash dog", "give otto a bath", "tomorrow", "high priority", "not fun", "done");
const todo2 = new Todo();

//rewrite properties
todo2.title = "spud";

//create new project
const project1 = new Project("dogstuff", "stuff dealing with dogs");


addTodoToProject(project1, todo1);

viewAllInProject(project1);

delTodoFromProject(project1, todo1);

viewAllInProject(project1);

viewTodo(todo1);


let newprobtn = document.getElementById("newprojectbutton");
newprobtn.addEventListener('click', function(){showNewProjectForm()});
let newtodobtn = document.getElementById("newtodobutton");
newtodobtn.addEventListener('click', function(){showNewTodoForm()});