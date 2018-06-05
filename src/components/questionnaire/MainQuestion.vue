<template>
  <div>
    <el-steps
      :active="activeStep"
      finish-status="success"
      simple
      style="margin-top: 20px">
      <el-step title="Step 1" />
      <el-step title="Step 2" />
      <el-step title="Step 3" />
    </el-steps>
    <div
      class="carousel"
      v-for="questions in datas"
      :key="questions.page"
      v-show="visible(questions.page)">
      <form @submit.prevent="onSubmit">
        <div
          v-for="question in questions.fields"
          :key="question.name">
          <label>{{ question.label }} :</label>
          <!-- radio button -->
          <div v-if="question.type === 'radio'">
            <RadioType
              :name="question.name"
              :values="question.values"/>
          </div>
          <!-- Input type -->
          <div v-else-if="question.type === 'input_number' || question.type === 'input_string'">
            <InputType
              :type="question.type"
              :name="question.name"
              :placeholder="question.placeholder"/>
          </div>
          <!-- Date type , max is date of the day for birth day -->
          <div v-else-if="question.type === 'date'">
            <DateType :name="question.name"/>
          </div>
          <!-- select type -->
          <div v-else-if="question.type === 'select'">
            <SelectType
              :name="question.name"
              :values="question.values"/>
          </div>
          <!-- Range type min 0 and max 100 -->
          <div v-else-if="question.type === 'range'">
            <RangeType :name="question.name"/>
          </div>
          <div v-else>
            <p>v else: {{ question.type }}</p>
          </div>
        </div>
        <button
          type="button"
          @click="onPrevious()">Retour</button>
        <button type="submit">Valider</button>
      </form>
    </div>
  </div>
</template>

<script>
import InputType from "@/components/questionnaire/forms/InputType";
import DateType from "@/components/questionnaire/forms/DateType";
import RadioType from "@/components/questionnaire/forms/RadioType";
import SelectType from "@/components/questionnaire/forms/SelectType";
import RangeType from "@/components/questionnaire/forms/RangeType";

export default {
  components: {
    InputType,
    DateType,
    RadioType,
    SelectType,
    RangeType
  },
  data() {
    return {
      datas: [],
      nbPage: 0,
      date: "",
      activeStep: 0
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
        this.answer = response.data;
      },
      response => {
        // @TODO: handle http error
        console.error(response);
      }
    );
  },
  methods: {
    onSubmit() {
      if (this.activeStep++ >= this.nbPage - 1) {
        // This is the end of the questionnaire
        // PUT result to the back
        this.$http
          .put("http://localhost:3000/answers", this.answer)
          .then(
            response => {
              this.$router.push("send_question");
              console.log(response);
            },
            response => {
              // @TODO: handle http error
              console.error(response);
            }
          );
      }
    },
    onPrevious() {
      if (this.activeStep-- <= 0) this.activeStep = 0;
    },
    visible(key) {
      return key === this.activeStep;
    }
  }
};
</script>
