<template>
    <div class="home">
        <rank />
    </div>
</template>

<script>
// @ is an alias to /src
import rank from "@/components/rank.vue";

export default {
  name: "Home",
  components: {
        rank
  }
};
</script>