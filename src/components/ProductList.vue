<template>
    <div>
        <div class="filter">
            <button @click="filterProducts()">Filter1</button>
            <button @click="filterProducts(OPTION_ONLY_AVAILABLE)">Filter2</button>
            <button @click="filterProducts(OPTION_ONLY_WATCH_LIST)">Filter3</button>
        </div>
        <div class="header m-2">
            <h3>{{ header.headerTitle }}</h3>
            <span>{{ header.headerDescription }}</span>
        </div>
        <div class="products m-2">
            <div class="product p-2 mb-2 grid grid-cols-7" v-for="item in items">
                <div class="image col-span-2">
                    <img :src="item.imageURL" alt="">
                </div>
                <div class="ml-1 col-span-5">
                    <span class="font-bold">{{ item.name }}</span>
                    <span class="float-right">{{ formatDate(item.releaseDate) }}</span>
                    <p class="description">{{ item.description }}</p>
                    <p class="price">Price {{ item.price.value }} {{ item.price.currency }}</p>
                </div>
            </div>
        </div>
        <div class="filter">
            <button @click="filterProducts()">Filter1</button>
            <button @click="filterProducts(OPTION_ONLY_AVAILABLE)">Filter2</button>
            <button @click="filterProducts(OPTION_ONLY_WATCH_LIST)">Filter3</button>
        </div>
    </div>
</template>

<script>
    import api from '../api'
    export default {
        name: "ProductList",
        data() {
            return {
                products: [],
                items: [],
                watchList: [],
                filters: {},
                header: {}
            }
        },
        created() {
            this.getProducts()
            this.OPTION_FULL = 1
            this.OPTION_ONLY_AVAILABLE = 2
            this.OPTION_ONLY_WATCH_LIST = 3
        },
        methods: {
            async getProducts() {
                await api.get('https://gist.githubusercontent.com/benfranke/c33280a8df5f4f9db2e63ad45cab26a4/raw/f3ad6c00ff520c2667305103d5705bcbb57a7778/products.json')
                    .then((response) => {
                        this.header = response.data.header
                        this.filters = response.data.filters
                        this.items = this.products = response.data.products
                    })
            },
            filterProducts(option = this.OPTION_FULL) {
                if (option === this.OPTION_FULL) return this.items = this.products
                if (option === this.OPTION_ONLY_AVAILABLE) return this.items = this.products.filter(product => product.available)
                if (option === this.OPTION_ONLY_AVAILABLE) return this.items = this.products.filter()
            },
            formatDate(timestamp) {
                return new Date(timestamp * 1000).toLocaleDateString('de-DE')
            }
        }
    }
</script>

<style scoped>
    .filter button {
        @apply bg-gray-300 py-1;
        width: 33.3%;
    }
    .product {
        border: 2px solid rgb(163 163 163);
    }
    .image img {
        width: 90px;
        height: 90px;
    }
    .description {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
</style>