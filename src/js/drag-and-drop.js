const parent = document.querySelector(".field-drag-and-drop");

const fieldSort = new Sortable(parent, {
  animation: 350,
  // ghostClass: 'blue-background-class'
});
