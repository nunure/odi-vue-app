<template>
  <div class="qcm">
    <message title="Oswestry disability index [ODI]">Répondez à CHAQUE question. ne cochez QUE LA
      case qui vous correspond le mieux (1seule case).
    </message>
    <question>
      <question-slide class="carousel" v-for="(subjects, title, index) in questions" :key="index"
      :index="index">
        <h5>{{ index + 1 }} : {{ title }} </h5>
        <!--{{ addAnswers(index) }}-->
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

export default{
  data() {
    return {
      questions,
      answers: { question_1: null,
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
    };
  },
  components: {
    Question,
    QuestionSlide,
  },
  methods: {
    addAnswers(index) {
      // this.answers.push(`answer-${index}`);
      this.answers[index] = null;
    },
    odiAnswers(index, id) {
      // alert('toto');
      this.answers[`question_${index + 1}`] = id;
      // this.answers.push(id);
    },
    /* this.questions.forEach((question, i) => {
      this.answers[i] = null;
    }); */
  },
};


/*
import questions from '@/assets/data/odi.json';

export default{
  data() {
    return {
      questions,
      checked: [],
    };
  },
 addToArray() {
    for (let i = 0; i < this.question.length; i++) {
      this.question[i].push({ test: 'Yeey it works!' });
      for (let j = 0; j < this.question[i].choice_in_random_order.length; j++) {
        this.question[i].choice_in_random_order[j].push({ is_click: false });
      }
    }
  },
  methods: {
    addPickedId() {
      alert('polo');
    },
  },
}; */
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

</style>
