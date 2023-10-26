import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonnalisationView from '../views/PersonnalisationView.vue'
import ConnexionView from '../views/ConnexionView.vue'
import InscriptionView from '../views/InscriptionView.vue'
import BoutiqueView from '../views/BoutiqueView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/perso',         name: 'PersonnalisationView',          component: PersonnalisationView },
    { path: '/connexion',     name: 'ConnexionView',                 component: ConnexionView },
    { path: '/inscription',   name: 'InscriptionView',               component: InscriptionView },
    { path: '/boutique',      name: 'BoutiqueView',                  component: BoutiqueView },
  ]
})

export default router
