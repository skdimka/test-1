const arrayTasks = [
  { text: "Отчет Игорьку по работе", done: false },
  { text: "НАЧАТЬ ПРОГАТЬ", done: true },
  { text: "Сделать кнопку", done: false },
  { text: "Сделать окно ввода задачи", done: false },
  { text: "Устроиться на клевую работу", done: false },
];

const renderListItems = (listItems) => {
  const listElem = document.querySelector(".list");

  const listItemsElems = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }

      // const addTask
      //const clearListElems = document.createElement("button");
      // clearListElems.classList.add("btn create-task-btn");

      const checkBoxElem = document.createElement("input");
      checkBoxElem.setAttribute("type", "checkbox");
      checkBoxElem.setAttribute("checked", done);
      checkBoxElem.checked = done;
      checkBoxElem.classList.add("list__item-checkbox");
      listItemElem.append(checkBoxElem, text);

      return listItemElem;
    });
  listElem.append(...listItemsElems);
};

let taskInput = document.querySelector(".task-input");
let errorInput = document.querySelector(".error-text");

////const mirrorErrorInput = (event) => {
// const errorText = event.target.value;
// errorInput.textContent = errorText;
// arrayTasks.push(errorText);
//};

const addTaskButton = document.querySelector(".btn");
const deskTaskInput = document.querySelector(".task-input");

function AddTaskInput(text) {
  this.text = text;
  this.done = false;
}

//const addTastArray = arrayTasks.push(new AddTaskInput(deskTaskInput.value));

addTaskButton.addEventListener("click", () => {
  arrayTasks.push(new AddTaskInput(deskTaskInput.value));
  renderListItems(arrayTasks.slice(-1));
});

//taskInput.addEventListener("input", mirrorErrorInput);

renderListItems(arrayTasks);
