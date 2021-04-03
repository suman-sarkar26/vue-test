import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'

export const routes = [
    {
      name:'home',
      path:'/',
      component:HomePage
    },
    {
      name:'blog',
      path:'/blog/:id',
      component:BlogPage
    }
  ]