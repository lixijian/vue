<template>
  <div id="app"  class="bg">
    <div class="zhongxin">
        <div class="navBox"  id="nav">
          <router-link to="/" class="nav nav1"></router-link>
          <router-link to="/whsm" class="nav nav2 "></router-link>
          <router-link to="/whyj" class="nav nav3 "></router-link>
          <router-link to="/xmft" class="nav nav4 "></router-link>
          <router-link to="/csrw" class="nav nav5 "></router-link>
          <router-link to="/whsy" class="nav nav6 "></router-link>
          <router-link to="/xwdt" class="nav nav7 "></router-link>
        </div>
        <router-view />
    </div>
    
    <Bgfl  />
    <Xing  />
  </div>
</template>
<script>
// @ is an alias to /src
import Xing from "@/components/Xing.vue";
import Bgfl from "@/components/Bgfl.vue";

export default {
  name: "home",
  components: {
    Xing,
    Bgfl
  }
};
</script>
<style lang="less">
</style>
