const products=[{
    image:'./assets/golden-necklace.png',
    name:'Gold Necklaces',
    price:'$15.00'
},{
    image:'./assets/anklets.png',
    name:'Golden Anklets',
    price:'$5.00'
},{
    image:'./assets/beaded-bracelet.png',
    name:'Beaded Bracelet',
    price:'$8.00'
},{
    image:'./assets/diamond-watch.png',
    name:'Diamond Watch',
    price:'$25.00'
},{
    image:'./assets/gold-fashion-ring.png',
    name:'Golden Fashion Ring',
    price:'$14.00'
},{
    image:'./assets/golden-earring.png',
    name:'Golden Earring',
    price:'$10.00'
},{
    image:'./assets/wedding-ring.png',
    name:'Wedding Ring',
    price:'$30.00'
},{
    image:'./assets/golden-pendant.png',
    name:'Golden Pendant',
    price:'$9.00'
},{
    image:'./assets/golden-watch.png',
    name:'Golden Watch',
    price:'$19.00'
},{
    image:'./assets/silver-bracelet.png',
    name:'Silver Bracelet',
    price:'$14.00'
}]
let publish=''
products.forEach((product)=>{
    publish+=`
     <div class="product-card">
                <div class="product-img">
                    <img class="imagee" src="${product.image}" alt=""></div>
                <div class="product-name">
                    <h3>${product.name}</h3>
                </div>
                <div class="product-price">
                    <h4>${product.price}</h4>
                </div>
                <p class="adding" style="display:none;">Added &#10003</p>
                <button class="adder">Add to cart</button>
            </div>`
})
document.querySelector(".js-product-container").innerHTML=publish

document.querySelectorAll(".adder").forEach((button)=>{
    button.addEventListener("click",()=>{
        // alert("hello")
        if(button.innerHTML==="Add to cart"){
            button.innerHTML="Adding..."
            setTimeout(()=>{
                alert("Product Added" )
                button.innerHTML="Remove from cart "
            },2000)
        }else{
            button.innerHTML="Removing..."
            setTimeout(()=>{
                alert("Product Removed")
                button.innerHTML="Add to cart"
            },2000)
        }
    })
})