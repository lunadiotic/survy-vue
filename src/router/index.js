import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Main from '../components/Main.vue'
import Survey from '../components/Survey.vue'
import SurveyCreate from '../components/SurveyCreate.vue'

import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '../store/auth';

const routes = [
	{
		path: '/',
		redirect: '/dashboard',
		component: Dashboard,
		children: [
			{ path: '/dashboard', name: 'Dashboard', component: Main },
			{ path: '/survey', name: 'Survey', component: Survey },
			{ path: '/survey/create', name: 'SurveyCreate', component: SurveyCreate },
			{ path: '/survey/:id/edit', name: 'SurveyEdit', component: SurveyCreate }
		],
		async beforeEnter (to, from, next) {
			const auth = useAuth();
			await auth.getUser()
			if (auth.user) {
				next()
			}
			next({
				name: 'Login'
			})
		}
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
