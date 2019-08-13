<style>

</style>

<template>
  <q-layout view="hHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center">
        <q-img class="fullscreen"
          style="z-index:-5"
          src='https://picsum.photos/1920/1080'/>
        <q-card class="fullscreen flex flex-center text-white" style="background-color:#00000099">
          <q-card-section class="q-gutter-xl" style="text-align:center">
            <q-avatar size="16rem">
              <q-img :src="require('../assets/profilePic.jpg')"/>
            </q-avatar>
            <div class="text-h2">Yannick LOUSSOUARN</div>
            <div class="text-h3">{{ $t("software_engineer") }}</div>
            <router-link tag="q-btn" class="bg-blue text-h6" to="/timeline"
            >{{ $t("access") }}
            </router-link>
          </q-card-section>
      </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'WelcomePage',
};

</script>
