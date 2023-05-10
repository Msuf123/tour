let loading=document.getElementById('loading')
let div=document.getElementById('inputdiv')
let next=document.getElementById('next')
let countrry=document.getElementsByClassName('input')[0]
let statee=document.getElementsByClassName('input')[1]
let array=[]
let states=[]
var headers = new Headers();
headers.append("X-CSCAPI-KEY", "MVdOdTlWejdWcGtxb2ViU3NiU3lKRk1qNmdySHZCRjEyaWwyN1ZvRw==");

var requestOptions = {
   method: 'GET',
   headers: headers,
   redirect: 'follow'
};
let a=async()=>{
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
}
)

.catch(error => console.log('error', error));}
 
next.addEventListener('click',b)
