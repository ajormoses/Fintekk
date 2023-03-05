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
  },
};
</script>

<template>
  <div class="fixed w-full shadow-[2px_2px_8px_0px_#2E5CFF1A]">
    <div class="container flex justify-between item-center py-5">
      <h1 class="text-[#2E5CFF] font-semibold text-[21px]">Fintekk</h1>
      <img @click="toggle" src="../assets/img/hamburger.svg" alt="hamburger" />
    </div>
  </div>
  <div
    class="nav container bg-[#5BCDF0] text-center py-2 rounded-lg"
    v-if="menu === true"
  >
    <ul class="leading-[40px]">
      <li>Home</li>
      <li>About</li>
      <li>FAQs</li>
      <li>Contact Us</li>
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
  </div>
</template>

<style scoped>
.nav {
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translate(-50%, 35%);
  width: 100%;
}

ul li {
  font-size: 18px;
  color: #fff;
}

ul li:hover {
  background: #fff;
  color: #2e5cff;
}

/* button {
  padding: 5px 24px;
  border-radius: 16px;
  gap: 10;
  font-size: 18px;
} */
</style>
