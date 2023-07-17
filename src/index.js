import {Todo, Project, addTodoToProject, delTodoFromProject,
    delTodo, viewAllInProject, viewTodo} from './logic';

//todo app
//begin with one collection of all projects
//have buttons for add project, add todo
//for add todo, include fields -
//"title, description, dueDate, priority, and notes"
//need options for-
//1. view all projects
//2. view all todos in each project
//3. expand a single todo to see/edit its details
//4. delete a todo
//make console version with just data structures first 
//and then create DOM manip


const todo1 = new Todo("wash dog", "give otto a bath", "tomorrow", "high priority", "not fun", "done");
const todo2 = new Todo();

todo2.title = "spud";

const project1 = new Project("dogstuff", "stuff dealing with dogs");

addTodoToProject(project1, todo1);

viewAllInProject(project1);
delTodoFromProject(project1, todo1);

viewAllInProject(project1);

viewTodo(todo1);
