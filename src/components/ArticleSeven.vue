<script lang="ts" setup></script>

<template>
  <div class="section bg-white">
    <div class="container">
      <div
        class="bg-[#2E5CFF] rounded-[1.5rem] lg:rounded-[2rem] px-6 py-10 lg:py-20"
      >
        <div class="lg:w-[500px] lg:m-auto lg:text-center">
          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1400"
            class="text-[38px] lg:text-[50px] lg:leading-[60px] lg:px-[3.6rem] leading-[46.1px] font-bold text-white"
          >
            Start growing your wealth today
          </h1>
          <form
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1500"
            @submit.prevent
            class="lg:border lg:border-white lg:rounded-[2rem] lg:flex lg:justify-between lg:items-center lg:pl-6 lg:mt-6"
          >
            <input
              class="h-[51px] lg:h-[64px] bg-transparent border border-white lg:border-transparent rounded-[1rem] lg:rounded-[2rem] w-full my-5 lg:my-0 px-5 lg:px-0 text-white placeholder-white"
              placeholder="Enter your email address"
            />
            <button
              class="text-[#172E80] lg:text-[#3A3A3A] leading-[19.4px] py-[16px] lg:py-0 px-[32px] lg:px-0 lg:h-[62px] lg:rounded-[2rem] lg:w-[145px] text-base lg:text-[21px] rounded-[1rem] block bg-white font-medium"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
