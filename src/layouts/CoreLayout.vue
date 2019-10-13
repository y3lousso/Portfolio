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
        <div style="position: absolute; bot:0; right:0; color:#000000;">Portfolio still in construction...</div>
        <q-img class="fullscreen"
          style="z-index:-5"
          src='https://picsum.photos/1920/1080'/>
        <q-img class="fullscreen orientation-portrait"
            style="z-index:5; opacity: 0.7;"
            :src="require('../assets/rotateScreen.png')"/>
        <div class="column col-3 text-white" style="min-height:100%; text-align:center; background-color:#00000099; overflow:hidden;">
          <div class="col-4" style="overflow:hidden;">
              <router-link tag="img" class="imagesize-80 pageSelector marginsize-15" to="/" style=" border-radius:50%;" :src="require('../assets/profilePic.jpg')"/>
              <div class="fontsize-16 marginsize-5">Yannick LOUSSOUARN</div>
              <div class="fontsize-13 marginsize-5">{{ $t("software_engineer") }}</div>
            </div>
          <div class="col-6" style="overflow:hidden;">
            <q-separator class="q-my-sm-md q-my-md-xl" color="white" inset/>
            <router-link tag="div" class="pageSelector fontsize-9 q-py-md-sm q-py-lg-md" to="/timeline" >{{ $t("cv") }}</router-link>
            <router-link tag="div" class="pageSelector fontsize-9 q-py-md-sm q-py-lg-md" to="/portfolio" >{{ $t("portfolio") }}</router-link>
            <router-link tag="div" class="pageSelector fontsize-9 q-py-md-sm q-py-lg-md" to="/skills" >{{ $t("skills") }}</router-link>
            <router-link tag="div" class="pageSelector fontsize-9 q-py-md-sm q-py-lg-md" to="/contact" >{{ $t("contact") }}</router-link>
            <q-separator class="q-my-sm-md q-my-md-xl" color="white" inset/>
            </div>
          <div class="col-1" style="overflow:hidden;">
            <q-btn icon="fab fa-linkedin" type="a" href="https://fr.linkedin.com/in/yannick-loussouarn-a78606148" target="_blank" class="fontsize-12"/>
            <q-btn icon="fab fa-github-square" type="a" href="https://github.com/y3lousso" target="_blank" class="fontsize-12"/>
            <q-btn icon="fa fa-download" type="a" href="./resume.pdf" target="_blank" class="fontsize-12"/>
            <q-btn class="fontsize-12" @click="changeLanguage()">
              <flag :iso=flag style="font-size: 1.5em;"/>
            </q-btn>
          </div>
        </div>
        <div class="col-9 bg-white">
          <q-scroll-area ref="scrollArea" class="q-px-sm-lg q-px-lg-xl" style="height: 100%; max-width: 100%;">
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
