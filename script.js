
let products = []
async function loadProducts() {

    try {
        const reponse = await fetch("/data/products.json")
        const data = await reponse.json()
        products = data;
        console.log(products);


        displayProducts(products);
    } catch (error) {
        console.error(error)
    }
}
loadProducts()

const productsload = document.querySelector("#products");
const displaycategory = document.querySelector("#category");

function displayProducts(products) {


    const productsMapped = products.map(product => {
        return {
            name: product.name,
            category: product.category,
            price: product.price,
            stock: product.stock
        }
    })
    productsload.innerHTML = "";
    productsMapped.forEach(product => {
        productsload.innerHTML += `
            <article>
                <h3>${product.name}</h3>
                <p>price : ${product.price} $</p>
                <p>category: ${product.category}</p>
               <p>stock: ${product.stock}</p>

            </article>
        `
    });


    displaycategory.innerHTML = "";
    productsMapped.forEach(product => {
        displaycategory.innerHTML += `
    <option>category: ${product.category}</option>
 `
    });
}

displaycategory.addEventListener("click", function(){
 const filter = products.filter(product => products.category)
displaycategory.innerHTML
})
