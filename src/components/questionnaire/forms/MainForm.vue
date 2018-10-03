<template>
  <el-form
    ref="answer_model"
    :model="answer_model"
    :rules="rule"
    label-position="Top">
    <!-- Show information page if it's the first page -->
    <div v-if="questions.page === 0">
      <information />
    </div>
    <div v-if="questions.page >= 2">
      <odi />
    </div>
    <div
      v-for="question in questions.fields"
      :key="question.name">
      <!-- radio button -->
      <div v-if="question.type === 'radio'">
        <RadioType
          v-model="answer_model[question.name]"
          :question="question" />
      </div>
      <!-- Input text type -->
      <div v-else-if="question.type === 'input_string'">
        <InputTextType
          v-model="answer_model[question.name]"
          :question="question" />
      </div>
      <!-- Input number type -->
      <div v-else-if="question.type === 'input_number'">
        <InputNumberType
          v-model="answer_model[question.name]"
          :question="question" />
      </div>
      <!-- Date type , max is date of the day for birth day -->
      <div v-else-if="question.type === 'date'">
        <DateType
          v-model="answer_model[question.name]"
          :question="question" />
      </div>
      <!-- select type -->
      <div v-else-if="question.type === 'select'">
        <SelectType
          v-model="answer_model[question.name]"
          :question="question" />
      </div>
      <!-- Range type min 0 and max 100 -->
      <div v-else-if="question.type === 'range'">
        <RangeType
          v-model="answer_model[question.name]"
          :question="question" />
      </div>
      <div v-else>
        <p>v else: {{ question.type }}</p>
      </div>
    </div>
    <el-form-item class="buttons">
      <el-button
        type="button"
        class="btn-back"
        @click="onPrevious()">Retour</el-button>
      <el-button
        type="primary"
        class="btn-submit"
        @click="submitForm('answer_model')">Valider</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import InputTextType from "@/components/questionnaire/forms/InputTextType";
import InputNumberType from "@/components/questionnaire/forms/InputNumberType";
import DateType from "@/components/questionnaire/forms/DateType";
import RadioType from "@/components/questionnaire/forms/RadioType";
import SelectType from "@/components/questionnaire/forms/SelectType";
import RangeType from "@/components/questionnaire/forms/RangeType";
import Information from "@/components/questionnaire/page/Information";
import Odi from "@/components/questionnaire/page/Odi";

export default {
  components: {
    InputTextType,
    InputNumberType,
    DateType,
    RadioType,
    SelectType,
    RangeType,
    Information,
    Odi
  },
  props: {
    questions: { type: Object, default: null }
  },
  data() {
    return {
      rule: {},
      answer_model: {}
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.populateAnswer();
          this.onSubmit();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    onSubmit() {
      if (
        this.$parent.$parent.activeStep++ >=
        this.$parent.$parent.nbPage - 1
      ) {
        // this.$parent.$parent.activeStep--; // DEBUG
        // This is the end of the questionnaire
        // PUT result to the back
        this.$http
          .put("http://localhost:3000/answers", this.$parent.$parent.answer)
          .then(
            response => {
              this.$router.push("send_question"); // DEBUG
              console.log(response);
            },
            response => {
              // @TODO: handle http error
              console.error(response);
            }
          ); //eslint-disable-line
      }
    },
    onPrevious() {
      if (this.$parent.$parent.activeStep-- <= 0)
        this.$parent.$parent.activeStep = 0;
    },
    populateAnswer() {
      Object.assign(this.$parent.$parent.answer, this.answer_model);
    },
  }
};
</script>
