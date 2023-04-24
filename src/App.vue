<template>
  <div class="page w-full">
    <div class="title text-white bg-sky-600 w-100 text-center py-1">AppTitle...</div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "App"
  }

</script>

<style>
#app {
  @apply antialiased flex flex-col items-center;
}
</style>
