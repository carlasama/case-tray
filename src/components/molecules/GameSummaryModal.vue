<template>
  <BaseModal
    :show="true"
    @close="$emit('close')"
    containerClass="max-w-2xl mx-auto mt-16 p-10 bg-white shadow-xl rounded-3xl text-center"
  >
    <h2 class="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
      Fim de Jogo!
    </h2>
    <p class="text-lg mb-2 text-gray-700">
      <span class="inline-flex items-center gap-1"
        ><ClockIcon class="w-6 h-6 text-purple-500" />
        <strong>{{ time }}s</strong></span
      >
    </p>
    <p class="text-lg mb-6 text-gray-700">
      <span class="inline-flex items-center gap-1">
        <BoltIcon class="w-6 h-6 text-purple-500" />
        <strong>{{ attempts }}</strong> tentativas</span
      >
    </p>
    <div class="flex justify-center gap-4 mt-6">
      <BaseButton color="primary" size="md" @click="$emit('restart')"
        >Jogar Novamente</BaseButton
      >
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from "@/components/atoms/BaseModal.vue";
import BaseButton from "@/components/atoms/BaseButton.vue";
import BoltIcon from "@/components/atoms/icons/BoltIcon.vue";
import ClockIcon from "@/components/atoms/icons/ClockIcon.vue";
import SparkleIcon from "@/components/atoms/icons/SparkleIcon.vue";

defineProps<{
  time: number;
  attempts: number;
}>();

defineEmits(["restart", "close"]);
</script>
