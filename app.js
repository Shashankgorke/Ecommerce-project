const productEl=document.querySelector(".container");
const newarrivalEL=document.querySelector(".container2");
const totalcartitemsnumber=document.getElementById("totalcartitems");

const cart=JSON.parse(localStorage.getItem("data")) ||[];
settotalcartnum();
renderProducts(); 
function renderProducts(){
    
    productss.forEach((x)=>{
        productEl.innerHTML +=`
        <div class="product">
    <img src=${x.imgSrc} onclick="product.html">
    <div class="description">
        <span>${x.brand}</span>
        <h4>${x.name}</h4>
        <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            
        </div>
        <h3>${x.price}</h3>
    </div>
    <a href="#"><i class="fal fa-shopping-cart cart"onclick="addtocart(${x.id})"></i></a>
</div>

        `;
      
    });

}


function rendernewarrivals(){
    newarrivals.forEach((x)=>{
        newarrivalEL.innerHTML +=`
        <div class="pro1">
            <img src=${x.imgSrc}>
            <div class="pro-info">
                <span>${x.brand}</span>
                <h4>${x.name}</h4>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>${x.price}</h4>  
            </div>
            <a href="#"><i class="fal fa-shopping-cart cart2"onclick="addtocartnewarrivals(${x.id})"></i></a>
            </div>
        `;
    });
}
rendernewarrivals();



function addtocart(id){
    let cart=JSON.parse(localStorage.getItem("data")) || [];
    let search=cart.find((x)=> x.id===id);
    if(search === undefined){
        const item=productss.find((x)=>x.id===id);
        cart.push({
            ...item,
            numberofunits:1,
        
        });
    }
    else{
        search.numberofunits += 1;
}
    localStorage.setItem("data",JSON.stringify(cart));
    console.log(cart);
    settotalcartnum();
}


function addtocartnewarrivals(id){
    let search=cart.find((x)=> x.id===id);
    if(search === undefined){
        const item=newarrivals.find((x)=>x.id===id);
        cart.push({
            ...item,
            numberofunits:1,
        
        });
    }
    else{
        search.numberofunits += 1;
}
    localStorage.setItem("data",JSON.stringify(cart));
    console.log(cart);
    settotalcartnum();

}


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
   
