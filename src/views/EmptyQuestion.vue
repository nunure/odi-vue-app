<template>
  <div class="empty-question">
    <h1> Questionnaire de test </h1>
    <img
      src="http://3.bp.blogspot.com/_zfDZqiHzRF8/TOMgcYsS1eI/AAAAAAAAFuM/3WxgFC7t5JE/s1600/nothinghere.jpg"
      alt="Nothing to do here"
      class="img-empty">
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

<style scoped>
.img-empty {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 1000px;
}
</style>
