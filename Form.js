class Form {
    constructor() {
      
    }
  
    display(){
        //We create a title for our game "Car Racing Game"
     //we create an h2 element.
        var title = createElement('h2')
      title.html("Car Racing Game");
      // we position the title on the canvas
      title.position(540,20);
      
      //. Similarly, we create the input and the button element.


      var input = createInput("Name");
      var button = createButton('Play');
      
      // We position the input and the button element.
      input.position(550, 220);
      button.position(600, 260);
  
      //button.mousePressed() can be used to trigger an action when a mouse
//button is pressed. It expects a function as an argument.

      button.mousePressed(function(){
        //hide the input and the buttons.

        input.hide();
        button.hide();
  
        var name = input.value();
        // increase the playerCount.
        playerCount+=1;
        //- update the playerCount  and the player name in the
       // database.
        player.update(name)
        player.updateCount(playerCount);

        //greet the player when the player has logged in.
        var greeting = createElement('h3');
        greeting.html("Hello " + name )
        greeting.position(400, 480)
      });
  
    }
  }