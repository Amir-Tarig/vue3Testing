const app = Vue.createApp({
    data() {
        return {
            url: 'https://github.com/MiroPhoenix',
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss',img:'./assets/1.jpg', isFav: true},
                {title: 'the way of kings', author: 'brandon sanderson', img:'./assets/2.jpg',isFav: false},
                {title: 'the final empire', author: 'brandon sanderson',img:'./assets/3.jpg',isFav: true}
            ],
            age: 30,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleClass(book){
            book.isFav = !book.isFav
        },
        toggleBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(){
            console.log(event)
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    },
    computed: {
        filterBooks() {
            return this.books.filter(book => book.isFav)
        }
    }
}).mount('#app')