const data=JSON.parse(localStorage.getItem("cart"))||[]


let total=document.getElementById("totalcar")
const totalSum = data.reduce((accumulator, item) => {
    const itemTotal = item.qty * item.price; 
    return accumulator + itemTotal;
  }, 0);
total.innerText=`Total (${Math.floor(totalSum)})  `



let container=document.getElementById("container")
data.forEach((el,index)=>{
let box=document.createElement("div")

let image=document.createElement("img")
image.src=el.image;

let heading=document.createElement("h3")
heading.innerText=el.name
let price=document.createElement("p")
price.innerText="$"+" "+el.price;


let qtybox=document.createElement("div")
let reduce=document.createElement("button")
reduce.innerText="-"
reduce.addEventListener("click",function(){
    if(qty>0){
      reduceqty(index)
    }
  
})

let qt=document.createElement("button")
qt.innerText=el.qty
let add=document.createElement("button")
add.innerText="+"
add.addEventListener("click",function(){
   
 addqty(index)
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


function  reduceqty(index){
 const update=data.map((item,i)=>{


  if(i===index){
    return {...item,qty:item.qty-1}
  }
  return item 
 })
 localStorage.setItem("cart",JSON.stringify(update))
 location.reload();
}

function addqty(index){
  const update=data.map((item,i)=>{


    if(i===index){
      return {...item,qty:item.qty+1}
    }
    return item 
   })

   localStorage.setItem("cart",JSON.stringify(update))
   location.reload();
}
