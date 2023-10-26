<script setup>
import { RouterLink, RouterView } from 'vue-router'

//import icons
import Tavue from '../assets/tavuelogo.vue';
import Google from '../../public/icons/google.vue';


// Import éléments de vue
import { ref, onMounted } from 'vue';
// Import éléments de routage
import { useRouter } from 'vue-router';
const router = useRouter()




// user connecté ? au départ faux
let isConnected = ref(false)

// Element de connexion
let user = ref('')
let psw = ref('')

// User connecté
let currentUser = ref(null)
let avatar = ref(null)

// Au montage du composant
onMounted(async () => {
  // Vérifier que le user est déjà connecté
  refresh()

})

const refresh = () => {
  if (pb.authStore.isValid) {
    currentUser.value = pb.authStore.model
    isConnected.value = true

    avatar.value =
      "http://127.0.0.1:8090/api/files/"  // Adresse serveur et repertoire des fichiers image
      + currentUser.value.collectionId     // Id ou name de la collection concernée
      + "/"
      + currentUser.value.id               // Id de l'utilisateur connecté
      + "/"

    //      console.log("image avatar utilisateur", avatar)
  }
}

const connect = async () => {
  try {
    const authData = await pb.collection('users')
      .authWithPassword(user.value, psw.value)
    console.log("connecté : ", authData)
    refresh()
  } catch (error) {
    //    console.log("erreur de connexion : ",error.message)
    alert("Erreur d'identification : mauvais login et/ou mot de passe")
    user.value = ""
    psw.value = ""
  }
}

const deconnect = () => {
  // Suppression utilisateur connecté
  pb.authStore.clear()
  isConnected.value = false
  // Retour à la page d'accueil -> Redirection
  router.push({ name: "HomeView" })
}
</script>



<template>
  <div class="bg-black m-0 h-screen" >
    <div class="grid grid-cols-2 mx-[100px] gap-[100px]">
      <div class="col-span-1 justify-self-end my-auto">
        <Tavue />
      </div>

      <div class=" grid grid-rows-2">
        <div class="text-black bg-white rounded-lg row-span-5" v-if="isConnected == false">
          <h1 class="flex justify-center font-bold text-[24px] mt-5">Bienvenue sur Ta Vue ! </h1>
          <p class="flex justify-center"> Connectez-vous pour voir les produits</p>


          <form>
            <div class="grid grid-rows-2 ">
              <div class="grid grid-rows-2 gap-0 mx-5">
                <label class="mb-[-5px]" for="login">Adresse mail</label>
                <input class="mb-2 bg-gris p-4 rounded-[5px]" id="login" required placeholder="marie.jean@gmail.com"
                  v-model="user">
              </div>
              <div class="grid grid-rows-2 mx-5">
                <label for="mpd">Mot de passe</label>
                <input class="form-control bg-gris p-4 rounded-[5px]" id="mdp"  type="password" required placeholder="Password"
                  v-model="psw">
              </div>

              <div class="grid grid-rows-2 mx-5 my-5 ">
                <button class="bg-violet font-bold p-3 rounded-[5px] text-[24px]" type="button"
                  @click.prevent="connect()">
                  Connexion
                </button>
                <div class="flex justify-end text-violet mt-5">
                  <RouterLink to="/inscription"><p>Pas inscrit ?</p></RouterLink>
                </div>
                
              </div>

              

            </div>

          </form>

          
        </div>

        <div class=" text-white rounded-lg ml-auto space-x-2">
            <span class="grid grid-cols-2 items-center" v-if="isConnected == true">
              <p class="text-3xl">
                {{ currentUser.nom }}
              </p>
              <button class="bg-violet text-black font-bold p-4 rounded-[5px] text-[24px]" type="button" @click="deconnect()">
                SE DECONNECTER
              </button>
            </span>

          </div>

        <button class="bg-white font-bold m-4 p-2 rounded-[100px] text-[24px] col-span-1" type="button" v-on:click="googlelogin()">
          Connexion Google
        </button>
      </div>
    </div>
  </div>
</template>

