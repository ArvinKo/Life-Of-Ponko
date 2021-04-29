$(document).ready(function ($) {
  //below are elements that are made hidden in the begining of the game
  $("#title").hide();
  $("#btn").hide();
  $("#screen").hide();
  $("#character").hide();
  $("#text").hide();
  $("#inventory").hide();
  $("#map").hide();
  $("#mapOpen").hide();
  $("#goBack").hide();
  $("#here").hide();
  $("#start").hide();
  $("#forest").hide();
  $("#stones").hide();
  $("#mountain").hide();
  $("#village").hide();
  $("#desert").hide();
  $("#backPack").hide();
  $("#goBack2").hide();
  $("#stranger").hide();
  $("#yes").hide();
  $("#no").hide();
  $("#inventory").hide();
  $("#map").hide();
  $("#monster").hide();
  $("#pig").hide();
  $("#spear").hide();
  $("#item1").hide();
  $("#item2").hide();
  $("#item3").hide();
  $("#meat").hide();
  $("#house").hide();
  $("#input").hide();
  $("#input2").hide();
  $("#store").hide();
  $("#npc1").hide();
  $("#npc2").hide();
  $("#npc3").hide();
  $("#npc4").hide();
  $("#npc5").hide();
  $("#chest").hide();
  $("#person").hide();
  $("#mage").hide();
  $("#boss").hide();
  $("#health").hide();
  $("#boat").hide();
  $("#thanks").hide();
  //below makes the title fade in
  $("#title").fadeIn(3000);
  $("#btn").fadeIn(3000);
  //below are our variables
  let x = 0;
  let spear = false;
  let meat = false;
  let gold = false;
  let y = 0;
  let i = 0;
  let num = 0;
  let guess = 0;
  let check = "";
  let newItem = "";
  let count = 0;
  let health = 20;

  //below is a click function that starts the game when the title is clicked
  $("#title").click(function (event) {
    $("#btn").fadeOut();
    $("#title").fadeOut();
    $("#screen").fadeIn();
    $("#character").fadeIn();
    $("#text").fadeIn();
    $("#stranger").fadeIn();
  }); //end of title click

  //below is a click function that gets rid of text on screen when screen is clicked
  $("#screen").click(function (event) {
    $("#text").fadeOut();
    $("#yes").fadeOut();
    $("#no").fadeOut();
    $("#text").css("top", "900px");
  }); //end of screen click

  //below are where we use some of our functions
  start();

  map();

  hint();

  //below is a click function that allows the user to get hints on how to play when they click the magnifying glass on the screen
  $("#hint").click(function (event) {
    $("#text").show();
    $("#text").html(hint());
    $("#text").css("top", "600px");
  }); //end of hint click

  //below is a click function that takes the player to the START location when start is clicked on the map
  $("#start").click(function (event) {
    //below are html objects that are either hidden or showed or adjusted for the new location
    check = "start";
    $("#store").hide();
    $("#npc1").hide();
    $("#npc2").hide();
    $("#npc3").hide();
    $("#npc4").hide();
    $("#npc5").hide();
    $("#input2").hide();
    $("#input").hide();
    $("#house").hide();
    $("#screen").css("content", "url('pictures/screen1.png')");
    $("#here").css("top", "710px");
    $("#here").css("left", "440px");
    $("#character").css("top", "500px");
    $("#character").css("left", "900px");
    $("#character").css("height", "120px");
    $("#character").css("width", "80px");
    $("#mapOpen").hide();
    $("#goBack").hide();
    $("#here").hide();
    $("#start").hide();
    $("#forest").hide();
    $("#stones").hide();
    $("#mountain").hide();
    $("#village").hide();
    $("#desert").hide();
    $("#monster").hide();
    $("#pig").hide();
    $("#spear").hide();
    $("#meat").hide();
    $("#chest").hide();
    $("#person").hide();
    $("#mage").hide();
    $("#arrow").hide();
    $("#upArrow").hide();
    $("#boss").hide();
    $("#health").hide();
    $("#boat").hide();
    $("#thanks").hide();
  }); //end of start click

  //below is a click function that takes the player to the STONES location when stones is clicked on the map
  $("#stones").click(function (event) {
    //below are html objects that are either hidden or showed or adjusted for the new location
    check = "stones";
    $("#store").hide();
    $("#npc1").hide();
    $("#npc2").hide();
    $("#npc3").hide();
    $("#npc4").hide();
    $("#npc5").hide();
    $("#input2").hide();
    $("#input").hide();
    $("#house").hide();
    $("#pig").show();
    $("#screen").css("content", "url('pictures/stones.png')");
    $("#character").css("top", "900px");
    $("#character").css("left", "1000px");
    $("#character").css("height", "120px");
    $("#character").css("width", "80px");
    $("#here").css("top", "720px");
    $("#here").css("left", "680px");
    $("#mapOpen").hide();
    $("#goBack").hide();
    $("#here").hide();
    $("#start").hide();
    $("#forest").hide();
    $("#stones").hide();
    $("#mountain").hide();
    $("#village").hide();
    $("#desert").hide();
    $("#monster").hide();
    $("#spear").hide();
    $("#chest").hide();
    $("#person").hide();
    $("#mage").hide();
    $("#arrow").hide();
    $("#upArrow").hide();
    $("#boss").hide();
    $("#health").hide();
    $("#boat").hide();
    $("#thanks").hide();

    //below hides the map if the player enters the STONES area and has a spear to indicate that it has a use in this location
    if (spear == true && y == 0) {
      $("#map").hide();
      y++;
    }
    //below shows text when the pig is clicked
    $("#pig").click(function (event) {
      $("#text").show();

      $("#text").html("mmm, that pig sure looks tasty!");
    }); //end of pig click

    //below is a click function that uses a function which kills the pig and shows its meat when the spear in this location is clicked
    $("#item1").click(function (event) {
      useItem(check, spear);
    }); //end of item1 click

    //below is a click function that sets the item meat to true, when its clicked so it shows up in the inventory
    $("#meat").click(function (event) {
      $("#text").show();

      $("#text").html("You aquired MEAT!");

      $("#meat").remove();

      $("#map").show();

      meat = true;
    }); //end of meat click
  }); //end of stones click

  //below is a click function that takes the player to the FOREST location when forest is clicked on the map
  $("#forest").click(function (event) {
    //below are html objects that are either hidden or showed or adjusted for the new location
    check = "forest";
    $("#store").hide();
    $("#npc1").hide();
    $("#npc2").hide();
    $("#npc3").hide();
    $("#npc4").hide();
    $("#npc5").hide();
    $("#input2").hide();
    $("#input").hide();
    $("#house").hide();
    $("#screen").css("content", "url('pictures/forest.png')");
    $("#here").css("top", "400px");
    $("#here").css("left", "400px");
    $("#character").css("top", "930px");
    $("#character").css("left", "900px");
    $("#character").css("height", "120px");
    $("#character").css("width", "80px");
    $("#monster").show();
    $("#mapOpen").hide();
    $("#goBack").hide();
    $("#here").hide();
    $("#start").hide();
    $("#forest").hide();
    $("#stones").hide();
    $("#mountain").hide();
    $("#village").hide();
    $("#desert").hide();
    $("#pig").hide();
    $("#spear").hide();
    $("#meat").hide();
    $("#chest").hide();
    $("#person").hide();
    $("#mage").hide();
    $("#arrow").show();
    $("#upArrow").hide();
    $("#boss").hide();
    $("#health").hide();
    $("#boat").hide();
    $("#thanks").hide();

    //below is code to show a green border around an object when the mouse hovers over it, showing that it can be interacted with
    $("#monster").mouseenter(function (event) {
      $("#monster").css("border", "solid");
      $("#monster").css("border-color", "green");
    }); //end of monster mouse enter

    //below is code to get rid of the green border when the mouse leaves the object
    $("#monster").mouseleave(function (event) {
      $("#monster").css("border", "");
    }); //end of monster mouse leave

    //below is dialoge for the monster in the forest, he can potentially say two different things depending on what the player does
    $("#monster").click(function (event) {
      //below is code that askes the user to enter the name of one of the game developers, if the player has the required items, and see if its what the monster was thinking, if so then they can get past
      if (newItem == "nothing") {
        $("#input").show();
        $("#input2").show();
        $("#text").show();
        $("#text").html(
          "I'm thinking of a random name of one the creators of the game, which is it? hint: The creators are Arvin, Jacob and Uzair!"
        );

        $("#input2").click(function (event) {
          guess = $("#input").val();

          $("#text").html(passWord(guess));
        });
      } else {
        $("#text").show();
        $("#text").html("...");
      }
    }); //end of monster click

    //below is code that gives the monster a jewel if the player has it and clicks on it in his inventory
    $("#item2").click(function (event) {
      //if the player gives the monster the jewel then the monster will be able to ask the player a puzzle to solve
      if (check == "forest" && newItem == "jewel") {
        $("#text").show();
        $("#text").html(
          "Thats mine! how did you find it? anyway thanks, I guess I should let you past but not until you solve my puzzle!"
        );

        $("#item2").css("content", "url('pictures/nothing.png')");
        newItem = "nothing";
      }
    }); //end of item2 click

    //below is code to show a green border around an object when the mouse hovers over it, showing that it can be interacted with
    $("#arrow").mouseenter(function (event) {
      $("#arrow").css("border", "solid");
      $("#arrow").css("border-color", "green");
    }); //end of arrow mouse enter

    //below is code to get rid of the green border when the mouse leaves the object
    $("#arrow").mouseleave(function (event) {
      $("#arrow").css("border", "");
    }); //end of arrow mouse leave

    //below is code that takes the player to a temple area if the arrow in the forest is clicked
    $("#arrow").click(function (event) {
      //below are html objects that are either hidden or showed or adjusted for the new location
      $("#screen").css("content", "url('pictures/temple.png')");
      $("#arrow").hide();
      $("#mage").show();
      $("#upArrow").show();
    }); //end of arrow click

    //below is code to show a green border around an object when the mouse hovers over it, showing that it can be interacted with
    $("#mage").mouseenter(function (event) {
      $("#mage").css("border", "solid");
      $("#mage").css("border-color", "green");
    }); //end of mage mouse enter

    //below is code to get rid of the green border when the mouse leaves the object
    $("#mage").mouseleave(function (event) {
      $("#mage").css("border", "");
    }); //end of mage mouse leave

    //below uses a function to show a puzzle when the mage is clicked
    $("#mage").click(function (event) {
      puzzle();
    }); //end of mage click

    //below is code to show a green border around an object when the mouse hovers over it, showing that it can be interacted with
    $("#upArrow").mouseenter(function (event) {
      $("#upArrow").css("border", "solid");
      $("#upArrow").css("border-color", "green");
    }); //end of upArrow mouse enter

    //below is code to get rid of the green border when the mouse leaves the object
    $("#upArrow").mouseleave(function (event) {
      $("#upArrow").css("border", "");
    }); //end of upArrow mouse leave

    //below is code that takes the user to a new area when the arrow in the temple area is clicked
    $("#upArrow").click(function (event) {
      //below are html objects that are either hidden or showed or adjusted for the new location
      $("#screen").css("content", "url('pictures/temple2.png')");
      $("#health").show();
      $("#upArrow").hide();
      $("#map").hide();
      $("#inventory").hide();
      $("#boss").show();
      $("#character").css("left", "500px");
      $("#character").css("content", "url('pictures/character2.png')");
      $("#text").show();
      $("#text").html(
        "Thats the boat right there! But it looks like this thing is protecting it. Good thing I have my spear!"
      );
      $("#boat").show();
    }); //end of upArrow click

    //below is code to show a green border around an object when the mouse hovers over it, showing that it can be interacted with
    $("#boss").mouseenter(function (event) {
      $("#boss").css("border", "solid");
      $("#boss").css("border-color", "green");
    }); //end of boss mouse enter

    //below is code to get rid of the green border when the mouse leaves the object
    $("#boss").mouseleave(function (event) {
      $("#boss").css("border", "");
    }); //end of boss mouse leave

    //below is code that allows the user to attack the boss
    $("#boss").click(function (event) {
      count++;

      if (count == 1) {
        health = health - 1;

        $("#character").css("left", "1300px");
        $("#health").html("HEALTH: " + health);

        if (health == 0) {
          $("#boss").remove();
          $("#text").show();
          $("#text").html("I've done it! Now I can go home!");
          $("#thanks").fadeIn(5000);
        }
      } else {
        $("#character").css("left", "500px");
      }
      if (count >= 2) {
        count = 0;
      }
    }); //end of boss click
  }); //end of forest click

  //below is a click function that takes the player to the MOUNTAIN location when mountain is clicked on the map
  $("#mountain").click(function (event) {
    //below are html objects that are either hidden or showed or adjusted for the new location
    check = "mountain";
    $("#store").hide();
    $("#npc1").hide();
    $("#npc2").hide();
    $("#npc3").hide();
    $("#npc4").hide();
    $("#npc5").hide();
    $("#input2").hide();
    $("#input").hide();
    $("#house").hide();
    $("#screen").css("content", "url('pictures/mountain.png')");
    $("#character").css("top", "900px");
    $("#character").css("left", "600px");
    $("#character").css("height", "120px");
    $("#character").css("width", "80px");
    $("#here").css("top", "350px");
    $("#here").css("left", "1130px");
    $("#mapOpen").hide();
    $("#goBack").hide();
    $("#here").hide();
    $("#start").hide();
    $("#forest").hide();
    $("#stones").hide();
    $("#mountain").hide();
    $("#village").hide();
    $("#desert").hide();
    $("#monster").hide();
    $("#pig").hide();
    $("#spear").hide();
    $("#meat").hide();
    $("#chest").show();
    $("#person").hide();
    $("#mage").hide();
    $("#arrow").hide();
    $("#upArrow").hide();
    $("#boss").hide();
    $("#health").hide();
    $("#boat").hide();
    $("#thanks").hide();

    //below is code to show a green border around an object when the mouse hovers over it, showing that it can be interacted with
    $("#chest").mouseenter(function (event) {
      $("#chest").css("border", "solid");
      $("#chest").css("border-color", "green");
    }); //end of chest mouse enter

    //below is code to get rid of the green border when the mouse leaves the object
    $("#chest").mouseleave(function (event) {
      $("#chest").css("border", "");
    }); //end of chest mouse leave

    //below shows text when the chest is clicked
    $("#chest").click(function (event) {
      $("#text").show();
      $("#text").html("Hmm, a chest. I wonder if it needs a key!");
    }); //end of chest click

    //below is code that opens the chest when the key in your inventory is clicked
    $("#item2").click(function (event) {
      if (check == "mountain" && newItem == "key") {
        $("#text").show();

        $("#text").html(
          "You opened the chest but all that was inside was a weird BALL!"
        );

        $("#chest").css("content", "url('pictures/chest2.png')");
        $("#item2").css("content", "url('pictures/ball.png')");
        newItem = "ball";
      }
    }); //end of item2 click
  }); //end of mountain click

  //below is a click function that takes the player to the VILLAGE location when village is clicked on the map
  $("#village").click(function (event) {
    //below are html objects that are either hidden or showed or adjusted for the new location
    check = "village";
    $("#store").hide();
    $("#npc1").hide();
    $("#npc2").hide();
    $("#npc3").hide();
    $("#npc4").hide();
    $("#npc5").hide();
    $("#input2").hide();
    $("#input").hide();
    $("#screen").css("content", "url('pictures/village.png')");
    $("#character").css("top", "300px");
    $("#character").css("left", "800px");
    $("#character").css("height", "70px");
    $("#character").css("width", "50px");
    $("#here").css("top", "400px");
    $("#here").css("left", "900px");
    $("#mapOpen").hide();
    $("#goBack").hide();
    $("#here").hide();
    $("#start").hide();
    $("#forest").hide();
    $("#stones").hide();
    $("#mountain").hide();
    $("#village").hide();
    $("#desert").hide();
    $("#monster").hide();
    $("#pig").hide();
    $("#spear").hide();
    $("#meat").hide();
    $("#house").show();
    $("#store").show();
    $("#chest").hide();
    $("#person").hide();
    $("#mage").hide();
    $("#arrow").hide();
    $("#upArrow").hide();
    $("#boss").hide();
    $("#health").hide();
    $("#boat").hide();
    $("#thanks").hide();

    //below takes the player into the house when its clicked on in the village area
    $("#house").click(function (event) {
      //below are html objects that are either hidden or showed or adjusted for the new location
      check = "house";
      $("#npc1").show();
      $("#npc2").show();
      $("#npc3").show();
      $("#npc4").show();
      $("#house").hide();
      $("#store").hide();
      $("#screen").css("content", "url('pictures/house.png')");
      $("#character").css("top", "330px");
      $("#character").css("left", "800px");
      $("#character").css("height", "100px");
      $("#character").css("width", "60px");

      $("#text").show();
      $("#text").html("This place smells funny...");
    }); //end of house click

    //below is code to show a green border around an object when the mouse hovers over it, showing that it can be interacted with
    $("#npc1").mouseenter(function (event) {
      $("#npc1").css("border", "solid");
      $("#npc1").css("border-color", "green");
    }); //end of npc1 mouse enter

    //below is code to get rid of the green border when the mouse leaves the object
    $("#npc1").mouseleave(function (event) {
      $("#npc1").css("border", "");
    }); //end of npc1 mouse leave

    //below is code to show a green border around an object when the mouse hovers over it, showing that it can be interacted with
    $("#npc2").mouseenter(function (event) {
      $("#npc2").css("border", "solid");
      $("#npc2").css("border-color", "green");
    }); //end of npc2 mouse enter

    //below is code to get rid of the green border when the mouse leaves the object
    $("#npc2").mouseleave(function (event) {
      $("#npc2").css("border", "");
    }); //end of npc2 mouse leave

    //below is code to show a green border around an object when the mouse hovers over it, showing that it can be interacted with
    $("#npc3").mouseenter(function (event) {
      $("#npc3").css("border", "solid");
      $("#npc3").css("border-color", "green");
    }); //end of npc3 mouse enter

    //below is code to get rid of the green border when the mouse leaves the object
    $("#npc3").mouseleave(function (event) {
      $("#npc3").css("border", "");
    }); //end of npc3 mouse leave

    //below is code to show a green border around an object when the mouse hovers over it, showing that it can be interacted with
    $("#npc4").mouseenter(function (event) {
      $("#npc4").css("border", "solid");
      $("#npc4").css("border-color", "green");
    }); //end of npc4 mouse enter

    //below is code to get rid of the green border when the mouse leaves the object
    $("#npc4").mouseleave(function (event) {
      $("#npc4").css("border", "");
    }); //end of npc4 mouse leave

    //below is code to show a green border around an object when the mouse hovers over it, showing that it can be interacted with
    $("#npc5").mouseenter(function (event) {
      $("#npc5").css("border", "solid");
      $("#npc5").css("border-color", "green");
    }); //end of npc5 mouse enter

    //below is code to get rid of the green border when the mouse leaves the object
    $("#npc5").mouseleave(function (event) {
      $("#npc5").css("border", "");
    }); //end of npc5 mouse leave

    //below is code that gives the player a puzzle to solve in exchange for a gold coin when npc1 is clicked
    $("#npc1").click(function (event) {
      $("#input").show();
      $("#input2").show();
      $("#text").show();
      //shows the inputs the player uses to put in an answer

      $("#text").html(
        "I'm thinking of a number bewteen 1 and 10, if you guess it right, I will give you 1 GOLD COIN!"
      );
      num = Math.round(Math.random() * 9 + 1);
      //below checks to see if the number guess was right
      $("#input2").click(function (event) {
        guess = +$("#input").val();
        $("#input").hide();
        $("#input2").hide();

        if (guess == num) {
          $("#text").show();
          $("#text").html("WOW, you figured it out. I guess you deserve this!");
          gold = true;
          $("#npc1").remove();
        } else {
          $("#text").show();
          $("#text").html("HAHA, LOSER!!!");
        }
      }); //end of input2 click
    }); //end of npc1 click

    //below shows text when npc2 is clicked
    $("#npc2").click(function (event) {
      $("#text").show();
      $("#text").html("WHAT ARE YOU LOOKIN AT BUB!!!");
    }); //end of npc2 click

    //below shows text when npc3 is clicked
    $("#npc3").click(function (event) {
      $("#text").show();
      $("#text").html("Sorry but I don't talk to your kind");
    }); //end of npc3 click

    //below shows text when npc4 is clicked
    $("#npc4").click(function (event) {
      $("#text").show();
      $("#text").html(
        "Hey I have not eatin in 6 days, do you have some cooked meat. I'll give you something in return!"
      );
    }); //end of npc4 click

    //below gives the player cooked meat if he clicks the gold in his inventory and also has meat
    $("#item3").click(function (event) {
      if (check == "store") {
        $("#text").show();

        $("#text").html("You aquired COOKED MEAT!");

        $("#item2").css("content", "url('pictures/cookedMeat.png')");

        $("#item3").css("content", "url('pictures/nothing.png')");
        $("#npc5").remove();

        newItem = "cooked";
      } else {
        $("#text").show();

        $("#text").html("You can't use that here!");
      }
    }); //end of item3 click

    //below gives the player a key if he clicks the cooked meat in the house
    $("#item2").click(function (event) {
      if (check == "house" && newItem == "cooked") {
        $("#text").show();

        $("#text").html("You aquired a KEY!");

        $("#item2").css("content", "url('pictures/key.png')");
        $("#npc4").remove();
        newItem = "key";
      }
    }); //end of item2 click

    //below is code that takes the player into the store when store is clicked in the village
    $("#store").click(function (event) {
      //below are html objects that are either hidden or showed or adjusted for the new location
      check = "store";
      $("#npc5").show();
      $("#house").hide();
      $("#store").hide();
      $("#screen").css("content", "url('pictures/store.png')");
      $("#character").css("top", "760px");
      $("#character").css("left", "800px");
      $("#character").css("height", "120px");
      $("#character").css("width", "80px");
    }); //end of store click

    //below shows dialoge when npc5 is clicked
    $("#npc5").click(function (event) {
      if (meat == true) {
        $("#text").show();
        $("#text").html("I'll cook you that meat for 1 GOLD!");
      } else {
        $("#text").show();
        $("#text").html("GET LOST! I only cook MEAT for people with money.");
      }
    }); //end of npc5 click
  }); //end of village click

  //below is a click function that takes the player to the DESERT location when DESERT is clicked on the map
  $("#desert").click(function (event) {
    //below are html objects that are either hidden or showed or adjusted for the new location
    check = "desert";
    $("#store").hide();
    $("#npc1").hide();
    $("#npc2").hide();
    $("#npc3").hide();
    $("#npc4").hide();
    $("#npc5").hide();
    $("#input2").hide();
    $("#input").hide();
    $("#house").hide();
    $("#spear").show();
    $("#screen").css("content", "url('pictures/beach.png')");
    $("#character").css("height", "120px");
    $("#character").css("width", "80px");
    $("#character").css("top", "400px");
    $("#character").css("left", "800px");
    $("#here").css("top", "600px");
    $("#here").css("left", "1350px");
    $("#mapOpen").hide();
    $("#goBack").hide();
    $("#here").hide();
    $("#start").hide();
    $("#forest").hide();
    $("#stones").hide();
    $("#mountain").hide();
    $("#village").hide();
    $("#desert").hide();
    $("#monster").hide();
    $("#pig").hide();
    $("#meat").hide();
    $("#chest").hide();
    $("#person").show();
    $("#mage").hide();
    $("#arrow").hide();
    $("#upArrow").hide();
    $("#boss").hide();
    $("#health").hide();
    $("#boat").hide();
    $("#thanks").hide();

    //below puts the spear in the player's inventory when it is clicked
    $("#spear").click(function (event) {
      $("#text").show();

      $("#text").html("You aquired a SPEAR!");

      $("#spear").remove();

      spear = true;
    }); //end of spear click

    //below is code to show a green border around an object when the mouse hovers over it, showing that it can be interacted with
    $("#person").mouseenter(function (event) {
      $("#person").css("border", "solid");
      $("#person").css("border-color", "green");
    }); //end of person mouse enter

    //below is code to get rid of the green border when the mouse leaves the object
    $("#person").mouseleave(function (event) {
      $("#person").css("border", "");
    }); //end of person mouse leave

    //below shows different dialoge, based on what the player has done, when person is clicked
    $("#person").click(function (event) {
      if (newItem == "jewel" || newItem == "nothing") {
        $("#text").show();
        $("#text").html("Thanks again!");
      } else {
        $("#text").show();
        $("#text").html(
          "Whats that? you need help getting home? well you came to the right guy but I will not work for free"
        );

        $("#person").click(function (event) {
          $("#text").show();

          $("#text").html(
            "If you can get my stuff I left in a chest in the mountains, I will help you get past that forest freak. I left the key with my friend in a house located in the village."
          );
        }); //end of person click
      }
    }); //end of person click

    //below is code that gives the ball to the person in the desert in exchange for a jewel
    $("#item2").click(function (event) {
      if (check == "desert" && newItem == "ball") {
        $("#text").show();
        $("#text").html(
          "Wow! you actualy got it, thanks! Here you go, its a jewel I stole from that forest monster. He has been looking for this so if you show him this he should let you past!"
        );

        $("#item2").css("content", "url('pictures/jewel.png')");
        newItem = "jewel";
      }
    }); //end of item2 click
  }); //end of desert click

  //below is code to show a green border around an object when the mouse hovers over it, showing that it can be interacted with
  $("#inventory").mouseenter(function (event) {
    $("#inventory").css("height", "110px");
    $("#inventory").css("width", "120px");
    $("#inventory").css("left", "1760px");
  }); //end of inventory mouse enter

  //below is code to get rid of the green border when the mouse leaves the object
  $("#inventory").mouseleave(function (event) {
    $("#inventory").css("height", "100px");
    $("#inventory").css("width", "110px");
    $("#inventory").css("left", "1750px");
  }); //end of inventory mouse leave

  //below is code that opens up the inventory when its icon is clicked
  $("#inventory").click(function (event) {
    $("#backPack").show();
    $("#goBack2").show();

    if (spear == true) {
      $("#item1").show();
    }
    if (meat == true) {
      $("#item2").show();
    }
    if (gold == true) {
      $("#item3").show();
    }
  }); //end of inventory click

  //below is code to show a green border around an object when the mouse hovers over it, showing that it can be interacted with
  $("#goBack2").mouseenter(function (event) {
    $("#goBack").css("height", "110px");
    $("#goBack").css("width", "120px");
  }); //end of goBack2 mouse enter

  //below is code to get rid of the green border when the mouse leaves the object
  $("#goBack2").mouseleave(function (event) {
    $("#goBack").css("height", "100px");
    $("#goBack").css("width", "110px");
  }); //end of goBack2 mouse leave

  //below is code that allows the player to exit out of the inventory
  $("#goBack2").click(function (event) {
    $("#backPack").hide();
    $("#goBack2").hide();
    $("#item1").hide();
    $("#item2").hide();
    $("#item3").hide();
  }); //end of goBack2 click
}); //end of ready function
//below are our functions

/*******************************************************************
 ******************Below is a function with no parameters*************
 *******************************************************************/
//the function below shows dialoge for the begining of the game, when the player clicks on the stranger
function start() {
  $("#stranger").mouseenter(function (event) {
    $("#stranger").css("border", "solid");
    $("#stranger").css("border-color", "green");
  }); //end of map mouse enter

  $("#stranger").mouseleave(function (event) {
    $("#stranger").css("border", "");
  }); //end of map mouse leave

  $("#stranger").click(function (event) {
    $("#text").show();

    $("#text").html(
      "Oh hello there, I saw you wash up on shore. You seem lost."
    );

    $("#stranger").click(function (event) {
      $("#text").show();

      $("#text").html("Do you need help getting back home?");

      $("#yes").show();
      $("#no").show();

      $("#yes").click(function (event) {
        $("#yes").hide();
        $("#no").hide();

        $("#text").html(
          "Alright well the only way off this island is a boat but I lost mine in the forest somewhere."
        );

        $("#stranger").click(function (event) {
          $("#yes").hide();
          $("#no").hide();

          $("#text").html(
            "If you somehow find it, you can have it and use it to get home."
          );

          $("#stranger").click(function (event) {
            $("#yes").hide();
            $("#no").hide();

            $("#text").html(
              "You might need this map and backpack and to start you might want to visit my friend in the DESERT, he might help you!"
            );

            $("#inventory").show();
            $("#map").show();
            $("#stranger").hide();
          }); //end of screen
        }); //end of screen
      }); //end of screen

      $("#no").click(function (event) {
        $("#yes").hide();
        $("#no").hide();

        $("#text").html("................................");
      }); //end of screen
    }); //end of screen
  }); //end of map click
}

/*******************************************************************
 ******************Below is a function with no parameters*************
 *******************************************************************/
//the below function allows the player to open up the map by clicking the map icon in the top right corner of the screen and then choose a location on the island to go to
function map() {
  $("#map").mouseenter(function (event) {
    $("#map").css("height", "100px");
    $("#map").css("width", "110px");
    $("#map").css("left", "1630px");
  }); //end of map mouse enter

  $("#map").mouseleave(function (event) {
    $("#map").css("height", "90px");
    $("#map").css("width", "100px");
    $("#map").css("left", "1640px");
  }); //end of map mouse leave

  $("#map").click(function (event) {
    $("#mapOpen").show();
    $("#goBack").show();
    $("#here").show();
    $("#start").show();
    $("#forest").show();
    $("#stones").show();
    $("#mountain").show();
    $("#village").show();
    $("#desert").show();
  }); //end of map click

  $("#goBack").mouseenter(function (event) {
    $("#goBack").css("height", "110px");
    $("#goBack").css("width", "120px");
  }); //end of map mouse enter

  $("#goBack").mouseleave(function (event) {
    $("#goBack").css("height", "100px");
    $("#goBack").css("width", "110px");
  }); //end of map mouse leave

  $("#goBack").click(function (event) {
    $("#mapOpen").hide();
    $("#goBack").hide();
    $("#here").hide();
    $("#start").hide();
    $("#forest").hide();
    $("#stones").hide();
    $("#mountain").hide();
    $("#village").hide();
    $("#desert").hide();
  }); //end of goBack click
}

/***********************************************************************************************************************************
 ******************Below is a function with a parameter that returns a value and also has an array and a string function*************
 ***********************************************************************************************************************************/
//the function below randomly chooses one of the thre names in the array and asks the player to guesss which one was chosen, if guessed correctly, the player then can go past the monster
function passWord(guess) {
  //below is an array
  let creators = ["ARVIN", "JACOB", "UZAIR"];
  let answer = creators[Math.round(Math.random() * 2)];

  //below uses the string function .toUpperCase
  guess = guess.toUpperCase();

  if (guess == answer) {
    $("#input").hide();
    $("#input2").hide();
    newItem = "empty";
    $("#monster").remove();
    $("#arrow").css("height", "140px");
    $("#arrow").css("width", "150px");
    return "WOW! YOU GOT IT! You can go past now!";
  } else {
    $("#input").hide();
    $("#input2").hide();
    return "NOPE, THATS NOT IT!";
  }
}

/**********************************************************************************************************************
 ******************Below is a function with no parameters that also has bubble sorting and a string function*************
 **********************************************************************************************************************/
//below is a function that chooses 4 random numbers that range from 1 to 100 and asks the player to enter them from smallest to greatest
function puzzle() {
  let numbers = [];
  let sorted = "";

  for (let x = 0; x < 4; x++) {
    numbers.push(Math.round(Math.random() * 99 + 1));
  }

  let riddle =
    "Before I let you past, you must solve my puzzle! Rearrange these numbers from smallest to greatest: numbers2";
  //below uses the string function .replace
  riddle = riddle.replace("numbers2", numbers);

  $("#text").show();

  $("#text").html(riddle);

  //below is bubbles sorting
  for (
    let x = 0;
    x < numbers.length;
    x++ //# of passes
  ) {
    for (
      let y = 0;
      y < numbers.length - 1;
      y++ //comparing pairs
    ) {
      if (numbers[y] > numbers[y + 1]) {
        //if true then swap
        temp = numbers[y];
        numbers[y] = numbers[y + 1];
        numbers[y + 1] = temp;
      }
    }
  }
  //below shows inputs for the player's guess
  $("#input").show();
  $("#input2").show();
  //below checks if the player guesses right
  $("#input2").click(function (event) {
    sorted = $("#input").val();

    if (sorted == numbers) {
      $("#text").show();

      $("#text").html("You got it! Go on in!");
      $("#input").hide();
      $("#input2").hide();
      $("#mage").remove();
      $("#upArrow").css("height", "300px");
      $("#upArrow").css("width", "200px");
    } else {
      $("#text").html("WRONG!");
      $("#input").hide();
      $("#input2").hide();
    }
  }); //end of input2 click
}

/************************************************************
 ******************Below is a function with parameters*************
 *************************************************************/
//below is a function that allows the player to use the spear to kill the pig in the stones area by clicking it in the inventory
function useItem(check, spear) {
  if (check == "stones" && spear == true) {
    $("#text").show();
    $("#text").html("You killed the poor pig with your spear!");
    $("#pig").remove();
    $("#meat").show();
  } else {
    $("#text").show();
    $("#text").html("You can't use that here!");
  }
}

/*****************************************************************************************
 ******************Below is a function with no parameters that returns a value*************
 ******************************************************************************************/
//below is a function that allows the player to get hints on how to play the game by clicking tha magnifying glass in the corner of the screen
function hint() {
  $("#hint").mouseenter(function (event) {
    $("#hint").css("border", "solid");
    $("#hint").css("border-color", "green");
  });

  $("#hint").mouseleave(function (event) {
    $("#hint").css("border", "");
  });

  return "1.Go to the DESERT and get the SPEAR <br> 2.Go to the STONES, kill the PIG and get it's MEAT <br> 3.Go to the VILLAGE, go into the HOUSE and talk to the man on the chair <br> 4.Go to the STORE in the VILLAGE, cook the MEAT and give it to the man in the HOUSE <br> 5.Go to the MOUNTAINS and use the KEY <br> 6.Give the BALL to the man in the DESERT <br> 7.Give the JEWEL to the monster in the FOREST <br> 8.Click on the BOSS to attack him";
}
