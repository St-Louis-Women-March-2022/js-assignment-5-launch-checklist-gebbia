// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let destination = pickPlanet(listedPlanets);
    console.log(destination);
  
    addDestinationInfo(document, destination.name, destination.diameter, destination.star, destination.distance, destination.moons, destination.image);
        
    });
    
 });
 
window.addEventListener("load", function() {
    const form = document.querySelector("form");
   
    form.addEventListener("submit", function(event){
     
        const pilot = document.querySelector("input[name=pilotName]");
        const copilot = document.querySelector("input[name=copilotName]");
        const fuelLevel = document.querySelector("input[name=fuelLevel]");
        const cargoMass = document.querySelector("input[name=cargoMass]");
     
        const list = document.getElementById("faultyItems");
     
    formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoMass.value);
     
    event.preventDefault();

   });

});

// Psuedo Code
// ------

// in script.js make use of the helper functions created in scriptHelper.js

// set listedPlanetsResponse equal to the value returned when calling myFetch()
// 	this value is a promise
// select a random planet from listedPlanets using pickPlanet()
// pass that info to addDestinationInfo()
// ------
