<template>
  <FancyBackground>
    <div class="flex flex-col items-center justify-center z-10 relative">
      <h1 class="text-6xl font-bold mb-8 text-white tracking-wide animate-bounce">
        <span class="text-yellow-300">Jogo</span>
        <span class="text-blue-300">da</span>
        <span class="text-green-300">Memória</span>
      </h1>

      <button
        v-if="!gameStore.isGameStarted"
        @click="startGame"
        class="bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        Começar Jogo
      </button>

      <MemoryBoard
        v-if="gameStore.isGameStarted"
        @game-finished="handleGameFinished"
        ref="boardRef"
      />

      <GameSummaryModal
        v-if="gameStore.gameFinished"
        :time="gameStore.timeElapsed"
        :attempts="gameStore.attempts"
        @restart="restartGame"
      />
    </div>
  </FancyBackground>
</template>


<script setup lang="ts">
import { useGameStore } from "@/stores/gameStore"; // Importando o store
import FancyBackground from "@/components/atoms/FancyBackground.vue";
import MemoryBoard from "@/components/organisms/MemoryBoard.vue";
import GameSummaryModal from "@/components/molecules/GameSummaryModal.vue";
import { ref } from "vue";

const gameStore = useGameStore(); // Usando o store

const boardRef = ref(null); // Ref do board

function restartGame() {
  gameStore.restartGame(); // Usando a action do store
  if (boardRef.value && typeof boardRef.value.resetGame === 'function') {
    boardRef.value.resetGame(); // Chama o método resetGame no MemoryBoard
  } else {
    console.error('O método resetGame não foi encontrado no MemoryBoard.');
  }
}

function handleGameFinished(data: { time: number; attempts: number }) {
  gameStore.finishGame(data.time, data.attempts); // Atualiza o store com o resumo
}

function startGame() {
  gameStore.startGame(); // Inicia o jogo através do store
}
</script>
