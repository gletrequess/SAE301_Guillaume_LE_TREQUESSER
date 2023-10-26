  <script setup> 
   import ModeleSVG from "../../public/Modele.vue"

   import { ref } from 'vue';
import PocketBase from 'pocketbase';

const pb = new PocketBase("https://sae301.guillaume-le-trequesser.fr")

const setColorValue = (element, colorId) => {
    colorValues[element] = colorId;
};

const voirMonPanier = () => {
  // Ensuite, envoyez les données à PocketBase
  console.log('Valeurs de couleur sélectionnées :', colorValues.couleur_cadre, colorValues.couleur_branches, colorValues.couleur_verres);
  pb.collection('Lunettes').create({
    couleur_cadre: colorValues.value.couleur_cadre,
    couleur_branches: colorValues.value.couleur_branches,
    couleur_verres: colorValues.value.couleur_verres,
    materiau_cadre: colorValues.value.materiau_cadre,
    materiau_verre: colorValues.value.materiau_verre,
    soleil: coche1.value,
    anti_reflet: coche2.value,
    anti_bleu: coche3.value,
    // Ajoutez d'autres champs Lunettes ici
  });
};
  </script>
  
  <template>
    <div class="bg-Noir_Bouton text-white p-4 flex items-center justify-between">
      <span class="text-lg">Oakley</span>
      <div class="flex items-center">
        <span class="line-through text-gray-400 pr-2">250.00€</span>
        <span class="text-white">200.00€</span>
      </div>
    </div>
  
    <div class="flex">
      <div class="w-1/2 inline-flex justify-center my-auto">
        <ModeleSVG></ModeleSVG>
      </div>
      <div class="w-1/2 p-4">
        <div class="mt-0 ">
          <h1 class="text-black text-3xl font-bold">Oakley</h1>
          <p class="text-black text-xl">200.00€</p>
        </div>
        <div class="mt-4">
          <p class="text-black font-semibold">Reprise d'une ancienne paire :</p>
          <div class="mt-2">
            <button
              @click="toggleReprise('oui')"
              :class="{
                'bg-black text-white': reprise === 'oui',
                'bg-white text-black': reprise !== 'oui',
              }"
              class="mr-2 px-4 py-2 rounded border transition duration-300 hover:bg-black hover:text-white"
            >
              Oui
            </button>
            <button
              @click="toggleReprise('non')"
              :class="{
                'bg-black text-white': reprise === 'non',
                'bg-white text-black': reprise !== 'non',
              }"
              class="px-4 py-2 rounded border transition duration-300 hover:bg-black hover:text-white"
            >
              Non
            </button>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-black font-semibold">Choisissez votre couleur :</p>
          <div class="mt-2 flex">
            <span class="rounded-full w-6 h-6 bg-black mx-2 border transition duration-300 hover:border-black" onclick = "branche1.style.fill='#333333', branche2.style.fill='#333333', cadre.style.fill='#1c1c1c'" title="Noir"></span>
            <span class="rounded-full w-6 h-6 bg-Blanc_branche mx-2 border transition duration-300 hover:border-black" onclick = "branche1.style.fill='#f8f4e9', branche2.style.fill='#f8f4e9', cadre.style.fill='#F0ECE1'" title="Blanc"></span>
            <span class="rounded-full w-6 h-6 bg-Brun_lunettes mx-2 border transition duration-300 hover:border-black" onclick = "branche1.style.fill='#b98053', branche2.style.fill='#b98053', cadre.style.fill='#A36F47'" title="Brun"></span>
            <span class="rounded-full w-6 h-6 bg-Bleu_lunettes mx-2 border transition duration-300 hover:border-black" onclick = "branche1.style.fill='#6a82a4', branche2.style.fill='#6a82a4', cadre.style.fill='#5D7291'" title="Bleu"></span>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-black font-semibold">Anti-lumière bleue :</p>
          <div class="mt-2">
            <button
              @click="toggleAntiLumiere('oui')"
              :class="{
                'bg-black text-white': antiLumiere === 'oui',
                'bg-white text-black': antiLumiere !== 'oui',
              }"
              class="mr-2 px-4 py-2 rounded border transition duration-300 hover:bg-black hover:text-white" onclick = "verre1.style.fill='#1D1D1B', verre2.style.fill='#1D1D1B'" >
            
              Oui
            </button>
            <button
              @click="toggleAntiLumiere('non')"
              :class="{
                'bg-black text-white': antiLumiere === 'non',
                'bg-white text-black': antiLumiere !== 'non',
              }"
              class="px-4 py-2 rounded border transition duration-300 hover:bg-black hover:text-white"
              onclick = "verre1.style.fill='#655D5B', verre2.style.fill='#655D5B'" >
              Non
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  

  