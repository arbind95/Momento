// Creates heading 1 with the given text
//Example call: createHeading1("Moment"); this will create a H1 element with Momento text
function createHeading1(text){
  //create H1 tag and refer to it locally as heading1
  var heading1 = document.createElement("H1");

  //create some text
  var textNode = document.createTextNode(text);
  heading1.appendChild(textNode);

  //append heading1 to document.body
  document.body.appendChild(heading1);
  heading1.setAttribute("align","center");
  return heading1;
}
// Creates heading 3 with the given text
//Example call: createHeading3("Congratulations!!"); this will create a H3 element with COngratulations!! text
function createHeading3(text){
  //create H1 tag and refer to it locally as heading1
  var heading3 = document.createElement("H3");

  //create some text
  var textNode = document.createTextNode(text);
  heading3.appendChild(textNode);

  //append heading1 to document.body
  document.body.appendChild(heading3);
  heading3.setAttribute("align","center");
  return heading3;
}

//Creates button with given text
//Example call: createButton("Shallow"); this creates a button element with Shallow text in it
function createButton(buttonText){

  var para = document.createElement("P");
  //create <button> element and refer to it locally as button
  var button = document.createElement("BUTTON");

  //create some text
  var textNode = document.createTextNode(buttonText);
  button.appendChild(textNode);
  button.classList.add("bigButton");
  para.appendChild(button);
  //append button to document.body
  document.body.appendChild(para);
  para.setAttribute("align","center");
  return button;
}
//Creates button with given text
//Example call: createSmallButton("Exit"); this creates a button element with Exit text in it
function createSmallButton(buttonText){

  var para = document.createElement("P");
  //create <button> element and refer to it locally as button
  var button = document.createElement("BUTTON");

  //create some text
  var textNode = document.createTextNode(buttonText);
  button.appendChild(textNode);
  button.classList.add("smallButton");
  para.appendChild(button);
  //append button to document.body
  document.body.appendChild(para);
  para.setAttribute("align","center");
  return para;
}
//Creates image with given src
//Example call: createImage("images/background/background.png"); this creates an image element with src="images/background/background.png"
function createImage(imageURL,classname){
  var para = document.createElement("P");
  //Create <img> element and refer to it locally as image
  var image = document.createElement("IMG");
  if(typeof classname !== 'undefined'){
    image.classList.add(classname);
  }

  image.setAttribute("src",imageURL);
  para.appendChild(image);
  document.body.appendChild(para);

  para.setAttribute("align","center");
}
//Creates image with given src
function createGameImage(imageURL){
  var image = document.createElement("IMG");

  image.classList.add("gameImage");

  image.setAttribute("src",imageURL);
  return image;
}


//Creates division element
function createDiv(){
  var divElement=document.createElement("div");
  return divElement;
}
