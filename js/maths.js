/*
  This function when called creates a menu for the Maths level of the game.
  The menu includes 4 clickable buttons.
  Three buttons lead to the three categories of the game in this level and the next button is for going back to main menu.

  The function does not use any parameters and does not have any return values.
*/

function createMathsMenu(){
  document.body.innerHTML="";
  createImage("images/background/background.png","bgImg1");
  createHeading1("Mathematics");

  //Button for creating menu for the Addition category of Maths Level by calling createAdditionMenu() function when clicked
  var AdditionButton=createButton("Addition");
  AdditionButton.onclick= createAdditionMenu;


//Button for creating menu for the Multiplication category of Maths Level by calling createMultiplicationMenu() function when clicked
  var MultiplicationButton= createButton("Multiplication");
  MultiplicationButton.onclick= createMultiplicationMenu;

  //Button for creating menu for the Division category of Maths Level by calling createDivisionMenu() function when clicked
    var DivisionButton= createButton("Division");
    DivisionButton.onclick= createDivisionMenu;

//Button for going back to main menu by calling createMenu() function when clicked
  var BackButton= createButton("Back");
  BackButton.onclick= createMenu;

};
