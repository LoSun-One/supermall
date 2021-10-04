import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
	{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('../views/Home'),
	},
	{
		path: '/cart',
		name: 'Cart',
		component: () => import('../views/Cart')
	},
	{
		path: '/sort',
		name: 'Sort',
		component: () => import('../views/Sort')
	},
	{
		path: '/profile',
		name: 'Profile',
		component: () => import('../views/Profile')
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
