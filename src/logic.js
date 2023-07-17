// function logic(){

const Todo = function(title, description, dueDate, priority, notes, status) {   
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.status = status;
  };

const Project = function(title, description) {
    this.title = title;
    this.description = description;
    this.todolist = [];
};

function addTodoToProject(pro, td){
    pro.todolist.push(td);
    
};

function delTodoFromProject(pro, td){
    pro.todolist = pro.todolist.filter(todos => todos != td);
};

function delTodo(td){
    //this will just remove the object from view
}

function viewAllInProject(pro){
    console.log(pro.todolist);
};

function viewTodo(td){
    console.log(td);
};

// }

export { Todo, Project, addTodoToProject, delTodoFromProject,
    delTodo, viewAllInProject,viewTodo};