/*
  This function when called creates a menu for the SHallow level of the game.
  The menu includes 4 clickable buttons.
  Three buttons lead to the three categories of the game in this level and the next button is for going back to main menu.

  The function does not use any parameters and does not have any return values.
*/
function createShallowMenu(){
  document.body.innerHTML="";
  createImage("images/background/background.png","bgImg1");
  createHeading1("Shallow");
  //Button for creating menu for the Food Chain category of Shallow Level by calling createShallowFoodchainMenu() function when clicked
  var FoodChainButton=createButton("Food Chain");
  FoodChainButton.onclick= createShallowFoodchainMenu;
  //Button for creating menu for the Flag category of Shallow Level by calling createShallowFlagMenu() function when clicked
  var FlagButton= createButton("Flag");
  FlagButton.onclick= createShallowFlagMenu;
  //Button for creating menu for the Professional Tools category of Deep Level by calling createShallowProfessionalToolMenu() function when clicked
  var ProfToolButton= createButton("Professional Tools");
  ProfToolButton.onclick= createShallowProfessionalToolMenu;
  //Button for going back to main menu by calling createMenu() function when clicked
  var BackButton= createButton("Back");
  BackButton.onclick= createMenu;

};
