import { getProductCount } from "./common.js"

let table = document.getElementById("table");
let countElem = document.querySelector("sup");

let products = [];
if (JSON.parse(localStorage.getItem("products")) != null) {
    products = JSON.parse(localStorage.getItem("products"));
}

getProductList(products);

function getProductList(list) {
    for (const product of list) {
        table.lastElementChild.innerHTML += `<tr data-id="${product.id}">
        <th >
            <img src="${product.img}" style="height:100px" alt="">
        </th>
        <td>${product.name}</td>
        <td>${product.count}</td>
        <td class="delete"><i class="fas fa-times"></i></td>
        </tr>`
    }
}



let deleteBtn = document.querySelectorAll(".delete i");

for (const item of deleteBtn) {
    item.addEventListener("click",function (e) {
        e.target.parentNode.parentNode.remove();
        let id = e.target.parentNode.parentNode.getAttribute("data-id");
        let productIndex = products.findIndex(m => m.id == id);
            products.splice(productIndex,1);
        localStorage.setItem("products", JSON.stringify(products));
        countElem.innerText = getProductCount(products);
    })
}
countElem.innerText = getProductCount(products);