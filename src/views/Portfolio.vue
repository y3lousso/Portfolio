<template>
  <div>
    <h3 class="text-center ">Portfolio</h3>
    <div class="q-pa-md">
      <div class="q-gutter-md row items-start">
        <q-list class="rounded-borders" style="width: 100%;">
          <q-item v-for="project of projects" :key="project.id">
            <q-item-section style="height: 200px; max-width: 200px">
              <q-img :src="require('../assets/projects/' + project.thumbnail)"/>
            </q-item-section>
            <q-item-section top>
              <span class="text-uppercase text-h6 text-weight-medium" >{{project.name}}</span>
              <span class="text-uppercase text-subtitle1" >{{project.date}}</span>
              <span>{{project.description}}</span>
              <q-btn label="Show" style="width:100px" color="green" @click="displayProject(project.id)" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
    <q-dialog id="project_dialog" v-if="project_id != -1" v-model="carousel">
      <q-carousel
      id="project_carousel"
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
      >
        <q-carousel-slide v-for="item of getContentByProject(project_id)" :key="item.id" :name="item.id" :img-src="require('../assets/projects/' + projects[project_id].folderPath + item.path)"/>
      </q-carousel>
    </q-dialog>
  </div>
</template>

<style>
#project_dialog{
  background: rgba(0,0,0,0.8);
}

#project_carousel{
  display: block;
  height:100%;
  width: 100%;
  max-height:80%;
  max-width:80%;
}
</style>

<script>
import {
  QImg,
  QList,
  QItem,
  QItemSection,
  QDialog,
  ClosePopup,
  QCarousel,
  QCarouselControl,
  QCarouselSlide,
} from 'quasar';

export default {
  name: 'ProjectsPage',
  components: {
    QImg,
    QList,
    QItem,
    QItemSection,
    QDialog,
    QCarousel,
    QCarouselControl,
    QCarouselSlide,
  },
  directives: {
    ClosePopup,
  },
  data() {
    return {
      carousel: false,
      card: false,
      sliders: false,

      slide: 1,
      lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!',

      stars: 3,

      slideVol: 39,
      slideAlarm: 56,
      slideVibration: 63,
      project_id: -1,
      projects: [
        {
          id: 0,
          name: '3D Printer',
          date: 'Feb 2018 / Jan 2019',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          folderPath: '3DPrinter/',
          thumbnail: '3DPrinter/small.jpg',
          content: [
            {
              id: 0,
              path: '00.jpg',
              type: 'image',
            },
            {
              id: 1,
              path: '01.jpg',
              type: 'image',
            },
          ],
        },
        {
          id: 1,
          name: 'Bricole ta science',
          date: 'Feb 2018 / Jan 2019',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          folderPath: 'BricoleTaScience/',
          thumbnail: 'BricoleTaScience/small.jpg',
          content: [
            {
              id: 0,
              path: '00.jpg',
              type: 'image',
            },
            {
              id: 1,
              path: '01.jpg',
              type: 'image',
            },
          ],
        }
      ],
    };
  },
  methods: {
    displayProject(project_id) {
      this.carousel = true;
      this.project_id = project_id;
    },
    getContentByProject(project_id) {
      var items = this.projects.find(p => p.id === project_id).content;
      console.log("items");
      console.log(items);
      return items;
    },
  },
};
</script>
