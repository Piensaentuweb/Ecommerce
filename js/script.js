let arrProducts = []

function addProduct() {
    let name = document.getElementById("pName").value
    let price = document.getElementById("pPrice").value
    let category = document.getElementById("pProducto").value
    let imagen = document.getElementById("pDocument").files[0].name

    let objProduct = new Object()
    objProduct.name = name
    objProduct.price = price
    objProduct.category = category
    objProduct.imagen = "images/" + image

    arrProducts.push(objProduct)
}

function setProducts() {
    let divProducts = getElementById("divProduts")
    divProducts.innerHtml = ""

    for(let i=0; i<arrProducts.length; i++) {
        let img = document.createElement("img")
        let pArea = document.createElement("p")
        let pName = document.createElement("p")
        let pPrice = document.createElement("p")
        
        img.setAttribute("src", arrProducts[i].image)

        pArea.setAttribute("class", "product-area")
        pArea.innerHTML = arrProducts[i].category

        pName.setAttribute("class", "product-name")
        pName.innerHTML = arrProducts[i].name

        pPrice.setAttribute("class", "product-price")
        pPrice.innerHTML = "$" + arrProducts[i].price + "00"

        div.setAttribute("class", "product");
        div.appendChild(img);
        div.appendChild(pArea);
        div.appendChild(pName);
        div.appendChild(pPrice);
        
        divProducts.appendChild(div);
    }
}