import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';
import NProgress from 'nprogress';

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeResolve((to, from, next) => {
	// If this isn't an initial page load.
	if (to.name) {
		// Start the route progress bar.
		NProgress.start();
	}
	next();
});

router.afterEach((to, from) => {
	// Complete the animation of the route progress bar.
	NProgress.done();
});

export default router;