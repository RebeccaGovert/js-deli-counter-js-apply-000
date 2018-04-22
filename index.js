var katzDeli = [];

function takeANumber (katzDeliLine, newPersonName) {
  var lineLength = katzDeliLine.length;
  
  return "Welcome, " + newPersonName + ". You are number " + (lineLength++) + " in line.";
}