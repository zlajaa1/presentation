import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ResumeView from '@/views/ResumeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import PdfView from '@/views/PdfView.vue'

const router = createRouter({
  history: createWebHashHistory(), //import.meta.env.BASE_URL
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/pdf',
      name: 'pdf',
      component: PdfView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
