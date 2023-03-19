const containerElement=document.querySelector(".container");
console.log(containerElement);

function rendershop(){
    productss.forEach((x)=>{
    containerElement.innerHTML+=`
        <div class="product">
            <img src=${x.imgSrc} alt="" >
            <div class="description">
                <span>${x.brand}</span>
                <h4>${x.name}</h4>
                <div class="star">
                    <i class="fas fa-star"></i>
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
    newarrival.forEach((x)=>{
        containerElement.innerHTML+=`
        <div class="product">
            <img src=${x.imgSrc} alt="">
            <div class="description">
                <span>${x.brand}</span>
                <h4>${x.name}</h4>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h3>${x.price}</h3>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"onclick="addtocartnewarrivals(${x.id})"></i></a>
            </div>
        `;
    });
    
}
rendershop();

