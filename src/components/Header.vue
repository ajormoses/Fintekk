<script lang="ts">
export default {
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    toggle() {
      this.menu = !this.menu;
    },
    top() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    topMobile() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<template>
  <div class="fixed w-full bg-[#fff] shadow-[2px_2px_8px_0px_#2E5CFF1A] z-30">
    <div class="container flex justify-between item-center py-5 lg:hidden">
      <h1 class="text-[#2E5CFF] font-semibold text-[21px]">Fintekk</h1>
      <img @click="toggle" src="/img/hamburger.svg" alt="hamburger" />
    </div>
    <nav
      data-aos="fade-right"
      class="nav container bg-[#5BCDF0] text-center py-2 rounded-lg z-30 lg:hidden"
      v-if="menu === true"
    >
      <ul class="leading-[40px]">
        <a @click="topMobile" href="#home"><li>Home</li></a>
        <a href="#about"><li>About</li></a>
        <a href="#faq"><li>FAQs</li></a>
        <a href="#contact"><li>Contact Us</li></a>
      </ul>
      <button
        class="text-[#2E5CFF] border border-[#2E5CFF] bg-[#fff] mt-[15px] btn"
      >
        Login
      </button>
      <br />
      <button class="bg-[#2E5CFF] text-white my-[15px] btn">
        Sign Up for Free
      </button>
    </nav>
    <div
      class="hidden container py-4 xl:py-6 lg:flex justify-between items-center"
    >
      <h1 class="text-[#2E5CFF] font-semibold text-[28px]">Fintekk</h1>
      <div class="flex items-center justify-between text-[#171717]">
        <a @click="top" href="#home"
          ><p class="mx-8 text-[18px] xl:text-[24px] leading-[29px]">Home</p></a
        >
        <a href="#about"
          ><p class="mx-8 text-[18px] xl:text-[24px] leading-[29px]">
            About
          </p></a
        >
        <a href="#faq"
          ><p class="mx-8 text-[18px] xl:text-[24px] leading-[29px]">FAQs</p></a
        >
        <a href="#contact"
          ><p class="mx-8 text-[18px] xl:text-[24px] leading-[29px]">
            Contact Us
          </p></a
        >
      </div>
      <div>
        <button
          class="text-[#2E5CFF] xl:text-[21px] border border-[#2E5CFF] bg-[#fff] py-[10px] px-[20px] rounded-xl"
        >
          Login
        </button>
        <button
          class="bg-[#2E5CFF] xl:text-[21px] text-white ml-4 py-[10px] px-[20px] rounded-xl"
        >
          Sign Up for Free
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav {
  position: absolute;
  top: 72px;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateY(-50%);
}
ul li {
  font-size: 18px;
  color: #fff;
}
ul li:hover {
  background: #fff;
  color: #2e5cff;
}
</style>
