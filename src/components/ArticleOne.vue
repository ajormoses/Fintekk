<script lang="ts">
export default {
  data() {
    return {};
  },

  methods: {},
};
</script>

<template>
  <div class="section md:h-[100vh]">
    <div
      class="container text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-4 lg:items-center lg:pt-16"
    >
      <div class="py-16 lg:py-0">
        <h1
          data-aos="fade-up"
          data-aos-duration="1300"
          class="text-[38px] lg:text-[50px] xl:text-[67px] leading-[50px] lg:leading-[60px] xl:leading-[85px] font-bold text-[#172E80]"
        >
          Pay, Invest, Save your Cash with a single bank
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1300"
          class="font-light text-base lg:text-[18px] xl:text-[24px] leading-[30px] lg:leading-[34px] text-[#777777] py-4"
        >
          Fintekk is the bank that does it all. Manage everything directly and
          easy with fintekk.
        </p>
        <div class="flex flex-col justify-center items-center lg:items-start">
          <button
            data-aos="fade-up"
            data-aos-duration="1500"
            class="btn bg-[#2E5CFF] text-[#fff] py-[16px] px-[24px] w-[200px] lg:w-[180px] mb-4"
          >
            Sign Up for Free
          </button>
          <div data-aos="fade-up" data-aos-duration="2000" class="lg:flex">
            <button
              class="p-[14px] lg:p-[10px] w-[200px] lg:w-[170px] bg-[#fff] rounded-2xl border border-[#3a3a3a] my-4 lg:my-0 flex justify-center items-center"
            >
              <img class="mr-3" src="/img/apple.svg" alt="apple" />
              Get on iphone
            </button>
            <button
              class="p-[14px] lg:p-[10px] w-[200px] lg:w-[170px] bg-[#fff] rounded-2xl border border-[#3a3a3a] flex justify-center items-center lg:order-first lg:mr-4"
            >
              <img class="mr-3" src="/img/andriod.svg" alt="Andriod" />
              Get on Andriod
            </button>
          </div>
        </div>
      </div>
      <img
        class="mx-auto lg:w-[75%] xl:w-[90%]"
        src="/img/img-1.svg"
        alt="img one"
      />
    </div>
  </div>
</template>

<style scoped></style>
