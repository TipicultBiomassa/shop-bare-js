import {Product} from "./product.js"

const button = document.getElementById('mailto');

const fatherModal = document.getElementById('modal-father');

const modalBody = document.getElementById("modal-body");

const content = document.getElementById('content');
window.товары = [];


console.log("тест")

window.корзинаТоваров = [];
const сделатьЗапрос = async ()=>{
    let товары = await fetch('https://fakestoreapi.com/products/');
    товары = await товары.json();
    window.товары = товары;
    for(let i = 0;i<товары.length;i++){
        const product = new Product(товары[i].title, товары[i].image);
        product.show(false, content);
    }
}


сделатьЗапрос();
button.addEventListener('click',()=>{
    const video = document.getElementById('myVideo');
    modalBody.innerHTML = '';
    fatherModal.style.visibility = 'visible';
    fatherModal.style.animation = 'fadeIn 3s';
    modalBody.style.animation = 'appearFromTop 2s';
    for(let i = 0;i<window.корзинаТоваров.length;i++){
        const product = new Product(window.корзинаТоваров[i].title, window.корзинаТоваров[i].imgSource);
        product.show(true, modalBody);
    }
});

fatherModal.addEventListener('click',()=>{
    fatherModal.style.visibility = 'hidden';
    fatherModal.style.animation = '';
    modalBody.style.animation = '';
})

modalBody.addEventListener('click',(e)=>{

    e.stopPropagation();
});
const myArr = ['Слово'];
let temp = JSON.stringify(myArr);
const новыйМассив = JSON.parse(temp);
myArr.push('Фигня');
console.log(myArr);

const newProductButton = document.getElementById('newProduct');
newProductButton.addEventListener('click', ()=>{
    //let товары = await fetch('https://fakestoreapi.com/products/');
    console.log("Я тут");
    const product = new Product('News', 'https://i.pravatar.cc');
    product.show(false, content);
    fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'News',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://random.imagecdn.app/150/150',
                    category: 'electronic'
                }
            )
        })
        .then(res=>res.json())
        .then(json=>console.log(json))
})

// const замыкание = ()=> {
//     let переменная = 0;
//     return ()=>{
//         return переменная++;
//     }
// }
// const счетчик = замыкание();
// console.log(счетчик());
// console.log(счетчик())
// console.log(счетчик())
// S O L I D 
// Single responsibility - 
