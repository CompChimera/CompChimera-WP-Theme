function floatSwitch(e) {
  let button = e.currentTarget;
  let floaterWrapper = document.getElementById('floater-wrapper');

  console.log(button.classList.contains("on"));
  if(button.classList.contains("on")){
    button.classList.remove('on');
    button.classList.add("off");
    floaterWrapper.classList.remove("floatin")

  } else {
    button.classList.remove('off');
    button.classList.add("on");
    floaterWrapper.classList.add("floatin")
  }
}



window.addEventListener('DOMContentLoaded', () => {
  const floatSwitchButton = document.getElementById('float-switch');

  if(floatSwitchButton){
    floatSwitchButton.addEventListener('click', (event) => {
      floatSwitch(event);
    });
  }
});