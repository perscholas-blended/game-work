window.onload = function () {
  const body = document.body;

  
  
  function createDuck(){
    // creating the div element
    let myDiv = document.createElement('div')
    // creating class name for div element
    myDiv.className = "duck";
    // appending div to body using appendChild
    document.body.appendChild(myDiv)

    setInterval(flappy, 250);
    setInterval(moveDuck,1000);
    
    function flappy(){
      // setting duck to flap but this doesnt do it in a loop so you need the else statement to ensure they flap
      if (myDiv.className === "duck"){
        myDiv.className= "duck flap";
      } 
      else if (myDiv.className === "duck flap") {
        myDiv.className= "duck";
      }
    }
    
    function moveDuck(){ // doesn't work if i feed myDiv
      myDiv.style.top=  (Math.random() * window.innerHeight).toString()+"px";
      myDiv.style.left = (Math.random() * window.innerWidth).toString() + 'px';
    }
  return myDiv
  }
  for (let i = 0; i < 5; i++){
    let returnDiv = createDuck();
    returnDiv.onclick = function() {myFunction(returnDiv)};
  }

  function myFunction(returnDiv) {
    returnDiv.className = "duck shot"; 
    setTimeout(anotherFunction, 1000);
    
    function anotherFunction(){
      returnDiv.parentNode.removeChild(returnDiv);
    }
  }

  setInterval(checkForWinner,2000)
  function checkForWinner() {
    console.log(document.getElementsByClassName("duck").length);
    if (0 === document.getElementsByClassName("duck").length){
      alert("YOU WIN, YOU WINNER WINNER NOW YOU GET A DUCK DINNER!!!!")
    }
  }
}
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
