import {allProjects, allTodos, Todo, Project, addTodoToProject, delTodoFromProject,
    delTodo, viewAllInProject, viewTodo} from './logic';
import './style.css';

// function declareTodoBox(){
//     let todobox = document.createElement("p");
//         todobox.classList.add('form');
//         todobox.id = 'hideme';
//         return todobox;
//     }

// function declareProjectBox(){
//     let projectbox = document.createElement("p");
//         projectbox.classList.add('form');
//         projectbox.id = 'hideme';
//         return projectbox;
//     }



function viewTodosInProject(projectTitle){
    //clear dom tree in todo area 
    let allTodos = document.querySelectorAll('[id=todo]');
    allTodos.forEach(hideTodos);

    let relevantTodos = document.querySelectorAll(`[data-project=${CSS.escape(projectTitle)}]`);
    // console.log(relevantTodos);
    relevantTodos.forEach(revealTodos);

    // for (const todo of relevantTodos){
    //     // console.log("piss");
    //     todo.style.display = "block";
    // }
    // //call addTodoToDom for each Todo within project
    // for (const project of allProjects){
    //     if (projectTitle == project.title){

    //         project.todolist.style.display = "block"
    //     }
    //     // addTodoToDom(tds.title);
    // }  

    

}

function hideTodos(todo){
    todo.style.display = "none";
}

function revealTodos(todo){
    console.log("piss");
    todo.style.display = "block";
}

function clearDom(domtoclear){
    if (domtoclear){
        domtoclear.parentNode.removeChild(domtoclear);
    }
}

function viewTodoDetails(Todo){
    //clear dom tree for todo detail area
    //show all elements of todo

}

function addProToDom(title){
    let projectItem = document.createElement("BUTTON");

    let sidebarElement = document.getElementById("side");
    sidebarElement.appendChild(projectItem);

    let projectItemText = document.createTextNode(title);
    projectItem.setAttribute("for", "project");
    projectItem.appendChild(projectItemText);

    // let newprobtn = document.getElementById("newprojectbutton");
    // newprobtn.addEventListener('click', function(){showNewProjectForm()});
    
    projectItem.setAttribute("id","projectitem" + title);

    let revealprojectbtn = document.getElementById("projectitem" + title);
    revealprojectbtn.addEventListener('click', function(){viewTodosInProject(title)});
    
}

function addTodoToDom(title, duedate, status, project){

    let todoItem = document.createElement("BUTTON");

    let contentElement = document.getElementById("cont");
    contentElement.appendChild(todoItem);

    let todoItemText = document.createTextNode(title + " " + duedate + " " +  status);
    todoItem.setAttribute("for", "todo");
    todoItem.appendChild(todoItemText);

    todoItem.setAttribute("id", "todo");
    todoItem.setAttribute("data-project", project);

}


function showNewProjectForm(){

    //clear out any errant dom
    let toclear = document.getElementById("hideme");
    clearDom(toclear);

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

    let submitprobtn = document.createElement("BUTTON");
    let submitprobtntext = document.createTextNode("submit project");

    submitprobtn.appendChild(submitprobtntext);
    projectbox.appendChild(submitprobtn);

    submitprobtn.addEventListener("click", () => {
        let newproject = new Project(titlefield.value, descriptionfield.value);
        allProjects.push(newproject);
        console.log(allProjects);
        projectbox.parentNode.removeChild(projectbox);
        addProToDom(titlefield.value);
    });
         
}

function showNewTodoForm(){

    //clear out any errant dom
    let toclear = document.getElementById("hideme");
    clearDom(toclear);

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

    //need dropdown menu for which project it belongs to

    let projectselectorlabel = document.createElement("LABEL");
    let projectselectorlabeltext = document.createTextNode("project");
    projectselectorlabel.classList.add('labels');
    projectselectorlabel.setAttribute("for", "status");
    projectselectorlabel.appendChild(projectselectorlabeltext);
    todobox.appendChild(projectselectorlabel);

    let projectselectorbtn = document.createElement("SELECT");
    projectselectorbtn.setAttribute("id","projectselection");
    let projectselectorbtntext = document.createTextNode("PROJECT");
    projectselectorbtn.appendChild(projectselectorbtntext);
    todobox.appendChild(projectselectorbtn);

    //dropdown box to select project
    // let selectedproject;

    for (const project of allProjects) {
        let option = document.createElement("option");
        let optionText = document.createTextNode(project.title);
        option.appendChild(optionText);
        projectselectorbtn.appendChild(option);
        // selectedproject = project;
      }
      
    let submittodobtn = document.createElement("BUTTON");
    let submittodobtntext = document.createTextNode("submit todo");

    submittodobtn.appendChild(submittodobtntext);
    todobox.appendChild(submittodobtn);

    submittodobtn.addEventListener("click", () => {

        let projectselection = document.querySelector('#projectselection');
        //create new todo
        let newtodo = new Todo(titlefield.value, descriptionfield.value, duedatefield.value, priorityfield.value, notesfield.value, statusfield.value, projectselection.value);
        //add todo to allTodos
        allTodos.push(newtodo);
        //add todo to appropriate project
        for (const project of allProjects) {
            if (projectselection == project.title){
                project.todolist.push(newtodo);
            }
        }    
        // selectedproject.todolist.push(newtodo);
        console.log(allTodos);
        todobox.parentNode.removeChild(todobox);
        addTodoToDom(titlefield.value, duedatefield.value, statusfield.value, projectselection.value);
        
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
