<script setup lang="ts">
import Icone from "../../public/icone.vue";
</script>

<template>
  <header class="bg-white border-b border-gray-300 py-2 px-4 flex justify-between items-center">
    <!-- Logo à gauche -->
    <div class="text-xl font-semibold">
      <RouterLink class="nav-link" to="/"><Icone /></RouterLink>
    </div>

    <!-- Boutons du centre -->
    <ul class="flex space-x-4">
      <!-- Utilisez 'space-x-4' pour définir l'espacement horizontal -->
      <li class="nav-item">
        <RouterLink class="nav-link" to="/perso">Personnalisation</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/boutique">Boutique</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/">Contact</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/">Offres spéciales</RouterLink>
      </li>
    </ul>

    <!-- Boutons de droite -->
    <div>
      <button class="btn-border mr-2">
        <RouterLink class="nav-link" to="/connexion">Se connecter</RouterLink>
      </button>
      <button class="btn-black">
        <RouterLink class="nav-link" to="/inscription">S'inscrire</RouterLink>
      </button>
    </div>
  </header>
</template>
