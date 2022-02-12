// var dateVal = document.getElementById("date").value;
// var from = document.getElementById("form_from");
// var to = document.getElementById("form-to");
// var seats = document.getElementById("noOfSeat").value;
// var fromPlace = from.options[from.selectedIndex].value;
// var toPlace = to.options[to.selectedIndex].value;
// var Paramform = document.getElementById("customerForm");

// Paramform.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     let userParametres = {fromPlace, toPlace, dateVal, seats }
//     console.log("userParametres");
//     sessionStorage.setItem('query', userParametres);
// })

//     axios.get('/customer/:id')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });



function ty(e) {
  var firstName = document.getElementById("fName").value;
  var lastName = document.getElementById("lName").value;
  var Email = document.getElementById("Email").value;
  var phoneNumber = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  console.log("Changing");
  // let customerDetails = { firstName, lastName, Email, phoneNumber, address }
  sessionStorage.setItem("First-Name", firstName);
  sessionStorage.setItem("Last-Name", lastName);
  sessionStorage.setItem("Phone-Number", phoneNumber);
  sessionStorage.setItem("Address", address);
  sessionStorage.setItem("Email", Email);
}

