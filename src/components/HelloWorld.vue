<template>
  <div class="hello">
    <h1>{{ msg }}</h1><br/>
    <h2>Essential Informations about bacon</h2>
    <p>
      Bacon ipsum dolor amet alcatra boudin drumstick biltong ribeye swine pork belly salami chuck.
       Ball tip chicken turkey cupim landjaeger corned beef alcatra pork loin short loin brisket
       drumstick. Bacon jerky swine t-bone. Chuck biltong ground round prosciutto ham hock ribeye
       meatball jerky leberkas tri-tip boudin sausage ball tip pork shank. Meatball cow pancetta
       flank venison short ribs ham hock short loin. Swine andouille pork belly cupim tenderloin
       pancetta filet mignon strip steak salami doner sausage t-bone brisket.
    </p>
    <h3>More informations</h3>
    <p>
      Eu tail tri-tip ad consectetur filet mignon turkey irure. Shankle sint bresaola ullamco do,
      drumstick burgdoggen commodo venison short loin flank pork belly. Exercitation frankfurter
      shank, in minim pancetta tempor filet mignon mollit excepteur ipsum in. Culpa ea ipsum
      cupim pig porchetta nostrud strip steak, cupidatat frankfurter anim ad pancetta burgdoggen
      pastrami. Pork filet mignon aliquip, dolor boudin pig short loin laboris est ribeye fatback.
      Salami jowl culpa fugiat. Strip steak duis dolor drumstick qui deserunt sausage ribeye et
      hamburger nostrud in andouille
    </p>
    <h4>A picture is worth a thousand words</h4>
    <img src="https://baconmockup.com/300/200/" class="ev-appnav__logo">
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to si wonderfull website',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
