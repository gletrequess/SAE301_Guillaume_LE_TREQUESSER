<script setup>
import smiley from "../../public/smiley.vue";
import glasses from "../../public/glasses.vue";
import arrow from "../../public/arrow.vue";
import stars from "../../public/stars.vue";
</script>

<template>
  <main>
    <div class="flex flex-col items-center justify-center mt-10">
      <h1 class="text-VIIxl font-bold">Découvrez des lunettes révolutionnaires</h1>
      <h2 class="text-Vxl font-bold">Afin de protéger vos yeux des lumières bleues</h2>
      <button class="btn-black mt-5">Découvrir nos produits</button>
      <img src="../../public/Group.png" alt="" class="h-64 mt-20" />
    </div>
    <div class="flex flex-col mt-10">
      <div
        class="p-20 bg-slate-100 border-b border-zinc-200 flex-col justify-start items-center gap-12 inline-flex bg-bg"
      >
        <div class="self-stretch h-[119px] flex-col justify-start items-start gap-12 flex">
          <div class="self-stretch h-[46px] flex-col justify-start items-center gap-2 flex">
            <div
              class="self-stretch text-center text-zinc-800 text-[42px] font-bold font-['Roboto'] leading-[46.20px]"
            >
              Quelques informations importantes
            </div>
          </div>
          <div
            class="self-stretch text-center text-zinc-800 text-lg font-normal font-['Roboto'] leading-[25.20px]"
          >
            Plus de 250 clients satisfaits ont déjà personnalisé leurs lunettes avec nous. Rejoignez
            notre communauté grandissante et créez votre style unique aujourd'hui !
          </div>
        </div>
        <div class="self-stretch justify-start items-start gap-6 inline-flex">
          <div
            class="grow shrink basis-0 p-4 bg-white border border-zinc-200 flex-col justify-start items-center gap-4 inline-flex"
          >
            <div class="h-12 relative"><smiley></smiley></div>
            <div class="self-stretch justify-center items-start gap-4 inline-flex">
              <div class="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div class="self-stretch justify-start items-center gap-2 inline-flex">
                  <div
                    class="grow shrink basis-0 text-center text-zinc-800 text-2xl font-bold font-['Roboto'] leading-relaxed"
                  >
                    250+
                  </div>
                </div>
                <div
                  class="self-stretch text-center text-zinc-500 text-base font-normal font-['Roboto'] leading-snug"
                >
                  Plus de 250 clients satisfaits
                </div>
              </div>
            </div>
          </div>
          <div
            class="grow shrink basis-0 p-4 bg-white border border-zinc-200 flex-col justify-start items-center gap-4 inline-flex"
          >
            <div class="h-12 relative"><glasses></glasses></div>
            <div class="self-stretch justify-center items-start gap-4 inline-flex">
              <div class="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div class="self-stretch justify-start items-center gap-2 inline-flex">
                  <div
                    class="grow shrink basis-0 text-center text-zinc-800 text-2xl font-bold font-['Roboto'] leading-relaxed"
                  >
                    600+
                  </div>
                </div>
                <div
                  class="self-stretch text-center text-zinc-500 text-base font-normal font-['Roboto'] leading-snug"
                >
                  Plus de 600 modèles
                </div>
              </div>
            </div>
          </div>
          <div
            class="grow shrink basis-0 p-4 bg-white border border-zinc-200 flex-col justify-start items-center gap-4 inline-flex"
          >
            <div class="h-12 relative"><arrow></arrow></div>
            <div class="self-stretch justify-center items-start gap-4 inline-flex">
              <div class="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div class="self-stretch justify-start items-center gap-2 inline-flex">
                  <div
                    class="grow shrink basis-0 text-center text-zinc-800 text-2xl font-bold font-['Roboto'] leading-relaxed"
                  >
                    Remboursements gratuits !
                  </div>
                </div>
                <div
                  class="self-stretch text-center text-zinc-500 text-base font-normal font-['Roboto'] leading-snug"
                >
                  Garantie satisfait ou remboursés
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="px-20 pt-20 bg-slate-100 flex-col justify-start items-center gap-12 inline-flex bg-bg"
      >
        <div class="self-stretch h-[46px] flex-col justify-start items-start gap-12 flex">
          <div class="self-stretch h-[46px] flex-col justify-start items-center gap-2 flex">
            <div
              class="self-stretch text-center text-zinc-800 text-[42px] font-bold font-['Roboto'] leading-[46.20px]"
            >
              Qu’est-ce que nos clients disent
            </div>
          </div>
        </div>
      </div>
      <div class="p-20 bg-slate-100 flex-col justify-start items-center gap-16 inline-flex bg-bg">
        <div class="self-stretch justify-center items-center gap-4 inline-flex">
          <div class="grow basis-0 p-6 border flex-col">
            <div class="text-center font-['Roboto']">
              Mes lunettes personnalisées de TaVue sont absolument fantastiques ! La
              personnalisation était vraiment très facile à prendre en main, grâce à leur outil
              convivial. J'ai pu choisir la monture et les détails comme la protection anti-lumière
              bleue qui me convient parfaitement.
            </div>
            <div class="self-stretch h-[106px] pt-4 flex-col justify-start items-center gap-4 flex">
              <div class="w-12 h-12 relative"><stars></stars></div>
              <div class="self-stretch h-[26px] flex-col justify-start items-center flex">
                <div
                  class="self-stretch text-center text-zinc-800 text-2xl font-bold font-['Roboto'] leading-relaxed"
                >
                  Marcus Junior
                </div>
              </div>
            </div>
          </div>
          <div class="grow basis-0 p-6 border flex-col">
            <div class="text-center font-['Roboto']">
              Je ne peux pas recommander assez TaVue ! Leur service est exceptionnel à tous égards.
              J'ai passé des heures à personnaliser mes lunettes, et le résultat en valait vraiment
              la peine. J'ai maintenant un look unique qui correspond parfaitement à ma
              personnalité.
            </div>
            <div class="self-stretch h-[106px] pt-4 flex-col justify-start items-center gap-4 flex">
              <div class="w-12 h-12 relative"><stars></stars></div>
              <div class="self-stretch h-[26px] flex-col justify-start items-center flex">
                <div
                  class="self-stretch text-center text-zinc-800 text-2xl font-bold font-['Roboto'] leading-relaxed"
                >
                  Pierre Lévèque
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="p-20 bg-white flex-col justify-start gap-16 inline-flex">
        <div class="h-[92px] flex-col justify-start items-start gap-12 flex">
          <div class="self-stretch h-[92px] flex-col justify-start items-center gap-2 flex">
            <div
              class="self-stretch text-center text-zinc-800 text-[42px] font-bold font-['Roboto'] leading-[46.20px]"
            >
              Découvrez une collection de lunettes uniques et trouvez la paire parfaite pour
              affirmer votre style aujourd'hui.
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center mt-10">
        <div class="gap-4 inline-flex px-80">
          <RouterLink class="nav-link" to="/perso"><div
            class="grow shrink basis-0 self-stretch bg-white border border-zinc-200 flex-col justify-start items-start inline-flex"
          >
            <img src="./../../public/oakley.png" />
            <div
              class="grow shrink basis-0 px-4 pt-6 flex-col justify-start items-start gap-4 flex"
            >
              <div class="flex-col justify-start items-start gap-1 flex">
                <div class="w-[348px]">
                  <span
                    style="text-zinc-800 text-base font-medium font-['Roboto'] leading-[17.60px]"
                    >Sportive - </span
                  ><span
                    style="text-red-600 text-base font-medium font-['Roboto'] leading-[17.60px]"
                    >En Promotion ! - </span
                  ><span style="text-red-600 text-base font-bold font-['Roboto'] leading-[17.60px]"
                    >48h restantes !!</span
                  >
                </div>
                <div class="font-bold font-['Roboto']">Oakley</div>
              </div>
              <div class="font-['Roboto']">
                Oakley est la paire emblématique des sportifs, inspirée par les plus grands
                athlètes, elle utilise les meilleures technologies. Innovante, la marque offre des
                matériaux et des techniques spécifiques pour des lunettes Oakley ultra performantes
                dans n’importe quelles conditions.
              </div>
            </div>
            <div class="font-['Roboto'] ml-4 mb-4">En savoir plus</div>
          </div></RouterLink>

          <RouterLink class="nav-link" to="/perso"></RouterLink><div
            class="grow shrink basis-0 self-stretch bg-white border border-zinc-200 flex-col justify-start items-start inline-flex"
          >
            <img src="./../../public/medley.png" />
            <div
              class="w-[428px] grow shrink basis-0 px-4 pt-6 pb-4 flex-col justify-start items-start gap-4 flex"
            >
              <div class="flex-col justify-start items-start gap-1 flex">
                <div class="w-[348px]">
                  <span
                    style="text-zinc-800 text-base font-medium font-['Roboto'] leading-[17.60px]"
                    >Mode</span
                  >
                </div>
                <div class="w-[348px] text-zinc-800 text-xl font-bold font-['Roboto'] leading-snug">
                  Medley
                </div>
              </div>
              <div
                class="self-stretch text-zinc-800 text-base font-normal font-['Roboto'] leading-snug"
              >
                Medley incarne les tendances actuelles d’une mode jeune et colorée : c’est une
                collection de lunettes de vue et de soleil originale et haute en couleur, au style
                moderne et au rapport qualité prix imbattable.
              </div>
            </div>
            <div
              class="w-[104px] h-5 text-black text-base font-normal font-['Roboto'] leading-snug ml-4 mb-4"
            >
              En savoir plus
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center mt-10">
        <div class="gap-4 inline-flex px-80">
          <RouterLink class="nav-link" to="/perso"><div
            class="grow shrink basis-0 self-stretch bg-white border border-zinc-200 flex-col justify-start items-start inline-flex"
          >
            <img src="./../../public/saint-laurent.png" />
            <div
              class="grow shrink basis-0 px-4 pt-6 flex-col justify-start items-start gap-4 flex"
            >
              <div class="flex-col justify-start items-start gap-1 flex">
                <div class="w-[348px]">
                  <span
                    style="text-zinc-800 text-base font-medium font-['Roboto'] leading-[17.60px]"
                    >Voyage</span
                  >
                </div>
                <div class="font-bold font-['Roboto']">Ray-Ban</div>
              </div>
              <div class="font-['Roboto']">
                Ray-Ban, la légendaire marque de lunettes est depuis 1937 garante d’authenticité et
                de style. De l’Aviator à la Wayfarer en passant par la Round et la Clubmaster,
                Ray-Ban créait des icônes qui traversent les générations.
              </div>
            </div>
            <div class="font-['Roboto'] ml-4 mb-4">En savoir plus</div>
          </div></RouterLink>

          <RouterLink class="nav-link" to="/perso"><div
            class="grow shrink basis-0 self-stretch bg-white border border-zinc-200 flex-col justify-start items-start inline-flex"
          >
            <img src="./../../public/ray-ban.png" />
            <div
              class="w-[428px] grow shrink basis-0 px-4 pt-6 pb-4 flex-col justify-start items-start gap-4 flex"
            >
              <div class="flex-col justify-start items-start gap-1 flex">
                <div class="w-[348px]">
                  <span
                    style="text-zinc-800 text-base font-medium font-['Roboto'] leading-[17.60px]"
                    >Confort</span
                  >
                </div>
                <div class="w-[348px] text-zinc-800 text-xl font-bold font-['Roboto'] leading-snug">
                  Saint Laurent
                </div>
              </div>
              <div
                class="self-stretch text-zinc-800 text-base font-normal font-['Roboto'] leading-snug"
              >
                Synonyme de jeunesse, de liberté et de modernité, la maison Saint Laurent influence
                toutes les tendances modes depuis sa création en 1961. Sa forte identité et ses
                codes sont facilement reconnaissables et toujours dans l'air du temps.
              </div>
            </div>
            <div
              class="w-[104px] h-5 text-black text-base font-normal font-['Roboto'] leading-snug ml-4 mb-4"
            >
              En savoir plus
            </div>
          </div></RouterLink>
        </div>
      </div>

      <div class="px-20 pt-20 bg-slate-100 justify-start items-start gap-20 inline-flex">
        <div class="w-[526px] self-stretch px-20 justify-start items-start gap-2.5 flex">
          <img src="../../public/phone.png" alt="">
        </div>
        <div
          class="grow shrink basis-0 py-20 flex-col justify-center items-start gap-16 inline-flex"
        >
          <div class="self-stretch h-[191px] flex-col justify-start items-start gap-12 flex">
            <div class="self-stretch h-[118px] flex-col justify-start items-center gap-2 flex">
              <div
                class="self-stretch text-zinc-800 text-[54px] font-bold font-['Roboto'] leading-[59.40px]"
              >
                Téléchargez l’application et bénéficiez d’offres exclusives !
              </div>
            </div>
            <div
              class="self-stretch text-zinc-800 text-lg font-normal font-['Roboto'] leading-[25.20px]"
            >
              Transformez votre vision en réalité. Téléchargez l'application TaVue maintenant et
              créez vos lunettes uniques en un instant !
            </div>
          </div>

          <div class="flex">
            <img src="../../public/appstore.png" alt="">
            <img src="../../public/googleplay.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
