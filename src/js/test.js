// fetch("http://localhost:3000/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     arr = data
//   });

const url = "http://localhost:3000/users";
// let dataArray = [];
//
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//     dataArray.push(data);
//   });
//
// console.log(dataArray)

const getData = async () => {
  try {
    const response = await fetch(url);
    const content = await response.json();
    return content;
  }
  catch (error) {
    alert(error)
  }
}
//
// const render = async () => {
//   await console.log(getData())
// }
// render()


// function reqListener() {
//   console.log(JSON.parse(this.responseText));
// }
//
// const req = new XMLHttpRequest();
// req.addEventListener("load", reqListener);
// req.open("GET", url);
// req.send();

import {user, product} from "./generator.js";
import {dragAndDropFields, userConfig, productConfig} from "./default-configuration.js";
import {onClosePopup} from "./popup.js";
import {getStartDateFromPicker, getEndDateFromPicker} from "./litePicker.js";

const userDate = user();
const companyDate = product();

/*
const orderArrayOfObject = (arrayOfObject, orderArray) => {
  const objectOrder = (object, array) => {
    let newObject = {};
    for(let i = 0; i < array.length; i++) {
      if(object.hasOwnProperty(array[i])) {
        newObject[array[i]] = object[array[i]];
      }
    }
    return newObject;
  }

  let newArray = [];
  arrayOfObject.forEach((element) => {
    const addDate = new Date(Date.parse(element.addToDataBase));
    const startDate = getStartDateFromPicker();
    const endDate = getEndDateFromPicker();

    if (addDate <= endDate && addDate >= startDate) {
      newArray.push(objectOrder(element, orderArray))
    }
  })
  return newArray;
}
let userSortedArray = orderArrayOfObject(userDate, userConfig.fields);
let productSortedArray = orderArrayOfObject(companyDate, productConfig.fields);
 */

/*
const createTable  = (container, id) => {
  container.innerHTML = "";

  const table = document.createElement("table");
  container.append(table);

  const thead = document.createElement("thead");
  table.append(thead);
  thead.id = `${id}-table-head`;

  const tbody = document.createElement("tbody");
  table.append(tbody);
  tbody.id = `${id}-table-body`;
}

const userTableContainer = document.querySelector(".user-overview-data-rows");
if (userTableContainer) {
  createTable(userTableContainer, "user");
}
const productTableContainer = document.querySelector(".product-overview-data-rows");
if (productTableContainer) {
  createTable(productTableContainer, "product");
}
 */

/*
const itemsPerPage = (parent, config) => {
  parent.value = config.itemsPerPage;
}

const userLimit = document.querySelector(".user-limit");
if (userLimit) {
  itemsPerPage(userLimit, userConfig);
}
const productLimit = document.querySelector(".product-limit");
if (productLimit) {
  itemsPerPage(productLimit, productConfig);
}

const sortingType = (select, config) => {
  select.value = config.fieldSortValue
}

const userSortingTypeSelect = document.querySelector(".user-sorting-type");
if (userSortingTypeSelect) {
  sortingType(userSortingTypeSelect, userConfig)
}
const productSortingTypeSelect = document.querySelector(".product-sorting-type");
if (productSortingTypeSelect) {
  sortingType(productSortingTypeSelect, productConfig)
}
 */

/*
const completeTableHead = (array, config, parent) => {
  parent.innerHTML = "";

  const headRow = document.createElement("tr");
  parent.append(headRow);

  for (const key in array[0]) {
    if (config.fields.includes(key) && key !== "addToDataBase"){
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
const userTableHead = document.getElementById("user-table-head");
if (userTableHead) {
  completeTableHead(userSortedArray, userConfig, userTableHead);
}
const productTableHead = document.getElementById("product-table-head");
if (productTableHead) {
  completeTableHead(productSortedArray, productConfig, productTableHead);
}
 */

/*
const completeTableBody = (array, config, parent) => {
  const limit = document.getElementById("limit").value;
  const currentPageSelect = document.getElementById("current-page");

  parent.innerHTML = "";

  let firstRow;
  let lastRow;

  if (!currentPageSelect.value) {
    firstRow = 0
    lastRow = limit
  } else {
    lastRow = Number(currentPageSelect.value) * Number(limit);
    firstRow = lastRow - Number(limit);
  }

  array.slice(firstRow, lastRow).forEach((object) => {
    const bodyRow = document.createElement("tr");

    parent.append(bodyRow);

    for (const objectElement in object) {
      if (config.fields.includes(objectElement) && objectElement !== "addToDataBase") {
        const bodyCell = document.createElement("th");
        bodyRow.append(bodyCell);
        bodyCell.innerText = object[objectElement];
      }
    }
  })
}
const userTableBody = document.getElementById("user-table-body");
if (userTableBody) {
  completeTableBody(userSortedArray, userConfig, userTableBody);
}
const productTableBody = document.getElementById("product-table-body");
if (productTableBody) {
  completeTableBody(productSortedArray, productConfig, productTableBody);
}
 */

// const setFilterOrder = () => {
//   const tableHeadCell = document.querySelectorAll("thead tr th");
//
//   tableHeadCell.forEach((element) => {
//     element.setAttribute("data-filter-order", "descend");
//   })
// }
// setFilterOrder()

/*
const pageNumber = (array, container) => {
  const limit = document.getElementById("limit").value;

  const pages = Math.ceil(array.length/limit);

  container.innerHTML = "";

  for (let i = 1; i <= pages; i++) {
    const option = document.createElement("option");
    container.append(option);
    option.innerHTML = ` ${i}`;
    option.setAttribute("value", `${i}`);
  }
}
const userCurrentPage = document.querySelector(".user-current-page");
if (userCurrentPage) {
  pageNumber(userSortedArray, userCurrentPage)
}
const productCurrentPage = document.querySelector(".product-current-page");
if (productCurrentPage) {
  pageNumber(productSortedArray, productCurrentPage)
}
 */

/*
const paginationDisable = (parentPagination, array) => {
  const firstPageButton = parentPagination.querySelector("#first-page");
  const previousPageButton = parentPagination.querySelector("#previous-page");
  const nextPageButton = parentPagination.querySelector("#next-page");
  const lastPageButton = parentPagination.querySelector("#last-page");
  const limit = document.querySelector("#limit").value;
  const currentPage = parentPagination.querySelector("#current-page").value;

  if (Number(currentPage) <= 1) {
    firstPageButton.className = "disable";
    previousPageButton.className = "disable";
    firstPageButton.disabled = true;
    previousPageButton.disabled = true;
  } else {
    firstPageButton.classList.remove("disable");
    previousPageButton.classList.remove("disable");
    firstPageButton.disabled = false;
    previousPageButton.disabled = false;
  }

  if (Number(currentPage) === Math.ceil(array.length / limit)) {
    nextPageButton.className = "disable";
    lastPageButton.className = "disable";
    nextPageButton.disabled = true;
    lastPageButton.disabled = true;
  } else {
    nextPageButton.classList.remove("disable");
    lastPageButton.classList.remove("disable");
    nextPageButton.disabled = false;
    lastPageButton.disabled = false;
  }
}
const userPagination = document.getElementById("user-pagination");
if (userPagination) {
  paginationDisable(userPagination, userSortedArray)
}
const productPagination = document.getElementById("product-pagination");
if (productPagination) {
  paginationDisable(productPagination, productSortedArray)
}
 */

/*
const paginationNavigation = (ev, array) => {
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
    page.value = Math.ceil(array.length / limit);
  }
}
 */

/*
const fiend = (array, config, parent, input) => {
  const searchArray = array.filter((element) => {
    if (element[config.fieldName].toLowerCase().includes((input.value).toLowerCase())) {
      return element;
    }
  })
  completeTableBody(searchArray, config, parent);
}
 */

/*
const sortBy = (event) => {
  let sortItem = event.target.dataset.columnName;

  if (event.target.dataset.filterOrder === "descend") {
    event.target.setAttribute("data-filter-order", "ascend");
  } else {
    event.target.setAttribute("data-filter-order", "descend");
  }

  let array = [];
  let config;
  let parent;

  if (event.target.closest("#user-table-head")) {
    array = userSortedArray;
    config = userConfig;
    parent = userTableBody;
  } else if (event.target.closest("#product-table-head")) {
    array = productSortedArray;
    config = productConfig
    parent = productTableBody
  }
  const sortedArrayBy = array.sort((a, b) => {
    const nameA = a[`${sortItem}`];
    const nameB = b[`${sortItem}`];

    if (sortItem.includes("date")) {
      return new Date(Date.parse(nameA)) - new Date(Date.parse(nameB));
    } else {
      return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    }
  });

  if (event.target.dataset.filterOrder === "ascend") {
    completeTableBody(sortedArrayBy, config, parent);
  } else {
    completeTableBody(sortedArrayBy.reverse(), config, parent);
  }
}
 */

/*
const fieldsInput = document.querySelector(".configuration__field-to-show");
const addFields = (event) => {
  let parentDrag;
  let configuration;
  if (event.target.closest("#user-configuration")) {
    configuration = userConfig;
    parentDrag = document.querySelector(".user-field-drag-and-drop");
  } else if (event.target.closest("#product-configuration")) {
    configuration = productConfig;
    parentDrag = document.querySelector(".product-field-drag-and-drop");
  }

  if (event.target.closest("label") && event.target.checked) {
    configuration.fields.push(event.target.dataset.name);
    dragAndDropFields(parentDrag, configuration);
  } else {
    configuration.fields.splice(configuration.fields.indexOf(event.target.dataset.name), 1);
    dragAndDropFields(parentDrag, configuration);
  }
}
fieldsInput.addEventListener("click", addFields);
 */

/*
const createConfiguration = (event) => {
  let dragAndDropContainer;
  let config;
  let parent;

  if (event.target.closest("#user-configuration")) {
    dragAndDropContainer = document.querySelector(".user-field-drag-and-drop");
    config = userConfig;
    parent = document.getElementById("user-configuration");
  } else if (event.target.closest("#product-configuration")) {
    dragAndDropContainer = document.querySelector(".product-field-drag-and-drop");
    config = productConfig;
    parent = document.getElementById("product-configuration");
  }

  let fieldsOrder = [];
  const span = dragAndDropContainer.querySelectorAll("span");
  span.forEach((element) => {
    fieldsOrder.push(element.dataset.name);
  })

  let limit;
  let fieldName;
  let sortingType;

  if (event.target.closest("#user-configuration")) {
    limit = parent.querySelector(".user-limit__select").value;
    fieldName = parent.querySelector(".user-field-name").value;
    sortingType = parent.querySelector(".user-sorting-type").value;
  }
  if (event.target.closest("#product-configuration")) {
    limit = parent.querySelector(".product-limit__select").value;
    fieldName = parent.querySelector(".product-field-name").value;
    sortingType = parent.querySelector(".product-sorting-type").value;
  }

  config.fields = fieldsOrder;
  config.fieldName = fieldName;
  config.itemsPerPage = limit;
  config.fieldSortValue = sortingType;

  let sortedArray;
  if (event.target.closest("#user-configuration")) {
    localStorage.setItem("localStoreUserConfig", JSON.stringify(config))
    sortedArray = orderArrayOfObject(userSortedArray, config.fields);
  } else if (event.target.closest("#product-configuration")) {
    localStorage.setItem("localStoreProductConfig", JSON.stringify(config))
    sortedArray = orderArrayOfObject(productSortedArray, config.fields);
  }

  if (userLimit) {
    itemsPerPage(userLimit, config);
  }
  if (productLimit) {
    itemsPerPage(productLimit, config);
  }

  if (userCurrentPage) {
    pageNumber(sortedArray, userCurrentPage)
  }
  if (productCurrentPage) {
    pageNumber(sortedArray, productCurrentPage)
  }

  if (userTableHead) {
    completeTableHead(sortedArray, config, userTableHead);
    completeTableBody(sortedArray, config, userTableBody);
  }
  if (productTableHead) {
    completeTableHead(sortedArray, config, productTableHead);
    completeTableBody(sortedArray, config, productTableBody);
  }
}


 */
// const cancelChange = () => {
//   onClosePopup();
// }

const saveButton = document.getElementById("save");
saveButton.addEventListener("click", createConfiguration)

// const cancelButton = document.getElementById("cancel");
// cancelButton.addEventListener("click", cancelChange);

// const search = document.querySelector("#search");
// search.addEventListener("keyup", () => {
//   const userSearch = document.querySelector(".user-search")
//   if (userSearch) {
//     fiend(userSortedArray, userConfig, userTableBody, userSearch)
//   }
//   const productSearch = document.querySelector(".product-search")
//   if (productSearch) {
//     fiend(productSortedArray, productConfig, productTableBody, productSearch)
//   }
// });

// const tableHead = document.querySelector("thead");
// tableHead.addEventListener("click", sortBy);



if (userLimit) {
  userLimit.addEventListener("change", () => {pageNumber(); completeTableBody(userSortedArray, userConfig, userTableBody)})
}
if (productLimit) {
  productLimit.addEventListener("change", () => {pageNumber(); completeTableBody(productSortedArray, productConfig, productTableBody)})
}




const currentPageSelect = document.getElementById("current-page");
currentPageSelect.addEventListener("change", () => completeTableBody(productSortedArray))

const pagination = document.querySelector(".pagination");
pagination.addEventListener("click", (event) => {
  if (userPagination) {
    paginationNavigation(event, userSortedArray)
  }
  if (productPagination) {
    paginationNavigation(event, productSortedArray)
  }

  if (userTableBody) {
    completeTableBody(userSortedArray, userConfig, userTableBody);
  }
  if (productTableBody) {
    completeTableBody(productSortedArray, productConfig, productTableBody);
  }

  if (userPagination) {
    paginationDisable(userPagination, userSortedArray)
  }
  if (productPagination) {
    paginationDisable(productPagination, productSortedArray)
  }
})

const litePickerButton  = document.getElementById("lite-picker__button");
litePickerButton.addEventListener("click", () => {
  let sortedArray;

  if (userTableBody) {
    sortedArray = orderArrayOfObject(userSortedArray, userConfig.fields);
    completeTableBody(sortedArray, userConfig, userTableBody);
  }
  if (productTableBody) {
    sortedArray = orderArrayOfObject(productSortedArray, productConfig.fields);
    completeTableBody(sortedArray, productConfig, productTableBody);
  }
})