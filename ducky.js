window.onload = function () {
  const body = document.body;
  console.log(body);

  function createDuck() {
    //function to new create duck each time it is called.
    const duckdiv = document.createElement("div"); //create div element
    duckdiv.classList.add("duck"); // add duck class to duckdiv
    body.appendChild(duckdiv); // append div to body

    function randomPosition(duck) {
      //creating new duck at random position each time.
      duck.style.top = Math.random() * window.innerHeight + "px";
      duck.style.right = Math.random() * window.innerWidth + "px";
      duck.style.left = Math.random() * window.innerWidth + "px";
      duck.style.bottom = Math.random() * window.innerHeight + "px";
    }

    randomPosition(duckdiv);
    // for every 2.5sec duckdiv toggles with flap class
    setInterval(() => {
      duckdiv.classList.toggle("flap");
    }, 250);
    // moving duck to random position
    function moveDuck(duck) {
      duck.style.top = Math.random() * window.innerHeight + "px";
      duck.style.right = Math.random() * window.innerWidth + "px";
      duck.style.left = Math.random() * window.innerWidth + "px";
      duck.style.bottom = Math.random() * window.innerHeight + "px";
    }
    // moving duck randomly at regular interval by calling moveduck()
    setInterval(() => {
      moveDuck(duckdiv);
    }, 1000);
    return duckdiv;
  }
  let winnerTimer = null;
  // for loop to creat duck by calling creatDuck()
  for (let i = 0; i < 4; i++) {
    let newduck = createDuck();
    // On clicking duck add shot class to it
    newduck.addEventListener("click", function () {
      newduck.classList.add("shot");

      winnerTimer = setTimeout(() => {
        newduck.remove();
        checkForWinner();
      }, 500);
      // check for if any duck leftover. If no more duck left alert "you win"
      function checkForWinner() {
        let leftoverduck = document.getElementsByClassName("duck");
        if (leftoverduck.length == 0) {
          const windiv = document.createElement("div");
          windiv.classList.add("youwin");
          body.appendChild(windiv);
          let newh1 = document.createElement("h1");
          newh1.innerText = "You Win!!!";
          windiv.appendChild(newh1);
        }
      }
    });
  }
  // This time out function is called to complete the game in 8 sec , if duck still remains after 8 sec alert "you lost"
  setTimeout(() => {
    let gameover = document.getElementsByClassName("duck");
    if (gameover.length !== 0) {
      const lostdiv = document.createElement("div");
      lostdiv.classList.add("youwin");
      body.appendChild(lostdiv);
      let newh2 = document.createElement("h1");
      newh2.innerText = "You Lost!!!";
      lostdiv.appendChild(newh2);

      //clearout function will remove all remaining duck after time is out.
      clearTimeout(winnerTimer);
      for (let i = gameover.length - 1; i >= 0; i--) {
        gameover[i].remove();
      }
    }
  }, 8000);
};

// 1. Create a <div> with the class "duck" and add it to the body.  Do this step by step
// ( 1. create the element
//   2. add a class to the element
//   3. append the element to the body )

// 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
// https://www.w3schools.com/jsref/met_win_setinterval.asp

// 3. Now, let's move the duck using CSS "top" and "left". Create
// a function `moveDuck` that takes a duck object as an argument and sets the
// "top" and "left" CSS properties.

// HINT: Use Math.random() * window.innerWidth    for "left"
//       And Math.random() * window.innerHeight   for "top"

// 4. Try making the duck move to a different location every second (what did we use to do this several lines up??)

// 5. Congratulations! Move on to part 2!

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
//     to see if there are any ducks left. (How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"

// 14. BONUS: The ducks are moving pretty erratically, can you think
//     of a way to adjust the ducks speed based on how far needs to move?

// 15. BONUS: Add the "left" and "right" class to the duck based on the
//     direction the duck is flying and change the way the duck is facing

// Done, you have accomplish another level of skill
