<template>
  <transition :name="transition">
    <div v-show="visible">
      <slot/>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    index: { type: Number, default: 0 }
  },
  computed: {
    visible() {
      return this.index === this.$parent.index;
    },
    transition() {
      if (this.$parent.direction) {
        return `slide-${this.$parent.direction}`;
      }

      return null;
    }
  }
};
</script>

<style scoped>
.slide-right-enter-active {
  animation: SlideRightIn 0.5s;
}

.slide-right-leave-active {
  animation: SlideRightOut 0.5s;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}

@keyframes SlideRightIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes SlideRightOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.slide-left-enter-active {
  animation: SlideLeftIn 0.5s;
}

.slide-left-leave-active {
  animation: SlideLeftOut 0.5s;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}

@keyframes SlideLeftIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes SlideLeftOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>
