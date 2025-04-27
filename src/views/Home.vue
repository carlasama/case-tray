<template>
  <FancyBackground>
    <div class="flex flex-col items-center justify-center z-10 relative gap-4">
      <GameTitle />

      <BaseButton color="secondary" size="md" class="flex items-center gap-2" @click="openAboutModal">
        <span>❓</span> Como jogar
      </BaseButton>

      <BaseButton v-if="!gameStore.isGameStarted" color="primary" size="md" @click="startGame">
        Começar Jogo
      </BaseButton>

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
import { useGameLogic } from "@/composables/useGameLogic";
import FancyBackground from "@/components/atoms/FancyBackground.vue";
import MemoryBoard from "@/components/organisms/MemoryBoard.vue";
import GameSummaryModal from "@/components/molecules/GameSummaryModal.vue";
import AboutModal from "@/components/molecules/AboutModal.vue";
import BaseButton from "@/components/atoms/BaseButton.vue";
import GameTitle from "@/components/atoms/GameTitle.vue";

const {
  gameStore,
  showModal,
  boardRef,
  restartGame,
  handleGameFinished,
  startGame,
  openAboutModal
} = useGameLogic();
</script>
