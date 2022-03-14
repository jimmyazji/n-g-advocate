<template>
  <div v-cloak>
    <span
      id="pagetop"
      class="fixed right-4 bottom-16 shadow-gold-800 border-2 border-gold-500 text-gold-500 flex justify-center items-center bg-neutral-900 hover:bg-neutral-800 active:-translate-y-2 transform transition h-16 w-16 z-50"
      v-show="scY > 300"
      @click.prevent="toTop"
    >
      <i class="fa fa-angle-up"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
