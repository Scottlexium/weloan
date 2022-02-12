// const cusFName = sessionStorage.getItem("First-Name");
// const cusLName = sessionStorage.getItem("Last-Name");
// const cusPhone = sessionStorage.getItem("Phone-Number");
// const cusEmail = sessionStorage.getItem("Email");
// const cusAddress = sessionStorage.getItem("Address");
// const Cusfrom = sessionStorage.getItem("from");
// const Custo = sessionStorage.getItem("to");
// const cusDate = sessionStorage.getItem("date");
// const cusNoOfSeats = sessionStorage.getItem("seats");
// const id = document.getElementById('busIdVal').innerHTML;

// console.log("this is", axios);




const cusFName = sessionStorage.getItem("First-Name");
const cusLName = sessionStorage.getItem("Last-Name");
const cusPhone = sessionStorage.getItem("Phone-Number");
const cusEmail = sessionStorage.getItem("Email");
const cusAddress = sessionStorage.getItem("Address");

const origin = window.location.origin;

const path = window.location.pathname.slice(9);
const url = `${origin}/customer${path}/proceed`;
console.log(url);
axios.get(url)
.then((response)=>{
  console.log(response.data);
}).catch((err)=>{
  console.log(err);
})

function makePayment() {
  
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-5889c6d76beac180fdb3c050e1aa8b9f-X",
      tx_ref: "RX1",
      amount: 100,
      currency: "NGN",
      country: "NG",
      payment_options: "card",
      redirect_url: // specified redirect URL
        "https://callbacks.piedpiper.com/flutterwave.aspx?ismobile=34",
      meta: {
        consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: cusEmail,
        phone_number: cusPhone,
        name: cusFName+""+cusLName,
        address: cusAddress
      },
      subaccounts: [
        {
          id: "RS_A8EB7D4D9C66C0B1C75014EE67D4D663",// This assumes you have setup your commission on the dashboard.
        }
      ],
      callback: function (data) {
        console.log(data);
      },
      onclose: function() {
        // close modal
      },
      customizations: {
        title: "My store",
        description: "Payment for items in cart",
        logo: "https://assets.piedpiper.com/logo.png",
      },
    });
  }