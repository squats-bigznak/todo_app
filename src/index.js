import {allProjects, allTodos, Todo, Project, addTodoToProject, delTodoFromProject,
    delTodo, viewAllInProject, viewTodo} from './logic';
import './style.css';

function showNewProjectForm(){

    let projectbox = document.createElement("p");
    projectbox.classList.add('form');
    projectbox.id = 'hideme';

    let frame = document.getElementById("newcont");
    frame.appendChild(projectbox);
    
    let titlelabel = document.createElement("LABEL");
    let titlelabeltext = document.createTextNode("title");
    titlelabel.classList.add('labels');
    titlelabel.setAttribute("for", "title");
    titlelabel.appendChild(titlelabeltext);

    let titlefield = document.createElement("TEXTAREA");
    titlefield.setAttribute("type", "text");
    titlefield.classList.add('fields');
    projectbox.appendChild(titlelabel);
    projectbox.appendChild(titlefield);

    let descriptionlabel = document.createElement("LABEL");
    let descriptionlabeltext = document.createTextNode("description");
    descriptionlabel.classList.add('labels');
    descriptionlabel.setAttribute("for", "description");
    descriptionlabel.appendChild(descriptionlabeltext);

    let descriptionfield = document.createElement("TEXTAREA");
    descriptionfield.setAttribute("type", "text");
    descriptionfield.classList.add('fields');
    projectbox.appendChild(descriptionlabel);
    projectbox.appendChild(descriptionfield);

    let submitbtn = document.createElement("BUTTON");
    let submitbtntext = document.createTextNode("submit");

    submitbtn.appendChild(submitbtntext);
    projectbox.appendChild(submitbtn);

    submitbtn.addEventListener("click", () => {
        let newproject = new Project(titlefield.value, descriptionfield.value);
        allProjects.push(newproject);
        console.log(allProjects);
        projectbox.parentNode.removeChild(projectbox);
        
    });
         
}

function showNewTodoForm(){

    // (title, description, dueDate, priority, notes, status)
    let todobox = document.createElement("p");
    todobox.classList.add('form');
    todobox.id = 'hideme';

    let frame = document.getElementById("newcont");
    frame.appendChild(todobox);
    
    let titlelabel = document.createElement("LABEL");
    let titlelabeltext = document.createTextNode("title");
    titlelabel.classList.add('labels');
    titlelabel.setAttribute("for", "title");
    titlelabel.appendChild(titlelabeltext);

    let titlefield = document.createElement("TEXTAREA");
    titlefield.setAttribute("type", "text");
    titlefield.classList.add('fields');
    todobox.appendChild(titlelabel);
    todobox.appendChild(titlefield);

    let descriptionlabel = document.createElement("LABEL");
    let descriptionlabeltext = document.createTextNode("description");
    descriptionlabel.classList.add('labels');
    descriptionlabel.setAttribute("for", "description");
    descriptionlabel.appendChild(descriptionlabeltext);

    let descriptionfield = document.createElement("TEXTAREA");
    descriptionfield.setAttribute("type", "text");
    descriptionfield.classList.add('fields');
    todobox.appendChild(descriptionlabel);
    todobox.appendChild(descriptionfield);

    let duedatelabel = document.createElement("LABEL");
    let duedatelabeltext = document.createTextNode("duedate");
    duedatelabel.classList.add('labels');
    duedatelabel.setAttribute("for", "duedate");
    duedatelabel.appendChild(duedatelabeltext);

    let duedatefield = document.createElement("TEXTAREA");
    duedatefield.setAttribute("type", "text");
    duedatefield.classList.add('fields');
    todobox.appendChild(duedatelabel);
    todobox.appendChild(duedatefield);

    let prioritylabel = document.createElement("LABEL");
    let prioritylabeltext = document.createTextNode("priority");
    prioritylabel.classList.add('labels');
    prioritylabel.setAttribute("for", "priority");
    prioritylabel.appendChild(prioritylabeltext);

    let priorityfield = document.createElement("TEXTAREA");
    priorityfield.setAttribute("type", "text");
    priorityfield.classList.add('fields');
    todobox.appendChild(prioritylabel);
    todobox.appendChild(priorityfield);

    let noteslabel = document.createElement("LABEL");
    let noteslabeltext = document.createTextNode("notes");
    noteslabel.classList.add('labels');
    noteslabel.setAttribute("for", "notes");
    noteslabel.appendChild(noteslabeltext);

    let notesfield = document.createElement("TEXTAREA");
    notesfield.setAttribute("type", "text");
    notesfield.classList.add('fields');
    todobox.appendChild(noteslabel);
    todobox.appendChild(notesfield);

    let statuslabel = document.createElement("LABEL");
    let statuslabeltext = document.createTextNode("status");
    statuslabel.classList.add('labels');
    statuslabel.setAttribute("for", "status");
    statuslabel.appendChild(statuslabeltext);

    let statusfield = document.createElement("TEXTAREA");
    statusfield.setAttribute("type", "text");
    statusfield.classList.add('fields');
    todobox.appendChild(statuslabel);
    todobox.appendChild(statusfield);

    let submitbtn = document.createElement("BUTTON");
    let submitbtntext = document.createTextNode("submit");

    submitbtn.appendChild(submitbtntext);
    todobox.appendChild(submitbtn);

    submitbtn.addEventListener("click", () => {
        let newtodo = new Todo(titlefield.value, descriptionfield.value, duedatefield.value, priorityfield.value, notesfield.value, statusfield.value);
        allTodos.push(newtodo);
        console.log(allTodos);
        todobox.parentNode.removeChild(todobox);
        
    });

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