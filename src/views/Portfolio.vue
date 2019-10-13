<template>
  <div>
    <h3 class="text-center ">{{ $t("portfolio") }}</h3>
    <div class="q-pa-md">
      <div class="q-gutter-md row items-start">
        <q-list class="rounded-borders" style="width: 100%;">
          <q-item v-for="project of projects" :key="project.id" class="selector q-py-lg" @click.native="displayProject(project.id)">
            <q-item-section class="selector q-mr-md" style="height: 220px; max-width: 220px">
              <q-img :src="require('../assets/projects/' + project.thumbnail)"/>
            </q-item-section>
            <q-item-section top class="column">
              <div class="col-2 col-md-2 text-uppercase text-h6 text-weight-medium" >{{project.name}}</div>
              <div class="col-2 col-md-2 text-uppercase text-subtitle1 text-italic" >{{project.date}}</div>
              <div class="col-4 col-md-8">
                {{project.description}}
                  <div v-if="project.github != null">
                  Available on GitHub at : <a v-bind:href="project.github" target="_blank">{{project.github}}</a>
                  </div>
                </div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
    <q-dialog id="project_dialog" v-if="projectId != -1" v-model="carousel">
      <q-carousel
      id="project_carousel"
      swipeable
      animated
      v-model="slide"
      arrows
      infinite
      >
        <q-carousel-slide v-for="item of getContentByProject(projectId)" :key="item.id" :name="item.id" >
          <q-img contain id="project_carousel_img" v-if="item.type=='image'" :ratio="1" :src="require('../assets/projects/' + projects[projectId].folderPath + item.path)"></q-img>
          <q-video contain id="project_carousel_vid" v-if="item.type=='video'" :src="require('../assets/projects/' + projects[projectId].folderPath + item.path)"></q-video>
        </q-carousel-slide>
      </q-carousel>
    </q-dialog>
  </div>
</template>

<style>
.selector:hover{
    background-color:#bbbbbb55;
    cursor: pointer;
  }

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

export default {
  name: 'ProjectsPage',
  data() {
    return {
      carousel: false,
      card: false,
      sliders: false,
      slide: 0,

      projectId: -1,
      projects: [
        {
          id: 0,
          name: '3D Printer',
          date: 'Jun 2015 / Sep 2015',
          description: 'A functional 3D printer made of... wood. I started doing my CAD (computer-aided design) using Catia V5. Once I was satisfied with my 3D model, I gathered all the pieces (recycling my old computer power unit at the same time). Afterward, I configured the Marlin firmware that you can find on their Github page, and uploaded it on my Arduino Mega. To test my code, I tried to move an engine, burnt one transistor, cried, then tryied again with a different configuration and there is it ! After many hours of adjusting some parameters, I obtained the pieces than you can see. It was really an excellent project to apply the basic knowledge of electronic systems.',
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
          name: 'Blast',
          date: 'May 2018 / Jun 2018',
          description: 'A school project for the subject Interaction 3D et Réalité Virtuelle at UQAC. The aim of the project is to make people learn the emergency procedure in case of heart attack. The project was realized by a team of 4 persons myself included. We tried to promote VR as a new way of learning.',
          folderPath: 'Blast/',
          thumbnail: 'Blast/small.jpg',
          github: 'https://github.com/y3lousso/Blast',
          content: [
            {
              id: 0,
              path: '00.jpg',
              type: 'image',
            },
            {
              id: 1,
              path: 'trailer.mp4',
              type: 'video',
            },
          ],
        },
        {
          id: 2,
          name: 'Civil Disorder',
          date: 'Mar 2018',
          description: "A 3D game made on Unity for the WonderJam2018. We were 6 people and we had to create a game within 48 hours.We were given 3 topics : Arcade, Multi, Survival. We decided to create a car game in split screen. You can play 1v1, 2v2 or solo. As you can guess, the aim is to destroy everything. By the way, the main topic of the game jam was 'Order and Disorder'. More you destroy, more you get points. You can also destroy your opponents' cars.",
          folderPath: 'CivilDisorder/',
          thumbnail: 'CivilDisorder/small.jpg',
          github: 'https://github.com/Saarg/WonderJam',
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
          name: 'Unreal Instructor',
          date: 'May 2018 / Jun 2018',
          description: 'A school project for the subject Interaction 3D et Réalité Virtuelle at UQAC. The aim of the project is to make people learn the emergency procedure in case of heart attack. The project was realized by a team of 4 persons myself included. We tried to promote VR as a new way of learning.',
          folderPath: 'UnrealInstructor/',
          thumbnail: 'UnrealInstructor/small.jpg',
          github: 'https://github.com/y3lousso/UnrealInstructor',
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
          id: 4,
          name: 'Game Engine 2D',
          date: 'Jan 2018 / Apr 2018',
          description: 'A 2D game engine made with C#. (Entity, Component, System). We did not use any external library except .NET because we wanted to implement every systems by ourself.',
          folderPath: 'GameEngine2D/',
          thumbnail: 'GameEngine2D/small.jpg',
          github: 'https://github.com/y3lousso/MoteurJeuxProjetFinal',
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
          id: 5,
          name: 'Pan Pan Boom Boom VR',
          date: 'Jan 2018 / Apr 2018',
          description: 'A crossplatform VR/PC multiplayer game made with Unity. The Game Master (VR) has to keep the other players (PC) from crossing the Dungeon using traps, spells and monsters.',
          folderPath: 'PanPanBoomBoomVR/',
          thumbnail: 'PanPanBoomBoomVR/small.jpg',
          github: 'https://github.com/Saarg/Dungeon-VR',
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
          id: 6,
          name: 'Physics Simulator',
          date: 'Oct 2017 / Dec 2017',
          description: "A 3D collision system using Unity 3D display. We're not using Unity Rigidbody or Collision components. We implemented multiple collision methods (Sphere, AABB, OBB) and an octree to reduce the processing time.",
          folderPath: 'PhysicsSimulator/',
          thumbnail: 'PhysicsSimulator/small.jpg',
          github: 'https://github.com/y3lousso/MathPhysProjetFinal',
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
          id: 7,
          name: 'Portfolio',
          date: 'Feb 2018 / Jan 2019',
          description: 'The third and current version of my portfolio using Vuejs, Quasar, Nginx, Docker on a Rasberry Pi.',
          folderPath: 'Portfolio/',
          thumbnail: 'Portfolio/small.jpg',
          github: 'https://github.com/y3lousso/portfolio_vuejs_quasar',
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
          id: 8,
          name: 'Raven',
          date: 'Sep 2017 / Dec 2017',
          description: 'An AI project on fuzzy logic, path finding, neural network and goal logic. It is based on Mat Buckland project. Bots learn to shoot with a neural network.',
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
          id: 9,
          name: 'Robot',
          date: 'Jan 2017 / Jun 2017',
          description: 'A school project of embedded systems. We had to develop a part of the firmware of the robot. Using FreeRTOS to handle multi-tasks. In the end we had an autonomous robot moving around the room and avoiding obstacles. If needed we could control it via keyboard. (Zigbee communication and Qt GUI) It could even follow colors with the camera.',
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
          id: 10,
          name: 'Bricole ta science',
          date: 'Jan 2017',
          description: "A student project that we carried out with 2 friends of mine and 3 classes of CM1/CM2 at the elementary school of Locmaria-Plouzané (Brest, France) during my 3rd year at ENIB. The aim was to teach a real scientif process to children : Observation, Comprehension, Adaptation, Tests, Amelioration. To add some excitment, we divided each class into 3 groups. The goal : send a water rocket as far as possible. We won the competition with a shot at 80m with the 'Team PLUS' that you can see on the last picture. :)",
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
          id: 11,
          name: 'Endless Runner',
          date: 'Feb 2018 / Jan 2019',
          description: 'An endless runner type game using Unreal Engine 4 with C++.',
          folderPath: 'EndlessRunner/',
          thumbnail: 'EndlessRunner/small.jpg',
          github: 'https://github.com/y3lousso/EndlessRunner',
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
          id: 12,
          name: 'Invasion VR',
          date: 'Jun 2017 / Aug 2017',
          description: 'A tower defense type game in VR made with Unity. I never finished it, but still, I spent quite a lot of time to create those utilities scripts.',
          folderPath: 'InvasionVR/',
          thumbnail: 'InvasionVR/small.jpg',
          github: 'https://github.com/y3lousso/InvasionVR_Unity',
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
          id: 13,
          name: 'Tower Defense',
          date: 'Jan 2017',
          description: 'A very simple 2D tower defense game using Unity.',
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
          id: 14,
          name: 'Pong',
          date: 'Nov 2016',
          description: 'A simple 2D shape and collision simulator using low-level libraries like GTKMM and Cairo with C++. ',
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
          id: 15,
          name: "Ecol'Eau",
          date: 'Sep 2016 / Dec 2016',
          description: "An application that allows the user to know his water consumption in real time for each water point. We were 4 on this project. I've been working on the GUI while others were doing the database and networking. Everything is built from scratch using the libraries Gtkmm and Cairo. Everything has been set up via coding (C++). *** Glad I discovered WPF afterward ! ***",
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
      ],
    };
  },
  methods: {
    displayProject(projectId) {
      this.carousel = true;
      this.projectId = projectId;
      this.slide = 0;
    },
    getContentByProject(projectId) {
      const items = this.projects.find(p => p.id === projectId).content;
      return items;
    },
  },
};
</script>
