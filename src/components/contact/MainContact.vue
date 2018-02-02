<template>
  <div>
    <h1>test</h1>
    <contact>
      <contact-slide class="carousel" v-for="n in slides" :key="n" :index="n - 1">
        <img :src="'http://lorempicsum.com/futurama/630/300/' + n" width="100%">
      </contact-slide>
    </contact>
  </div>
</template>

<script>
import Contact from '@/components/contact/Contact';
import ContactSlide from '@/components/contact/ContactSlide';

export default{
  data() {
    return {
      slides: 5,
    };
  },
  components: {
    Contact,
    ContactSlide,
  },
};
</script>

<style scoped>
  .carousel {
     left: 0;
     right: 0;
     width: 100%;
     text-align: center;
  }
</style>
