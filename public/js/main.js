// for the dynamic changing

function dynamic() {
  var a = document.getElementById("form_from").value;
  if (a === "Benin") {
    var to = [
      "To where",
      "Lagos",
      "Warri",
      "Port-harcourt",
      "Abuja",
      "Kaduna",
      "Asaba",
    ];
  } else if (a === "Lagos") {
    var to = ["Benin"];
  } else if (a === "Warri") {
    var to = ["Benin"];
  } else if (a === "Port-Harcourt") {
    var to = ["Benin"];
  } else if (a === "Abuja") {
    var to = ["Benin"];
  } else if (a === "Kaduna") {
    var to = ["Benin"];
  } else if (a === "Asaba") {
    var to = ["Benin"];
  }
  var string = "";
  for (i = 0; i < to.length; i++) {
    string = string + "<option>" + to[i] + "</option>";
  }
  string = "<select id='form-to' name='to' >" + string + "</select>";
  document.getElementById("form-to-div").innerHTML = string;
}

const form = document.getElementById("sc-form");
form.addEventListener("change", () => {
  var dateVal = document.getElementById('date').value;
  var from = document.getElementById("form_from");
  var to = document.getElementById("form-to");
  var fromPlace = from.options[from.selectedIndex].value;
  var toPlace = to.options[to.selectedIndex].value;
  var seats = document.getElementById('noOfSeat').value;
  console.log(toPlace);
  console.log(dateVal);
  
  var car = "None";
  if (fromPlace === "Benin" && toPlace === "Lagos") {
    var car = ["Hayas Lagos"];
  } else if (fromPlace === "Benin" && toPlace === "Warri") {
    var car = ["Classic Warri"];
  } else if (fromPlace === "Benin" && toPlace === "Port-harcourt") {
    var car = ["Classic Port-hacourt "];
  } else if (fromPlace === "Benin" && toPlace === "Abuja") {
    var car = ["Classic Abuja"];
  } else if (fromPlace === "Benin" && toPlace === "Kaduna") {
    var car = ["Hayas Kaduna"];
  } else if (fromPlace === "Benin" && toPlace === "Asaba") {
    var car = ["Hayas Asaba"];
  } else if (fromPlace === "Benin" && toPlace === "") {
    var car = ["Benin"];
  }
  var string;
  for (i = 0; i < car.length; i++) {
    string = car;
  }
  document.getElementById("bus__elemnt").innerHTML =
    "<h1 class='bus__type'>" + car + "</h1>";
  console.log(fromPlace + toPlace + car);
  const submited = [fromPlace, toPlace, car];

      let userParametres = {fromPlace, toPlace, dateVal, seats }

});