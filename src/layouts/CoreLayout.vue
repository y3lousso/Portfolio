<style>
  .pageSelector:hover{
    background-color:#ffffff55;
    cursor: pointer;
  }
</style>

<template>
  <q-layout view="hHh Lpr lFf">
    <q-page-container>
        <div class="row fullscreen" style="min-height:100%">
          <q-img class="fullscreen"
              style="z-index:-5"
              src='https://picsum.photos/1920/1080'/>
          <div class="col-3 text-white" style="text-align:center; background-color:#00000099;">
            <q-avatar size="10rem" class="q-mt-xl">
              <q-img :src="require('../assets/profilePic.jpg')"/>
            </q-avatar>
            <div class="text-h4 q-mt-xl">Yannick LOUSSOUARN</div>
            <div class="text-h5 q-mt-sm">Software Engineer</div>
            <q-separator class="q-my-xl" color="white" inset/>
            <router-link tag="div" class="pageSelector text-h6 q-py-md" to="/timeline" >History</router-link>
            <router-link tag="div" class="pageSelector text-h6 q-py-md" to="/portfolio" >Portfolio</router-link>
            <router-link tag="div" class="pageSelector text-h6 q-py-md" to="/skills" >Skills</router-link>
            <router-link tag="div" class="pageSelector text-h6 q-py-md" to="/contact" >Contact</router-link>
            <q-separator class="q-my-xl" color="white" inset/>
            <q-space />
            <q-btn icon="fab fa-linkedin" type="a" href="https://fr.linkedin.com/in/yannick-loussouarn-a78606148" target="_blank" style="font-size: 2em;"/>
            <q-btn icon="fab fa-github-square" type="a" href="https://github.com/y3lousso" target="_blank" style="font-size: 2em;"/>
            <q-btn icon="fa fa-download" type="a" href="./cv.pdf" target="_blank" style="font-size: 2em;"/>
            <q-btn icon="fa fa-flag" type="a" href="https://github.com/y3lousso" style="font-size: 2em;"/>
          </div>
          <div class="col-9 bg-white">
            <q-scroll-area ref="scrollArea" class="q-px-xl" style="height: 100%; max-width: 100%;">
              <router-view />
            </q-scroll-area>
          </div>
      </div>
    </q-page-container>
  </q-layout>
</template>


<script>
import {
  QImg,
  QAvatar,
  QSeparator,
  QScrollArea,
  QSpace,
} from 'quasar';

export default {
  name: 'LayoutDefault',
  components: {
    QImg,
    QAvatar,
    QSeparator,
    QScrollArea,
    QSpace,
  },
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    };
  },
  watch: {
    $route(to, from) {
      this.$refs.scrollArea.setScrollPosition(0);
    },
  },
};
</script>
