<template>
    <div id="content">
    <div id="janeShop">
<bbb></bbb>
    <ccc></ccc>
        <ddd></ddd>
        <aaa></aaa>
    </div>
    </div>
</template>
<script>
 import jnBrand from './jnBrand.vue'
 import jnCatalog from './jnCatalog.vue'
 import jnImageroll from './jnImageroll.vue'
 import jnNotice    from './jnNotice.vue'
    export default{
     components:{
         'aaa':jnBrand,
         'bbb':jnCatalog,
         'ccc':jnImageroll,
         'ddd':jnNotice
     }

    }

</script>