// Siema carousel
const mySiema = new Siema({
    selector: '.m-carousel__items'
});

document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());