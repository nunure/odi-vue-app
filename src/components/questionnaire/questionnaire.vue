<template>
<div class="qcm">
  <h1> yolooo </h1>
  <ul>
    <li v-for="item in items">
        <input type="radio" v-model="checked" :value="item.txt"> {{ item.txt }}
    </li>
  </ul>

  {{ checked }}
</div>
 <!-- <div id='example-3'>
    <input type="radio" id="jack" value="Jack" v-model="picked">
    <label for="jack">Jack</label>
    <input type="radio" id="john" value="John" v-model="picked">
    <label for="john">John</label>
    <input type="radio" id="mike" value="Mike" v-model="picked">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ picked }}</span>
  </div>-->
</template>

<script>
export default{
  name: 'qcm',
  data() {
    return {
      items: [{ txt: 'foo', val: 1 }, { txt: 'bar', val: 2 }],
      checked: '',
    };
  },
};
/*
export default{
  name: '#example-3',
  data: {
    picked: []
  }
} */
</script>
