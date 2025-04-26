<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-xl shadow-xl w-80 text-center">
      <h2 class="text-2xl font-bold mb-4">🏆 Fim de Jogo!</h2>
      <p class="text-lg">
        ⏱️ Tempo: <strong>{{ time }}s</strong>
      </p>
      <p class="text-lg">
        🎯 Tentativas: <strong>{{ attempts }}</strong>
      </p>
      <button
        class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        @click="$emit('restart')"
      >
        Jogar Novamente
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  time: number;
  attempts: number;
}>();

defineEmits(["restart"]);
</script>
