const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const maincart=document.getElementById('shoppingbag');
 



if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.toggle('activate');
    })
}
const close=document.getElementById('close');
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('activate');
    })
}




/*peoduct page*/
/*
var big=document.getElementById('big-img');
var small=document.getElementsByClassName('small-img');


small[0].onclick=function(){
 big.src="img/f1.jpg";
}

small[1].onclick=function(){
 big.src="img/f3.jpg";
}

small[2].onclick=function(){
 big.src="img/f2.jpg";
}

small[3].onclick=function(){
 big.src="img/f3.jpg";
}

*/







   

