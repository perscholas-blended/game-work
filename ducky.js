window.onload = function () {
  const body = document.body;

  console.log(body);

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

function createDuck(){


  //1
  const duck = document.createElement('div');
  duck.className = "duck";
  document.querySelector("body").appendChild(duck);

  duck.addEventListener("click",changeClass);

  //2,4
  const half_W = innerWidth/2;
  const interval = setInterval(toggle,250);
  
  function toggle(){

    duck.classList.toggle("flap");
    moveDuck(duck);
  }

  const randomPosition = () => {
    duck.style.left= "1000px";
    duck.style.top= "1000px";
  }


  let duck_position = duck.style.left;
  //3,15
  function moveDuck() {
    randomPosition(duck);
    duck.style.left = Math.random() * window.innerWidth + "px";
    duck.style.top = Math.random() * window.innerHeight+ "px";
  }

  //11,12 
  function changeClass(){
    duck.classList.add("shot");
    const remove = () => {
   document.querySelector(".duck.shot").remove();
     }; 
   const delay = setTimeout(remove,100);       
 }
 //14
 function speed(){
    duck.style.transitionTimingFunction = `cubic-bezier(${Math.random()*1},${Math.random()*1},${Math.random()*1},${Math.random()*1})`;
 }
  speed();
  
  //6
  return duck;
}

  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function

  for(let i  = 0; i < 5;i++){
    createDuck();
  }
 
  
  // 8. The ducks are overlapping.  Modify createDuck so each time
  //     it creates a duck, it appears in a random location
  // HINT: You may want to create a `randomPosition()` function that you can use
  //       to set the ducks' initial locations and in your `moveDuck()` function;

  // 9. Keep going! Move onto part 3!

  // --------------------------- PART 3 ------------------------------------

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!

  // const duck_b = document.querySelectorAll(".duck");
  // console.log(duck_b);
  // function changeClass(duck){
  //   duck.classList.add("shot");
  //   const remove = () => {
  //   document.querySelector(".duck.shot").remove();
  //     }; 
  //   const delay = setTimeout(remove,100);    
  // }
  // for(let j =0; j<duck_b.length; j++){
  //   duck_b[j].addEventListener("click",changeClass(duck_b[j]));
  // }

  // This code is not working cuz of the scope. Outside of the code will execute first no matter what 
  // so, my brower can't read ducks cuz there s no duck before the createduck(). Hoist and scope are key things to make any error. 

  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second) Hint Hint...use setTimeout
  //     as for removing the element check out https://dzone.com/articles/removing-element-plain


  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. (How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"

  const timer = setTimeout(checkForWinner,8000);

  function checkForWinner() {
    const left_duck = document.querySelectorAll(".duck");    
    if(left_duck.length == 0){
     alert("You Win!");
     location.reload();
    }
    else{
      alert(`${left_duck.length} ducks left, you should try harder!`);
      location.reload();
    }
  }
 
  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying and change the way the duck is facing

  // Done, you have accomplish another level of skill
};
