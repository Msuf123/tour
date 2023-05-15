let button=document.getElementById('run')
let date=document.getElementById('date')
let post=document.getElementById('post')
let textarea=document.getElementById('w3review')
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
let base_url='https://api.flightapi.io/onewaytrip/'
button.addEventListener('click',()=>{console.log('clciked')
console.log(date.value)
})
