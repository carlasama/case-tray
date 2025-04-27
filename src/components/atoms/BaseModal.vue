<template>
  <div v-if="show" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50" @click.self="onClose">
    <div
      class="bg-white p-6 rounded-xl shadow-xl max-w-full w-auto text-center relative"
      :class="containerClass"
      @keydown.esc="onClose"
      tabindex="0"
    >
      <slot />
      <button v-if="showClose" @click="onClose" class="absolute top-4 right-4">
        <slot name="close">
          <span class="text-xl cursor-pointer">&times;</span>
        </slot>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  show: { type: Boolean, required: true },
  showClose: { type: Boolean, default: true },
  containerClass: { type: String, default: '' }
});
const emit = defineEmits(['close']);
function onClose() {
  emit('close');
}
</script>

<style scoped>
:focus {
  outline: none;
}
</style>
