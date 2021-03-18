const hex=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

const button=document.getElementById('btn')
const span=document.getElementById('span')

button.addEventListener('click',function(){
    let color="#";
    for(let i=0;i<6;i++)
    {
        color+=hex[randomNumber()];
    }

    document.body.style.backgroundColor=color;
    span.innerText=color;
})

function randomNumber(){
    return Math.floor(Math.random()*hex.length);
}