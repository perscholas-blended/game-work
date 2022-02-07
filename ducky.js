window.onload = function () {
  const body = document.body;

  console.log(body);

  // 1. Create a <div> with the class "duck" and add it to the body.  Do this step by step
  // ( 1. create the element
  //   2. add a class to the element
  //   3. append the element to the body )
    let div = document.createElement('div');
    div.className = 'duck'
    document.body.appendChild(div);
    

  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  // https://www.w3schools.com/jsref/met_win_setinterval.asp
function flapAnim(){
  let flap = div.classList.toggle('flap')  //OMG THE PROBLEM WAS A FREAKING PERIOD!!!
}

   setInterval(flapAnim,230) 

  // 3. Now, let's move the duck using CSS "top" and "left". Create
  // a function `moveDuck` that takes a duck object as an argument and sets the
  // "top" and "left" CSS properties.
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"

function moveDuck(duck){
  let elements = document.getElementsByClassName("duck"); // I had no idea that this was treated as an array

  for (let i = 0; i < elements.length; i++) {  // loop through each element 
    elements[i].style.left = Math.floor(Math.random() * window.innerWidth)+'px'
    elements[i].style.top = Math.floor(Math.random() * window.innerHeight)+'px'
  }
}  

//RANDOM SNIPPET RELATED TO setInterval THAT MIGHT BE HELPFUL IN THE FUTURE
//********************************** */
// let timer;
// function startTimer() {
//     timer = setInterval(function() {
//         alert("5 seconds are up");
//     }, 5000);
// }
 
// function stopTimer() {
//     alert("Timer stopped");
//     clearInterval(timer);

//************************************** */

  // 4. Try making the duck move to a different location every second (what did we use to do this several lines up??)

  setInterval(moveDuck,1500) // Is this the answer??? I mean it is working so it must be the answer.


  // 5. Congratulations! Move on to part 2!

  // ---------------------------- PART 2 ---------------------------------

  // 6. Now we will organize this better. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  //    and "returns" the duck object

  function createDuck(){
    let div = document.createElement('div');
    div.className = 'duck'
    document.body.appendChild(div);   // It's working.
    function flapAnim(){
      let flap = div.classList.toggle('flap')
    }
       setInterval(flapAnim,250);    
  }
    for(let i = 0; i < 4; i++){
        createDuck()
    }
  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function


  // 8. The ducks are overlapping.  Modify createDuck so each time
  //     it creates a duck, it appears in a random location
  // HINT: You may want to create a `randomPosition()` function that you can use
  //       to set the ducks' initial locations and in your `moveDuck()` function;

  // function randomPosition(){
  
  // } ARE'NT THEY ALREADY IN RANDOM POSITIONS???

  
  // 9. Keep going! Move onto part 3!

  // --------------------------- PART 3 ------------------------------------

// WHERE IS NUMBER 10?????


  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!
 
function deadDuck(item){
    let removeBloodyDucks = ()=>{
      item.parentNode.removeChild(item);
    } //will remove duck bodies

    let duckDiv = item.className;
      if(duckDiv.includes('shot')){
        setTimeout(removeBloodyDucks, 100)
      }// responsible for checking the condition.

        // P.S.  this is #12

  }

   elements = document.querySelectorAll(".duck");
  // this part is basically what I did in #3
   for (let i = 0; i < elements.length; i++) { 
     // OMG IT WORKED?!?! I mean of course it worked.
      elements[i].addEventListener('click',boomBoom) // it does magic. jk. adds evenlistener for each item in the class duck
        function boomBoom () { // when called it will add 'shot' class to each item in the 'duck' class
          elements[i].classList.toggle('shot');  
          deadDuck(elements[i])
           setTimeout(chickenDinner,500)

        } 
    }
  
  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second) Hint Hint...use setTimeout
  //     as for removing the element check out https://dzone.com/articles/removing-element-plain
  
    //above #11




  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. (How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"
  function chickenDinner(){
    let winnerWinner = document.querySelectorAll('.duck');
    if(winnerWinner.length == 0){
     window.alert(" winner winner chicken dinner!! please don't tell nintendo about us. ") 
    }   
 }

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying and change the way the duck is facing

  // Done, you have accomplish another level of skill
};
