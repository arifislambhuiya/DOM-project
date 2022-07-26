/**
 * Project Requirement
 * Change the background color by generating random rgb color by clicking a button
 * Also display the hex code to a disabled input field
 * Add a button to copy the color code 
 */

// Stpes


// Step 1 - create onload handler
window.onload = ()=>{
    main();
}

function main(){
  const root = document.getElementById('root');
  const changeBtn = document.getElementById('change-btn');
  const copyBtn = document.getElementById('copy-btn');
  const output = document.getElementById('output');

  changeBtn.addEventListener('click',function(){

      const bgColor = generateHexColor()
      root.style.backgroundColor = bgColor;
      output.value = bgColor;
  })

  copyBtn.addEventListener('click',function(){
      navigator.clipboard.writeText(output.value);
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