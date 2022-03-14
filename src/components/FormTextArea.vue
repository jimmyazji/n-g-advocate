<template>
  <textarea
    class="bg-neutral-800 px-4 py-4 focus:outline-none border-2 border-transparent ring-1 ring-transparent hover:placeholder-neutral-300 hover:ring-gold-600 focus:placeholder-neutral-300 focus:border-gold-600 focus:pl-6 focus:ring-transparent transition-padding duration-150 resize-none"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    ref="input"
  />
</template>

<script>
export default {
  props: ["modelValue"],

  emits: ["update:modelValue"],

  methods: {
    focus() {
      this.$refs.input.focus();
    },
  },
};
</script>
