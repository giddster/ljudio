import { createRouter, createWebHistory } from 'vue-router'
import NotFound from "../views/NotFound.vue"
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import FAQ from '../views/FAQ.vue'
import SearchResults from '../views/SearchResults.vue'
import BrowseArtist from '../views/BrowseArtist.vue'
import BrowseSong from '../views/BrowseSong.vue'
import Test from '../views/Test.vue'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/search/:searchString',
    name: 'SearchResults',
    component: SearchResults
  },
  {
    path: '/artists/:browseId',
    name: 'BrowseArtist',
    component: BrowseArtist
  },
  {
    path: '/songs/:videoId',
    name: 'BrowseSong',
    component: BrowseSong
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
