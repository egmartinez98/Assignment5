/* step 1
Add a button to a web page. Use the old school HTML attribute method to attach a click event handler to the button. That handler should call a function that displays the message “I have been clicked” out into an alert box.*/

/*function btn1() {
    "use strict";
	window.alert("I have been clicked");
}*/


/* step 2
Add a button to a web page and uniquely ID the button. Write a script that finds the button by its ID. Then use the DOM Element method to associate a function with the onclick event of the button. Again, display the message “I have been clicked” out into an alert box.*/

/*var myElement = document.getElementById("btn1");
myElement.onclick = function () {
    "use strict";
	window.alert("I have been clicked");
};*/

/* step 3
Add a button to a web page and uniquely ID the button. Write a script that attaches an event listener to the button and listens for the click event. When it’s heard, a user-defined function should be called and the message “I have been clicked” should be displayed out into an alert box.*/


/*btn1.addEventListener("click", function () {
    "use strict";
	window.alert("I have been clicked");
}, false);*/


/* step 4
Modify the code within step 3 so that the code that displays an alert box is written directly within a callback function as opposed to a user-defined function.
*/

/*btn1.addEventListener("click", function () {
    "use strict";
	window.alert("I have been clicked");
}, false);*/

/*step 5
Modify the code in step 4 so that you can write your script within the <head> tag of the page rather than underneath the button in the markup.*/


/* step 6
Add a link to your web page. Add the text “Visit Google” to the link, set the ID to “redirect” and set the href attribute to http://www.google.com. Now, write a script that alerts the user that they clicked on the link but prevents the browser from also redirecting to the Google site.*/


/*redirect.addEventListener("click", function () {
    "use strict";
    window.alert("You have clicked on link");
}, false);

redirect.addEventListener("click", function (event) {
    "use strict";
	event.preventDefault();
}, false);*/

/*step 7
Add a text box and a button to a web page. Add an event listener to the button. When the click event is heard, the button should be disabled, and the text that the user input into the text box should be displayed within an alert box.*/
/*btn1.addEventListener("click", function () {
    "use strict";
    var btnPlay = document.getElementById("btn1");
    btnPlay.disabled = true;
    var box = document.getElementById("box1");
window.alert(box.value);
}, false);*/



/* step 8
Create a new page called newpage.html. You will now have 2 web pages including index.html and newpage.html. Add a button to index.html. When the button is clicked, newpage.html should appear as a popup window at 300 pixels wide by 300 pixels high. As soon as newpage.html loads however, resize the window to 500 pixels wide by 300 pixels high. You will need to handle the load event on newpage.html and use a BOM method on newpage.html to accomplish this task.*/

/*btn2.addEventListener("click", function () {
    "use strict";
    window.open('newpage.html', 'np', 'width=300, height=300, resizable=yes');
}, false);*/





/* step 9
Add two buttons to a web page. Add the text Start to one button and Stop to the other button. Using the BOM .setInterval() method, figure out a way to move display the text “Learning JavaScript is fun!” into the console window every 2 seconds but only when the Start button is clicked. If the user clicks on the Stop button, the console should stop logging the text immediately.*/




/*btnstart.addEventListener("click", function () {
    "use strict";
  window.idk = setInterval(function () {
    "use strict";
    window.console.log("Learning JavaScriopt is Fun!"); }, 2000);
}, false);



btnstop.addEventListener("click", function () {
    "use strict";
    clearInterval(idk);
}, false);*/





/*step 10
Add a drop down list to a web page. Populate the drop down list with 4 items. Add a button next to the drop down list and set the text to “Select”. When the user clicks the button, the item selected in the drop down list should appear within an alert box.*/

/*btn3.addEventListener("click", function () {
    "use strict";
    window.alert(stuff.value);
}, false);*/
  






//The Calculator II

/*step 1
Notice the markup that I’ve included for you in the web page. There is a text box that will display the value of each button click and 16 different buttons each of which represents a major key on a basic calculator. Begin adding an event listener to the window object that “listens” for the load event and when heard, calls a user-defined function called init ().*/

/*window.addEventListener("load", function () {
    "use strict";
    init();
}, false);*/

/* step 2
Create the user-defined function called init().*/
//function init () {};


/*step 3
Within the init () function, attach an event listener to each of the 16 buttons in the web page. You will listen for the click event and when heard, a function called enter() should be called for each of the buttons except for the equal sign. Since you are attaching an event listener to an object, you can pass in this.value as a parameter to each of the enter() function calls.*/ 
/*function init () {
    "use strict";
    one.addEventListener("click", function () {
        enter(this.value);
    }, false);
};*/




/*step 4
For the equal button, call a function called calculate(). You will not pass any arguments into this function.*/

/*function init () {
    "use strict";
    one.addEventListener("click", function () {
        enter(this.value);
    }, false);
    
    equal.addEventListener("click", function () {
        "use strict";
        calculate();
    }, false);
};*/

/* step 5
Create a user-defined function called enter() that accepts val as an argument. */

//function enter(val) {};

//step 6
//Within the enter() function get the result text box by its ID and set its value plus equal to the val parameter being passed in.

/*function enter(val) {
    "use strict";
    val += document.getElementById("result");
}


function init() {
    "use strict";
    one.addEventListener("click", function () {
        enter(this.value);
    }, false);
    
    equal.addEventListener("click", function () {
        calculate();
    }, false);
}

window.addEventListener("load", function () {
    "use strict";
    init();
}, false);*/


//step 7
//Create a user-defined function called calculate() that doesn’t accept any arguments.

/*function calculate() {
    "use strict";
}

function enter(val) {
    "use strict";
    val += document.getElementById("result");
}


function init() {
    "use strict";
    one.addEventListener("click", function () {
        enter(this.value);
    }, false);
    
    equal.addEventListener("click", function () {
        calculate();
    }, false);
}

window.addEventListener("load", function () {
    "use strict";
    init();
}, false);*/



/*step 8
Within the calculate() function get the result text box by its ID and set its value equal to the calculation currently stored in the result text box. HINT: Use the built-in eval() function to perform the heavy lifting for you.*/

/*
window.addEventListener("load", init, false);
    
    function init() {
    "use strict";
    document.getElementById("form").addEventListener("click", enter, false);
    
    //document.getElementById("two").addEventListener("click", enter, false);
    
    document.getElementById("equal").addEventListener("click", calculate, false);
    
function enter(val) {
    "use strict";
    document.getElementById("result").value += val.toElement.defaultValue;
}
        
function calculate(e) {
        "use strict";
   var result = document.getElementById("result").value;
  document.getElementById("result").value = eval(result);
    e.stopPropagation();
}


}
*/


//JavaScript Image Rollovers

/* step 1
Notice the 5 images in the web page. These are the 5 images that you will be creating rollovers for. Notice that for each image, an “over” state exists for it in the same directory. Begin by creating a unique ID for each image so that you have image1, image2, image3, image4, and image5.*/

/* step 2
Now, within the script tag of your web page, create a helper function called getImage(). This function will accept one parameter. Within the function, return the result of getting an element by its ID, passing in the function’s argument as a parameter into the getElementById() method.
Create a new constructor function called Rollover that accepts two arguments including imageId and newImageURL.*/














