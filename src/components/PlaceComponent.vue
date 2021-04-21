<template>
  <div class="w-48 h-80 shadow rounded flex flex-col">
    <div
      class="rounded-t w-full h-32"
      :style="{
        backgroundImage: 'url(' + place.image + ')',
        backgroundSize: 'cover',
      }"
      alt=""
    />
    <div class="p-2">
      <div class="h-20 flex flex-col">
        <span class="text-blue-900 font-bold">{{ place.name }}</span>
        <span class="text-blue-300 font-extralight text-xs">{{getAddress(place.address)}}</span>
        <span class="text-blue-900 font-light text-sm">
          tutaj będzie opis
        </span>
      </div>

      <Rating class="mt-5 mb-3" :stars="Math.round(place.rating)" />
      <Distance class="mt-2" :distance="place.distance" />
    </div>
  </div>
</template>

<script>
import Rating from "./place/Rating";
import Distance from "./place/Distance";
export default {
  components: { Rating, Distance },
  props: ["place"],
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