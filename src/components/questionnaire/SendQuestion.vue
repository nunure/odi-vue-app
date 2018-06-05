<template>
  <div>
    <h1> Questionnaire envoyé :) </h1>

    <button typ="button" @click="startQuestionnaire()">Nouveau questionnaire</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    startQuestionnaire() {
      this.$router.push("questionnaire");
    }
  }
};
</script>
