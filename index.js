var katzDeli = [];

function takeANumber (line, newPersonName) {
  line.push(newPersonName);
  
  return "Welcome, " + newPersonName + ". You are number " + line.length  + " in line.";
}