const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss'},
                {title: 'the way of kings', author: 'brandon sanderson'},
                {title: 'the final empire', author: 'brandon sanderson'}
            ],
            age: 30,
            x: 0,
            y: 0
        }
    },
    methods: {
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
    }
}).mount('#app')