import { createRouter, createWebHistory } from 'vue-router';
import { getCurrentUser } from '../firebase'

const routes = [
  // Public Routes
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/login',
        component: () => import('../views/Login.vue'),
      },
      {
        path: '/signup',
        component: () => import('../views/Signup.vue'),
      },
    ]
  },
  // Private Routes
  {
    path: '/layout',
    name: 'Layout',
    redirect: '/dashboard',
    component: () => import('../views/Layout.vue'),
    meta: {
      roleReq: ['admin']
    },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue'),
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/Profile.vue'),
      },
    ]
  }
];

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
});

// navigation guard to check for logged in users
router.beforeEach( async (to, from, next) => {
  const user = await getCurrentUser()
  if (to.matched.some(record => record.meta.authReq)) {
    if (!user) {
      next('/login')
    } else {
      if (to.meta.roleReq && to.meta.roleReq.length) {
        if (to.meta.roleReq.includes(user.role)) {
          next()
        } else {
          console.log('Insufficient permissions.')
          next(false)
        }
      } else {
        next()
      }
    }
  } else {
    next()
  }
})

export default router;