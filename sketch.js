// Inspired by The Coding Train Challenge / #156 Peeking inside PI
// By Amninder Singh
// https://editor.p5js.org/codingtrain/sketches/U649qYR4

let raw;
let digits,searchBox,indexP;

//Loading data
function preload(){
  raw = loadStrings('twoPi.txt')
}

// search function 

function searchItUp() {
  let search = searchBox.value();
 // console.log(search);

  let index = digits.indexOf(search,2);  //using inbuilt functin to get index of the input number

  if (index > 0) {
    ((indexP.html(`The ${search} found at position : `+ (index-1))))
  } else {
    indexP.html(`${search} not found in the first 1 million digits of 𝜏.`);
  }
}


// clear function to clear input field 
function clearSearch() {
  search = '';
  searchBox.value('');
  indexP.html('You can always Type Again');
  
}





// just a minimal setup
function setup() {

  noCanvas();
    // createP('2PI (Tau Tau)')
   searchBox = (createInput(''));
     digits = raw[0];
    searchBox.input(searchItUp);
   indexP = createP('Enter any random number');
  button = createButton('clear').center('horizontal');
  button.style("width","80px");
   button.style("height","40px");
  
    button.mousePressed(clearSearch);
  
 
}

