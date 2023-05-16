let button=document.getElementById('run')
let date=document.getElementById('date')
let post=document.getElementById('post')
let textarea=document.getElementById('w3review')
let flight_status=[]
let schedule=[]
let name_one=document.getElementById('name_one')
let name_two=document.getElementById('name_two')
let flight_num=document.getElementById('number_one')
let num_two=document.getElementById('number_three')
let one_stat=document.getElementById('xx')
let two_stat=document.getElementById('yy')

post.addEventListener('click',()=>{
    if(textarea.value!==''&&textarea.value!==' '){
    var div = document.createElement("div");
    div.className = 'comments';
    var attr = document.createAttribute("id");
    var p = document.createElement("p"); //create the paragraph tag
    p.classList += 'album'; // give it a class by adding to the list
    p.innerHTML = textarea.value; // add html text or make another element if needed.
    attr.value="container";
    div.setAttributeNode(attr);
    div.appendChild(p); //add the <p> element to the div 
    var sp = document.createElement("span"); //create the paragraph tag
    sp.classList += 'album'; // give it a class by adding to the list
    sp.innerHTML = '-Unknow user'; // add html text or make another element if needed.
    attr.value="container";
    div.setAttributeNode(attr);
    div.appendChild(sp);
    document.body.appendChild(div);}
    else{alert('Enter a comment to submit')}

})

button.addEventListener('click',async ()=>{
    await fetch('http://api.aviationstack.com/v1/flights?dep_iata=DEL&arr_iata=FCO&access_key=744fd761a67d36da2424d144c27cb3ca').then(a=>{
        
    return a.json()
    }
    ).then(
        response=>{
          console.log(response.data)
           flight_status=response.data
           for(i=0;i<flight_status.length;i++){
           if(flight_status[i].flight_status==='scheduled'&&schedule.length<2){
             schedule.push(flight_status[i])
           }
          else{
            continue
          }
            //console.log(flight_status)
        
        }
        if(schedule.length===0){
          alert('API busy now')
        }
        else{
        name_one.innerHTML=schedule[0].airline.name;
        name_two.innerHTML=schedule[1].airline.name;
        flight_num.innerHTML=schedule[0].flight.number;
        num_two.innerHTML=schedule[1].flight.number;
        one_stat.innerHTML="Scheduled"
        two_stat.innerHTML="Scheduled"
        }
        }
    )

})
// let ruun= async ()=>{
//     console.log('hi')
// }
console.log('iitalyy')
