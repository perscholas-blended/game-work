window.onload = function () {
  const body = document.body;
    let width = window.innerWidth;
    let height = window.innerHeight;
    //Dock object
    let duckPositionX = Math.random() * width - 100;
    let duckPositionY = height/2;
    //starting Angle when duck is generated
    let angleMarkerX = width/2;
    let angleMarkerY = height;

    //duck speeds and directions
    let speedx = [-125, 125, -50, 50, -75, 75, -100, 100];
    let speedy = [-45, -20, -75, -10, -90, -80, -100, -150];

    //random direction and speed selector
    let duckSpeed = Math.floor(Math.random() * 8);
    //Measure angle of duck compared to ground to determine sprite Animation.
    let angle;

    //Starting location of duck on sprite sheet.
    let position = 100;
    let Ypos = 160;
 


  console.log(body);

  // 1. Create a <div> with the class "duck" and add it to the body.  Do this step by step
  // ( 1. create the element
  //   2. add a class to the element
  //   3. append the element to the body )

  let duck = document.createElement('div');
  let flap = document.createElement('div');
  let shot = document.createElement('div');
  
  duck.className = 'duck';
  body.appendChild(duck);


  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  // https://www.w3schools.com/jsref/met_win_setinterval.asp

  // 3. Now, let's move the duck using CSS "duckPositionX" and "duckPositionY". Create
  // a function `moveDuck` that takes a duck object as an argument and sets the
  // "duckPositionX" and "duckPositionY" CSS properties.
  // HINT: Use Math.random() * window.innerWidth    for "duckPositionY"
  //       And Math.random() * window.innerHeight   for "duckPositionX"

  // 4. Try making the duck move to a different location every second (what did we use to do this several lines up??)

  // 5. Congratulations! Move on to part 2!

 
  
    setInterval(function(){
        duckDraw();
        duckMove(); 
    }, 120);

    function duckMove(){
        //detects Angle of duck to determine Sprite.
        angle = Math.atan2(angleMarkerY - duckPositionY, angleMarkerX - duckPositionX);
      
        if(angle <= .78  && angle > 0){ if(position === 550){ position = 962;} else{ position = 550;}} 
        if(angle > .78 && angle <= 1.56){ if(position === 100){ position = 430;} else{ position = 100;}} 
        if(angle > 1.56 && angle <= 2.34){ if(position === 200){ position = 300;} else{ position = 200;}} 
        if(angle > 2.34 && angle <= 3.14){ if(position === 680){ position = 830;} else{ position = 680}}    
        //Add to position with each frame 
        duckPositionY += speedy[duckSpeed];
        duckPositionX -= speedx[duckSpeed];            
    }

    function duckDraw(){
        //Location on spritesheet
        duck.style.backgroundPosition = `-${position}px -${Ypos}px`;   
        //Handle duck position
        duck.style.top = `${duckPositionY}px`;
        duck.style.left = `${duckPositionX}px`; 
    }

    function createDuck(){
      for(let i = 0; i < 5; i++){
        let div = document.createElement('div');
        div.className = 'duck';
        body.appendChild(div);
        div.style.backgroundPosition = `${position}px ${Ypos}px`;
        div.style.top = `${randomPosition(0,height * 75)}px`;
        console.log(duck);

      }
    }

    function randomPosition(min, max){
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    createDuck();


    
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
