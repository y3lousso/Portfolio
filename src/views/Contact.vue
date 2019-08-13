<template>
  <div>
    <h3 class="text-center">{{ $t("contact") }}</h3>
      <q-scroll-area style="height: 200px; max-width: 300px;">
        <div v-for="n in 100" :key="n" class="q-py-xs">
          Lorem ipsum dolor sit amet, consectetur adipisicing
          elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </div>
      </q-scroll-area>
  </div>
</template>

<style>

</style>

<script>

export default {
  name: 'ContactPage',
};

</script>
