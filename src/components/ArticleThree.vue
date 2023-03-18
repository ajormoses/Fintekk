<script setup lang="ts">
import Service from "../components/Reusuable/Service.vue";
</script>

<template>
  <div class="bg-[#FBFBFB] section">
    <div class="container">
      <div class="text-center">
        <p class="text-base leading-[19.41px] text-[#3A3A3A]">OUR SERVICES</p>
        <h1 class="leading-[46px] font-bold text-[38px] text-[#172E80] pb-3">
          What we offer
        </h1>
        <p class="text-base leading-[30px] text-[#777777]">
          We help individuals become more flexible and responsible with their
          finances and handle payments smooth and easy.
        </p>
      </div>
      <div class="py-10">
        <Service
          h="Easy Payment"
          p="Stress-free payment for all transactions that you do at any time."
          url="../../assets/img/service1.svg"
        />
        <Service
          h="Investments"
          p="Grow your money by investing in pre-vetted investment opportunities."
          url="../../assets/img/service2.svg"
        />
        <Service
          h="Fixed Savings"
          p="Build a dedicated savings faster on your terms automatically or manually."
          url="../../assets/img/service3.svg"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
