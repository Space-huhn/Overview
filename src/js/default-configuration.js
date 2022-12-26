let currentURL = window.location.href;
let config;
let url;
let str;

const getConfig = () => {
  const request = new XMLHttpRequest();

  if (currentURL.includes("user")) {
    request.open("GET","/static/user-default-config.json", false);
    str = "User"
    url = "http://localhost:3000/users";
  } else if (currentURL.includes("product")) {
    request.open("GET","/static/product-default-config.json", false);
    str = "Product"
    url = "http://localhost:3000/products";
  } else {
    request.open("GET","/static/company-default-config.json", false);
    str = "Company"
    url = "http://localhost:3000/companies";
  }
  request.send(null);

  if (localStorage.getItem(`localStore${str}Config`)) {
    config = JSON.parse(localStorage.getItem(`localStore${str}Config`))
  } else {
    config = JSON.parse(request.responseText)
  }
  url = `${url}?_sort=${config.fieldName}&_order=${config.fieldSortValue}`
  return config;
}
getConfig()

let arrayOfObject;

function reqListener() {
  arrayOfObject = JSON.parse(this.responseText)
  return arrayOfObject;
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", url);
req.send();

const createFieldsOptions = (arr) => {
  const fieldNameSelect = document.getElementById("field-name");
  const limitSelect = document.getElementById("configuration-limit__select");
  const sortingType = document.getElementById("sorting-type");

  for (const key in arr[0]) {
    if (key !== "addToDataBase") {
      let name;

      if (key === "IDNP") {
        name = key;
      } else {
        name = `${key.charAt(0).toUpperCase()}${key.slice(1).replace(/[A-Z]/g, m => " " + m.toLowerCase())}`;
      }

      const fieldOption = document.createElement("option");
      fieldOption.setAttribute("value", `${key}`);
      fieldOption.innerText = name;
      fieldNameSelect.append(fieldOption);

      if (key === config.fieldName) {
        fieldNameSelect.value = key
      }
    }
  }

  limitSelect.value = config.itemsPerPage;
  sortingType.value = config.fieldSortValue;
}

const fieldsToShow = (arr) => {
  const userShowField = document.querySelector(".configuration__field-to-show");
  userShowField.innerHTML = "";

  for (const key in arr[0]) {
    if (key !== "addToDataBase") {
      const fieldLabel = document.createElement("label");
      userShowField.append(fieldLabel);

      const fieldCheckbox = document.createElement("input");
      fieldCheckbox.setAttribute("type", "checkbox");
      fieldCheckbox.setAttribute("data-name", key);

      if (config.fields.includes(`${key}`)) {
        fieldCheckbox.setAttribute("checked", "")
      }

      fieldLabel.append(fieldCheckbox);

      const span = document.createElement("span");

      if (key === "IDNP") {
        name = key;
      } else {
        name = `${key.charAt(0).toUpperCase()}${key.slice(1).replace(/[A-Z]/g, m => " " + m.toLowerCase())}`;
      }
      span.innerText = name;

      fieldLabel.append(span);
    }
  }
}

const dragAndDropFields = () => {
  const userFieldOrder = document.querySelector(".field-drag-and-drop");

  userFieldOrder.innerHTML = "";

  config.fields.forEach((element) => {
    if (element !== "addToDataBase") {
      const draggableBlock = document.createElement("span");
      draggableBlock.classList.add("draggable-block");
      draggableBlock.setAttribute("data-name", `${element}`);
      userFieldOrder.append(draggableBlock);

      let name;

      if (element === "IDNP") {
        name = element;
      } else {
        name = `${element.charAt(0).toUpperCase()}${element.slice(1).replace(/[A-Z]/g, m => " " + m.toLowerCase())}`;
      }

      draggableBlock.innerText = name;
    }
  })
}

req.addEventListener("load", () => {
  createFieldsOptions(arrayOfObject);
  fieldsToShow(arrayOfObject);
  dragAndDropFields()
});

const activeClearButton = () => {
  const input = document.querySelector("#search");
  const clearButton = document.querySelector("#clear-button");

  if (input.value !== "") {
    clearButton.className = "active";
  } else {
    clearButton.classList.remove("active");
  }
}

export {config}
export {req}
export {str}
export {arrayOfObject}
export {createFieldsOptions}
export {fieldsToShow}
export {dragAndDropFields}
export {activeClearButton}
