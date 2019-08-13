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
      arrows
      infinite
      >
        <q-carousel-slide v-for="item of getContentByProject(project_id)" :key="item.id" :name="item.id" >
          <q-img contain id="project_carousel_img" v-if="item.type=='image'" :ratio="1" :src="require('../assets/projects/' + projects[project_id].folderPath + item.path)"></q-img>
          <q-video contain id="project_carousel_vid" v-if="item.type=='video'" :src="require('../assets/projects/' + projects[project_id].folderPath + item.path)"></q-video>
        </q-carousel-slide>
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
  height:80%;
  width: 80%;
  max-height:80%;
  max-width:80%;
}

#project_carousel_img{
  display: block;
  height:100%;
}

#project_carousel_vid{
  display: block;
  height:100%;
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
  QVideo,
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
    QVideo,
  },
  directives: {
    ClosePopup,
  },
  data() {
    return {
      carousel: false,
      card: false,
      sliders: false,
      slide: 0,

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
            {
              id: 2,
              path: '02.jpg',
              type: 'image',
            },
            {
              id: 3,
              path: '03.jpg',
              type: 'image',
            },
            {
              id: 4,
              path: '04.jpg',
              type: 'image',
            },
            {
              id: 5,
              path: '05.jpg',
              type: 'image',
            },
            {
              id: 6,
              path: '06.jpg',
              type: 'image',
            },
            {
              id: 7,
              path: '07.jpg',
              type: 'image',
            },
            {
              id: 8,
              path: '08.jpg',
              type: 'image',
            },
            {
              id: 9,
              path: 'v05.mp4',
              type: 'video',
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
            {
              id: 2,
              path: '02.jpg',
              type: 'image',
            },
          ],
        },
        {
          id: 2,
          name: 'Civil Disorder',
          date: 'Feb 2018 / Jan 2019',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          folderPath: 'CivilDisorder/',
          thumbnail: 'CivilDisorder/small.jpg',
          content: [
            {
              id: 0,
              path: '00.png',
              type: 'image',
            },
            {
              id: 1,
              path: '01.png',
              type: 'image',
            },
            {
              id: 2,
              path: '02.png',
              type: 'image',
            },
            {
              id: 3,
              path: '03.png',
              type: 'image',
            },
            {
              id: 4,
              path: '04.png',
              type: 'image',
            },
            {
              id: 5,
              path: '05.png',
              type: 'image',
            },
          ],
        },
        {
          id: 3,
          name: 'Ecoleau',
          date: 'Feb 2018 / Jan 2019',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          folderPath: 'Ecoleau/',
          thumbnail: 'Ecoleau/small.jpg',
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
            {
              id: 2,
              path: '02.jpg',
              type: 'image',
            },
            {
              id: 3,
              path: '03.jpg',
              type: 'image',
            },
            {
              id: 4,
              path: '04.jpg',
              type: 'image',
            },
            {
              id: 5,
              path: '05.jpg',
              type: 'image',
            },
            {
              id: 6,
              path: '06.jpg',
              type: 'image',
            },
          ],
        },
        {
          id: 4,
          name: 'EndlessRunner',
          date: 'Feb 2018 / Jan 2019',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          folderPath: 'EndlessRunner/',
          thumbnail: 'EndlessRunner/small.jpg',
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
          id: 5,
          name: 'GameEngine2D',
          date: 'Feb 2018 / Jan 2019',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          folderPath: 'GameEngine2D/',
          thumbnail: 'GameEngine2D/small.jpg',
          content: [
            {
              id: 0,
              path: '00.png',
              type: 'image',
            },
            {
              id: 1,
              path: '01.png',
              type: 'image',
            },
            {
              id: 2,
              path: 'v01.mp4',
              type: 'video',
            },
          ],
        },
        {
          id: 6,
          name: 'InvasionVR',
          date: 'Feb 2018 / Jan 2019',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          folderPath: 'InvasionVR/',
          thumbnail: 'InvasionVR/small.jpg',
          content: [
            {
              id: 0,
              path: '00.png',
              type: 'image',
            },
            {
              id: 1,
              path: '01.png',
              type: 'image',
            },
            {
              id: 2,
              path: '02.png',
              type: 'image',
            },
            {
              id: 3,
              path: '03.png',
              type: 'image',
            },
          ],
        },
        {
          id: 7,
          name: 'PanPanBoomBoomVR',
          date: 'Feb 2018 / Jan 2019',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          folderPath: 'PanPanBoomBoomVR/',
          thumbnail: 'PanPanBoomBoomVR/small.jpg',
          content: [
            {
              id: 0,
              path: '00.png',
              type: 'image',
            },
            {
              id: 1,
              path: '01.png',
              type: 'image',
            },
            {
              id: 2,
              path: 'trailer.mp4',
              type: 'video',
            },
          ],
        },
        {
          id: 8,
          name: 'PhysicsSimulator',
          date: 'Feb 2018 / Jan 2019',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          folderPath: 'PhysicsSimulator/',
          thumbnail: 'PhysicsSimulator/small.jpg',
          content: [
            {
              id: 0,
              path: '00.png',
              type: 'image',
            },
            {
              id: 1,
              path: '02.png',
              type: 'image',
            },
            {
              id: 2,
              path: 'v01.mp4',
              type: 'video',
            },
          ],
        },
        {
          id: 9,
          name: 'Pong',
          date: 'Feb 2018 / Jan 2019',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          folderPath: 'Pong/',
          thumbnail: 'Pong/small.jpg',
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
            {
              id: 2,
              path: '02.jpg',
              type: 'image',
            },
            {
              id: 3,
              path: 'v00.mp4',
              type: 'video',
            },
          ],
        },
        {
          id: 10,
          name: 'Portfolio',
          date: 'Feb 2018 / Jan 2019',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          folderPath: 'Portfolio/',
          thumbnail: 'Portfolio/small.jpg',
          content: [
            {
              id: 0,
              path: '00.jpg',
              type: 'image',
            },
          ],
        },
        {
          id: 11,
          name: 'Raven',
          date: 'Feb 2018 / Jan 2019',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          folderPath: 'Raven/',
          thumbnail: 'Raven/small.jpg',
          content: [
            {
              id: 0,
              path: '00.png',
              type: 'image',
            },
            {
              id: 1,
              path: '02.png',
              type: 'image',
            },
            {
              id: 2,
              path: 'v01.mp4',
              type: 'video',
            },
          ],
        },
        {
          id: 12,
          name: 'Robot',
          date: 'Feb 2018 / Jan 2019',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          folderPath: 'Robot/',
          thumbnail: 'Robot/small.jpg',
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
            {
              id: 2,
              path: '02.jpg',
              type: 'image',
            },
          ],
        },
        {
          id: 13,
          name: 'Thales',
          date: 'Feb 2018 / Jan 2019',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          folderPath: 'Thales/',
          thumbnail: 'Thales/small.jpg',
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
          id: 14,
          name: 'TowerDefense',
          date: 'Feb 2018 / Jan 2019',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          folderPath: 'TowerDefense/',
          thumbnail: 'TowerDefense/small.jpg',
          content: [
            {
              id: 0,
              path: '00.jpg',
              type: 'image',
            },
          ],
        },
        {
          id: 15,
          name: 'UnrealInstructor',
          date: 'Feb 2018 / Jan 2019',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          folderPath: 'UnrealInstructor/',
          thumbnail: 'UnrealInstructor/small.jpg',
          content: [
            {
              id: 0,
              path: '00.png',
              type: 'image',
            },
            {
              id: 1,
              path: '01.png',
              type: 'image',
            },
            {
              id: 2,
              path: '02.png',
              type: 'image',
            },
            {
              id: 3,
              path: '03.png',
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
      this.slide = 0;
    },
    getContentByProject(project_id) {
      var items = this.projects.find(p => p.id === project_id).content;
      return items;
    },
  },
};
</script>
