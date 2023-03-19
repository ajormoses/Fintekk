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
    <div class="container text-center lg:grid lg:grid-cols-2 lg:items-center">
      <div class="py-16">
        <h1 class="text-[38px] leading-[56px] font-bold text-[#172E80]">
          Pay, Invest, Save your Cash with a single bank
        </h1>
        <p class="font-light text-base leading-[30px] text-[#777777] py-4">
          Fintekk is the bank that does it all. Manage everything directly and
          easy with fintekk.
        </p>
        <div class="flex flex-col justify-center items-center">
          <button
            class="btn bg-[#2E5CFF] text-[#fff] py-[16px] px-[24px] w-[200px] mb-4"
          >
            Sign Up for Free
          </button>
          <button
            class="btn p-[14px] w-[200px] bg-[#fff] rounded-2xl border border-[#3a3a3a] my-4 flex justify-center items-center"
          >
            <img class="mr-3" src="/img/apple.svg" alt="apple" />
            Get on iphone
          </button>
          <button
            class="btn p-[14px] w-[200px] bg-[#fff] rounded-2xl border border-[#3a3a3a] flex justify-center items-center"
          >
            <img class="mr-3" src="/img/andriod.svg" alt="Andriod" />
            Get on Andriod
          </button>
        </div>
      </div>
      <img class="mx-auto lg:w-[90%]" src="/img/img-1.svg" alt="img one" />
    </div>
  </div>
</template>

<style scoped></style>
