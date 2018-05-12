<template>
  <div>
    <question id="qcm">
      <question-slide
        class="carousel"
        v-for="question in datas"
        :key="question.page"
        :index="question.page">
        <form>
          <div v-if="question.page === 0" class="doctor" >
            <informations/>
            <vue-form-generator ref="vfg" :schema="question.template" :model="answer.model"
                                :options="formOptions" />
          </div>
          <div v-else>
            <vue-form-generator ref="vfg" :schema="question.template" :model="answer.model"
                                :options="formOptions" />
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
import $ from 'jquery';
import 'ion-rangeslider';
import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';
import VueFormGenerator from 'vue-form-generator';
import 'vue-form-generator/dist/vfg.css'; // optional full css additions

window.$ = $;
window.Pikaday = Pikaday;

export default {
  components: {
    'vue-form-generator': VueFormGenerator.component,
    Question,
    QuestionSlide,
    Informations,
    QuestionPart1
  },
  data() {
    return {
      answer: {},
      datas: [],
      slides: null,
      formOptions: {
        validateAfterLoad: false,
        validateAfterChanged: true
      }
    };
  },
  created() {
    // get all questionnaire
    this.$http.get('http://localhost:3000/questions').then(
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
    this.$http.get('http://localhost:3000/answers/createEmpty').then(
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
