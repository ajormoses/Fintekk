<script lang="ts" setup>
import Steps from "./Reusuable/Steps.vue";
</script>

<template>
  <div class="section bg-white">
    <div class="container lg:grid lg:grid-cols-2 lg:items-center">
      <img
        data-aos="zoom-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1300"
        class="mx-auto lg:m-0 lg:w-[80%] xl:w-[90%] lg:h-[760px]"
        src="/img/iphone.svg"
      />
      <div>
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          class="text-[28px] lg:text-[35px] xl:text-[40px] lg:px-0 text-[#172E80] leading-[44px] lg:leading-[60px] xl:leading-[72px] font-bold py-16 lg:py-10 px-6 text-center lg:text-left"
        >
          Start the journey to reach your financial goals today.
        </h1>
        <div>
          <Steps
            sn="01"
            title="Download the mobile app"
            content="Sign up for an account with your name, email and phone number."
            bord="border border-[#2E5CFF]"
          />
          <Steps
            sn="02"
            title="Create a free account"
            content="Sign up for an account with your name, email and phone number."
            bord="border border-[#2E5CFF]"
          />
          <Steps
            sn="03"
            title="Add a payment method"
            content="Using your debit card, bank account, QR code, perform your first transaction."
          />
          <div class="text-center mt-16 lg:mt-5">
            <button
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2100"
              class="text-white py-[16px] px-[24px] bg-[#2E5CFF] rounded-[16px] lg:hidden"
            >
              Try Fintekk Now
            </button>
            <button
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2100"
              class="text-white py-[16px] px-[24px] bg-[#2E5CFF] rounded-[16px] hidden lg:inline-block"
            >
              Download Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
