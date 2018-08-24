/*
  This function when called creates a menu for the Deep level of the game.
  The menu includes 4 clickable buttons.
  Three buttons lead to the three categories of the game in this level and the next button is for going back to main menu.

  The function does not use any parameters and does not have any return values.
*/

function createDeepMenu(){
  document.body.innerHTML="";
  createImage("images/background/background.png","bgImg1");
  createHeading1("Deep");

  //Button for creating menu for the Monument category of Deep Level by calling createDeepMonumentMenu() function when clicked
  var DeepMonumentButton=createButton("Monuments");
  DeepMonumentButton.onclick= createDeepMonumentMenu;

//Button for creating menu for the Personalities category of Deep Level by calling createDeepPersonalitiesMenu() function when clicked
  var DeepPersonalitiesButton= createButton("Personalities");
  DeepPersonalitiesButton.onclick= createDeepPersonalitiesMenu;

//Button for creating menu for the Religion category of Deep Level by calling createDeepReligionMenu() function when clicked
  var DeepReligionButton= createButton("Religion");
  DeepReligionButton.onclick= createDeepReligionMenu;

//Button for going back to main menu by calling createMenu() function when clicked
  var BackButton= createButton("Back");
  BackButton.onclick= createMenu;

};
