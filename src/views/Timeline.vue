<template>
  <div>
    <h3 class="text-center">{{ $t("cv") }}</h3>
    <q-timeline layout="comfortable" color="red">
      <q-timeline-entry class="q-py-xl" icon="fas fa-laptop-code">
        <template v-slot:title>
          Centre Aquitain des Technologies de l'Informatique et de l'Electronique (CATIE)
        </template>
        <template v-slot:subtitle>
          Feb 2019 => Until January 2020
          <br/>
          <a href="https://www.catie.fr/" target="_blank">https://www.catie.fr/</a>
        </template>
        <div>
          In charge of the design and development of our brand-new platform Peac²h (Platforme d’Evaluation et d’Analyse Comportementale et Cognitive de l’Humain). My job was to retrieve the needs with my collaborators, to design/implement the solution in an iterative process.
        </div>
          <br/>
      </q-timeline-entry>

      <q-timeline-entry class="q-py-xl" icon="fas fa-laptop-code">
        <template v-slot:title>
          Centre Aquitain des Technologies de l'Informatique et de l'Electronique (CATIE)
        </template>
        <template v-slot:subtitle>
          Jul 2018 => Dec 2018
          <br/>
          <a href="https://www.catie.fr/" target="_blank">https://www.catie.fr/</a>
        </template>
        <div>
          In charge of the design and development of a human monitoring application, my job during this 6 months internship was to create a software allowing the recovery of physiological data from a multiplatform application (Unity or other).
        </div>
        <br/>
      </q-timeline-entry>

      <q-timeline-entry class="q-my-md" icon="fas fa-graduation-cap">
        <template v-slot:title>
          Université du Québec à Chicoutimi (UQAC)
        </template>
        <template v-slot:subtitle>
          August 2017 => June 2018
          <br/>
          <a href="https://www.uqac.ca/">https://www.uqac.ca/</a>
        </template>
        <div>
          Maîtrise en informatique orientée développement de jeux video
        </div>
        <br/>
      </q-timeline-entry>

      <q-timeline-entry class="q-my-md" icon="fas fa-fighter-jet">
        <template v-slot:title>
          Thales Systèmes Aéroportés (TSA)
        </template>
        <template v-slot:subtitle>
          February 2017 => July 2017
          <br/>
          <a href="https://www.thalesgroup.com/en" target="_blank">https://www.thalesgroup.com/en</a>
        </template>
        <div>
          In charge of the design and developement of two training courses in virtual reality. This 5 months internship was the perfect experience to discover multiple facets of the job of a software engineer.
        </div>
        <br/>
      </q-timeline-entry>

      <q-timeline-entry class="q-my-md" icon="fas fa-graduation-cap">
        <template v-slot:title>
          Ecole Nationale d'Ingénieurs de Brest (ENIB)
        </template>
        <template v-slot:subtitle>
          September 2013 => January 2017
          <br/>
          <a href="https://www.enib.fr/" target="_blank">https://www.enib.fr/</a>
        </template>
        <div>
          Diplôme d'ingénieur généraliste
        </div>
        <br/>
      </q-timeline-entry>

      <q-timeline-entry class="q-my-md" icon="fas fa-graduation-cap">
        <template v-slot:title>
          Lycée Yves Thépot
        </template>
        <template v-slot:subtitle>
          September 2010 => June 2013
          <br/>
          <a href="http://www.lycee-thepot.org/" target="_blank">http://www.lycee-thepot.org/</a>
        </template>
        <div>
          Scientific Bachelor Degree (specialized in Engineering Sciences)
        </div>
        <br/>
      </q-timeline-entry>

    </q-timeline>
  </div>
</template>

<style>
</style>

<script>

export default {
  name: 'PortfolioPage',
};

</script>
