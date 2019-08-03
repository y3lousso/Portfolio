<template>
  <q-layout view="hHh Lpr lFf">
    <q-page-container>
        <div class="row" style="min-height:100%">
          <q-img class="fullscreen"
              style="z-index:-5"
              src='https://picsum.photos/1920/1080'/>
          <div class="col-3 text-white" style="text-align:center; background-color:#00000099;">
            
            <q-avatar size="10rem" class="q-mt-xl">
              <q-img :src="require('../assets/profilePic.jpg')"/>
            </q-avatar>
            <div class="text-h4 q-mt-xl">Yannick LOUSSOUARN</div>
            <div class="text-h5 q-mt-sm">Software Engineer</div>
            <div class="text-h6 q-mt-xl">Portfolio</div>
            <div class="text-h6 q-mt-sm">Projects</div>
            <div class="text-h6 q-mt-sm">Skills</div>
            <div class="text-h6 q-mt-sm">Contact</div>
            </div>
          <div class="col-9 bg-grey">
            <router-view />
          </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import {
  QImg,
  QAvatar,
} from 'quasar';

export default {
  name: 'LayoutDefault',
  components: {
    QImg,
    QAvatar,
  },
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    };
  },
};
</script>
