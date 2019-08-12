<template>
  <div>
    <h3 class="text-center">Skills</h3>
    <q-card>
      <q-tabs
        v-model="tab"
        indicator-color="yellow"
        align="justify"
        class="text-white shadow-2"
      >
        <q-tab class="bg-red" name="overview" icon="web" label="Overview" />
        <q-tab class="bg-blue" name="3dxr" icon="web" label="3D & XR" />
        <q-tab class="bg-green" name="web" icon="web" label="Web" />
        <q-tab class="bg-warning" name="desktop" icon="web" label="Desktop" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" class="bg-grey-1">

        <q-tab-panel name="overview">

          <q-card class="my-card">
            <q-card-section class="bg-grey text-white">
              <div class="text-h6">Software Engineering</div>
            </q-card-section>

            <q-card-actions align="around">
              <q-card-section class="bg-blue text-white">
                <div class="text-h6">3D & XR</div>
              </q-card-section>
              <q-card-section class="bg-green text-white">
                <div class="text-h6">WEB</div>
              </q-card-section>
              <q-card-section class="bg-warning text-white">
                <div class="text-h6">DESKTOP</div>
              </q-card-section>
            </q-card-actions>
          </q-card>

          <q-card class="my-card">
            <q-card-section class="bg-grey text-white">
              <div class="text-h6">Other</div>
            </q-card-section>

            <q-card-actions align="around">
              <q-card-section class="bg-grey text-white">
                <div class="text-h6">Languages</div>
              </q-card-section>
              <q-card-section class="bg-grey text-white">
                <div class="text-h6">Engineering</div>
              </q-card-section>
            </q-card-actions>
          </q-card>

          <!-- <div class="text-h6">Overview</div>
          <div>3 domaines : 3dxr / Web / Desktop</div>
          <div>Languages : FR /EN / NO / ES</div>
          <div>Mecatronics / Electronics</div> -->
        </q-tab-panel>

        <q-tab-panel name="3dxr">
          <div class="text-h6">3D & XR</div>
          <div>Game Engine : Unity / Unreal Engine 4</div>
          <div>Unreal Engine 4 : Vuejs, Vuex, Razor</div>
        </q-tab-panel>

        <q-tab-panel name="web">
          <div class="text-h6">Web</div>
          <div>Frontend : Vuejs, Vuex, Razor</div>
          <div>Frontend UI : Nothing -> Bootstrap -> Quasar</div>
          <div>Backend : ASP.NET Core MVC 2 -> Laravel</div>
          <div>Deployment : native -> VM -> Docker</div>
          <div>Languages : HTML / CSS / JS / PHP</div>
          <div>Web server : Apache -> Nginx</div>
          <div>Security SSL/TLS : Let's Encrypt / Certbot</div>
          <div>Testing : Jest/ PhpUnit</div>
          <div>CodeStyle : ESlint</div>
        </q-tab-panel>

        <q-tab-panel name="desktop">
          <div class="text-h6">Movies</div>
          GTK MM -> Qt -> WPF -> UWP (XAML) -> Electron
        </q-tab-panel>

      </q-tab-panels>
    </q-card>
  </div>
</template>

<style >
</style>

<script>
import {
  QList,
  QItem,
  QItemSection,
  QLinearProgress,
  QTabPanel,
  QTabPanels,
  QTabs,
  QTab,
  QRouteTab,
  QCard,
  QCardSection,
  QCardActions,

} from 'quasar';

export default {
  name: 'SkillsPage',
  components: {
    QList,
    QItem,
    QItemSection,
    QLinearProgress,
    QTabPanel,
    QTabPanels,
    QTabs,
    QTab,
    QRouteTab,
    QCard,
    QCardSection,
    QCardActions,
  },

  data() {
    return {
      tab: 'overview',
      skills: {
        0: {
          name: '3D PHP',
          categories: ['web'],
          value: 100,
        },
        1: {
          name: 'C# (.NET)',
          categories: ['web'],
          value: 100,
        },
        2: {
          name: 'Unity',
          categories: ['web'],
          value: 100,
        },
      },
    };
  },
};
</script>
