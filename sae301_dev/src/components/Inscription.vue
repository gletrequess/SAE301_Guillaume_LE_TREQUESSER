<template>
    <div class="bg-white border border-black p-6 w-96 mx-auto my-8 rounded-none">
      <h2 class="text-2xl font-bold text-center">Inscrivez-vous gratuitement</h2>
  
      <!-- Champs Prénom et Nom -->
      <div class="flex mt-4 space-x-2">
        <div class="w-1/2">
          <label class="block text-sm text-gray-600">Prénom</label>
          <input
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
            placeholder="Entrer votre prénom"
          />
        </div>
        <div class="w-1/2">
          <label class="block text-sm text-gray-600">Nom</label>
          <input
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
            placeholder="Entrer votre nom"
          />
        </div>
      </div>
  
      <!-- Champ Email -->
      <div class="mt-4">
        <label class="block text-sm text-gray-600">Email</label>
        <input
          type="text"
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
          placeholder="Entrer votre email"
        />
      </div>
  
      <!-- Champ Mot de passe -->
      <div class="mt-4">
        <label class="block text-sm text-gray-600">Mot de passe</label>
        <input
          type="password"
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
          placeholder="Mot de passe"
        />
      </div>
  
      <!-- Bouton "S'inscrire" -->
      <button class="w-full mt-6 bg-black text-white py-2 rounded hover:bg-opacity-80 focus:outline-none">
        S'inscrire
      </button>
  
      <!-- Ligne de séparation -->
      <div class="border-t mt-6 border-gray-300"></div>
  
      <!-- Texte "Ou vous inscrire avec" et bouton Google -->
      <div class="text-gray-600 text-center mt-4">Ou vous inscrire avec :</div>
      <button class="w-full mt-2 border border-black py-2 rounded flex items-center justify-center hover:bg-gray-100 focus:outline-none">
        <i class="fab fa-google text-black mr-2"></i> Google
      </button>
  
      <!-- Ligne de séparation -->
      <div class="border-t mt-6 border-gray-300"></div>
  
      <!-- Texte cliquable "Déjà un compte ?" -->
      <p class="text-gray-600 text-center mt-4">
        Déjà un compte ? <a href="#" class="text-black underline"><RouterLink class="nav-link" to="/connexion">Se connecter ici</RouterLink></a>
      </p>
    </div>
  </template>
  