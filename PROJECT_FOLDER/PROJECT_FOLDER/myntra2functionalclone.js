 let bagItems;
 onload();
 function onload(){
let bagItemsstr=localStorage.getItem('bagItems');
bagItems=bagItemsstr?JSON.parse(bagItemsstr):[];
 displayItemsOnHomePage();
 displayBagIcon();
 }
 function AddToBag(itemID){
bagItems.push(itemID);
localStorage.setItem('bagItems',JSON.stringify(bagItems));
displayBagIcon();
 }
 function displayBagIcon(){
    let buttonElementcontainer=document.querySelector('.bag-item-count');
    if(bagItems.length>0){
        buttonElementcontainer.style.visibility='visible';
    
    buttonElementcontainer.innerHTML=bagItems.length;}
    else{
        buttonElementcontainer.style.visibility='hidden';
    }
 }
 function displayItemsOnHomePage(){
 let itemcontainerElement=document.querySelector('.items-container');
 if(!itemcontainerElement){
  return;
 }
let innerhtml='';
items.forEach(item=>{
innerhtml+=`<div class="item-container">
            <img class="item-image" src="${item.image}
            " alt="item-image">
            <div class="rating">
                ${item.rating.stars}⭐ |${item.rating.count}
            </div>
          <div class="company-name">${item.company}</div>
          <div class="item-name">${item.item_name}</div>
          <div class="price">
            <span class="current-price">Rs${item.current_price}</span>
            <span class="original-price">Rs${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
          </div>
<button class="button" onclick="AddToBag(${item.id})">Add to bag</button>
        </div> `});
        itemcontainerElement.innerHTML=innerhtml;}