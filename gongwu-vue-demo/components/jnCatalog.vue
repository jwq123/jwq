<template>
    <div id="jnCatalog">
        <h2 title="kinds" ><router-link to="/brand">{{kinds}}</router-link></h2>
        <router-view></router-view>
    </div>
</template>
<script>
   export default{
       data(){
           return{kinds:'分类'}
       }
   }
</script>