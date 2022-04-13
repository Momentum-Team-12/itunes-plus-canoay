// Gerardo's function: minimizes lines of code on main script page by automating create element, class setting and innerText/HTML actions into one function.

function buildElement(elementType, className, text) {
  let element = document.createElement(elementType);
  element.classList.add(className);
  element.innerText = text;
  return element;
}

// function buildElement(elementType, className, text) {
//   let element = document.createElement(elementType);
//   element.classList.add(className);
//   if ((elementType = "audio" || "img")) {
//     return (element.src = text);
//   } else {
//     element.innerText = text;
//   }
//   return element;
// }

// Clear search box function
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
