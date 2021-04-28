<template>
  <div class="w-48 h-80 shadow rounded flex flex-col">
    <div
      class="rounded-t w-full h-32"
      :style="{
        backgroundImage: 'url(' + data.image + ')',
        backgroundSize: 'cover',
      }"
      alt=""
    />
    <div class="p-2">
      <div class="h-20 flex flex-col">
        <span class="text-blue-900 font-bold h-15 min-h-15">{{ data.name }}</span>
        <span class="text-blue-300 font-extralight text-xs">{{getAddress(data.address)}}</span>
      </div>

      <Rating class="mt-5 mb-3" :stars="Math.round(data.rating)" />
      <Distance class="mt-2" :distance="data.distance" />
    </div>
  </div>
</template>

<script>
import Rating from "./place/Rating";
import Distance from "./place/Distance";
export default {
  components: { Rating, Distance },
  props: ["data"],
  methods: {
    getAddress: (address) => {
      let addressString = "";
      if(address.street) {
        addressString += address.street
        if(address.number) {
          addressString += " " + address.number + ", "
        } else {
          addressString += ", "
        }
      }
      if(address.postal_code) {
        addressString += address.postal_code + " "
      }
      if(address.city) {
        addressString +=  address.city
      }

      return addressString;
    }
  }
};
</script>

<style>
</style>