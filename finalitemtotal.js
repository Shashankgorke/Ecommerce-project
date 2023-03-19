function settotalcartnum(){
    const newcart=JSON.parse(localStorage.getItem("data"))||[];
    const cartsum=document.getElementById("newcartsum"); 
    const totalcart=document.getElementById("totalcartitems");
     
    let totalitems=0;
    console.log(newcart);
    newcart.forEach((x)=>{
        totalitems +=x.numberofunits;
        });
    let b=totalitems;
    cartsum.innerHTML=b;
    totalcart.innerHTML=b;
}
settotalcartnum();