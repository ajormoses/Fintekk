<script lang="ts" setup>
import FaqInput from "../components/Reusuable/FaqInput.vue";
</script>

<template>
  <div id="faq" class="bg-[#2E5CFF] section">
    <div class="w-[90%] md:w-4/5 m-auto lg:py-8">
      <h1
        data-aos="zoom-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1300"
        class="text-white text-[38px] lg:text-[50px] xl:text-[67px] font-bold"
      >
        FAQs
      </h1>
      <div class="pt-8 lg:pt-14">
        <FaqInput
          question="Is fintekk’s security guaranteed?"
          content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint."
        />
        <FaqInput
          question="How to activate Fintekk account"
          content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint."
        />
        <FaqInput
          question="What should I do if I forget my pin?"
          content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint."
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
