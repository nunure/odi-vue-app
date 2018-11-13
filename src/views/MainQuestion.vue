<template>
  <div class="questionnaire">
    <el-header>
      <el-steps
        :active="activeStep"
        finish-status="success"
        simple>
        <el-step title="Docteur" />
        <el-step title="Informations" />
        <el-step title="ODI" />
      </el-steps>
    </el-header>
    <el-main
      v-for="questions in datas"
      v-show="visible(questions.page)"
      :key="questions.page">

      <main-form :questions="questions" />
    </el-main>
  </div>
</template>

<script>
import MainForm from "@/components/questionnaire/forms/MainForm";

export default {
  components: {
    MainForm
  },
  data() {
    return {
      datas: [],
      nbPage: 0,
      date: "",
      activeStep: 0,
      answer: {}
    };
  },
  created() {
    // get all questionnaire
    this.$http
      .get((process.env.BACK_URL || "http://localhost:3000") + "/api/questions")
      .then(
        response => {
          this.datas = response.data;
          this.nbPage = Object.keys(this.datas).length;
        },
        response => {
          // @TODO: handle http error
          console.error(response);
        }
      );
    // get a new empty model for responses
    this.$http
      .get(
        (process.env.BACK_URL || "http://localhost:3000") +
          "/api/answers/createEmpty"
      )
      .then(
        response => {
          this.answer = response.data;
        },
        response => {
          // @TODO: handle http error
          console.error(response);
        }
    ); //eslint-disable-line
  },
  methods: {
    visible(key) {
      return key === this.activeStep;
    }
  }
};
</script>
