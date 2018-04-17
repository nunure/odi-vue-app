<template>
  <div>
    <question id="qcm">
      <question-slide class="carousel" v-for="question in datas" :key="question.page"
      :index="question.page">
        <form>
          <div v-if="question.page === 0" class="doctor" >
            <informations></informations>
            <vue-form-generator  ref="vfg" :schema="question.template" :model="model"
            :options="formOptions" >
          </vue-form-generator>
          </div>
          <div v-else>
            <vue-form-generator ref="vfg" :schema="question.template" :model="model"
              :options="formOptions" >
            </vue-form-generator>
          </div>
        </form>
      </question-slide>
    </question>
  </div>
</template>

<script>
import Question from '@/components/questionnaire/Question';
import QuestionSlide from '@/components/questionnaire/QuestionSlide';
import Informations from '@/components/questionnaire/Informations';
import QuestionPart1 from '@/components/questionnaire/questions/QuestionPart1';
import VueFormGenerator from 'vue-form-generator';
import 'vue-form-generator/dist/vfg-core.css';

export default {
  components: {
    'vue-form-generator': VueFormGenerator.component,
    Question,
    QuestionSlide,
    Informations,
    QuestionPart1,
  },
  data() {
    return {
      model: {
        doctor: null,
        test1: null,
        test2: null,
        odiQuestion1: null,
        odiQuestion2: null,
        odiQuestion3: null,
        odiQuestion4: null,
        odiQuestion5: null,
        odiQuestion6: null,
        odiQuestion7: null,
        odiQuestion8: null,
        odiQuestion9: null,
        odiQuestion10: null,
      },
      datas: [],
      slides: null,
      formOptions: {
        validateAfterLoad: false,
        validateAfterChanged: true,
      },
    };
  },
  created() {
    this.$http.get('http://localhost:3000/questions').then((response) => {
      this.datas = response.data;
      this.slides = Object.keys(this.datas).length;
    });
  },
};

</script>

<style scoped>
  .carousel {
     left: 0;
     right: 0;
     width: 100%;
     text-align: left;
     padding-left: 3em;
     padding-right: 3em;
  }

br {
  display: none;
}

button {
  margin-bottom: 20px;
  margin-right: 50%;
  margin-left: 50%;
}

h5 {
  margin-top: 30px;
}

#qcm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 800px;
}


</style>
