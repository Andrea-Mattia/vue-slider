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
    },
    methods: {
        prevImg() {
            this.imgIndex--;
            if (this.imgIndex < 0) {
                this.imgIndex = this.images.length - 1;
            }
        },
        nextImg() {
            this.imgIndex++;
            if (this.imgIndex > this.images.length - 1) {
                this.imgIndex = 0;
            }
        },
    },
});