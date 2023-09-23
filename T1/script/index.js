const data=[
    {
      "name": "Premium Chocolate Assortment",
      "price": 59.99,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-BTkISNMRxBFS9tbgMQmjSH_l8_hLdA6UdA&usqp=CAU"
    },
    {
      "name": "Luxury Chocolate Truffles",
      "price": 69.99,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3TNIRc1JQSDdFFiUAuHw31VoRWiIBeFXJA&usqp=CAU"
    },
    {
      "name": "Gold-Plated Chocolate Bars",
      "price": 79.99,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP2Ltg2cGJcyGxHYTHV_d7V3SinDJO277QtA&usqp=CAU"
    },
    {
      "name": "Diamond-Encrusted Chocolate",
      "price": 999.99,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRiZjApTpAgmKy-gJp7q56k8nCwKnr66RKzA&usqp=CAU"
    },
    {
      "name": "Artisan Chocolate Collection",
      "price": 89.99,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCUFDllRQcXcrJaC-fDVyhIFIC5n--T1vG-At_u7I9C-HriFNKBkmgQBRGZ6k7t-hLWo&usqp=CAU"
    },
    {
      "name": "Dark Chocolate Elegance",
      "price": 59.99,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG-Fwc_DuPpFsK2VTfj1ozEX8ZGutXIFHU2g&usqp=CAU"
    },
    {
      "name": "Chocolate Fondue Fountain",
      "price": 129.99,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVR3WI2NXESan1rf8DD37zzucBcFFicMITUA&usqp=CAU"
    },
    {
      "name": "Gourmet Chocolate Covered Fruit",
      "price": 79.99,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDoIxpiEx9vfSnBIc0DgCm6_JazyLEqYvwQ&usqp=CAU"
    },
    {
      "name": "Champagne-Infused Chocolate",
      "price": 89.99,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh2AQoFhvwOSoKFMTTKI9Bgf491zLWZhX4EA&usqp=CAU"
    },
    {
      "name": "Chocolate strawberries",
      "price": 119.99,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRhcKu51wOEARq5Pdef_FzXeRCf6nWBD1X1Q&usqp=CAU"
    },
    {
      "name": "Exquisite Chocolate Fondant Cake",
      "price": 69.99,
      "image": "https://uprootfromoregon.files.wordpress.com/2013/10/donut.jpg?w=350&h=200&crop=1"
    },
    {
      "name": "Chocolate-Covered Caviar",
      "price": 299.99,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQEJ6524txt7n3WVW2DSXE2UOvgtga1YHVVg&usqp=CAU"
    }
]
const cartdata=JSON.parse(localStorage.getItem("cart"))||[]
let total=document.getElementById("totalcar")
let sum=0
for(let i=0;i<cartdata.legnth;i++){
    sum+=cartdata[i].qty*cartdata[i].price
}
total.innerText=`Cart (${cartdata.length})  `


let container=document.getElementById("container")
data.forEach((el,index)=>{
let box=document.createElement("div")

let image=document.createElement("img")
image.src=el.image;

let heading=document.createElement("h3")
heading.innerText=el.name
let price=document.createElement("p")
price.innerText="$"+" "+el.price;

let qty=0
let qtybox=document.createElement("div")
let reduce=document.createElement("button")
reduce.innerText="-"
reduce.addEventListener("click",function(){
    if(qty>0){
        qty-=1
    }
  console.log(qty)
  qt.innerText=qty
})

let qt=document.createElement("button")
qt.innerText=qty
let add=document.createElement("button")
add.innerText="+"
add.addEventListener("click",function(){
   
  qty+=1
  console.log(qty)
  qt.innerText=qty
})
qtybox.append(reduce,qt,add)
let button=document.createElement("button")
button.innerText="ADD "
button.addEventListener("click",function(){
    addtocart(el,qty)
})



box.append(image,heading,price,qtybox,button)


container.append(box)
})




function addtocart(el,qty){
  
if(cartdata.length<8){
let obj={
    ...el,
    qty:qty===0?1:qty
}
cartdata.push(obj)

localStorage.setItem("cart",JSON.stringify(cartdata))
alert("Item added To Cart")
location.reload();


}
else{
    alert("Ony 8 Items Should be added to Cart...")  
}
}


function gotocart(){

window.location.href="./cart.html"

}