import {config, req, str, arrayOfObject, createFieldsOptions, fieldsToShow, dragAndDropFields, activeClearButton} from "./default-configuration.js";
import {getStartDateFromPicker, getEndDateFromPicker} from "./litePicker.js";
import {createArrowUp, createArrowDown, deleteArrow} from "./create-arrow.js";

const orderArrayOfObject = (arrayOfObject, orderArray) => {
  const objectOrder = (object, array) => {
    let newObject = {};
    for (let i = 0; i < array.length; i++) {
      if (object.hasOwnProperty(array[i])) {
        newObject[array[i]] = object[array[i]];
      }
    }
    return newObject;
  }

  let newArray = [];

  const startDate = getStartDateFromPicker();
  const endDate = getEndDateFromPicker();

  arrayOfObject.forEach((element) => {
    const addDate = new Date(Date.parse(element.addToDataBase));

    if (addDate <= endDate && addDate >= startDate) {
      newArray.push(objectOrder(element, orderArray))
    }
  })

  newArray = newArray.sort((a, b) => {
    const nameA = a[`${config.fieldName}`];
    const nameB = b[`${config.fieldName}`];

    if (config.fieldName.includes("date")) {
      return new Date(Date.parse(nameA)) - new Date(Date.parse(nameB));
    } else {
      return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    }
  });

  if (config.fieldSortValue === "asc") {
    return newArray;
  } else {
    return newArray.reverse();
  }
}

const itemsPerPage = () => {
  const limit = document.getElementById("limit");
  limit.value = config.itemsPerPage;
}
itemsPerPage();

const createTable = () => {
  const tableContainer = document.querySelector(".overview-data__rows");

  tableContainer.innerHTML = "";

  const table = document.createElement("table");
  tableContainer.append(table);

  const thead = document.createElement("thead");
  table.append(thead);

  const tbody = document.createElement("tbody");
  table.append(tbody);
}
createTable()

const completeTableHead = (arrayOfObject) => {
  const tableHead = document.querySelector("thead");

  tableHead.innerHTML = "";

  const headRow = document.createElement("tr");
  tableHead.append(headRow);

  for (const key in arrayOfObject[0]) {
    if (config.fields.includes(key) && key !== "addToDataBase") {
      const headCell = document.createElement("th");
      headRow.append(headCell);

      let name;

      if (key === "IDNP") {
        name = key;
      } else {
        name = `${key.charAt(0).toUpperCase()}${key.slice(1).replace(/[A-Z]/g, m => " " + m.toLowerCase())}`;
      }

      headCell.innerText = name;
      headCell.setAttribute("data-column-name", `${key}`);
    }
  }
}

const completeTableBody = (arrayOfObject) => {
  const tableBody = document.querySelector("tbody");

  const limit = document.getElementById("limit").value;
  const currentPageSelect = document.getElementById("current-page");

  tableBody.innerHTML = "";

  let firstRow;
  let lastRow;

  if (!currentPageSelect.value) {
    firstRow = 0
    lastRow = limit
  } else {
    lastRow = Number(currentPageSelect.value) * Number(limit);
    firstRow = lastRow - Number(limit);
  }

  arrayOfObject.slice(firstRow, lastRow).forEach((object) => {
    const bodyRow = document.createElement("tr");

    tableBody.append(bodyRow);

    for (const objectElement in object) {
      if (config.fields.includes(objectElement) && objectElement !== "addToDataBase") {
        const bodyCell = document.createElement("th");
        bodyRow.append(bodyCell);
        bodyCell.innerText = object[objectElement];
      }
    }
  })
}

const pageNumber = (arrayOfObject) => {
  const currentPage = document.getElementById("current-page");
  const limit = document.getElementById("limit").value;

  const pages = Math.ceil(arrayOfObject.length / limit);

  currentPage.innerHTML = "";

  for (let i = 1; i <= pages; i++) {
    const option = document.createElement("option");
    currentPage.append(option);
    option.innerHTML = ` ${i}`;
    option.setAttribute("value", `${i}`);
  }
}

const showCurrentPage = (ev, arrayOfObject) => {
  let page = document.getElementById("current-page");
  const limit = document.getElementById("limit").value;

  if (ev.target.closest("#next-page")) {
    page.value = ++page.value;
  }
  if (ev.target.closest("#previous-page")) {
    page.value = --page.value;
  }

  if (ev.target.closest("#first-page")) {
    page.value = 1;
  }
  if (ev.target.closest("#last-page")) {
    page.value = Math.ceil(arrayOfObject.length / limit);
  }
}

const paginationDisable = (arrayOfObject) => {
  const firstPageButton = document.getElementById("first-page");
  const previousPageButton = document.getElementById("previous-page");
  const nextPageButton = document.getElementById("next-page");
  const lastPageButton = document.getElementById("last-page");
  const currentPage = document.getElementById("current-page").value;
  const limit = document.getElementById("limit").value;

  if (Number(currentPage) <= 1) {
    firstPageButton.disabled = true;
    previousPageButton.disabled = true;
  } else {
    firstPageButton.disabled = false;
    previousPageButton.disabled = false;
  }

  if (Number(currentPage) === Math.ceil(arrayOfObject.length / limit)) {
    nextPageButton.disabled = true;
    lastPageButton.disabled = true;
  } else {
    nextPageButton.disabled = false;
    lastPageButton.disabled = false;
  }
}

const fiend = (arrayOfObject) => {
  const search = document.getElementById("search")

  if (search.value === "") {
    completeTableBody(arrayOfObject);
  }

  const searchArray = arrayOfObject.filter((element) => {
    const str = element[config.fieldName];

    if (parseFloat(str) && str.includes((search.value))) {
      return element;
    }
    if (str.toLowerCase().includes((search.value).toLowerCase())) {
      return element;
    }
  })

  activeClearButton();
  pageNumber(searchArray);
  paginationDisable(searchArray);
  completeTableBody(searchArray);
}

const clearInput = (searchArray) => {
  const input = document.querySelector("#search");
  const clearButton = document.querySelector("#clear-button");

  input.value = "";
  clearButton.classList.remove("active");

  completeTableBody(searchArray);
}

const setFilterOrder = () => {
  const tableHeadCell = document.querySelectorAll("thead tr th");

  tableHeadCell.forEach((element) => {
    element.setAttribute("data-filter-order", "descend");
  })
}

const sortBy = (event, searchArray) => {
  let sortItem = event.target.dataset.columnName;
  const tableHeadCell = document.querySelectorAll("thead tr th");

  tableHeadCell.forEach(element => {deleteArrow(element)});

  if (event.target.dataset.filterOrder === "descend") {
    tableHeadCell.forEach(element => {element.setAttribute("data-filter-order", "descend")});
    createArrowDown(event.target)
    event.target.setAttribute("data-filter-order", "ascend");
  } else {
    event.target.setAttribute("data-filter-order", "descend");
    createArrowUp(event.target)

  }

  const sortedArrayBy = searchArray.sort((a, b) => {
    const nameA = a[`${sortItem}`];
    const nameB = b[`${sortItem}`];

    if (sortItem.includes("date")) {
      return new Date(Date.parse(nameA)) - new Date(Date.parse(nameB));
    } else {
      return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    }
  });

  if (event.target.dataset.filterOrder === "ascend") {
    completeTableBody(sortedArrayBy);
  } else {
    completeTableBody(sortedArrayBy.reverse());
  }
}

const fieldsInput = document.querySelector(".configuration__field-to-show");
const addFields = (event) => {
  if (event.target.closest("label") && event.target.checked) {
    config.fields.push(event.target.dataset.name);
    dragAndDropFields()
  } else if (event.target.closest("label")) {
    config.fields.splice(config.fields.indexOf(event.target.dataset.name), 1);
    dragAndDropFields()
  }
}
fieldsInput.addEventListener("click", addFields);

const cancelChange = (arrayOfObject) => {
  addFields(event)
  createFieldsOptions(arrayOfObject)
  fieldsToShow(arrayOfObject)
  dragAndDropFields()
}

const createConfiguration = (arr) => {
  let fieldsOrder = [];
  const spans = document.querySelectorAll(".field-drag-and-drop span");
  spans.forEach((element) => {
    fieldsOrder.push(element.dataset.name);
  })

  const limit = document.getElementById("configuration-limit__select").value;
  const fieldName = document.getElementById("field-name").value;
  const sortingType = document.getElementById("sorting-type").value;

  config.fields = fieldsOrder;
  config.fieldName = fieldName;
  config.itemsPerPage = limit;
  config.fieldSortValue = sortingType;

  localStorage.setItem(`localStore${str}Config`, JSON.stringify(config));

  arr = orderArrayOfObject(arrayOfObject, config.fields);



  itemsPerPage();
  pageNumber(arr)
  completeTableHead(arr);
  completeTableBody(arr);
  paginationDisable(arr)
}

let pickerDate;

const delegateFunction = () => {
  let array = orderArrayOfObject(arrayOfObject, config.fields);
  completeTableHead(array)
  completeTableBody(array)
  pageNumber(array)
  paginationDisable(array)
  setFilterOrder()

  pickerDate = () => {
    array = orderArrayOfObject(arrayOfObject, config.fields)
    pageNumber(array)
    paginationDisable(array)
    completeTableBody(array)
  }

  const pagination = document.querySelector(".pagination");
  pagination.addEventListener("click", (event) => {
    showCurrentPage(event, array)
    paginationDisable(array)
    completeTableBody(array)
  });

  const search = document.getElementById("search");
  search.addEventListener("keyup", () => {
    fiend(array);
  })

  const clearButton = document.querySelector("#clear-button");
  clearButton.addEventListener("click", () => {
    clearInput(array);
  })

  const tableHead = document.querySelector("thead");
  tableHead.addEventListener("click", () => {
    sortBy(event, array);
  });

  const limit = document.querySelector("#limit");
  limit.addEventListener("change", () => {
    pageNumber(array);
    completeTableBody(array);
    paginationDisable(array)
  })

  const cancelButton = document.getElementById("cancel");
  cancelButton.addEventListener("click", () => {
    cancelChange(arrayOfObject)
  });

  const saveButton = document.getElementById("save");
  saveButton.addEventListener("click", () => {
    createConfiguration(arrayOfObject)
  })
}

req.addEventListener("load", delegateFunction)

export {pickerDate}