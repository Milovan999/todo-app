"use strict";

const inputTaskField = document.getElementById("inputTask");
const addBtn = document.getElementById("addBtn");
const listTask = document.querySelector(".list-task");

const addTask = () => {
  if (
    inputTaskField.value === "" ||
    inputTaskField.value == undefined ||
    inputTaskField.value === null
  ) {
    alert("Field is empty, please fill!");
    return false;
  } else {
    const task = document.createElement("div");
    task.className = "task";

    const taskTitle = document.createElement("h3");
    taskTitle.innerHTML = `${inputTaskField.value}`;
    taskTitle.className = "task-title";

    const editBtn = document.createElement("button");
    editBtn.innerHTML = "EDIT";
    editBtn.className = "edit-task-btn";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "DELETE";
    deleteBtn.className = "delete-task-btn";

    listTask.appendChild(task);
    task.appendChild(taskTitle);
    task.appendChild(editBtn);
    task.appendChild(deleteBtn);

    inputTaskField.value = "";

    editBtn.addEventListener("click", () => {
      taskTitle.contentEditable = true;

      const doneBtn = document.createElement("button");
      doneBtn.innerHTML = "DONE";
      doneBtn.className = "done-btn";

      task.appendChild(doneBtn);

      doneBtn.addEventListener("click", () => {
        taskTitle.contentEditable = false;
        doneBtn.style.display = "none";
      });
    });
    deleteBtn.addEventListener("click", function () {
      task.remove();
    });
  }
};

addBtn.addEventListener("click", addTask);
