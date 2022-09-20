export class Product {
    constructor(title, imgSource){
        this.title = title;
        this.imgSource = imgSource;
        this.контейнерРебенок = document.createElement('div');
        this.название = document.createElement('p');
        this.картинка = document.createElement('img');
        this.купить = document.createElement('button');
        this.индексМассива = null;
    }
    show (isInCart, контейнерРодитель){
        // Визуализация
        this.купить.className= 'buy-button';
        this.контейнерРебенок.className = 'product-card';
        this.картинка.src = this.imgSource;
        this.название.textContent = this.title;
        if(!isInCart){
            this.купить.textContent='🛒';
            this.купить.addEventListener('click', this.addToCart.bind(this));
        } else {
            this.купить.textContent='🚫';
            this.купить.addEventListener('click', this.removeFromCart.bind(this));
        }
        this.контейнерРебенок.appendChild(this.название);
        this.контейнерРебенок.appendChild(this.картинка);
        this.контейнерРебенок.appendChild(this.купить);
        контейнерРодитель.appendChild(this.контейнерРебенок);
    }
    addToCart (){
        window.корзинаТоваров.push(this);
        this.индексМассива = window.корзинаТоваров.length;
    }
    removeFromCart(){
        window.корзинаТоваров.splice(this.индексМассива, 1);
        this.контейнерРебенок.remove();
    }
}