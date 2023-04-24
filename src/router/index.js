import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '@/components/ProductList.vue'
import ProductDetail from '@/components/ProductDetail.vue'

const routes = [
    {
        path: '/products',
        component: ProductList,
        meta: {
            title: 'Product List'
        }
    },
    {
        path: '/products/{id}',
        component: ProductDetail,
        meta: {
            title: 'Product Detail'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router