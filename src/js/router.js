const routes = {
  // 404: "/pages/404.html",
  "/": "../src/pages/user.html",
  "/date": "../src/pages/product.html",
  "/company": "../src/pages/company.html",

};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

const overview = document.querySelectorAll(".overview");

overview.forEach((element) => {
  element.addEventListener("click", route)
})