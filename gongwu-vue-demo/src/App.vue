<template>
  <div>
   <hea></hea>
    <con></con>
  </div>
</template>
<script>
  import router from './router-config'
  import con from '../components/content.vue'
  import hea from  '../components/header.vue'
  export default{
      components:{
          'hea':hea,
          'con':con
      }
  }
</script>



