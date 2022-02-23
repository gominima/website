import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';
import nprogress from 'nprogress';

routes.push({ path: '/docs', redirect: '/docs/minima/main' })

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeResolve((to, _from, next) => {
  if (to.name) {
    nprogress.start();
  }
  next();
});

router.afterEach(() => {
  nprogress.done();
});

export default router;
