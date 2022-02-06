window.onload = function () {
  const body = document.body;

  console.log(body);

  // 1. Create a <div> with the class "duck" and add it to the body.  Do this step by step
  // ( 1. create the element
  let duckDiv= document.createElement("div");
  //   2. add a class to the element
  duckDiv.className = "duck";
  // duckDiv.style.transitionTimingFunction = 'cubic-bezier(0,0,1,1)';//testing
  // duckDiv.classList.toggle('right');//testing
  //   3. append the element to the body )
  body.appendChild(duckDiv);
  
 

  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  // https://www.w3schools.com/jsref/met_win_setinterval.asp
   setInterval(function(){duckDiv.classList.toggle("flap")}, 250);//duck started flapping the wings

  // 3. Now, let's move the duck using CSS "top" and "left". Create
  // a function `moveDuck` that takes a duck object as an argument and sets the
  // "top" and "left" CSS properties.
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"
function moveDuck(x){
    // x.style.transitionDelay = '750ms'; //Testing
    // x.style.transitionTimingFunction = "cubic-bezier(0.4, 0, 0.5, 0.1)";//Testing
    //Setting the random positions:
    let tp = randomPosition();
    x.style.left = tp[0] + "px";
    x.style.top = tp[1] + "px";
    duckTransition(x); //Adding transition timing function to each duck so they move slow from one position to an another position.
    // x.style.transitionTimingFunction = "cubic-bezier(0.5, 0.1, 0.5, 0.1)"; //Testing
  }

  // 4. Try making the duck move to a different location every second 
  // (what did we use to do this several lines up??)
   
    setInterval(function(){moveDuck(duckDiv)}, 1000);//duck started moving to random positions
    // setInterval(function(){moveDuck(duckDiv)}, 5000);
  // 5. Congratulations! Move on to part 2!

  // ---------------------------- PART 2 ---------------------------------

  // 6. Now we will organize this better. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  //    and "returns" the duck object
 
 
  // let flapping;
  function createDuck(){
    let duckDiv = document.createElement("div");
    setInterval(function(){moveDuck(duckDiv)}, 1000);//getting random left,top postitions from moveDuck
    duckDiv.className = "duck";
    body.appendChild(duckDiv);
    setInterval(function(){duckDiv.classList.toggle("flap")}, 500);
    // setInterval(function(){moveDuck(duckDiv)}, 1000);//getting random left,top postitions from moveDuck
    // duckDiv.style.transitionTimingFunction = "cubic-bezier(0.5, 0.1, 0.5, 0.1)";//testing
    // duckTransition(duckDiv);//testing
    return duckDiv;
  }
  
  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function
 
  for(let i = 0; i < 5 ; i++){
    let c = new createDuck();
    // console.log("new ducky obj created"); 
  }
  

  // 8. The ducks are overlapping.  Modify createDuck so each time
  //     it creates a duck, it appears in a random location
  // HINT: You may want to create a `randomPosition()` function that you can use
  //       to set the ducks' initial locations and in your `moveDuck()` function;
      // function randomPosition(min, max){
      //     return Math.random() * (max - min) + min;
      // }
      function randomPosition(){
        let duckWidth = 110;
        let duckHeight = 115;
        // let x = Math.random() * (window.innerWidth - 120);
		    // let y = Math.random() * (window.innerHeight- 120);
        let x = Math.random() * (window.innerWidth - 120) + duckHeight;
		    let y = Math.random() * (window.innerHeight- 120) + duckWidth;
        return [x,y];
        

      }
  // 9. Keep going! Move onto part 3!

  // --------------------------- PART 3 ------------------------------------

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!
  
let divAllducks = document.querySelectorAll(".duck");
  // console.log(divAllducks.length);
    divAllducks.forEach(item => {
      item.addEventListener('click', event => {
        item.classList.toggle('shot');//adding shot to class of each div element when duck clicked
        removeDuck(item);//method removes the div element 
        setTimeout(checkForWinner,1000); //checks if div-obj are present in the window, if no - alert - you won
      })
    })
    
  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second) Hint Hint...use setTimeout
  //     as for removing the element check out https://dzone.com/articles/removing-element-plain

  function removeDuck(i){
    // console.log(i);//Testing
    // i.style.transitionTimingFunction = "cubic-bezier(0.80, 0, 0.80, 0)";//Testing
    let text = i.className;//getting the class name of div element and storing in text variable
    // console.log(text);//Testing
    //remove function-removes element from window.
    const removeElement = ()=>{
      i.parentNode.removeChild(i);
    }
    if(text.includes('shot')){//if class name of the div element has 'shot', then the div is removed from window.
      setTimeout(removeElement,1000);  
    }
    
  }

  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. (How can we check the DOM for more than 
  //     one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"
    
    
  function checkForWinner(){
     let tempDuckCnt = document.querySelectorAll('div');//gets all div elements and assigns to tempDuckCnt-- total 6
     //console.log(tempDuckCnt.length);  // --Testing
     if(tempDuckCnt.length === 0){//checks if there are zero div elements in the window
      //  console.log("YOU WON");
      //  setTimeout(alert("YOU WON"),2000);
      window.alert(" YOU WON!! ") // alerts you won
     }   
  }
   
  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move
  // let duckTransition = document.querySelector('div');
  // duckTransition.style.transitionDelay = '5s';
  // let allDucks = document.querySelectorAll('div');
  // function duckTransition(s){
  //   s.forEach(item =>
  //     {
  //       item.style.transitionTimingFunction = "cubic-bezier(0.5, 0.1, 0.5, 0.1)";//slows the duck movement from one random position to another random position.
  //     })
  // }
 
     function duckTransition(s){
        s.style.transitionTimingFunction = "cubic-bezier(0.3, 0.1, 0.3, 0.1)";//slows the duck movement from one random position to another random position. 
  }



  // duckTransition(allDucks);
    

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying and change the way the duck is facing
  // let allDucks = document.querySelectorAll('div');
//randomly assigns toggle right class to the duck (since all ducks are left side by default) - this happen window load
let allDucks = document.querySelectorAll('div');
  for(let i = 0; i< allDucks.length;i++){
    let a = allDucks[Math.floor(Math.random() *allDucks.length)];
    a.classList.toggle('right');
  }
  //function checks-if duck postion is right or left then changes the direction 
  //to opposite direction by using toggle method.
  function direction(duckie){
    duckie.forEach(item => {
    // item.addEventListener('onmouseover', e => {
      if(item.className.includes('left')){
        item.classList.toggle('right');
      }
      else{
        item.classList.toggle('left');
      }
  });}
  setInterval(function(){direction(allDucks)}, 2000); 


  // Done, you have accomplish another level of skill
};

 // x.style.left = Math.random() * window.innerWidth + "px";
    // x.style.top = Math.random() * window.innerHeight + "px";
    // let width = x.clientWidth;
    // let height = x.clientHeight;
    // let posx = (Math.random() * (window.innerWidth - width)).toFixed();
    // let posy = (Math.random() * (window.innerHeight - height)).toFixed();
    // let posx = randomPosition(window.innerWidth, width);
    // let posy = randomPosition(window.innerHeight, height);
    // let posx = randomPosition(width, window.innerWidth) + 50;
    // let posy = randomPosition(height, window.innerHeight) + 50;
    // console.log(randomPosition());
    // let a = tp[0]+ "px";
    // let b = tp[1]+ "px";
    // x.css('left',a);
    // x.css('top',b);