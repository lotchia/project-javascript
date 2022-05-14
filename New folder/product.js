let products = 

  [
      {
         productName: "Yellow Chair",
         category: "chair",
         color:"yellow",
         price: 70,
        image: "chair1.jpg",
      },
      {
        productName: " Caffe sofa",
        category: "sofa",
        color:"caffe",
        price: 3000,
        image: "sofa1.jpg",
      },
      {
        productName: " Caffe bed",
        category: "bed",
        color:"caffe",
        price: 1000,
        image: "bed1.jpg",
      },
      {
        productName: "Blue chair",
        category: "chair",
        color:"blue",
        price: 90,
        image: "chair2.jpg",
  },
     
      {
        productName: "gold table",
        category: "table",
        color:"gold",
        price: 90,
        image: "table2.jpg",
      },
      {
        productName: "Yellow chair",
        category: "chair",
        color:"yellow",
        price: 60,
        image: "chair3.jpg",
  },
     
      {
        productName: "Vanilla chair",
        category: "chair",
        color:"Vanilla",
        price: 90,
        image: "chair4.jpg",
  },
      {
        productName: "Black sofa",
        category: "sofa",
        color:"Black",
        price: 2000,
        image: "sofa2.jpg",
      },
      {
        productName: "white sofa",
        category: "sofa",
        color:"white",
        price: 4000,
        image: "sofa3.jpg",
      },
      {
        productName: "gold table",
        category: "table",
        color:"gold",
        price: 90,
        image: "table4.jpg",
      },
      {
        productName: "Blue chair",
        category: "chair",
        color:"blue",
        price: 100,
        image: "chair5.jpg",
  },
      
    {
        productName: "Green sofa",
        category: "sofa",
        color:"green",
        price: 2500,
        image: "sofa4.jpg",
    },
    {
        productName: "Blue chair",
        category: "chair",
        color:"blue",
        price: 80,
        image: "chair6.jpg",
  },

    {
        productName: "gold table",
        category: "table",
        color:"gold",
        price: 70,
        image: "table7.jpg",
    },
    {
        productName: "Caffe table",
        category: "table",
        price:60,
        image: "table8.jpg",
    },
    {
        productName: "Purble chair",
        category: "chair",
        price: 90,
        image: "chair8.jpg",
  },
    {
        productName: " Gray bed",
        category: "bed",
        price: 2000,
        image: "bed3.jpg",
     },
    {
        productName: "gold table",
        category: "table",
        price: 100,
        image: "table9.jpg",
    },
 
    {
        productName: "Gray sofa",
        category: "sofa",
        price: 2500,
        image: "sofa5.jpg",
    },
    {
        productName:  "Yellow sofa",
        category: "sofa",
        color:"yellow",
        price: 2500,
        image: "sofa6.jpg",
     },
    {
        productName: "gold table",
        category: "table",
        color:"gold",
        price: 60,
        image: "table10.jpg",
    },
    {
        productName: "Gray bed",
        category: "bed",
        color:"gray",
        price: 2000,
        image: "bed4.jpg",
    },
    {
        productName: " Brown sofa",
        category: "sofa",
        color:"brown",
        price: 2500,
        image: "sofa7.jpg",
    },
    {
        productName: "gold table",
        category: "table",
        color:"gold",
        price: 200,
        image: "table12.jpg",
    },
    {
        productName: "Gray bed",
        category: "bed",
        color:"gray",
        price: 3000,
        image: "bed5.jpg",
      },
    
    ]


    // console.log(sorted);

  var sorted=products.sort(function(a,b)
  {
    return a.price -b.price
  })
    

for (let i of sorted)
{
    var card = document.createElement("div");
    card.classList.add("card", i.category ,"hide");
    
    let imgContainer = document.createElement("div");
   imgContainer.classList.add("image-container");

   let image = document.createElement("img");
   image.setAttribute("src", i.image);

   imgContainer.appendChild(image);
   card.appendChild(imgContainer);

  
   let container = document.createElement("div");
   container.classList.add("container");


   
   let name = document.createElement("h5");
   name.classList.add("product-name");
   name.innerText = i.productName.toUpperCase();
   container.appendChild(name);



 

   let price = document.createElement("h6");
   price.innerText = i.price;
   container.appendChild(price);
   card.appendChild(container);


   let btn=document.createElement("button");
      btn.id="btnone"
   container.appendChild(btn)
  card.appendChild(container)
  btn.innerText = "Add To Card";
  btn.setAttribute("class","add")

  let btn2=document.createElement("button");
  btn2.id="btntwo"
  container.appendChild(btn2)
  card.appendChild(container)
  btn2.innerText ="favourite";
  btn2.setAttribute("class","favourite")
  document.getElementById("products").appendChild(card);
}
function choosecolor(value)
{


}
// function getprice()
// {
//     let x= document.getElementById("pricevalue").value;
//     x.forEach((button) => {
    
//       if (value.toUpperCase() == button.innerText.toUpperCase()) {
        
//       } else {
      
//       }
//     });
//     if(x==)


//   console.log(x)
// }
function filterProduct(value) {
 
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let elements = document.querySelectorAll(".card");
  
  elements.forEach((element) => {
   
    if (value == "all") {
      element.classList.remove("hide");
    } else {
     
      if (element.classList.contains(value)) {
      
        element.classList.remove("hide");
      } else {
        
        element.classList.add("hide");
      }
    }
  });


}

document.getElementById("search").addEventListener("click", () => {
 
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
 
  elements.forEach((element, index) => {
    
    if (element.innerText.includes(searchInput.toUpperCase())) {
   
      cards[index].classList.remove("hide");
    } else {
      
      cards[index].classList.add("hide");
    }
  });
});

window.onload = () => {
  filterProduct("all");
};

let addtocard = document.getElementsByClassName("add");
let tbody = document.getElementsByTagName("tbody")[0];
let quantity = document.getElementsByClassName("num");
let remove = document.getElementsByClassName("remove");
let favouritess = document.getElementById("haha");
let favourite = document.getElementsByClassName("favourite")

let items= (localStorage.getItem("Products"));


for (let i = 0; i < addtocard.length; i++) {
  addtocard[i].addEventListener("click", function (event) {
    let images=document.getElementsByClassName("image-container")[i];
    let button = event.target;
    let parent = button.parentElement;
    var productname = parent.children[0].innerText;
    var img=images.children[0].src;
    var price = parent.children[1].innerText;
    // var image = this.image;
  
    let container = document.createElement("tr");
    container.innerHTML = `<tr ">
    <td style="height:40px;"><input class="check" type="checkbox" name="" id=""></td>
    <td ><img src="${img}" class="img" width="40px" hieght="50px" alt=""></td>
    <td class="itemname"><h4>${productname}</h4></td>
    <td class="itemprice"><h5>$${price}</h5></td>
    <td><input type="number" class="num" value="1"></td>
    <td class="totalprice"><h5>${price}</h5></td>
    <td><button class="remove" type="button">Remove</button></td>
    
    </tr>`;
    tbody.append(container);
        for (let i = 0; i < quantity.length; i++) {
            quantity[i].addEventListener("change", updateprice);
        }
        
        for (let i = 0; i < remove.length; i++) {
            remove[i].addEventListener("click", removee);
        }
        all_Product_Price();
      
    
});

for (let i = 0; i < favourite.length; i++) {
  Array.from(document.getElementsByClassName("favourite")).forEach(function (
    element
  ){
    favourite[i].addEventListener("click", 
    (eo)=>{
        // let button = ;
        for (let i of sorted){
          var category = i.category;
          var productname = i.productName;
          var price = i.price;
          var image = i.image;
        }
        let prod=[];
        // for (let x = 0; x < prod.length; x++) {
            prod[i]={image:image,price:price,productname:productname,category:category};
            localStorage.setItem("Products", JSON.stringify(prod));
            
            
          })
        }
          )
}}
function updateprice(event) {
  count_of_item = event.target;
  count_of_item_parent = count_of_item.parentElement.parentElement;
  pricefield = count_of_item_parent.getElementsByClassName("itemprice")[0];
  Totalprice = count_of_item_parent.getElementsByClassName("totalprice")[0];
  pricefield_content = pricefield.children[0].innerText.replace("$", "");
  Totalprice.children[0].innerText =
  "$" + count_of_item.value * pricefield_content;
  if (isNaN(count_of_item.value) || count_of_item.value <= 0) {
    count_of_item.value = 1;
  }
  all_Product_Price();
}

function all_Product_Price() {
  let allprice = document.getElementsByClassName("totalprice");
  let total = 0;
  let totalplace = document.getElementsByClassName("total")[0];
  for (let i = 0; i < allprice.length; i++) {
    all_Product_content = Number(allprice[i].innerText.replace("$", ""));
    total += all_Product_content;
  }
  totalplace.children[0].innerText = "$" + total;
  totalplace.children[0].style.fontWeight = "bold";
  // console.log(total)
}

function removee(event) {
  remove_btn = event.target;
  remove_parent = remove_btn.parentElement.parentElement;
  remove_parent.remove();
  all_Product_Price();
}
let closeitems=document.getElementById("closeitems");
let btn_items=document.getElementById("openitems");
let hiddenttable=document.getElementsByClassName("hid")[0];
// let hide=document.getElementsByClassName("items")[0];
// document.getElementById("openitems").addEventListener("click",function(){
//   openitems()
//   closeitem()
// })
function itemstable() {
  if (btn_items.className == "open") {
    // read less
    btn_items.className = "";
    btn_items.innerHTML = "Item -";
    hiddenttable.style.display="block";
    btn_items.style.top="300px";
  } else {
    //read more
    btn_items.className = "open";
    btn_items.innerHTML = "Item +";
    hiddenttable.style.display="none";
    btn_items.style.top="10px";
  }
}

