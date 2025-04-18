/****************** YOUR NAME: [GURVEER SINGH] ******************/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */
let modelName = "XYZ";
let duration = 0;

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element
    - check the value of the modelName variable, and use that to calculate the new total cost
    - set the value of the calculated-cost element's innerHTML to this new value
*/
function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    let totalCost;
    if (modelName === "XYZ") {
        totalCost = duration * 100;
    } else if (modelName === "CPRG") {
        totalCost = duration * 213;
    }
    costLabel.innerHTML = totalCost.toFixed(2);
}

/****************** model button logic ******************/
/* 
- create a variable to represent the "Switch Model" pseudo-button
- create a function called changeModel() which checks the value of the model name variable
- attach the function to the button
*/
let modelButton = document.getElementById("model-button");

function changeModel() {
    let modelText = document.getElementById("model-text");
    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else if (modelName === "CPRG") {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }
    recalculate();
}

modelButton.addEventListener("click", changeModel);

/****************** duration button logic ******************/
/* 
- create a variable to represent the "Change Duration" pseudo-button
- create a function called changeDuration() that will prompt for a new duration
- attach the function to the button
*/
let durationButton = document.getElementById("duration-button");

function changeDuration() {
    let durationText = document.getElementById("duration-text");
    let newDuration = prompt("Enter the new duration (in days):");
    if (newDuration !== null && !isNaN(newDuration)) {
        duration = parseFloat(newDuration);
        durationText.innerHTML = duration;
        recalculate();
    }
}

durationButton.addEventListener("click", changeDuration);