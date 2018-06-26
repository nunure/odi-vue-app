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
      :key="questions.page"
      v-show="visible(questions.page)">

      <main-form :questions="questions"/>
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
    this.$http.get("http://localhost:3000/questions").then(
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
    this.$http.get("http://localhost:3000/answers/createEmpty").then(
      response => {
        this.answer = response.data.model;
      },
      response => {
        // @TODO: handle http error
        console.error(response);
      }
    );
  },
  methods: {
    visible(key) {
      return key === this.activeStep;
    }
  }
};
</script>
