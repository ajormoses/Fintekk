<script lang="ts" setup>
const props = defineProps(["sn", "title", "content", "bord"]);
</script>

<template>
  <div class="flex relative h-[120px] lg:h-[180px] mb-5 lg:mb-8">
    <h1
      class="mr-5 text-[21px] lg:text-[24px] text-[#2E5CFF] font-bold leading-[25.5px] lg:leading-[40px]"
    >
      {{ sn }}
    </h1>
    <div>
      <h1
        class="leading-[25.5px] font-bold text-[21px] lg:text-[24px] lg:leading-[40px] text-[#172E80]"
      >
        {{ title }}
      </h1>
      <p
        class="text-[18px] lg:text-[24px] leading-[32px] lg:leading-[40px] text-[#777777] pt-[0.9rem] pb-5"
      >
        {{ content }}
      </p>
    </div>
    <div
      class="absolute left-3 bottom-0 h-[70px] lg:h-[130px]"
      :class="bord"
    ></div>
  </div>
</template>

<style scoped></style>
