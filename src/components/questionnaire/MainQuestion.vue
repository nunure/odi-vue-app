<template>
  <div>
    <question id="qcm">
      <question-slide class="carousel" :index="0">
        <informations></informations>
      </question-slide>
      <question-slide class="carousel" :index="1">
        <question-part-1></question-part-1>
      </question-slide>
      <question-slide class="carousel" v-for="(subjects, title, index) in questions" :key="index"
      :index="index + 2">
        <h5>{{ index + 1 }} : {{ title }} </h5>
        <ul>
          <div class="form-check" v-for="(subjects, id) in subjects" :key="id">
            <label class="form-check-label">
              <input class="form-check-input" type="radio" :name="index"
              :value="id" @click="odiAnswers(index, id)">
                {{ subjects }}
            </label>
          </div>
        </ul>
      </question-slide>
    </question>
  </div>
</template>

<script>
import questions from '@/assets/data/odi.json';
import Question from '@/components/questionnaire/Question';
import QuestionSlide from '@/components/questionnaire/QuestionSlide';
import Informations from '@/components/questionnaire/Informations';
import QuestionPart1 from '@/components/questionnaire/questions/QuestionPart1';

export default{
  data() {
    return {
      questions,
      answers: {
        question_1: null,
        question_2: null,
        question_3: null,
        question_4: null,
        question_5: null,
        question_6: null,
        question_7: null,
        question_8: null,
        question_9: null,
        question_10: null,
      },
      markOdi: 0,
    };
  },
  components: {
    Question,
    QuestionSlide,
    Informations,
    QuestionPart1,
  },
  methods: {
    addAnswers(index) {
      this.answers[index] = null;
    },
    odiAnswers(index, id) {
      this.answers[`question_${index + 1}`] = id;
    },
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
  height: 700px;
}

</style>
