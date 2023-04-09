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
 let heading=document.getElementsByClassName('headings')
 
 
for(i=0;i<box.length;i++){
  box[i].addEventListener("mouseover",(e)=>{console.log('hovered');
  if(e.target.id==='1'){
  heading[0].style.display="block";
  heading[1].style.display="block";
}
else if(e.target.id==='pondi'){
  heading[2].style.display="block";
  heading[3].style.display="block";
}
else if(e.target.id==='tamil'){
  heading[4].style.display="block";
  heading[5].style.display="block";
}
else if(e.target.id==='capri'){
  heading[6].style.display="block";
  heading[7].style.display="block";
}
else if(e.target.id==='mad'){
  heading[8].style.display="block";
  heading[9].style.display="block";
}
else if(e.target.id==='cape'){
  heading[10].style.display="block";
  heading[11].style.display="block";
}
else if(e.target.id==='raj'){
  heading[12].style.display="block";
  heading[13].style.display="block";
}
else if(e.target.id==='sikkim'){
  heading[14].style.display="block";
  heading[15].style.display="block";
}
else if(e.target.id==='odisha'){
  heading[16].style.display="block";
  heading[17].style.display="block";
}


































}


















)
}
for(i=0;i<box.length;i++){
  box[i].addEventListener("mouseleave",(e)=>{console.log('hovered');
  let d='none';
  if(e.target.id==='1'){
  heading[0].style.display=d;
  heading[1].style.display=d;
}
else if(e.target.id==='pondi'){
  heading[2].style.display=d;
  heading[3].style.display=d;
}
else if(e.target.id==='tamil'){
  heading[4].style.display=d;
  heading[5].style.display=d;
}
else if(e.target.id==='capri'){
  heading[6].style.display=d;
  heading[7].style.display=d;
}
else if(e.target.id==='mad'){
  heading[8].style.display=d;
  heading[9].style.display=d;
}
else if(e.target.id==='cape'){
  heading[10].style.display=d;
  heading[11].style.display=d;
}
else if(e.target.id==='raj'){
  heading[12].style.display=d;
  heading[13].style.display=d;
}
else if(e.target.id==='sikkim'){
  heading[14].style.display=d;
  heading[15].style.display=d;
}
else if(e.target.id==='odisha'){
  heading[16].style.display=d;
  heading[17].style.display=d;
}
}
)
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