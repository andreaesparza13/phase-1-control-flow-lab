function scuberGreetingForFeet(distance){
  let ride;
  if (distance <= 400) {
    ride = "This one is on me!";
  } 
  else if (distance < 2000) {
    ride = "That will be twenty bucks.";
  } 
  else if (distance <= 2500) {
    ride = "I will gladly take your thirty bucks.";
  }
  else if (distance > 2500) {
    ride = "No can do.";
  }
  return ride;
}

function ternaryCheckCity(city){  
  return (city == "NYC" ? "Ok, sounds good." : "No go.");
}


function switchOnCharmFromTip(tipType){
  let response;
  switch(tipType) {
    case "generous":
      response =  "Thank you so much.";
      break;
    case "not as generous":
      response = "Thank you.";
      break;
    default:
      response = "Bye.";
      break;
  }
  return response;
}