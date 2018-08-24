# Momento
Pure JavaScript based mobile game for children's memory improvement and learning .


App Summary:
Momento is a children's game for mind training and improving general knowledge.
It has 4 levels with 3 categories in each level.
Each category has a menu of its own providing the option to view information about how to play that category of game.
When a category is completed a congratulations page will appear with some animations and sound.
There is an option to exit in middle of playing a category.
Game has sound which can be switched on or off from settings button on main menu.


API Reference:
The most useful function in my app are listed below with further descriptions:
I am referencing functions for one category, other categories use similar functions with changed data and names, but same logic.

1. createMenu()
    Creates a menu with 3 buttons, an image and a heading by calling UI functions namely createHeading1(), createImage() and createButton().
    Does not return any value or accepts any parameter passed.

2. createDeepMenu()
    Creates a menu for a level by making use of UI createButton() function and other functions like createMenu().

3. playDeepReligion()

  This function and similarly named functions in other category create 3 divisions named imageDiv1, imageDiv2 and imageDiv3 which includes 4 images each.
  All the images are made clickable.
  On clicking createChangingImage() is called and two parameters image division value and image URL are passed to it.
  createChangingImage(val,url) returns changeImage(val,url) by passing same aruments.

4. changeImage(val,url)
    This function firstly stores the parameters received in two arrays clickInformation[] and imageDivisionValues[] only in index 0 and 1 , to keep info about last two clicked images only.
    Then by making use of deep_religion[] the name of each image is obtained and a match condition is written using if-else-if statements.
    If a match occurs score is increased by 1 and hit as well and then the arrays are cleared.
    If no match occurs, the image are changed back to theme image and arrays are cleared again.

5.gameExit()
  Called when exit button is pressed at the middle of the game and created a oops message and buttons to go back to menu.
