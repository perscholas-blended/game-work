window.onload = function () {
  const body = document.body;
 

  console.log(body);



  // 1. Create a <div> with the class "duck" and add it to the body.  Do this step by step
  // ( 1. create the element
  //   2. add a class to the element
  //   3. append the element to the body )


  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  // https://www.w3schools.com/jsref/met_win_setinterval.asp


  
  let duckDiv = document.createElement("div");
  duckDiv.className = "duck"
  body.appendChild(duckDiv); 
  //Note to self: I spent about a half-hour debugging only to find...that I had parenthesis inside appendChild
  //...body.appendChild("duck")...wow, I need to upgrade my mental-spellchecker. 

 
  
  function flapON(duck) {

    //Can we stagger this? To have some of the duckies face right after a while? 
    let randomFlap = Math.floor(Math.random() * (500) + 700); //Random numbers to figure this out. 
     //duck.classList.toggle("flap"); //Let's check if I'm doing this right.
     //duck.classList.toggle("right");
  
     setInterval( () => {
      duck.classList.toggle("right");
      duck.classList.toggle("flap");
      
     }, randomFlap);

    //Yes, yes we can! I'll leave it as random for now. There's an issue here where I can't get the 
    //duckies to flap in both directions. I need to toggle both "right" and "flap" at the same time,
    //and then I have to untoggle right without untoggling flap. 
 
  }

    
  setInterval(flapON(duckDiv), 250);
    

  //Hopefully this is okay? 

  // 3. Now, let's move the duck using CSS "top" and "left". Create
  // a function `moveDuck` that takes a duck object as an argument and sets the
  // "top" and "left" CSS properties.
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"

 function moveDuck(duck) {
    //Wording is "the duck" so it's the class we created, I think.
      //let top = getComputedStyle(duck);
      //let left = getComputedStyle(duck);
     const RandTop = (Math.random() * (window.innerHeight - 100));
     const RandLeft = Math.random() * (window.innerWidth - 100);
      duck.style.position = "absolute";
      duck.style.top = RandTop + "px";
      duck.style.left = RandLeft + "px"; //The "px" at the end will be the modification to scatter the ducks.
      //Without it, we're just setting top and left to a random number. It needs "px" to know what we want.
 
      //Issue...it's not moving. UPDATE: Issue corrected! I think there was something wrong with my 
      //...parameters. Theoretically speaking, this should work, but since I have duck.style.position
      //I think the program is trying to find a "duck" object, when all my objects are called duckDiv.
      //I thought it would automatically insert duckDiv instead, if I fed it into the function.

      //I decided to just code this into the "setIntervals" in "createDuck()" instead. I'll leave this up
      //because I don't want to delete my progress. Just in case I break my code...
  }



  // 4. Try making the duck move to a different location every second (what did we use to do this several lines up??)

 setInterval( ()=> {
  const RandTop = (Math.random() * (window.innerHeight - 100));
  const RandLeft = Math.random() * (window.innerWidth - 100);
   duckDiv.style.position = "absolute";
   duckDiv.style.top = RandTop + "px";
   duckDiv.style.left = RandLeft + "px";
 }, 1000) 


  // 5. Congratulations! Move on to part 2!

  // ---------------------------- PART 2 ---------------------------------



  // 6. Now we will organize this better. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  //    and "returns" the duck object
     function createDuck() {
          let duckDiv = document.createElement("div");
          duckDiv.className = "duck";
          body.appendChild(duckDiv);

        setInterval(flapON(duckDiv), 250); 
        setInterval( () => {
          const RandTop = (Math.random() * (window.innerHeight - 100));
          const RandLeft = Math.random() * (window.innerWidth - 100);
          duckDiv.style.position = "absolute";
      
           duckDiv.style.top = RandTop + "px";
           duckDiv.style.left = RandLeft + "px"; 
      
        }, 1000);

        //I don't think there's a need to have the functions in here. They're already defined above.
        //This function can still access them if I just do "setInterval"

        duckDiv.addEventListener("click", () => {
          duckDiv.classList.add("shot");

          setTimeout( () => {
            duckDiv.remove()
          }, 1000)
          
         
    
      })

    
      //I had this "duckDiv.addEvenListner" outside of the "createDuck()" function. That's why it didn't
      //initially work, and why it only affected the first ducky. We have to apply it to every one.
      //...I spend an hour or two on this yesterday. It's only been about 10 minutes since I started 
      //...working on this today, and I've already solved two bugs.
      //...Two more to go...

     
          return duckDiv;
          
        }
  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function
        for (let i = 0; i < 5; i++) {
          createDuck();
        }

       
  // 8. The ducks are overlapping.  Modify createDuck so each time
  //     it creates a duck, it appears in a random location
  // HINT: You may want to create a `randomPosition()` function that you can use
  //       to set the ducks' initial locations and in your `moveDuck()` function;

        //Seems like I already did this. They are showing up in random locations for me.
    
  // 9. Keep going! Move onto part 3!

  // --------------------------- PART 3 ------------------------------------

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!

   
         duckDiv.addEventListener("click", () => {
             duckDiv.classList.add("shot");
           
          
             setTimeout( ()=> {
               duckDiv.remove()
           }, 250) //I'll lower the time to 1/4. I want the duck to stop moving once this is activated.
                    // Until I figure that out, I'll quarter the time for the time being.

        })
      
    
        //The problem here is that it's selecting the first duck created. I just don't understand...
        //...duckDiv, shouldn't that select all of them, as they all are called that? 
        //...and querySelector and getElementsByClassName aren't doing anything. 
        //Is the problem that I have a bunch of duckDiv but no way to differenciate them?
    

  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second) Hint Hint...use setTimeout
  //     as for removing the element check out https://dzone.com/articles/removing-element-plain

      //Done above.

  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. (How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"
 


function checkForWinner() {
  let allDucks = body.querySelectorAll(".duck");
  //This isn't working. I think that's the problem.
    if (allDucks.length === 0) {
      alert("YOU WIN!");
     window.location.reload();//Let's reload this screen...
    }
  }
    
setInterval( ()=> {
  checkForWinner();
}, 2000);
    // One new solution, one new glitch....
    //So, we never reload the page this way. Why is that? 
    //Ah, an inelegant solution! Delay this interval by two seconds...I think it gives the page enough time
    //to reload. I don't know how efficient this solution is, either. It runs every two seconds, 
    //and we're looping every time, I think. There has to be a better way....



        
  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

    //Just thinking on the page here...perhaps we can create another random variable that takes in a 
    //certain range. I am uncertain of what the question is asking specifically, as in, I don't know the
    //criteria to justify a certain move speed over another. 

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying and change the way the duck is facing

          //....I don't think I can with the time I have left. But I'll think about it, sure!
          // Here's my idea: The ducks are being placed randomly on the page, at a set X and Y point, if we think of 
          //the page as a graph. I think that's what we're setting in "moveDuck", right? 
          //Plus, in the CSS for the duck sections, there's negative px values.
          //So, if both top and left are positive, we're moving
          //right. If top is positive and left is negative, we're moving left; the default. 
          //Now I need to figure out how to toggle that...and where. There's a lot going on in
          //"moveDuck()"...except I think there are no negative values in our range, now that I've examined
          //the html page slightly, and saw the ducks in motion. Instead, I need to find the point where
          //we're moving toward the left side of the screen, and then where we're more toward the right.
          //I can go to moveDuck and see if I can embed a flapDirection function in there with if statements/
          // If "randomTop" and "randomLeft" move the duck toward the left, leave the default image, the toggle "flap."
          // If "randomTop" and "randomLeft" point toward the right, we toggle "right", then "flap"

          //Unfortunately, I will have to put this on pause. There's still plenty of Sunday left but I have
          //to run errands. I will submit this now so I won't forget, as I've done the main part,
          // but if I can I will come back to it to solve these two issues. 

  // Done, you have accomplish another level of skill

};
