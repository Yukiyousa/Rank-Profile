<template>
<div id="app">
    <Header></Header>
    <router-view></router-view>
</div>
</template>

<script>

import Header from "@/components/header.vue";

export default {
    name: "app",
    components: {
        Header
    },
    data(){
        return{
            
        }
    }
};
</script>

<style>
*{
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;
}
</style>
