/*
  This function when called creates a menu for the Profound level of the game.
  The menu includes 4 clickable buttons.
  Three buttons lead to the three categories of the game in this level and the next button is for going back to main menu.

  The function does not use any parameters and does not have any return values.
*/

function createProfoundMenu(){
  document.body.innerHTML="";
  createImage("images/background/background.png","bgImg1");
  createHeading1("Profound");

  //Button for creating menu for the Monument category of Profound Level by calling createProfoundMonumentMenu() function when clicked
  var ProfoundMonumentButton=createButton("Monuments");
  ProfoundMonumentButton.onclick= createProfoundMonumentMenu;

  //Button for creating menu for the Personalities category of Profound Level by calling createProfoundPersonalitiesMenu() function when clicked
  var ProfoundPersonalitiesButton= createButton("Personalities");
  ProfoundPersonalitiesButton.onclick= createProfoundPersonalitiesMenu;

  //Button for creating menu for the Religion category of Profound Level by calling createProfoundReligionMenu() function when clicked
  var ProfoundReligionButton= createButton("Religion");
  ProfoundReligionButton.onclick= createProfoundReligionMenu;

  //Button for going back to main menu by calling createMenu() function when clicked
  var BackButton= createButton("Back");
  BackButton.onclick= createMenu;

};
