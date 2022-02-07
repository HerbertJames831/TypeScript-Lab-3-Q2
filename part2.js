//In this exercise you are required to create an array and then create functions to add, remove and display the items in this array.
//To complete this exercise you will need to do the following:
//(a) Create an array of strings
//(b) Create an addTask function:
//(i) It receives a string as a parameter called task
//(ii) It adds the task to the array
//(iii) It prints a message in the console indicating the insertion
//(iv) It returns the number of elements in the array after the insertion
//(c) Create a list AllTasks function:
//(i) It iterates over all the tasks in the array
//(ii)It prints each array item in the console
//(d) Create a deleteTask function
//(i) It receives a string as a parameter called task
//(ii) It removes that string from the array
//(iii) It prints in console a message indicating the deletion
//(iv) It returns the number of elements in the array after the insertion
var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("______________  New Task Added _____________");
    console.log("Task" + task + "inserted in the list ");
    return tasks.length;
}
function listallTasks() {
    console.log("START: All items in Array:");
    tasks.forEach(function (task) {
        console.log(task);
    });
    console.log("END: All items in Array:");
}
function deleteTask(task) {
    var index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("______________  Task Removed _____________");
        console.log("Task" + task + "removed from list");
    }
    return tasks.length;
}
var x = addTask('wake up');
console.log("number of items in list: " + x);
addTask('sleep');
listallTasks();
deleteTask('sleep');
