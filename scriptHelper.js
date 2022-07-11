// // Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    //  Here is the HTML formatting for our mission target div.
    const missionTarget = document.getElementById("missionTarget");

    missionTarget.innerHTML += `
            <ol>        
                <li>Name: ${name}</li>
                <li>Diameter: ${diameter}</li>
                <li>Star: ${star}</li>
                <li>Distance: ${distance}</li>
                <li>Moons: ${moons}</li>
            </ol>
            <img src=${imageUrl}></img>
                `;
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }    else if (isNaN(testInput) === true) {
        return "Not a Number";
    }    else {
        return "Is a Number";
    }
 }
    //   it ("Function properly validates text", function() {
    //     expect(studentFunctions.validateInput("")).toEqual("Empty");
    //     expect(studentFunctions.validateInput("asdf")).toEqual("Not a Number");
    //     expect(studentFunctions.validateInput("10")).toEqual("Is a Number"); 



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
       window.alert("All fields are required.");
       
    }   else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        window.alert("Invalid Entry! Pilot & Co-pilot Name cannot contain numbers!");
    }   else if (pilot.match(/[0-9!@#\$%\^\&*\)\(+=._-]/g) != null) {
        window.alert(`Invalid Entry! Pilot Name cannot contain numbers or special characters!!! \nWhat kind of name is ${pilot}??? Try Again! Input letters only!`);
    }   else if (copilot.match(/[0-9!@#\$%\^\&*\)\(+=._-]/g) != null) {
        window.alert(`Invalid Entry! Co-pilot Name cannot contain numbers or special characters!!! \nWhat kind of name is ${copilot}??? Try Again! Input letters only!`);
    }   else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
        window.alert("Invalid Entry! Fuel Level & Cargo Mass must be a number!");
    }   else {
        list.style.visibility = "visible";
        
    document.getElementById("pilotStatus").innerText = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerText = `Co-pilot ${copilot} is ready for launch`;

    let launchStatus = document.getElementById("launchStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let fuelStatus = document.getElementById("fuelStatus");

    if (fuelLevel < 10000 && cargoMass <= 10000) {
        fuelStatus.innerText = `Fuel level too low for launch\n⚠ Fuel level is ${fuelLevel}L & at least 10,000 liters of fuel are needed for the journey!`;
        cargoStatus.innerText = `Cargo mass low enough for launch\n✓ Cargo mass is ${cargoMass}kg`;
        launchStatus.innerText = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199,37,78)";
        }
        
    if (fuelLevel < 10000 && cargoMass > 10000) {
        fuelStatus.innerText = `Fuel level too low for launch\n⚠ Fuel level is ${fuelLevel}L & at least 10,000 liters of fuel are needed for the journey!`; 
        cargoStatus.innerText = `Cargo mass too heavy for launch\n⚠ Cargo mass is ${cargoMass}kg & cannot exceed 10,000kg for the journey!`;
        launchStatus.innerText = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199,37,78)";
        }

    if (fuelLevel >= 10000 && cargoMass > 10000) {
        fuelStatus.innerText = `Fuel level high enough for launch\n✓ Fuel level is ${fuelLevel}L`;
        cargoStatus.innerText = `Cargo mass too heavy for launch\n⚠ Cargo mass is ${cargoMass}kg & cannot exceed 10,000kg for the journey!`;
        launchStatus.innerText = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199,37,78)";
        }

    if (fuelLevel >= 10000 && cargoMass <= 10000) {
        fuelStatus.innerText = `Fuel level high enough for launch\n✓ Fuel level is ${fuelLevel}L`;
        cargoStatus.innerText = `Cargo mass low enough for launch\n✓ Cargo mass is ${cargoMass}kg`;
        launchStatus.innerText = "Shuttle is Ready for Launch";
        launchStatus.style.color = "rgb(65,159,106)";
        }
    }
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        console.log(response);
        return response.json();          
    });
        
    return planetsReturned;
}


function pickPlanet(planets) {
    console.log(planets);
    let randomPlanet = Math.floor(Math.random() * planets.length);
    return planets[randomPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;


// Psuedo Code
// create a launch checklist form
// 	use preventDefault()
// 	validate user-submitted data (all feilds entered, 
// 						with strings for names
// 						numbers for fuel and cargo level

// 	w/ Validation update list of what is ready or not ready for shuttle launch
// 	using DOM to update CSS

// 	fetch planetary json to update mission destination (all facts/figures where shuttle going)

// ------
// IN scriptHelper.js

// adding validation
// 		add alert "all fields are required"

// use validateInput() to complete formSubmission()
// 	update shuttle requirements for each parameter of formSubmission
// 	shuttle requirements in div with id faultyItems, update if not ready to launch
// 	use template literals - update the li elements of pilotStatus and copilotStatus 
// 					(include pilot/copilots name)

// 	IF user submits fuel level less than 10,000 liters {
// 		change faultyItems to visible w/ updated fuel status displaying
// 			"not enough fuel for the journey"
// 		<h2> text element launchstatus changes to
// 			"shuttle not ready for launch" text color RED

// 	IF user submits cargo mass more than 10,000 kilograms {
// 		change the list to visible w/ updated cargo mass displaying
// 			"too much mass for shuttle take off"
// 		text of launchStatus changes to 
// 			"shut not ready for launch" text color RED

// 	Else If shuttle ready to launch {
// 		text of launchStatus changes to
// 			Shuttle ready for launch" text color GREEN

// ------

// fetching planetary data
// 	addDestinationInfo() does not need to return anything. 
// 	pickPlanet() takes in one argument: a list of planets. 
// 		Using Math.random(), return one planet from list w/ a randomly-selected index. 
// 	myFetch() fetch from https://handlers.education.launchcode.org/static/planets.json
//  		return response.json().

