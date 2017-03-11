const button = document.createElement('button');
button.innerText = "Click Here";

button.onclick = () => {
  System.import('./image_viewer').then(module => {
    module.default();
  });
};

document.body.appendChild(button);
