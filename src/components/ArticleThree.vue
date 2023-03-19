<script setup lang="ts">
import Service from "../components/Reusuable/Service.vue";
</script>

<template>
  <div class="bg-[#FBFBFB] section">
    <div class="container">
      <div class="text-center lg:w-[720px] lg:m-auto">
        <p
          class="text-base lg:text-[24px] leading-[19.41px] lg:leading-[29px] text-[#3A3A3A]"
        >
          OUR SERVICES
        </p>
        <h1
          class="leading-[46px] lg:leading-[60.6px] font-bold text-[38px] lg:text-[50px] text-[#172E80] pb-3"
        >
          What we offer
        </h1>
        <p
          class="text-base lg:text-[20px] leading-[30px] lg:leading-[32px] text-[#777777]"
        >
          We help individuals become more flexible and responsible with their
          finances and handle payments smooth and easy.
        </p>
      </div>
      <div class="pt-10 lg:pt-20 lg:grid lg:grid-cols-3 lg:gap-8">
        <Service
          h="Easy Payment"
          p="Stress-free payment for all transactions that you do at any time."
          url="service1.svg"
          bg="bg-[#F4F6FF]"
        />
        <Service
          h="Investments"
          p="Grow your money by investing in pre-vetted investment opportunities."
          url="service2.svg"
          bg="bg-[#FEF7F1]"
        />
        <Service
          h="Fixed Savings"
          p="Build a dedicated savings faster on your terms automatically or manually."
          url="service3.svg"
          bg="bg-[#F4F6FF]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
