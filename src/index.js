import {Todo, Project, addTodoToProject, delTodoFromProject,
    delTodo, viewAllInProject, viewTodo} from './logic';
import './style.css';


const todo1 = new Todo("wash dog", "give otto a bath", "tomorrow", "high priority", "not fun", "done");
const todo2 = new Todo();

todo2.title = "spud";

const project1 = new Project("dogstuff", "stuff dealing with dogs");

addTodoToProject(project1, todo1);

viewAllInProject(project1);
delTodoFromProject(project1, todo1);

viewAllInProject(project1);

viewTodo(todo1);
