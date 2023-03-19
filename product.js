const mainimgEle=document.getElementsByClassName('"main-img');


function productrender(id){
 productss.forEach((x)=>{
mainimgEle.innerHTML +=`
<img id="big-img" src=${x.imgSrc}>
    <div class="small">
        <div class="small-img">
        <img src="img/f1.jpg">
        </div>

        <div class="small-img">
        <img src="img/f3.jpg">
        </div>

        <div class="small-img">
        <img src="img/f2.jpg">
        </div>

        <div class="small-img">
        <img src="img/f3.jpg">
        </div>
    </div>`;
});
}