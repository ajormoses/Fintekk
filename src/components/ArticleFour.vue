<script lang="ts" setup>
import Steps from "./Reusuable/Steps.vue";
</script>

<template>
  <div class="section bg-white">
    <div class="container">
      <img class="mx-auto" src="/img/iphone.svg" />
      <div>
        <h1 class="text-[28px] leading-[44px] font-bold py-16 px-6 text-center">
          Start the journey to reach your financial goals today.
        </h1>
        <div>
          <Steps
            sn="01"
            title="Download the mobile app"
            content="Sign up for an account with your name, email and phone number."
          />
          <Steps
            sn="02"
            title="Create a free account"
            content="Sign up for an account with your name, email and phone number."
          />
          <Steps
            sn="03"
            title="Add a payment method"
            content="Using your debit card, bank account, QR code, perform your first transaction."
          />
          <div class="text-center mt-16">
            <button
              class="text-white py-[16px] px-[24px] bg-[#2E5CFF] rounded-[16px]"
            >
              Try Fintekk Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
