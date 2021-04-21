/**
 * Descrizione
 * Rifare l'esercizio dello slider come fatto assieme in classe.
 * Bonus
 * Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.
 */

 const slider = new Vue({
    el: '#app',
    data: {
        images: [
            './img/img1.jpg',
            './img/img2.jpg',
            './img/img3.jpg',
            './img/img4.jpg',
        ],
        imgIndex: 0,
        intervalID: 0,
    },
    created() {
        this.startLoop();
    },
    methods: {
        prevImg() {
            // decremento l'indice delle img
            this.imgIndex--;
            // se < 0 lo setto a images.length - 1
            if (this.imgIndex < 0) {
                this.imgIndex = this.images.length - 1;
            }
        },
        nextImg() {
            // incremento l'indice delle img
            this.imgIndex++;
            // se > images.length - 1 lo setto a 0
            if (this.imgIndex > this.images.length - 1) {
                this.imgIndex = 0;
            }
        },
        setImg(index) {
            // quando clicco setto l'indice uguale a quello dell'immagine
            this.imgIndex = index;
        },
        startLoop() {
            this.intervalID = setInterval(() => {
                this.nextImg();
            }, 3000);
        },
        stopLoop() {
            clearInterval(this.intervalID);
        },
    },
});