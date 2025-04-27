<template>
  <BaseModal :show="true" @close="$emit('close')" containerClass="max-w-xl mx-auto mt-10 p-8 bg-white shadow-xl rounded-3xl text-center">
    <h2 class="text-3xl font-bold mb-4">🏆 Fim de Jogo!</h2>
    <p class="text-lg mb-2 text-gray-700">
      <span class="inline-flex items-center gap-1">⏱️ <strong>{{ time }}s</strong></span>
    </p>
    <p class="text-lg mb-6 text-gray-700">
      <span class="inline-flex items-center gap-1">🎯 <strong>{{ attempts }}</strong> tentativas</span>
    </p>
    <div class="flex justify-center gap-4 mt-6">
      <BaseButton color="primary" size="md" @click="$emit('restart')">Jogar Novamente</BaseButton>
      <BaseButton color="secondary" size="md" @click="$emit('close')">Fechar</BaseButton>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '@/components/atoms/BaseModal.vue';
import BaseButton from '@/components/atoms/BaseButton.vue';

defineProps<{
  time: number;
  attempts: number;
}>();

defineEmits(["restart", "close"]);
</script>
