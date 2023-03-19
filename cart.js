let finalcart=JSON.parse(localStorage.getItem("data")) || [];
const cartitemsElement=document.getElementById("rendercart");
const finaltotalEl=document.getElementById("finaltotal");
const totalcartitemsEl=document.getElementById("totalcartitems");
console.log(finalcart);



function finalcartitems(){
 
    cartitemsElement.innerHTML="";
    finalcart.forEach((x)=>{
    cartitemsElement.innerHTML +=`
        <div class="cart-items"id="cart-items">
            <div class="item-img">
                <img src="${x.imgSrc}" width="70px"  alt="#">
            </div>
            
            <div class="item-price">${x.price}</div>

            <div class="itm-quantity">
                <div class="minus-btn" onclick="changenumberofunits('minus',${x.id})">-</div>
                <div id="numberofitem">${x.numberofunits}</div>
                <div class="plus-btn"onclick="changenumberofunits('plus',${x.id})">+</div>
            </div>

            <div class="remove-btn">
                <div class="removebutton"onclick="removecartitem(${x.id})">x</div>   
            </div>
        </div>
    `;

    });
   

    rendersubtotal();
    settotalcartnum(); 
}

finalcartitems();


function changenumberofunits(action,id){
    finalcart=finalcart.map((x)=>{
        let newnumberofunits=x.numberofunits;
        console.log(id);
        if(id===x.id){
        
            if(action==='plus' && newnumberofunits < x.instock){
                newnumberofunits++;
            }
            else if(action==='minus' && newnumberofunits > 1){
                newnumberofunits--;
            }
        }
            return{
                ...x,
                numberofunits:newnumberofunits,
            };
           
           
    });
    
    finalcartitems();
    rendersubtotal();

}


function rendersubtotal(){
    
    let totalprice=0;
    let totalitems=0;
    console.log(finalcart);
    
   finalcart.forEach((x)=>{
        totalprice += x.price * x.numberofunits;
        totalitems +=x.numberofunits;
        });
    let a=totalprice;
    let b=totalitems;
    totalcartitemsEl.innerHTML=b;
    finaltotalEl.innerHTML=` subtotal(${totalitems} items):${totalprice} `;
    localStorage.setItem("data",JSON.stringify(finalcart));
    
}


function removecartitem(id){
    finalcart=finalcart.filter((x)=> x.id !== id)
    localStorage.setItem("data",JSON.stringify(finalcart));
    finalcart=JSON.parse(localStorage.getItem("data")) || [];
    finalcartitems();
    rendersubtotal();
}


console.log(finalcart);

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

   