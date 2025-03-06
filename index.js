// Code your solution in this file!
// Function to return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  }
  
  // Function to return the last two drivers
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  }
  
  // Array containing both functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Higher-order function that returns a multiplier function
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // Fare doubler (calls createFareMultiplier with 2)
  const fareDoubler = createFareMultiplier(2);
  
  // Fare tripler (calls createFareMultiplier with 3)
  const fareTripler = createFareMultiplier(3);
  
  // Function to select either first two or last two drivers
  function selectDifferentDrivers(drivers, driverSelector) {
    return driverSelector(drivers);
  }
  