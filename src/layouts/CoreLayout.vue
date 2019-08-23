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
            <div class="column col-3 text-white" style="min-height:100%; text-align:center; background-color:#00000099; overflow:hidden;">
            <div class="col-4" style="overflow:hidden;">
              <router-link tag="q-avatar" style="font-size: 10em;" class="pageSelector q-mt-xl" to="/" >
                <q-img :src="require('../assets/profilePic.jpg')"/>
              </router-link>
              <div class="text-h4 q-mt-xl">Yannick LOUSSOUARN</div>
              <div class="text-h5 q-mt-sm">{{ $t("software_engineer") }}</div>
            </div>
            <div class="col-6" style="overflow:hidden;">
              <q-separator class="q-my-xl" color="white" inset/>
              <router-link tag="div" class="pageSelector text-h6 q-py-md" to="/timeline" >{{ $t("cv") }}</router-link>
              <router-link tag="div" class="pageSelector text-h6 q-py-md" to="/portfolio" >{{ $t("portfolio") }}</router-link>
              <router-link tag="div" class="pageSelector text-h6 q-py-md" to="/skills" >{{ $t("skills") }}</router-link>
              <router-link tag="div" class="pageSelector text-h6 q-py-md" to="/contact" >{{ $t("contact") }}</router-link>
              <q-separator class="q-my-xl" color="white" inset/>
            </div>
            <div class="col-1" style="overflow:hidden;">
              <q-btn icon="fab fa-linkedin" type="a" href="https://fr.linkedin.com/in/yannick-loussouarn-a78606148" target="_blank" style="font-size: 2em;"/>
              <q-btn icon="fab fa-github-square" type="a" href="https://github.com/y3lousso" target="_blank" style="font-size: 2em;"/>
              <q-btn icon="fa fa-download" type="a" href="./cv.pdf" target="_blank" style="font-size: 2em;"/>
              <q-btn style="font-size: 2em;" @click="changeLanguage()">
                <flag :iso=flag style="font-size: 1.5em;"/>
              </q-btn>
            </div>
          </div>
          <!-- <div class="col-3 text-white" style="text-align:center; background-color:#00000099;">
            <router-link tag="q-avatar" style="font-size: 10em;" class="pageSelector q-mt-xl" to="/" >
              <q-img :src="require('../assets/profilePic.jpg')"/>
            </router-link>
            <div class="text-h4 q-mt-xl">Yannick LOUSSOUARN</div>
            <div class="text-h5 q-mt-sm">{{ $t("software_engineer") }}</div>
            <q-separator class="q-my-xl" color="white" inset/>
            <router-link tag="div" class="pageSelector text-h6 q-py-md" to="/timeline" >{{ $t("cv") }}</router-link>
            <router-link tag="div" class="pageSelector text-h6 q-py-md" to="/portfolio" >{{ $t("portfolio") }}</router-link>
            <router-link tag="div" class="pageSelector text-h6 q-py-md" to="/skills" >{{ $t("skills") }}</router-link>
            <router-link tag="div" class="pageSelector text-h6 q-py-md" to="/contact" >{{ $t("contact") }}</router-link>
            <q-separator class="q-my-xl" color="white" inset/>
            <q-space />
            <q-btn icon="fab fa-linkedin" type="a" href="https://fr.linkedin.com/in/yannick-loussouarn-a78606148" target="_blank" style="font-size: 2em;"/>
            <q-btn icon="fab fa-github-square" type="a" href="https://github.com/y3lousso" target="_blank" style="font-size: 2em;"/>
            <q-btn icon="fa fa-download" type="a" href="./cv.pdf" target="_blank" style="font-size: 2em;"/>
            <q-btn style="font-size: 2em;" @click="changeLanguage()">
              <flag :iso=flag style="font-size: 1.5em;"/>
            </q-btn>
          </div> -->
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
export default {
  name: 'LayoutDefault',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      flag: 'gb',
    };
  },
  watch: {
    $route() {
      this.$refs.scrollArea.setScrollPosition(0);
    },
  },
  mounted() {
    this.updateFlag();
  },
  methods: {
    changeLanguage() {
      if (this.$i18n.locale === 'fr') {
        this.$i18n.locale = 'en';
      } else if (this.$i18n.locale === 'en') {
        this.$i18n.locale = 'no';
      } else if (this.$i18n.locale === 'no') {
        this.$i18n.locale = 'fr';
      }
      this.updateFlag();
    },
    updateFlag() {
      if (this.$i18n.locale === 'en') {
        this.flag = 'gb';
      } else {
        this.flag = this.$i18n.locale;
      }
    },
  },
};
</script>
