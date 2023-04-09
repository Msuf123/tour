console.log("hi");
const message = ["Make custom tour package"] 
const speed = 50
let textPosition = 0;
function typewriter() {
   document.querySelector("#message").innerHTML = message[0].substring(0, textPosition) + '<span>\u25AE</span>'
  
 }
 function typewriter() {
   document.querySelector("#message").innerHTML = message[0].substring(0, textPosition) + '<span>\u25AE</span>'
   if(textPosition++ != message[0].length)
     setTimeout(typewriter, speed)
 }
 
 window.addEventListener("load", typewriter)
 let box=document.getElementsByClassName('places');
for(i=0;i<box.length;i++){
  box[i].addEventListener("mouseover",()=>{console.log('hovered')})
}
 //box.addEventListener("mouseover",()=>{console.log('hovered')})
// var headers = new Headers();
// headers.append("X-CSCAPI-KEY","MVdOdTlWejdWcGtxb2ViU3NiU3lKRk1qNmdySHZCRjEyaWwyN1ZvRw==");

// var requestOptions = {
//    method: 'GET',
//    headers: headers,
//    redirect: 'follow'
// };

// fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
// .then(response => response.text())
// .then(result => console.log(result))
// .catch(error => console.log('error', error));