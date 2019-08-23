<template>
  <div>
    <h3 class="text-center">{{ $t("contact") }}</h3>
    <div class="q-pa-md">
    <q-form
      @submit="sendMail"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name"
        style="width: 40%"

        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type your name']"
      />

      <q-input
        filled
        type="mail"
        v-model="mail"
        label="Your mail *"
        hint="Mail"
        style="width: 40%"

        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your mail',
        ]"
      />

      <q-input
        filled
        type="textarea"
        v-model="message"
        label="Your message *"
        hint="Message"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your message',
        ]"
      />

      <div>
        <q-btn label="Submit" type="submit" color="red"/>
        <q-btn label="Reset" type="reset" color="red" flat class="q-ml-sm" />
      </div>
    </q-form>
   </div>
  </div>
</template>

<style>

</style>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      name: null,
      mail: null,
      message: null,

      accept: true,
    };
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'fas fa-exclamation-triangle',
          message: 'You need to accept the license and terms first',
        });
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Submitted',
        });
      }
    },

    sendMail() {
      this.$store.dispatch('sendMail', {
        name: this.name,
        mail: this.mail,
        message: this.message,
      });
    },

    onReset() {
      this.name = null;
      this.mail = null;
      this.message = null;
    },
  },
};
</script>
