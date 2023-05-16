let loading=document.getElementById('loading')
let div=document.getElementById('inputdiv')
let next=document.getElementById('next')
let countrry=document.getElementsByClassName('input')[0]
let statee=document.getElementsByClassName('input')[1]
let subbmit=document.getElementById('submit')
let next_div=document.getElementById('result')
let next_div_c=document.getElementById('next_div_c')
let next_div_s=document.getElementById('next_div_s')
let array=[]
let states=[]
let back=document.getElementById('backk')
var headers = new Headers();
headers.append("X-CSCAPI-KEY", "MVdOdTlWejdWcGtxb2ViU3NiU3lKRk1qNmdySHZCRjEyaWwyN1ZvRw==");
countrry.value='';
statee.value=''
var requestOptions = {
   method: 'GET',
   headers: headers,
   redirect: 'follow'
};
subbmit.style.display='none'
next_div.style.display='none'
let a=async()=>{
   array=[]
 states=[]
  next_div.style.display='none'
  loading.style.display="block";
  div.style.display="none";
await fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
.then(response => response.json())
.then(result => {//console.log( result);
    result.map((i)=>{
      array.push({name:i.name,code:i.iso2})
    })
    loading.style.display="none";
    div.style.display="block";
    //console.log(array)
    var option = "";

for (let i = 0; i < array.length; i++)
{
    option += '<option value="' + array[i].code + '">'+array[i].name+'</option>';
}

document.getElementById("options").innerHTML = option;
}
)

.catch(error => console.log('error', error));}
a()
let b=async()=>{
  let name=countrry.value
//   console.log(name)
//   countrry.style.display="none";
//   statee.style.display="block";
// await fetch(`https://api.countrystatecity.in/v1/countries/${name}/states`, requestOptions)
// .then(response => 
//   {console.log(response)
//     response.text()})
// .then(result => {
//   console.log( result);
//     result.map((i)=>{
//       array.push({name:i.name,code:i.iso2})
//     })
//     loading.style.display="none";
//     div.style.display="block";
//     console.log(array)
//     var option = "";

// for (let i = 0; i < array.length; i++)
// {
//     option += '<option value="' + array[i].code + '">'+array[i].name+'</option>';
// }

// document.getElementById("optios").innerHTML = option;
// }
// )

// .catch(error => console.log('error', error));
loading.style.display="block";
div.style.display="none";
fetch(`https://api.countrystatecity.in/v1/countries/${name}/states`, requestOptions)
  .then(response => response.json())
  .then(result => {console.log( result);
    result.map((i)=>{
      states.push({name:i.name,code:i.iso2})
    })
    loading.style.display="none";

    div.style.display="block";
    countrry.style.display="none";
    document.getElementById('options').style.display="none";
    statee.style.display="block";
    console.log(states)
    var option = "";

for (let i = 0; i < states.length; i++)
{
    option += '<option value="' + states[i].code + '">'+states[i].name+'</option>';
}

document.getElementById("optios").innerHTML = option;
console.log(document.getElementById("optios").innerHTML)
subbmit.style.display='block'
next.style.display='none'
next_div_c.innerHTML=`Country:${countrry.value}`

if(statee.value!==''){
next_div_s.innerHTML=`State:${statee.value}`}
else{
  next_div_s.innerHTML=`No iso2 code`
}
}
)

.catch(error => console.log('error', error));}
subbmit.addEventListener('click',()=>{
  next_div.style.display='none'
  loading.style.display="block";
  div.style.display="none";
  //next_div.style.display='flex'
  next_div_s.innerHTML=`State:${statee.value}`
  setTimeout(()=>{
    next_div.style.display='flex'
  loading.style.display="none";
  div.style.display="block";
  },1000)
})
back.addEventListener('click',()=>{location.reload();})
next.addEventListener('click',b)
console.log('hi')
//flight_number
// let m= async()=>{
//  await fetch('http://api.aviationstack.com/v1/flights?dep_iata=DEL&arr_iata=COK&access_key=744fd761a67d36da2424d144c27cb3ca').then(a=>{console.log(a.json())})
// }
// m()