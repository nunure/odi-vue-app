<template>
  <div>
    <h3>datas</h3>
    <p>{{ datas }}</p>
    <h3>slides</h3>
    <p>{{ slides }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [],
      slides: {}
    };
  },
  created() {
    // get all questionnaire
    this.$http.get("http://localhost:3000/questions").then(
      response => {
        this.datas = response.data;
        this.slides = Object.keys(this.datas).length;
      },
      response => {
        // @TODO: handle http error
        console.error(response);
      }
    );
    // get a new empty model for responses
    this.$http.get("http://localhost:3000/answers/createEmpty").then(
      response => {
        this.answer = response.data;
      },
      response => {
        // @TODO: handle http error
        console.error(response);
      }
    );
  }
};
</script>
