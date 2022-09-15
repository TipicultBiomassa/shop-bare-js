const button = document.getElementById('mailto');

const fatherModal = document.getElementById('modal-father');

const modalBody = document.getElementById("modal-body");

const content = document.getElementById('content');
const корзинаМассив = [];
const сделатьЗапрос = async ()=>{
    let товары = await fetch('https://fakestoreapi.com/products/');
    товары = await товары.json();
    console.log(товары);
    for(let i = 0;i<=товары.length;i++){
        const контейнер = document.createElement('div');
        const название = document.createElement('p');
        const картинка = document.createElement('img');
        const купить = document.createElement('button');
        купить.className= 'buy-button';
        контейнер.className = 'product-card';
        картинка.src = товары[i].image;
        название.textContent = товары[i].title;
        купить.textContent='🛒';
        купить.addEventListener('click',()=>{
            корзинаМассив.push(товары[i]);
            console.log(корзинаМассив);
        });
        контейнер.appendChild(название);
        контейнер.appendChild(картинка);
        контейнер.appendChild(купить);
        content.appendChild(контейнер);
    }
}

сделатьЗапрос();
button.addEventListener('click',()=>{

    const video = document.getElementById('myVideo');
    modalBody.innerHTML = '';
    fatherModal.style.visibility = 'visible';
    fatherModal.style.animation = 'fadeIn 3s';
    modalBody.style.animation = 'appearFromTop 2s';

    console.log(корзинаМассив);
    for(let i = 0;i<=корзинаМассив.length;i++){
        const контейнер = document.createElement('div');
        const название = document.createElement('p');
        const картинка = document.createElement('img');
        const удалить = document.createElement('button');
        удалить.className= 'buy-button';
        контейнер.className = 'product-card';
        картинка.src = корзинаМассив[i].image;
        название.textContent = корзинаМассив[i].title;
        удалить.textContent='🚫';
        удалить.addEventListener('click',()=>{
            корзинаМассив.splice(i, 1);
            контейнер.remove();
        });
        контейнер.appendChild(название);
        контейнер.appendChild(картинка);
        контейнер.appendChild(удалить);
        modalBody.appendChild(контейнер);
    }
});





fatherModal.addEventListener('click',()=>{
   
            
    fatherModal.style.visibility = 'hidden';
    fatherModal.style.animation = '';
    modalBody.style.animation = '';
})

modalBody.addEventListener('click',(e)=>{

    e.stopPropagation();
})