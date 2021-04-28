<template>
  <div class="container px-2 w-full relative">
    <div class="top-40 z-50 bg-white">
      <h1 class="text-blue-900 text-lg font-bold mt-5">{{ title }}</h1>
    </div>
    <div
      style="scrollbar: none"
      class="py-2 grid px-1 overflow-x-scroll grid-flow-col gap-4 no-scrollbar"
    >
      <PlaceComponent
        v-for="place in places"
        :key="place.id"
        :data="place"
        @click="openDetail($event, place)"
      />
    </div>
  </div>
</template>

<script>
import PlaceComponent from "../components/PlaceComponent";
import axios from "axios";

export default {
  props: ["places", "title"],
  components: {
    PlaceComponent,
  },
  methods: {
    async openDetail(event, place) {
      await axios.get(`http://192.168.1.67:3333/api/places/${place._id}`, {
        headers: { "auth-token": this.$store.getters.auth },
      });
    },
  },
};
</script>

<style>
</style>