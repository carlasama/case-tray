<template>
  <div class="flex flex-col items-center gap-6 mt-8">
    <div class="grid grid-cols-4 gap-4">
      <MemoryCard
        v-for="(card, index) in memoryBoardStore.shuffledCards"
        :key="card.uniqueKey"
        :card="card"
        @flip="flipCard(index)"
        :isFlipped="
          memoryBoardStore.flippedCards.includes(index) ||
          memoryBoardStore.matchedCards.includes(index)
        "
      />
    </div>

    <div
      class="flex items-center justify-center gap-8 bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-3xl shadow-md mt-8"
    >
      <div class="flex items-center gap-2">
        <BoltIcon class="w-6 h-6 text-purple-500" />
        <span class="text-gray-700 font-bold text-base"
          >Tentativas: {{ memoryBoardStore.attempts }}</span
        >
      </div>

      <div class="flex items-center gap-2">
        <ClockIcon class="w-6 h-6 text-purple-500" />
        <span class="text-gray-700 font-bold text-base"
          >Tempo: {{ memoryBoardStore.timeElapsed }}s</span
        >
      </div>

      <BaseButton color="primary" size="sm" class="ml-4 flex items-center gap-2" @click="resetGame">
        <ArrowPathIcon class="w-6 h-6 text-purple-200" /> Reiniciar
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import MemoryCard from '@/components/molecules/MemoryCard.vue';
import BaseButton from '@/components/atoms/BaseButton.vue';
import { useMemoryBoard } from '@/composables/useMemoryBoard';
import BoltIcon from '@/components/atoms/icons/BoltIcon.vue';
import ClockIcon from '@/components/atoms/icons/ClockIcon.vue';
import ArrowPathIcon from '@/components/atoms/icons/ArrowPathIcon.vue';

const emit = defineEmits<{
  (e: 'game-finished', data: { time: number; attempts: number }): void;
}>();

const {
  memoryBoardStore,
  resetGame,
  flipCard
} = useMemoryBoard(emit);

defineExpose({ resetGame });
</script>
