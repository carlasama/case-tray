<template>
  <FancyBackground>
    <div class="flex flex-col items-center justify-center z-10 relative gap-4">
      <h1 class="text-6xl font-bold mb-8 text-white tracking-wide animate-bounce flex gap-4" style="font-family: 'Fredoka', sans-serif;">
        <span>🧠</span>
        <span class="text-purple-400">Jogo</span>
        <span class="text-fuchsia-400">da</span>
        <span class="text-pink-400 ">Memória</span>
      </h1>

      <button
        @click="openAboutModal"
        class="bg-white hover:bg-gray-50 text-base text-gray-800 font-bold py-4 px-8 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-300 flex items-center gap-2 cursor-pointer"
      >
        <span>❓</span> Como jogar
      </button>

      <button
        v-if="!gameStore.isGameStarted"
        @click="startGame"
        class="bg-gradient-to-r from-pink-400 to-purple-500 text-base text-white font-bold py-4 px-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
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

      <AboutModal 
        v-if="showModal" 
        @close="showModal = false" 
        @start="startGame" 
      />
    </div>
  </FancyBackground>
</template>


<script setup lang="ts">
import { useGameStore } from "@/stores/gameStore"; // Importando o store
import FancyBackground from "@/components/atoms/FancyBackground.vue";
import MemoryBoard from "@/components/organisms/MemoryBoard.vue";
import GameSummaryModal from "@/components/molecules/GameSummaryModal.vue";
import AboutModal from "@/components/molecules/AboutModal.vue"; 
import { ref } from "vue";

const gameStore = useGameStore(); // Usando o store
const showModal = ref(false);
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

function openAboutModal() {
  showModal.value = true;
}
</script>
