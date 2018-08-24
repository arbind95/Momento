
/*
    This function creates the menu when the page loads.
*/
function createMenu(){
  //Clears the screen
  document.body.innerHTML="";
  //Creates image
  createImage("images/background/background.png","bgImg1");
  //Creating Menu Buttons for different options
  createHeading1("Momento");
  //Creates button for going to game levels
  var GameButton = createButton("Play");
  GameButton.onclick =  playGame;
  //Creates button for about us page
  var AboutUsButton = createButton("About Us");
  AboutUsButton.onclick =  aboutUs;
  //Creates button for setting page
  var SettingButton = createButton("Setting");
  SettingButton.onclick = settingPage;
}

//This function creates various game levels as buttons
function playGame(){
  //Clears the screen
  document.body.innerHTML="";
  //Creates image
  createImage("images/background/background.png","bgImg1");
  //Creating Menu Buttons for different game levels
  createHeading1("Momento");
  //Creates button for Game Level : Shallow
  var ShallowButton = createButton("Shallow");
  ShallowButton.onclick =  createShallowMenu;
  //Creates button for Game Level : Deep
  var DeepButton = createButton("Deep");
  DeepButton.onclick =  createDeepMenu;
  //Creates button for Game Level : Profound
  var ProfoundButton = createButton("Profound");
  ProfoundButton.onclick = createProfoundMenu;
  //Creates button for Game Level : Maths
  var MathsButton = createButton("Mathematics");
  MathsButton.onclick = createMathsMenu;
  //Creates button for going back to main menu
  var MenuButton = createButton("Back");
  MenuButton.onclick = createMenu;
}

/*
  This function loads at the app from beginng.
  Loads only once.
*/
function loadApp() {
  createMenu();
}

/*
  This function creates an about us page with legal section.
  It is called when about us button on main menu page is clicked.
*/
function aboutUs(){
  document.body.innerHTML="";
  document.body.classList.add("infoBlock");
  createHeading3("About Us");
  var para = document.createElement("P");
  var textNode = document.createTextNode("This is a memory training game with four levels incorporating topics related to science, maths and history for improving general knowledge along with memory.");
  para.appendChild(textNode);
  para.setAttribute("align","center");
  document.body.appendChild(para);
  var legalheading = createHeading3("Legal");
  var legalPara = document.createElement("P");
  var textNodeLegal = document.createTextNode("This is the original work of Arbind Agrahari Baniya who would like to thank all the resources made availabel for creation of the game including sound effect Jump-SoundBible.com-1007297584.mp3 from snottyboy available at http://soundbible.com/1343-Jump.html.");
  legalPara.appendChild(textNodeLegal);
  legalPara.setAttribute("align","center");
  document.body.appendChild(legalPara);

  var BackButton= createButton("Back");
  BackButton.onclick= createMenu;
}

/*
  This function allows to turn on/off the audio of the game.
*/
function settingPage(){
  document.body.innerHTML="";
  document.body.classList.add("settingBlock");
  createHeading1("Settings");
  createHeading3("Game Audio:");
  var onButton = createButton("Switch ON");
  onButton.onclick = function(){
    audioControl="ON";
    createHeading3("Sound switched on.");
  }
  var offButton = createButton("Switch OFF");
  offButton.onclick = function(){
    audioControl="OFF";
    createHeading3("Sound switched off.");
  }

  var BackButton= createSmallButton("Back");
  BackButton.onclick= createMenu;
}

window.onload = loadApp;
