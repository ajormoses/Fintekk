<script lang="ts" setup>
const props = defineProps(["sn", "title", "content"]);
</script>

<template>
  <div class="flex relative h-[120px] mb-5">
    <h1 class="mr-5 text-[21px] text-[#2E5CFF] font-bold leading-[25.5px]">
      {{ sn }}
    </h1>
    <div>
      <h1 class="leading-[25.5px] font-bold text-[21px] text-[#172E80]">
        {{ title }}
      </h1>
      <p class="text-[18px] leading-[32px] text-[#777777] pt-[0.9rem] pb-5">
        {{ content }}
      </p>
    </div>
    <div
      class="absolute left-3 bottom-0 h-[70px] border border-[#2E5CFF]"
    ></div>
  </div>
</template>

<style scoped></style>
