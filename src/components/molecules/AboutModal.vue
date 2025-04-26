<template>
  <div
    class="fixed inset-0 bg-opacity-50 flex justify-center items-center"
    @click.self="closeModal"
  >
    <div
      class="max-w-xl mx-auto mt-10 p-8 bg-white shadow-xl rounded-3xl text-center transform transition-all duration-300"
    >
      <p class="text-lg mb-4 text-gray-700">
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
        <button
          @click="startGameAndClose"
          class="bg-gradient-to-r from-pink-400 to-purple-500 text-base text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
        >
          Jogar Agora
        </button>

        <button
          @click="closeModal"
          class="bg-white hover:bg-gray-50 text-base text-gray-800 font-bold py-4 px-8 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-300 flex items-center gap-2 cursor-pointer"
        >
          Fechar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close', 'start']);

function closeModal() {
  emit('close');
}

function startGameAndClose() {
  emit('start');
  closeModal();
}
</script>