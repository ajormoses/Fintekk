<script lang="ts" setup>
const props = defineProps(["h", "p", "url", "bg"]);
</script>

<template>
  <div class="mb-8 rounded-[1.5rem] p-5 lg:p-8" :class="bg">
    <h1
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1300"
      class="text-[28px] leading-[34px] text-[#172E80] font-bold"
    >
      <!-- Easy Payment -->
      {{ h }}
    </h1>
    <p
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
      class="leading-[30px] text-base text-[#777777] py-3"
    >
      {{ p }}
    </p>
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1800"
      class="flex items-center"
    >
      <p class="mr-2 text-[18px] leading-[22px] text-[#2E5CFF] font-bold">
        Read More
      </p>
      <img class="mt-[0.6px]" src="/img/arrow-right-short.svg" />
    </div>
    <img
      id="about"
      data-aos="zoom-in"
      data-aos-duration="2000"
      class="mx-auto mt-5"
      :src="`/img/${url}`"
    />
  </div>
</template>

<style scoped></style>
