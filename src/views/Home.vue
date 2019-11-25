<template>
  <div class="home">
    <img src="../../public/images/logo1.png" alt="微佛道场" title="logo" class="logo">
      
    <div class="duilianbox"> 
      <div class="duilian duilian1 fl">
          <img src="../../public/images/duilian1.png" alt="微佛道场" title="logo">
      </div>
      <div class="duilian duilian2 fr">
          <img src="../../public/images/duilian2.png" alt="微佛道场" title="logo">
      </div>
    </div>
    <Xing  />
  </div> 
</template>

<script>
// @ is an alias to /src
import Xing from "@/components/Xinglogo.vue";

export default {
  name: "home",
  components: {
    Xing
  }
};
</script>
