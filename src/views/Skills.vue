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
                  name: '3D / XR / Video games',
                  value: 0.9,
                },
                {
                  id: 1,
                  name: 'Web Application',
                  value: 0.8,
                },
                {
                  id: 2,
                  name: 'Desktop Application',
                  value: 0.7,
                },
              ],
            },
            {
              id: 1,
              name: 'Project Management',
              skills: [
                {
                  id: 0,
                  name: 'Trello',
                  value: 1,
                },
                {
                  id: 1,
                  name: 'Office 365',
                  value: 0.9,
                },
                {
                  id: 2,
                  name: 'MS Project',
                  value: 0.3,
                },
              ],
            },
            {
              id: 2,
              name: 'IDE',
              skills: [
                {
                  id: 0,
                  name: 'Visual Studio Code',
                  value: 1,
                },
                {
                  id: 1,
                  name: 'Visual Studio 2015/2017',
                  value: 1,
                },
                {
                  id: 2,
                  name: 'Eclipse',
                  value: 0.4,
                },
              ],
            },
            {
              id: 3,
              name: 'Git',
              skills: [
                {
                  id: 0,
                  name: 'GitHub/GitLab',
                  value: 0.9,
                },
                {
                  id: 1,
                  name: 'Bash/SourceTree/GitKraken',
                  value: 0.9,
                },
              ],
            },
            {
              id: 4,
              name: 'DevOps',
              skills: [
                {
                  id: 0,
                  name: 'GitLab CI',
                  value: 0.7,
                },
              ],
            },
            {
              id: 5,
              name: 'Languages',
              skills: [
                {
                  id: 0,
                  name: 'French (Native)',
                  value: 1,
                },
                {
                  id: 1,
                  name: 'English',
                  value: 0.9,
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
                  value: 0.9,
                },
                {
                  id: 1,
                  name: 'Unreal Engine',
                  value: 0.4,
                },
              ],
            },
            {
              id: 1,
              name: 'Unity : Platform / Device',
              skills: [
                {
                  id: 0,
                  name: 'Desktop (Standalone)',
                  value: 1,
                },
                {
                  id: 1,
                  name: 'HTC Vive / WMR Headsets',
                  value: 1,
                },
                {
                  id: 2,
                  name: 'HoloLens',
                  value: 0.8,
                },
                {
                  id: 3,
                  name: 'Android (tablet & smartphone)',
                  value: 0.8,
                },
                {
                  id: 4,
                  name: 'Android (Oculus Go & Quest)',
                  value: 0.7,
                },
              ],
            },
            {
              id: 2,
              name: 'XR Framework',
              skills: [
                {
                  id: 0,
                  name: 'VRTK ',
                  value: 0.9,
                },
                {
                  id: 1,
                  name: 'MRTK (HoloLens)',
                  value: 0.7,
                },
                {
                  id: 2,
                  name: 'Vuforia',
                  value: 0.5,
                },
              ],
            },
            {
              id: 3,
              name: 'Design',
              skills: [
                {
                  id: 0,
                  name: 'GIMP',
                  value: 0.7,
                },
                {
                  id: 1,
                  name: 'Blender',
                  value: 0.5,
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
                  value: 0.9,
                },
                {
                  id: 1,
                  name: 'CSS / Bootstrap / Quasar',
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
                  name: 'Laravel',
                  value: 0.9,
                },
                {
                  id: 1,
                  name: 'ASP.NET Core MVC 2',
                  value: 0.7,
                },
                {
                  id: 2,
                  name: 'Postman / Insomnia',
                  value: 0.7,
                },
                {
                  id: 3,
                  name: 'Express',
                  value: 0.4,
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
                  id: 1,
                  name: 'Docker',
                  value: 0.9,
                },
                {
                  id: 2,
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
                  name: 'Nginx',
                  value: 0.8,
                },
                {
                  id: 0,
                  name: 'Caddy',
                  value: 0.6,
                },
                {
                  id: 0,
                  name: 'Apache',
                  value: 0.6,
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
                  name: 'Jest / PhpUnit',
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
                  name: 'ESlint / PHP CBF',
                  value: 0.8,
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
              name: 'UI Technologies',
              skills: [
                {
                  id: 0,
                  name: 'UWP XAML',
                  value: 0.9,
                },
                {
                  id: 1,
                  name: 'Electron',
                  value: 0.6,
                },
                {
                  id: 2,
                  name: 'WPF XAML',
                  value: 0.6,
                },
                {
                  id: 3,
                  name: 'Qt',
                  value: 0.5,
                },
                {
                  id: 4,
                  name: 'GTKMM',
                  value: 0.3,
                },
              ],
            },
            {
              id: 1,
              name: 'Framework',
              skills: [
                {
                  id: 0,
                  name: 'Prism Library',
                  value: 0.3,
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
