<script setup>
import { RouterLink, RouterView } from "vue-router";

// Import pocketbase
import PocketBase from "pocketbase";
var pocketbase_ip = "";
if (import.meta.env.MODE === "production") pocketbase_ip = "https://sae301.guillaume-le-trequesser.fr/";
else pocketbase_ip = "http://127.0.0.1:8090/";
const pb = new PocketBase(pocketbase_ip);

// Import éléments de vue
import { ref, onMounted } from "vue";
// Import éléments de routage
import { useRouter } from "vue-router";
const router = useRouter();

// user connecté ? au départ faux
let isConnected = ref(false);

// Element de connexion
let user = ref("");
let psw = ref("");

// User connecté
let currentUser = ref(null);
let avatar = ref(null);

// Au montage du composant
onMounted(async () => {
  // Vérifier que le user est déjà connecté
  refresh();
});

const refresh = () => {
  if (pb.authStore.isValid) {
    currentUser.value = pb.authStore.model;
    isConnected.value = true;

    avatar.value =
      "http://127.0.0.1:8090/api/files/" + // Adresse serveur et repertoire des fichiers image
      currentUser.value.collectionId + // Id ou name de la collection concernée
      "/" +
      currentUser.value.id + // Id de l'utilisateur connecté
      "/" +
      currentUser.value.avatar + // Nom fichier image pocketbase
      "?thumb=100x100"; // Taille par défaut

    //      console.log("image avatar utilisateur", avatar)
  }
};

const connect = async () => {
  try {
    const authData = await pb.collection("users").authWithPassword(user.value, psw.value);
    console.log("connecté : ", authData);
    refresh();
  } catch (error) {
    //    console.log("erreur de connexion : ",error.message)
    alert("Erreur d'identification : mauvais login et/ou mot de passe");
    user.value = "";
    psw.value = "";
  }
};

const deconnect = () => {
  // Suppression utilisateur connecté
  pb.authStore.clear();
  isConnected.value = false;
  // Retour à la page d'accueil -> Redirection
  router.push({ name: "HomeView" });
};

const connectGoogle = async () => {
  try {
    const authData = await pb.collection("users").authWithOAuth2({ provider: "google" });
    if (pb.authStore.isValid) {
      refresh();
    }
  } catch (error) {
    console.log("erreur de connexion : ", error.message);
    alert("L'authentification a échoué, veuillez réessayer");
    user.value = "";
    psw.value = "";
  }
};
</script>

<template>
  <div class="bg-white h-screen flex justify-center items-center">
    <div class="mx-[100px] gap-[100px]">
      <div class="col-span-1 justify-self-end my-auto">
        <!-- Vous pouvez ajouter un logo ou d'autres éléments ici si nécessaire -->
      </div>

      <div class="grid grid-rows-2">
        <div class="text-black bg-white rounded-lg row-span-5" v-if="isConnected == false">
          <h1 class="flex justify-center font-bold text-3xl mt-5">Bienvenue sur Ta Vue !</h1>
          <p class="flex justify-center">Connectez-vous pour voir les produits</p>

          <form class="text-center">
            <div class="grid grid-rows-2 gap-4 mx-auto mt-5">
              <div class="grid grid-rows-2 gap-0">
                <label class="mb-[-5px]" for="login">Adresse mail</label>
                <input
                  class="mb-2 bg-gris p-4 rounded-lg"
                  id="login"
                  required
                  placeholder="marie.jean@gmail.com"
                  v-model="user"
                />
              </div>
              <div class="grid grid-rows-2">
                <label for="mdp">Mot de passe</label>
                <input
                  class="bg-gris p-4 rounded-lg"
                  id="mdp"
                  type="password"
                  required
                  placeholder="Password"
                  v-model="psw"
                />
              </div>
              <button
                class="bg-violet font-bold p-3 rounded-lg text-3xl"
                type="button"
                @click.prevent="connect()"
              >
                Connexion
              </button>
              <button
    class="bg-white font-bold m-4 p-2 rounded-[100px] text-[24px] col-span-1"
    type="button"
    v-on:click="connectGoogle()"
  >
    Connexion Google
  </button>
            </div>
          </form>
        </div>

        <div class="text-black rounded-lg mx-auto" v-else>
          <div class="bg-white p-4 rounded-lg text-center">
            <img
              :src="avatar"
              class="img-fluid rounded-full mx-auto mb-4"
              style="max-width: 100px"
            />
            <p class="text-3xl">{{ currentUser.username }}</p>
            <button
              class="bg-black text-white font-bold p-4 rounded-lg text-3xl mt-4"
              type="button"
              @click="deconnect()"
            >
              SE DECONNECTER
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
