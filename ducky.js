window.onload = function () {
  const body = document.body;
  let width = window.innerWidth;
  let height = window.innerHeight;
  //Dock object
  let duckPositionX = width/2;
  let duckPositionY = height * .65;
  //starting Angle when duck is generated
  let angleMarkerX = randomPosition(100, width - 100);
  let angleMarkerY = height;
  let score = document.getElementsByClassName('duck');
  const intro = new sound("audio/start-round.mp3");
  const bang = new sound('audio/bang.wav');
  const bang2 = new sound('audio/bang.wav');



    console.log(body);

  // 1. Create a <div> with the class "duck" and add it to the body.  Do this step by step
  // ( 1. create the element
  //   2. add a class to the element
  //   3. append the element to the body )

  // let duck = document.createElement('div');
  
  // duck.className = 'duck';
  // body.appendChild(duck);


  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  // https://www.w3schools.com/jsref/met_win_setinterval.asp

  // 3. Now, let's move the duck using CSS "duckPositionX" and "duckPositionY". Create
  // a function `moveDuck` that takes a duck object as an argument and sets the
  // "duckPositionX" and "duckPositionY" CSS properties.
  // HINT: Use Math.random() * window.innerWidth    for "duckPositionY"
  //       And Math.random() * window.innerHeight   for "duckPositionX"

  // 4. Try making the duck move to a different location every second (what did we use to do this several lines up??)

  // 5. Congratulations! Move on to part 2!

    //random range generator
    function randomPosition(min, max){
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    //Ducks House
    const ducks = [];  
  
    //Update game loop
    setInterval(function(){
      for(let i = 0; i < ducks.length; i++){
        ducks[i].update();
        dog.update();
        checkForWinner();
        scoreBoard.textContent = 'count: ' + score.length;
      }
    }, 200);

    class Shot{
      constructor(xpos, ypos){
        this.xpos = xpos;
        this.ypos = ypos;
      }
      shoot(){
        document.addEventListener('click', this.showShot);        
      }
      showShot(event) {
        this.shot = document.createElement('div');
        this.shot.className = 'shot';
        body.appendChild(this.shot);
        this.shot.style.left = `${event.clientX - 40}px`;
        this.shot.style.top = `${event.clientY - 40}px`;
        bang.play('audio/bang.wav')
        let remove = this.shot;
        setTimeout(function(){
          remove.parentNode.removeChild(remove);
           },200);
      }   
    }
    class Dog {
      constructor(){
        this.xpos = width * .11;
        this.ypos = height * .50;
        this.spritePositionX = 0;
        this.spritePositionY = 0;
      }
      createDog(){
        this.dog = document.createElement('div');
        this.dog.className = 'dog';
        body.appendChild(this.dog);
        this.dog.style.backgroundPosition = `-${this.spritePositionX}px -${this.spritePositionY}px`;

      }
      drawDog(){
        this.dog.style.backgroundPosition = `-${this.spritePositionX}px -${this.spritePositionY}px`;
        this.dog.style.left = `${this.xpos}px`
        this.dog.style.top = `${this.ypos}px`
      }
      moveDog(){
        if(this.spritePositionX < 1175){
          this.spritePositionX = this.spritePositionX + 195;
        }else{ this.spritePositionX === 0}
      }
      update(){
        this.drawDog();
        this.moveDog();
      }
    }

    class Duck{
      constructor(xpos, ypos, spritePositionX, spritePositionY){
        this.xpos = xpos;
        this.ypos = ypos;
        this.spritePositionX = spritePositionX;
        this.spritePositionY = spritePositionY;
        this.speedx = [-185, 125, -50, 50, -75, 75, -100, 190];
        this.speedy = [-115, -120, -175, -10, -90, -80, -100, -180];
        this.duckSpeedSelector = Math.floor(Math.random() * 8);
      }
      createElement(){
        this.duck = document.createElement('div');
        this.duck.className = 'duck';
        body.appendChild(this.duck);
      }
      removeDuck(){
            document.addEventListener('click', function(e){
          if(e.target.className === 'duck'){
            setTimeout(function(){
              body.removeChild(e.target);
            }, 100);
          }
        });
      }
      // duckOutOfView(){
      //   if(this.duck.style.left + this.xpos > width||this.duck.style.left + this.xpos - 200 < 0||this.duck.style.top + this.ypos + 200 < 0){
      //     console.log('duck off screen')
      //   }    
      // }
      duckMove(){
        //detects Angle of duck to determine Sprite.
        this.angle = Math.atan2(angleMarkerY - this.ypos, angleMarkerX - this.xpos);
        //detect the angle at take off in respect to the angleMarker position at bottom center
        if(this.angle <= .78  && this.angle > 0){ if(this.spritePositionX === 550){ this.spritePositionX = 962;} else{ this.spritePositionX = 550;}} 
        if(this.angle > .78 && this.angle <= 1.56){ if(this.spritePositionX === 100){ this.spritePositionX = 430;} else{ this.spritePositionX = 100;}} 
        if(this.angle > 1.56 && this.angle <= 2.34){ if(this.spritePositionX === 200){ this.spritePositionX = 300;} else{ this.spritePositionX = 200;}} 
        if(this.angle > 2.34 && this.angle <= 3.14){ if(this.spritePositionX === 680){ this.spritePositionX = 830;} else{ this.spritePositionX = 680}}    
        //Add to position with each frame 
              this.xpos += this.speedx[this.duckSpeedSelector];
              this.ypos += this.speedy[this.duckSpeedSelector]; 
          }
      duckDraw(){
        //Location on spritesheet
        this.duck.style.backgroundPosition = `-${this.spritePositionX}px -${this.spritePositionY}px`;   
        // Handle duck position
        this.duck.style.top = `${this.ypos}px`;
        this.duck.style.left = `${this.xpos}px`; 
         }
      update(){
        this.duckDraw();
        this.duckMove();
        this.removeDuck();
        // this.duckOutOfView();
        }
    }

    //Wait 2 seconds to start game
    function startGame(){
      // intro.play();
      setTimeout(function(){
      for(let i = 0; i < 3; i++){
        ducks.push(new Duck(randomPosition(60, width -60), duckPositionY, 100, 160));
        //Check for duplicate positions;
        ducks[i].createElement();
        }
      }, 200);
    }

    function checkForWinner(){
      if(score.length <= 0){
        console.log(score.length)
        let winner = document.createElement('div');
        body.appendChild(winner);
        winner.style.className = 'winner';
        winner.style.width = `${width/2}px`;
        winner.style.height = `${height/2}px`;
        // winner.style.border = '3px solid';
        // winner.style.backgroundColor = 'green';
        winner.style.textAlign = 'center';
        winner.style.margin = '0px';
        winner.style.borderRadius ='5px';
        winner.style.fontSize = `${width * .05}px`;
        winner.style.position = 'absolute';
        winner.style.left = `${width * .28}px`
        winner.style.top = `${height * .40}px`
        winner.textContent = 'YOU WIN!!';
      
        const clearDucks = document.querySelectorAll('duck');
        clearDucks.forEach(function(clearDucks){
          clearDucks.remove();
        })
        return true;
      }
    }
    
    //Lets keep score
    let scoreBoard = document.createElement('div');
    body.appendChild(scoreBoard);
    scoreBoard.style.className = 'score';
    scoreBoard.style.width = '150px';
    scoreBoard.style.height ='50px';
    scoreBoard.style.border = '3px solid';
    scoreBoard.style.textAlign = 'center';
    scoreBoard.style.margin = '5px';
    scoreBoard.style.borderRadius ='5px';
    scoreBoard.style.fontSize = '30px'
    scoreBoard.style.position = 'absolute';
    scoreBoard.style.left = `${width - 170}px`
    scoreBoard.style.top = `${height * .01}px`

    //Sound Constructor
    function sound(src) {
      this.sound = document.createElement("audio");
      this.sound.src = src;
      this.sound.setAttribute("preload", "auto");
      this.sound.setAttribute("controls", "none");
      this.sound.style.display = "none";
      document.body.appendChild(this.sound);
      this.play = function(){
          this.sound.play();
      }
      this.stop = function(){
          this.sound.pause();
      }    
  }
    startGame();
    const dog = new Dog();
    const shot = new Shot();
    dog.createDog();
    shot.shoot();

  // ---------------------------- PART 2 ---------------------------------

  // 6. Now we will organize this better. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  //    and "returns" the duck object

  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function

  // 8. The ducks are overlapping.  Modify createDuck so each time
  //     it creates a duck, it appears in a random location
  // HINT: You may want to create a `randomPosition()` function that you can use
  //       to set the ducks' initial locations and in your `moveDuck()` function;

  // 9. Keep going! Move onto part 3!

  // --------------------------- PART 3 ------------------------------------

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!

  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second) Hint Hint...use setTimeout
  //     as for removing the element check out https://dzone.com/articles/removing-element-plain

  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks duckPositionY. (How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. BONUS: Add the "duckPositionY" and "right" class to the duck based on the
  //     direction the duck is flying and change the way the duck is facing

  // Done, you have accomplish another level of skill
};
