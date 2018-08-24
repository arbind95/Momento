/*
  This function creates menu for the Monument category of the Deep level.
  The menu contains three buttons,one leading to the playing game, one for information about the category of game and another for going back to the level menu.
  This function does not accept any parameters and does not have any return values.
*/
function createDeepMonumentMenu(){
  document.body.innerHTML="";
  createImage("images/background/background.png","bgImg1");
  createHeading1("Deep-Monuments");

  //Button for creating the play scene of Monument category in Deep level by calling playDeepMonuments() function when clicked
  var playButton= createButton("Play");
  playButton.onclick= playDeepMonuments;

  //Button for displaying information on how to play Monument category in Deep level by calling deepMonumentInfo() function when clicked
  var infoButton=createButton("Information");
  infoButton.onclick= deepMonumentInfo;

  //Button for going back to the menu in Deep level by calling createDeepMenu() function when clicked
  var BackButton= createButton("Back");
  BackButton.onclick= createDeepMenu;
}

/*
  This function creates information page for the Monument category of the Deep level.
  The page contains information about how to play the category of game and a button for going back to the category menu.
  This function does not accept any parameters and does not have any return values.
*/
function deepMonumentInfo(){
  document.body.innerHTML="";
  document.body.classList.add("infoBlock");
  // Creating a paragraph element
  var para = document.createElement("P");
  //creating a textNode element
  var textNode = document.createTextNode("In this category you have to match images of famous monuments of the world with images of their name.On clicking a block an image will be revealed and then click another block. If the image underneath the newly clicked block is a match with the previously revealed image then both the images will be unhidden. However, if the image is not a match then the images will be hidden again and you will have to memorise the locations of the images. Game is over when each image is matched with its pair. Unless that happens keep clicking blocks and memorising the locations to match images.");
  //appending textNode element to paragraph element
  para.appendChild(textNode);
  para.setAttribute("align","center");
  //appending the paragraph element to the html body
  document.body.appendChild(para);
  //creating back button for going back to category menu
  var BackButton= createButton("Back");
  BackButton.onclick= createDeepMonumentMenu;
}


/*
  This function creates the playing scene for the Monument category of the Deep level.
  The page contains 12 image blocks placed in divisions, text for displaying scores and hits and a button to exit the current state of game.
  This function does not accept any parameters and does not have any return values.
*/
function playDeepMonuments(){
  document.body.innerHTML="";
  if(audioControl == "ON"){
    //setting audio for the play scenen in autoplay
    audio.setAttribute("autoplay","true");
    //continually runnig the audio in a loop
    audio.setAttribute("loop","loop");
    //playing the audio
    audio.play();
  }
  //variable for storing the number of image blocks clicked
  var hit=0;
  //variable for storing the text to be displayed for number of hits
  var hitText;
  //variable to store the score
  var score=0;
  //variable for storing the text to be displayed for the current score
  var scoreText;
  //an array to store the information of the clicked image
  var clickInformation = [];
  //an array to store the division vlues for the image clicked
  var imageDivisionValues = [];
  //creating division for displaying the number of hits
  var hitDivision = createDiv();
  hitDivision.classList.add("hitDivision");
  //creating division for displaying the score
  var scoreDivision = createDiv();
  scoreDivision.classList.add("scoreDiv");
  // array to store images for the game
  var img = [];
  //array to store divisions for each image
  var imgDivisions = [];
  //creating division for a group of images
  var imageDiv1=createDiv();
  imageDiv1.classList.add("imageDiv1");

  //loop for generating four images along with their divisions and appending all the image divisions to imageDiv1 division
  for (var i=0; i<4; i++){
    imgDivisions[i]= createDiv();
    //initially the play scene will have the theme image of the game in each of the 12 image blocks
    img[i] = createGameImage("images/background/background.png");
    imgDivisions[i].appendChild(img[i]);
    imageDiv1.appendChild(imgDivisions[i]);
  }


  var imageDiv2=createDiv();
  imageDiv2.classList.add("imageDiv2");
  //loop for generating four images along with their divisions and appending all the image divisions to imageDiv1 division
  for (var i=4; i<8; i++){
    imgDivisions[i]= createDiv();
    img[i] = createGameImage("images/background/background.png");
    imgDivisions[i].appendChild(img[i]);
    imageDiv2.appendChild(imgDivisions[i]);
  }


  var imageDiv3=createDiv();
  imageDiv3.classList.add("imageDiv3");
  //loop for generating four images along with their divisions and appending all the image divisions to imageDiv1 division
  for (var i=8; i<12; i++){
    imgDivisions[i]= createDiv();
    img[i] = createGameImage("images/background/background.png");
    imgDivisions[i].appendChild(img[i]);
    imageDiv3.appendChild(imgDivisions[i]);
  }

  var para = document.createElement("P");
  para.appendChild(imageDiv1);
  para.appendChild(imageDiv2);
  para.appendChild(imageDiv3);
  para.setAttribute("align","center");
  document.body.appendChild(para);
  //appending hit text to body
  hitText = document.createTextNode("Number of Hits: "+hit);
  hitDivision.appendChild(hitText);
  document.body.appendChild(hitDivision);
  //appending score text to body
  scoreText = document.createTextNode("Current Score: "+score);
  scoreDivision.appendChild(scoreText);
  document.body.appendChild(scoreDivision);

  //creating actual image when each image block is clicked and applying some logic through the function
  img[0].onclick = createChangingImage(0,deep_monuments[0].url);
  img[1].onclick = createChangingImage(1,deep_monuments[1].url);
  img[2].onclick = createChangingImage(2,deep_monuments[2].url);
  img[3].onclick = createChangingImage(3,deep_monuments[3].url);
  img[4].onclick = createChangingImage(4,deep_monuments[4].url);
  img[5].onclick = createChangingImage(5,deep_monuments[5].url);
  img[6].onclick = createChangingImage(6,deep_monuments[6].url);
  img[7].onclick = createChangingImage(7,deep_monuments[7].url);
  img[8].onclick = createChangingImage(8,deep_monuments[8].url);
  img[9].onclick = createChangingImage(9,deep_monuments[9].url);
  img[10].onclick = createChangingImage(10,deep_monuments[10].url);
  img[11].onclick = createChangingImage(11,deep_monuments[11].url);

  /*
  This function is called when an image block is clicked.
  It returns another function instead.
  Accepts two parameters; first one is the value of the image division and second is the url of image to be created.

  Example call:
  createChangingImage(5,"images/deep/monuments/Christ.jpg");
  */
  function createChangingImage(val, url) {
    return function() {
      changeImage(val, url);
    }
  }

  /*
  This function is called by createChangingImage function when an image is clicked on play scene.
  It accepts two parameters; first one is the value of the image division and second is the url of image to be created.

  Example call:
  changeImage(5,"images/deep/monuments/Christ.jpg");

  This function updates the clickInformation array and imageDivisionValues array firstly.
  Then it checks for a match condition and increases the score and hit values as well.
  */

  function changeImage (val, url){
    imgDivisions[val].removeChild(img[val]);
    img[val]= createGameImage(url);
    imgDivisions[val].appendChild(img[val]);

    //checking if the clickInformation array is empty in 0 or 1 index, so that the new information i.e. name of image can be stored in 1 or 0 index respectively.

    if((clickInformation[0] != undefined) && (clickInformation[1] == undefined)) {
      clickInformation[1]= deep_monuments[val].name;
    }
    if((clickInformation[0] == undefined) && (clickInformation[1] == undefined)){
      clickInformation[0]=deep_monuments[val].name;
    }

    //checking if the imageDivisionValues array is empty in 0 or 1 index, so that the new information i.e. value of the division of image can be stored in 1 or 0 index respectively.
    if ((imageDivisionValues[0] != undefined) && (imageDivisionValues[1] == undefined)) {
      imageDivisionValues[1]=val;
    }
    if ((imageDivisionValues[0] == undefined) && (imageDivisionValues[1] == undefined)){
      imageDivisionValues[0]=val;
    }

//Checking for a condition where two images are clicked consequently by checking if clickInformation array is empty at index 0 and 1 or not.
    if((clickInformation[0]!= undefined) && (clickInformation[1]!= undefined)){
      //checking the clickInformation array data at index 0 and 1 to find out if a match has occured or not
      if ( (clickInformation[0]=="Christ" && clickInformation[1]=="ChristName") || (clickInformation[0]=="ChristName" && clickInformation[1]=="Christ")){
        //increasing the score if match found and updating the score division and text
        score++;
        scoreDivision.removeChild(scoreText);
        scoreText = document.createTextNode("Current Score: "+score);
        scoreDivision.appendChild(scoreText);
        //emptying clickInformation and imageDivisionValues arrays if match has occured
        clickInformation = [];
        imageDivisionValues=[];
      }
      else if ( (clickInformation[0]=="Colosseum" && clickInformation[1]=="ColosseumName") || (clickInformation[0]=="ColosseumName" && clickInformation[1]=="Colosseum")){
        score++;
        scoreDivision.removeChild(scoreText);
        scoreText = document.createTextNode("Current Score: "+score);
        scoreDivision.appendChild(scoreText);
        clickInformation = [];
        imageDivisionValues=[];
      }
      else if ( (clickInformation[0]=="GreatPyramid" && clickInformation[1]=="GreatPyramidName") || (clickInformation[0]=="GreatPyramidName" && clickInformation[1]=="GreatPyramid")){
        score++;
        scoreDivision.removeChild(scoreText);
        scoreText = document.createTextNode("Current Score: "+score);
        scoreDivision.appendChild(scoreText);
        clickInformation = [];
        imageDivisionValues=[];
      }
      else if ( (clickInformation[0]=="GreatWallOfChina" && clickInformation[1]=="GreatWallOfChinaName") || (clickInformation[0]=="GreatWallOfChinaName" && clickInformation[1]=="GreatWallOfChina")){
        score++;
        scoreDivision.removeChild(scoreText);
        scoreText = document.createTextNode("Current Score: "+score);
        scoreDivision.appendChild(scoreText);
        clickInformation = [];
        imageDivisionValues=[];
      }
      else if ( (clickInformation[0]=="StatueOfLiberty" && clickInformation[1]=="StatueOfLibertyName") || (clickInformation[0]=="StatueOfLibertyName" && clickInformation[1]=="StatueOfLiberty")){
        score++;
        scoreDivision.removeChild(scoreText);
        scoreText = document.createTextNode("Current Score: "+score);
        scoreDivision.appendChild(scoreText);
        clickInformation = [];
        imageDivisionValues=[];
      }
      else if ( (clickInformation[0]=="TajMahal" && clickInformation[1]=="TajMahalName") || (clickInformation[0]=="TajMahalName" && clickInformation[1]=="TajMahal")){
        score++;
        scoreDivision.removeChild(scoreText);
        scoreText = document.createTextNode("Current Score: "+score);
        scoreDivision.appendChild(scoreText);
        clickInformation = [];
        imageDivisionValues=[];
      }
      //if no match has been detected then changing both the images back to the theme image
      else{
          imgDivisions[imageDivisionValues[0]].removeChild(img[imageDivisionValues[0]]);
          img[imageDivisionValues[0]]= createGameImage("images/background/background.png");
          imgDivisions[imageDivisionValues[0]].appendChild(img[imageDivisionValues[0]]);
          img[imageDivisionValues[0]].onclick = createChangingImage(imageDivisionValues[0],deep_monuments[imageDivisionValues[0]].url);

          imgDivisions[imageDivisionValues[1]].removeChild(img[imageDivisionValues[1]]);
          img[imageDivisionValues[1]]= createGameImage("images/background/background.png");
          imgDivisions[imageDivisionValues[1]].appendChild(img[imageDivisionValues[1]]);
          img[imageDivisionValues[1]].onclick = createChangingImage(imageDivisionValues[1],deep_monuments[imageDivisionValues[1]].url);

          imageDivisionValues=[];
          clickInformation=[];
        }
    }
    hit++;
    hitDivision.removeChild(hitText);
    hitText = document.createTextNode("Number of Hits: "+hit);
    hitDivision.appendChild(hitText);
    //generating congratulation message when required score has been achieved
    if(score==6)
    {
      document.body.innerHTML="";
      if(audioControl=="ON"){
        audio.pause();
        Applauseaudio.play();
      }
      createImage("images/background/background.png","bgImg1");
      var heading1 = createHeading1("Congratulations!!");
      createHeading3("You have completed this category.");

      var backToShallowMenu= createButton("Go to Deep Menu");
      backToShallowMenu.onclick= createDeepMenu;

      var backToMainMenu=createButton("Go to Main Menu");
      backToMainMenu.onclick= createMenu;

      document.body.classList.add("completed");
      heading1.classList.add("changeSize");

    }

  }


  var buttonDivision = createDiv();

  var exitButton = createSmallButton("Exit");
  buttonDivision.appendChild(exitButton);
  buttonDivision.classList.add("buttonDivision");
  document.body.appendChild(buttonDivision);
  exitButton.onclick = gameExit;

  /*
  This function is called when exit button is pressed in the middle of the game.
  The game audio is paused and congratulation audio starts playing.
  Option is given for going back to main menu or category menu.
  */
  function gameExit(){
    document.body.innerHTML="";
    if(audioControl=="ON"){
      audio.pause();
      exitAudio.play();
    }
    createImage("images/background/background.png","bgImg1");
    var heading1 = createHeading1("Oops!!");
    createHeading3("You did not complete this category.");

    var backToShallowMenu= createButton("Deep Menu");
    backToShallowMenu.onclick= createDeepMenu;

    var backToMainMenu=createButton("Main Menu");
    backToMainMenu.onclick= createMenu;

    document.body.classList.add("completed");

  }
}
