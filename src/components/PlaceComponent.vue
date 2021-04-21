<template>
  <div class="w-32 h-52 shadow rounded flex flex-col">
    <img
      class="rounded-t"
      src="https://www.zlotaproporcja.pl/wp-content/uploads/2017/04/Zamek-%C5%81apalice-0177.jpg"
      alt=""
    />
    <div class="p-2">
      <h1 class="text-blue-900 font-bold">Zamek</h1>
      <span class="text-blue-900 font-light text-xs"> tutaj będzie opis </span>
      <Rating :stars="4"/>
      <Distance :distance="30"/>
    </div>
  </div>
</template>

<script>
import Rating from "./place/Rating";
import Distance from "./place/Distance"
export default {
  components: {Rating, Distance} 
};
</script>

<style>
</style>