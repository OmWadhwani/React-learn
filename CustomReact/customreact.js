
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click here to visit Google",
};

function customRender(reactElement, container) {
  const domele = document.createElement(reactElement.type);
  domele.innerHTML = reactElement.children;
  domele.setAttribute("href", reactElement.props.href);
  domele.setAttribute("target", reactElement.props.target);
  container.appendChild(domele);
}

const maincontainer =document.querySelector('#root')

customRender(reactElement, maincontainer)