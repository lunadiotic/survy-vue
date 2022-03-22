import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Main from '../components/Main.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		redirect: '/dashboard',
		component: Dashboard,
		children: [
			{ path: '/dashboard', 'name': 'Dashboard', component: Main }
		]
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
