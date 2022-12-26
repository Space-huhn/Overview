const createArrowUp = (parent) => {
  const triangle = document.createElement("span");
  parent.append(triangle);

  triangle.style.cssText = `
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid black;
    margin: 0 0 1px 5px
  `
}

const createArrowDown = (parent) => {
  const triangle = document.createElement("span");
  parent.append(triangle);

  triangle.style.cssText = `
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid black;
    margin: 0 0 1px 5px
  `
}

const deleteArrow = (parent) => {
  const triangle = parent.querySelector("span")
  if (triangle) {
    parent.removeChild(triangle)
  }
}

export {createArrowUp}
export {createArrowDown}
export {deleteArrow}