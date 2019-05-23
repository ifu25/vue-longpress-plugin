<template>
  <div id="app">
    <mu-container class="button-wrapper">
      <mu-button v-longpress="{handler: longpress,params:{token:'263499118'}}" color="info">LongPress 1</mu-button>
      <mu-button v-longpress="()=>longpress({token:'263499118'})" color="success">LongPress 2</mu-button>
      <mu-button v-longpress="(event,el,vNode)=>longpress2(event,el,vNode,{token:'263499118'})" color="warning">LongPress 3</mu-button>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    longpress(data) {
      console.log(data.token)
    },
    longpress2(event, el, vNode, data) {
      console.log(event)
      console.log(el)
      console.log(vNode)
      console.log(data.token)
    }
  }
}
</script>

<style>
.button-wrapper {
  margin-top: 50px;
  text-align: center;
}
.button-wrapper .mu-button {
  margin: 8px;
}
</style>
