import {allProjects, allTodos, Todo, Project, addTodoToProject, delTodoFromProject,
    delTodo, viewAllInProject, viewTodo} from './logic';
import './style.css';


function viewTodosInProject(projectTitle){
    //clear dom tree in todo area 
    let allTodos = document.querySelectorAll('[data-todo=todo]');
    allTodos.forEach(hideTodos);
    //clear dom tree in todo detail area for good measure
    let allTodoDetails = document.querySelectorAll('[id=tododetail]');
    allTodoDetails.forEach(hideTodos);
    //display the todos in each project
    let relevantTodos = document.querySelectorAll(`[data-project=${CSS.escape(projectTitle)}]`);
    relevantTodos.forEach(revealTodos);
}

let currentFocusedTodoDetail = "";

// function editTodo{

    //THIS IS A COPY OF THE 
    //todoItem.setAttribute("id","todoitem" + title);


//     console.log("edit")

// }

function deleteTodo(){

    //remove from detail area
    let allTodoDetails = document.querySelectorAll('[id=tododetail]');
    allTodoDetails.forEach(hideTodos);

    //delete from the todo DOM
    currentFocusedTodoDetail.parentNode.removeChild(currentFocusedTodoDetail);

    const currentProjectTitle = currentFocusedTodoDetail.getAttribute("data-project");
    const currentTodoTitle = currentFocusedTodoDetail.getAttribute("data-todoDetailTitle");
    //retrieve the todo from logic.js


    let numberOfTodos = 0;
        //retrieve project from logic.js 
    for (const project of allProjects) {
        if (currentProjectTitle == project.title){
        
            // Find the index of the todo to remove
            let indexToRemove = project.todolist.findIndex(obj => obj.todo === currentTodoTitle);

            // Remove the todo using the splice method
            if (indexToRemove == -1) {
                project.todolist.splice(indexToRemove, 1);
            }
            //grab the new length 
            console.log("project title" + project.title);
            numberOfTodos = project.todolist.length;
            console.log(numberOfTodos);
        }
    }   

    

    //replace project textnode to reflect updated number of todos therein

    let relevantProjectInFocus = document.getElementById("projectitem" + currentProjectTitle);
    relevantProjectInFocus.textContent = (currentProjectTitle + " " + numberOfTodos + " items");    

    
}

function hideTodos(todo){
    todo.style.display = "none";
}

function revealTodos(todo){
    todo.style.display = "block";
}

function clearDom(domtoclear){
    if (domtoclear){
        domtoclear.parentNode.removeChild(domtoclear);
    }
}

function viewTodoDetails(Todo){

    //hide all previous todo details

    let allTodoDetails = document.querySelectorAll('[id=tododetail]');
    allTodoDetails.forEach(hideTodos);

    let detailArea = document.getElementById("det");
    
    let todoDetail = document.createElement("DIV");
    detailArea.appendChild(todoDetail);

    //this will set up the css to accept linebreaks
    todoDetail.setAttribute('style', 'white-space: pre;');

    //declare empty array that will get a copy from logic.js
    let todoTextFields = [];

    //retrieve the todo from logic.js
    for (const todo of allTodos) {
        if (todo.title == Todo){
            todoTextFields = todo;
        }
    }   

    let todoDetailTitle = document.createTextNode(todoTextFields.title + "\r\n");
    todoDetail.appendChild(todoDetailTitle);

    let todoDetailDescription = document.createTextNode(todoTextFields.description + "\r\n");
    todoDetail.appendChild(todoDetailDescription);

    let todoDetailDuedate = document.createTextNode(todoTextFields.dueDate + "\r\n");
    todoDetail.appendChild(todoDetailDuedate);

    let todoDetailPriority = document.createTextNode(todoTextFields.priority + "\r\n");
    todoDetail.appendChild(todoDetailPriority);

    let todoDetailNotes = document.createTextNode(todoTextFields.notes + "\r\n");
    todoDetail.appendChild(todoDetailNotes);

    let todoDetailStatus = document.createTextNode(todoTextFields.status + "\r\n");
    todoDetail.appendChild(todoDetailStatus);


    todoDetail.setAttribute("id", "tododetail");
    todoDetail.setAttribute("data-todotitle", todoDetailTitle);

    currentFocusedTodoDetail = document.getElementById("todoitem" + todoTextFields.title);

    console.log(currentFocusedTodoDetail);
}

function addProToDom(title, description){
    let projectItem = document.createElement("BUTTON");

    let sidebarElement = document.getElementById("side");
    sidebarElement.appendChild(projectItem);

    let projectItemText = document.createTextNode(title + " " + "0 items");
    projectItem.setAttribute("for", "project");
    projectItem.appendChild(projectItemText);
    projectItem.classList.add("project");

    // console.log(title.length);

    projectItem.setAttribute("width", title.length + 'ch');
    projectItem.setAttribute("overflow", "hidden");
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

    todoItem.setAttribute("data-todo", "todo");
    todoItem.setAttribute("data-project", project);
    todoItem.setAttribute("id","todoitem" + title);

    let revealtodobtn = document.getElementById("todoitem" + title);
    revealtodobtn.addEventListener('click', function(){viewTodoDetails(title)});

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

    let cancelbtn = document.createElement("cancel")
    let cancelbtntext = document.createTextNode("x");
    cancelbtn.classList.add("cancel");
    cancelbtn.setAttribute("for", "cancel");
    cancelbtn.appendChild(cancelbtntext);
    projectbox.appendChild(cancelbtn);

    cancelbtn.addEventListener("click", () => {
        projectbox.parentNode.removeChild(projectbox);
    });
    
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
        addProToDom(titlefield.value, descriptionfield.value, 0);
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

    let cancelbtn = document.createElement("cancel")
    let cancelbtntext = document.createTextNode("x");
    cancelbtn.classList.add("cancel");
    cancelbtn.setAttribute("for", "cancel");
    cancelbtn.appendChild(cancelbtntext);
    todobox.appendChild(cancelbtn);

    cancelbtn.addEventListener("click", () => {
        todobox.parentNode.removeChild(todobox);
    });
    
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

    //change this to dropdown box with high/med/low
    let prioritylabel = document.createElement("LABEL");
    let prioritylabeltext = document.createTextNode("priority");
    prioritylabel.classList.add('labels');
    prioritylabel.setAttribute("for", "priority");
    prioritylabel.appendChild(prioritylabeltext);
    todobox.appendChild(prioritylabel);

    let priorityselection = document.createElement("SELECT");
    priorityselection.setAttribute("id","priorityselection");
    let priorityselectiontext = document.createTextNode("PRIORITY");
    priorityselection.appendChild(priorityselectiontext);
    todobox.appendChild(priorityselection);

    //dropdown box to select project

    const optionarray1 = ['low priority', 'Med Priority', 'HIGH PRIORITY'];

    for (const priority of optionarray1) {
        let priorityOption = document.createElement("option");
        let priorityOptionText = document.createTextNode(priority);
        priorityOption.appendChild(priorityOptionText);
        priorityselection.appendChild(priorityOption);
      }

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

    for (const project of allProjects) {
        let option = document.createElement("option");
        let optionText = document.createTextNode(project.title);
        option.appendChild(optionText);
        projectselectorbtn.appendChild(option);
      }
      
    let submittodobtn = document.createElement("BUTTON");
    let submittodobtntext = document.createTextNode("submit todo");

    submittodobtn.appendChild(submittodobtntext);
    todobox.appendChild(submittodobtn); 

    submittodobtn.addEventListener("click", () => {

        let projectselection = document.querySelector('#projectselection');
        let priorityselection = document.querySelector('#priorityselection');
        
        //create new todo
        let newtodo = new Todo(titlefield.value, descriptionfield.value, duedatefield.value, priorityselection.value, notesfield.value, statusfield.value, projectselection.value);
        //add todo to allTodos
        allTodos.push(newtodo);
        
        let numberOfTodos;
        //retrieve project from logic.js and add new todo
        for (const project of allProjects) {
            if (projectselection.value == project.title){
                project.todolist.push(newtodo);
                //grab the length for the next part
                numberOfTodos = project.todolist.length;
            }
        }   

        // console.log(allTodos);
        todobox.parentNode.removeChild(todobox);
        addTodoToDom(titlefield.value, duedatefield.value, statusfield.value, projectselection.value);

        //replace project textnode to reflect updated number of todos therein

         let relevantProject = document.getElementById("projectitem" + projectselection.value);
         relevantProject.textContent = (projectselection.value + " " + numberOfTodos + " items");
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
let edittodobtn = document.getElementById("edittodobutton");
edittodobtn.addEventListener('click', function(){editTodo()});
let deletetodobutton = document.getElementById("deletetodobutton");
deletetodobutton.addEventListener('click', function(){deleteTodo()});