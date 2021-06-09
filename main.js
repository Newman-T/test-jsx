for (const i of [1,2,3]) {
  console.log(i);
}

function createElement(tagName, attributes, ...children){
  let e = document.createElement(tagName);
  for (const p in attributes) {
    e.setAttribute(p, attributes[p]);
  }
  for (let child of children) {
    if (typeof child === 'string') {
      child = document.createTextNode(child);
    }
    e.appendChild(child)
  }
  return e;
}

document.body.appendChild(<div id='123' className='main'>
  <div>abs</div>
  <div></div>
  <div></div>
</div>);