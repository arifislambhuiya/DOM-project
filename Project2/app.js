/**
 * Project Requirement
 * Change the background color by generating random rgb color by clicking a button
 * Also display the hex code to a disabled input field
 */

// steps

// Step 1 - create onload handler
window.onload = ()=>{
    main();
}

function main(){
  const root = document.getElementById('root');
  const btn = document.getElementById('change-btn');
  const output = document.getElementById('output');

  btn.addEventListener('click',function(){

      const bgColor = generateHexColor()
      console.log(bgColor);
      root.style.backgroundColor = bgColor;
      output.value = bgColor;
  })

}

// Step 2 - random color generator function
function generateHexColor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

// Step 3 - collect all nacessary references

// Step 4 - handler the click event