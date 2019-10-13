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
            <q-img class="imagesize-110" style="border-radius:50%" :src="require('../assets/profilePic.jpg')"/>
            <div class="fontsize-24">Yannick LOUSSOUARN</div>
            <div class="fontsize-20">{{ $t("software_engineer") }}</div>
            <router-link tag="q-btn" class="bg-blue fontsize-10" to="/timeline"
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
