<template>
  <BaseModal :show="true" @close="closeModal" containerClass="max-w-xl mx-auto mt-10 p-8 rounded-3xl text-center">
    <p class="text-lg mb-4 text-gray-700 font-medium">
      Combine pares de cartas o mais rápido possível! Cada vez que virar duas
      cartas, conta como uma tentativa.
    </p>
    <ul class="text-left list-disc list-inside mb-6 text-gray-700">
      <li>O jogo começa com todas as cartas viradas.</li>
      <li>Você pode virar 2 cartas por vez.</li>
      <li>Se forem iguais, permanecem viradas.</li>
      <li>Se forem diferentes, elas viram de volta após 1 segundo.</li>
      <li>Quando todos os pares forem encontrados, o jogo termina.</li>
    </ul>
    <div class="flex justify-center gap-4 mt-6">
      <BaseButton color="primary" @click="startGameAndClose">Jogar Agora</BaseButton>
      <BaseButton color="secondary" @click="closeModal">Fechar</BaseButton>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '@/components/atoms/BaseModal.vue';
import BaseButton from '@/components/atoms/BaseButton.vue';
const emit = defineEmits(['close', 'start']);

function closeModal() {
  emit('close');
}

function startGameAndClose() {
  emit('start');
  closeModal();
}
</script>