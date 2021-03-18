const colors=["red","blue","green","yellow","brown"];
const button=document.getElementById('btn');
const color=document.getElementById('span');

button.addEventListener('click',function(){
    
    const index=randomNumber();
    console.log(index);

    document.body.style.backgroundColor=colors[index];
    color.innerText=" "+colors[index];
});

function randomNumber(){
    return Math.floor(Math.random()*colors.length); 
}