<template>
  <footer class="ev-appfooter">
    <div class="container">
      <span class="text-muted">  
        Created by: Mathieu RETY - 
        Contact information: <a href="mailto:rety.mathieu@gmail.com">
        rety.mathieu@gmail.com</a>.
      </span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.ev-appfooter {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  line-height: 60px; /* Vertically center the text there */
  background-color: #f5f5f5;
  text-align: center;
}
.ev-appfooter > .container {
  padding-right: 15px;
  padding-left: 15px;
}
</style>
