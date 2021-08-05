// [IMPORT] //
import Vue from 'vue'
import VueRouter from 'vue-router'


// [IMPORT] Personal //
import index from '@/pages'
import about from '@/pages/about'
import book from '@/pages/book'
import contact from "@/pages/contact"
import directions from '@/pages/directions'
import faq from '@/pages/faq'
import gallery from '@/pages/gallery'
import ourTeam from '@/pages/our-team'
import menu from '@/pages/menu'
import services from '@/pages/services'
import notFound from '@/pages/404'


Vue.use(VueRouter)


const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: '/',
			component: index,
		},
		// About //
		{
			path: '/about',
			name: 'about',
			component: about,
		},
		// Book //
		{
			path: '/book',
			name: 'book',
			component: book,
		},
		// Contact //
		{
			path: '/contact',
			name: 'contact',
			component: contact,
		},
		// Directions //
		{
			path: '/directions',
			name: 'directions',
			component: directions,
		},
		// FAQ //
		{
			path: '/faq',
			name: 'faq',
			component: faq,
		},
		// Gallery //
		{
			path: '/gallery',
			name: 'gallery',
			component: gallery,
		},
		// Our Team //
		{
			path: '/our-team',
			name: 'our-team',
			component: ourTeam,
		},
		// Menu //
		{
			path: '/menu',
			name: 'menu',
			component: menu,
		},
		// Services //
		{
			path: '/services',
			name: 'services',
			component: services,
		},
		// Not-Found //
		{
			path: '/**',
			name: 'not_found',
			component: notFound,
		},
	],

	// [VUE-ROUTER] Scroll Behavior //
	scrollBehavior () { return { x: 0, y: 0 } }
})

export default router
