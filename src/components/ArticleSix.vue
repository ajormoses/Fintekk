<template>
  <div
    class="section bg-[#FBFBFB] lg:h-[800px] flex justify-center items-center flex-col scroll-pt-16"
    id="features"
  >
    <div class="container">
      <div class="text-center">
        <p class="text-base leading-[19.41px] text-[#3A3A3A]">TESTIMONIALS</p>
        <h1
          class="text-[38px] leading-[50px] font-semibold text-[#172E80] px-3"
        >
          What Our Customers Say About Us
        </h1>
      </div>
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="opacity-0 invisible absolute top-12 transition-all ease-linear duration-700 clear-right"
        :class="{ show: currentIndex === index + 1 }"
      >
        <div
          class="md:grid md:grid-cols-2 md:gap-4 md:place-items-center transition-all ease-in-out duration-300"
        >
          <div class="text-center">
            <p class="text-[#3A3A3A] leading-[30px] text-base">
              {{ slide.body }}
            </p>

            <h6
              class="text-[24px] text-[#172E80] leading-[29px] pt-5 font-medium"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              {{ slide.title }}
            </h6>
            <div></div>

            <div
              class="md:flex justify-start items-center md:pt-[3rem] pt-[6rem] hidden"
            >
              <p
                class="text-[18px] lg:text-[24px] font-bold leading-[28.8px] lg:leading-[38.4px] text-[#989898] pr-3.5 lg:pr-6"
              >
                <span class="text-white">0{{ currentIndex }} </span>/ 0{{
                  slides.length
                }}
              </p>
              <div class="flex justify-center items-center gap-6">
                <span
                  class="mdi mdi-arrow-left text-2xl cursor-pointer"
                  :class="[
                    currentIndex === 1 ? 'text-[#989898]' : 'text-white',
                  ]"
                  @click="slideHandler('decrease')"
                ></span>
                <span
                  class="mdi mdi-arrow-right text-2xl cursor-pointer"
                  :class="[
                    currentIndex === slides.length
                      ? 'text-[#989898]'
                      : 'text-white',
                  ]"
                  @click="slideHandler('increase')"
                ></span>
              </div>
            </div>
          </div>
          <div class="pt-[3.5rem] md:pt-[0] order-first">
            <img :src="slide.src" />
            <div class="flex justify-center items-center pt-[2.5rem] md:hidden">
              <p
                class="text-[18px] font-bold leading-[28.8px] text-[#989898] pr-3.5 lg:pr-6"
              >
                <span class="text-white">0{{ currentIndex }} </span>/ 0{{
                  slides.length
                }}
              </p>
              <div class="flex justify-center items-center gap-6">
                <span
                  class="mdi mdi-arrow-left text-2xl cursor-pointer"
                  :class="[
                    currentIndex === 1 ? 'text-[#989898]' : 'text-white',
                  ]"
                  @click="slideHandler('decrease')"
                ></span>
                <span
                  class="mdi mdi-arrow-right text-2xl cursor-pointer"
                  :class="[
                    currentIndex === slides.length
                      ? 'text-[#989898]'
                      : 'text-white',
                  ]"
                  @click="slideHandler('increase')"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const slides: {
  title: string;
  body: string;
  src: string;
  show: boolean;
}[] = [
  {
    title: "Maryam Adegoke",
    body: "Dealt with enquiries and subsequent transactions efficiently and quickly. I’m  so pleased with the pricing and service.",
    src: "/img/slider-01.svg",
    show: true,
  },
  {
    title: "Elon Musk",
    body: "Dealt with enquiries and subsequent transactions efficiently and quickly. I’m  so pleased with the pricing and service.",
    src: "/img/slider-02.svg",
    show: false,
  },
  {
    title: "Bill Gates",
    body: "Dealt with enquiries and subsequent transactions efficiently and quickly. I’m  so pleased with the pricing and service.",
    src: "/img/slider-03.svg",
    show: false,
  },
];
const currentIndex = ref<number>(1);
const slideHandler = (value: string) => {
  if (value === "increase" && currentIndex.value < slides.length)
    currentIndex.value++;
  else if (value === "decrease" && currentIndex.value === 1) currentIndex.value;
  else if (value === "decrease" && currentIndex.value <= slides.length)
    currentIndex.value--;
};
// setInterval(() => {
//   if (currentIndex.value < slides.length) currentIndex.value++
//   // else if (currentIndex.value === 1) currentIndex.value === 1
//   else if (currentIndex.value <= slides.length)
//     currentIndex.value--
// }, 3000);
</script>

<style scoped>
/* .show {
  @apply;
} */
.show {
  @apply opacity-100 visible relative !important;
}
</style>
