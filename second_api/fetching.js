let loading=document.getElementById('loading')
let array=[]
var headers = new Headers();
headers.append("X-CSCAPI-KEY", "MVdOdTlWejdWcGtxb2ViU3NiU3lKRk1qNmdySHZCRjEyaWwyN1ZvRw==");

var requestOptions = {
   method: 'GET',
   headers: headers,
   redirect: 'follow'
};
let a=async()=>{
await fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
.then(response => response.json())
.then(result => {console.log( result);
    result.map((i)=>{
      array.push({name:i.name,code:i.iso2})
    })
    loading.style.display="none";
    console.log(array)
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
