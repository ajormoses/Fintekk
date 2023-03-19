<template>
  <div class="py-8 lg:py-12 bg-[#FBFBFB] relative">
    <div
      class="slider opacity-[0.5] m-auto overflow-hidden relative max-w-[1500px]"
    >
      <!-- <div class=""> -->
      <div class="slide-track gap-4">
        <div class="slide" v-for="image in images" :key="image">
          <img :src="image" alt="slide 01" />
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
const images: string[] = [
  "/img/slide1.svg",
  "/img/slide2.svg",
  "/img/slide3.svg",
  "/img/slide4.svg",
  "/img/slide5.svg",
  "/img/slide1.svg",
  "/img/slide2.svg",
  "/img/slide3.svg",
  "/img/slide4.svg",
  "/img/slide5.svg",
];
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-270px * 5));
  }
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  animation: scroll 20s linear infinite;
  display: flex;
  width: calc(270px * 10);
}
.slider .slide {
  width: 270px;
  /* height: 395px; */
  /* height: 380px; */
  /* height: 100px; */
}
</style>
