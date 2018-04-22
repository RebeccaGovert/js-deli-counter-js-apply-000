var katzDeli = [];

function takeANumber (katzDeliLine, newPersonName) {
  katzDeliLine.push(newPersonName);
  
  return "Welcome, " + newPersonName + ". You are number " + katzDeliLine.length  + " in line.";
}



function nowServing (katzDeliLine) {
  var firstPerson = "";
  if (katzDeliLine.length===0) {
    return "There is nobody waiting to be served!"
  }
  firstPerson = katzDeliLine[0];
}
