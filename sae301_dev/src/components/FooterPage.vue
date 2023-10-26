<script setup>
import logoblanc from "../../public/logoblanc.vue";
import facebook from "../../public/facebook.vue";
import twitter from "../../public/twitter.vue";
import youtube from "../../public/youtube.vue";
import instagram from "../../public/instagram.vue";
import linkedin from "../../public/linkedin.vue";
</script>

<template>
  <footer class="bg-Noir_Bouton text-white">
    <!-- Premier Niveau -->
    <div class="max-w-screen-xl mx-auto p-4 flex justify-between">
      <div>
        <!-- Logo du site -->
        <logoblanc />
      </div>
      <div class="flex">
        <!-- Champ de remplissage pour la newsletter -->
        <input
          type="text"
          class="bg-gray-800 text-black p-2 rounded-l focus:outline-none"
          placeholder="Entrez votre adresse e-mail pour recevoir les dernières actualités..."
        />
        <!-- Bouton "S'abonner" -->
        <button class="bg-black text-white p-2 rounded-r ml-2">S'abonner</button>
      </div>
    </div>
    <!-- Séparation -->
    <div class="max-w-screen-xl mx-auto h-px bg-white"></div>

    <!-- Deuxième Niveau -->
    <div class="max-w-screen-xl mx-auto grid grid-cols-4 gap-4 p-4">
      <!-- Colonne 1 -->
      <div class="flex flex-col">
        <p class="text-xl font-bold mb-2">Informations</p>
        <a href="#">À Propos</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        <a href="#">FAQ</a>
      </div>
      <!-- Colonne 2 -->
      <div class="flex flex-col">
        <p class="text-xl font-bold mb-2">Notre boutique</p>
        <a href="#">Personnalisation</a>
        <a href="#">Collections</a>
        <a href="#">Livraisons et retours</a>
        <a href="#">Témoignages</a>
      </div>
      <!-- Colonne 3 -->
      <div class="flex flex-col">
        <p class="text-xl font-bold mb-2">Notre réseau</p>
        <a href="#">Suivez-nous</a>
        <a href="#">Newsletter</a>
        <a href="#">Partenariats</a>
        <a href="#">Conditions générales</a>
      </div>
      <!-- Colonne 4 -->
      <div class="flex flex-col">
        <p class="text-xl font-bold mb-2">Téléchargez notre application</p>
        <div class="flex">
          <a href="#">
            <img src="../../public/appstore.png" alt="App Store" />
          </a>
          <a href="#">
            <img src="../../public/googleplay.png" alt="Google Play" />
          </a>
        </div>

        <p class="text-xl font-bold mt-4">Rejoignez-nous</p>
        <div class="flex mt-2">
          <a href="#"><youtube></youtube></a>
          <a href="#" class="ml-1"><facebook></facebook></a>
          <a href="#" class="ml-1"><twitter></twitter></a>
          <a href="#" class="ml-1"><instagram /></a>
          <a href="#" class="ml-1"><linkedin></linkedin></a>
        </div>
      </div>
    </div>

    <!-- Séparation -->
    <div class="max-w-screen-xl mx-auto h-px bg-white"></div>

    <!-- Troisième Niveau -->
    <div class="max-w-screen-xl mx-auto p-4 flex justify-between">
      <p>TaVue @2023. Tous droits réservés</p>
      <div>
        <a href="#" class="mr-4 underline">Mentions légales</a>
        <a href="#" class="underline">Politique de confidentialité</a>
      </div>
    </div>
  </footer>
</template>
