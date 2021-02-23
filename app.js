const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The final Empire',
            author: 'Amir Tarig',
            age: 30
        }
    },
    methods: {
        toggleBooks() {
            this.showBooks = !this.showBooks
        }
    }
}).mount('#app')