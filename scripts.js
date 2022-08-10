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

renderListItems(arrayTasks);
