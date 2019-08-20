<template>
  <div>
    <h3 class="text-center">{{ $t("skills") }}</h3>
    <q-card>
      <q-tabs v-model="tab" indicator-color="yellow" align="justify" class="text-white shadow-2">
        <q-tab v-for="skillTab in skillTabs" :key="skillTab.id" :class="skillTab.class" :name="skillTab.name" :icon="skillTab.icon" :label="skillTab.label" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" class="bg-grey-1">

        <q-tab-panel v-for="skillTab in skillTabs" :key="skillTab.id" :name="skillTab.name">
          <div v-for="skillGroup in skillTab.skillGroups" :key="skillGroup.id" class="q-mt-md">
            <div class="text-h6">{{skillGroup.name}}</div>
            <div v-for="skill in skillGroup.skills" :key="skill.id" class="row items-center">
              <div class="col-12 col-md-2 q-ml-md">{{skill.name}}</div>
              <div class="col-12 col-md-9">
                <q-linear-progress stripe  style="height: 10px" :value="skill.value" :color="skillTab.color"/>
              </div>
            </div>
          </div>
        </q-tab-panel>

        <!--
        <q-tab-panel name="web">
          <div class="text-h6">Web</div>
          <div>CodeStyle : ESlint</div>
          <div>...</div>
        </q-tab-panel>

        <q-tab-panel name="desktop">
          <div class="text-h6">Desktop</div>
          <div>GTK MM -> Qt -> WPF -> UWP (XAML) -> Electron</div>
          <div>...</div>
        </q-tab-panel> -->

      </q-tab-panels>
    </q-card>
  </div>
</template>

<style >
</style>

<script>

export default {
  name: 'SkillsPage',
  data() {
    return {
      tab: 'overview',
      skillTabs: [
        {
          id: 0,
          name: 'overview',
          icon: 'web',
          label: 'Overview',
          class: 'bg-red',
          color: 'red',
          skillGroups: [
            {
              id: 0,
              name: 'Domains',
              skills: [
                {
                  id: 0,
                  name: '3D / VR / Video games',
                  value: 0.8,
                },
                {
                  id: 1,
                  name: 'Web Application',
                  value: 0.2,
                },
                {
                  id: 1,
                  name: 'Desktop Application',
                  value: 0.2,
                },
              ],
            },
            {
              id: 0,
              name: 'Git',
              skills: [
                {
                  id: 0,
                  name: 'Git',
                  value: 0.8,
                },
                {
                  id: 1,
                  name: 'Unreal Engine',
                  value: 0.2,
                },
              ],
            },
            {
              id: 0,
              name: 'Languages',
              skills: [
                {
                  id: 0,
                  name: 'French',
                  value: 1,
                },
                {
                  id: 1,
                  name: 'English',
                  value: 0.8,
                },
                {
                  id: 2,
                  name: 'Norwegian',
                  value: 0.3,
                },
                {
                  id: 3,
                  name: 'Spanish',
                  value: 0.2,
                },
                
              ],
            },
          ],
        },
        {
          id: 1,
          name: '3dxr',
          icon: 'web',
          label: '3D & XR',
          class: 'bg-blue',
          color: 'blue',
          skillGroups: [
            {
              id: 0,
              name: 'Game Engine',
              skills: [
                {
                  id: 0,
                  name: 'Unity',
                  value: 0.8,
                },
                {
                  id: 1,
                  name: 'Unreal Engine',
                  value: 0.2,
                },
              ],
            },
            {
              id: 1,
              name: 'Design',
              skills: [
                {
                  id: 0,
                  name: 'Blender',
                  value: 0.2,
                },
                {
                  id: 1,
                  name: 'GIMP',
                  value: 0.6,
                },
              ],
            },
          ],
        },
        {
          id: 2,
          name: 'web',
          icon: 'web',
          label: 'Web',
          class: 'bg-green',
          color: 'green',
          skillGroups: [
            {
              id: 0,
              name: 'Frontend',
              skills: [
                {
                  id: 0,
                  name: 'Vuejs (with Vuex & Axios)',
                  value: 0.8,
                },
                {
                  id: 1,
                  name: 'CSS -> Bootstrap -> Quasar',
                  value: 0.8,
                },
              ],
            },
            {
              id: 1,
              name: 'Backend',
              skills: [
                {
                  id: 0,
                  name: 'ASP.NET Core MVC 2',
                  value: 0.2,
                },
                {
                  id: 1,
                  name: 'Laravel',
                  value: 0.6,
                },
              ],
            },
            {
              id: 2,
              name: 'Deployment',
              skills: [
                {
                  id: 0,
                  name: 'Manual',
                  value: 1,
                },
                {
                  id: 0,
                  name: 'Docker',
                  value: 0.8,
                },
                {
                  id: 0,
                  name: 'Automated VM',
                  value: 0.5,
                },
              ],
            },
            {
              id: 3,
              name: 'Languages',
              skills: [
                {
                  id: 0,
                  name: 'HTML / CSS / JS / PHP',
                  value: 1,
                },
              ],
            },
            {
              id: 4,
              name: 'Web server',
              skills: [
                {
                  id: 0,
                  name: 'Apache -> Nginx',
                  value: .7,
                },
              ],
            },
            {
              id: 5,
              name: 'Security SSL/TLS',
              skills: [
                {
                  id: 0,
                  name: "Let's Encrypt / Certbot",
                  value: 0.4,
                },
              ],
            },
            {
              id: 6,
              name: 'Tests',
              skills: [
                {
                  id: 0,
                  name: "Jest/ PhpUnit",
                  value: 0.4,
                },
              ],
            },
            {
              id: 7,
              name: 'CodeStyle',
              skills: [
                {
                  id: 0,
                  name: "ESlint / PHP CBF",
                  value: 0.4,
                },
              ],
            },

          ],
        },
        {
          id: 3,
          name: 'desktop',
          icon: 'web',
          label: 'Desktop',
          class: 'bg-warning',
          color: 'warning',
          skillGroups: [
            {
              id: 0,
              name: 'Game Engine',
              skills: [
                {
                  id: 0,
                  name: 'Unity',
                  value: 0.8,
                },
                {
                  id: 1,
                  name: 'Unreal Engine',
                  value: 0.2,
                },
              ],
            },
            {
              id: 1,
              name: 'Design',
              skills: [
                {
                  id: 0,
                  name: 'Blender',
                  value: 0.2,
                },
                {
                  id: 1,
                  name: 'GIMP',
                  value: 0.6,
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
