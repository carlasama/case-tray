<template>
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

  <div class="text-center mt-4">
    <p class="text-xl font-bold">Tentativas: {{ memoryBoardStore.attempts }}</p>
    <p class="text-xl font-bold">Tempo: {{ memoryBoardStore.timeElapsed }}s</p>
  </div>

  <div class="text-center mt-4">
    <button @click="resetGame" class="btn-reset">Reiniciar Jogo</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import MemoryCard from "@/components/molecules/MemoryCard.vue";

import { useMemoryBoardStore } from "@/stores/cardStore";

const memoryBoardStore = useMemoryBoardStore();

const apiUrl =
  "https://api.unsplash.com/photos/random?count=8&client_id=Ps3IRy4t2PrmzqNhd-Vr1x9Uv37TDSBRzI37hUVSKfs";

const emit = defineEmits<{
  (e: "game-finished", data: { time: number; attempts: number }): void;
}>();

async function fetchImages() {
  try {
    const response = await axios.get(apiUrl);
    const cards = response.data.map((image: any) => ({
      id: uuidv4(),
      imageUrl: image.urls.small,
    }));
    shuffleCards(cards);
  } catch (error) {
    console.error("Erro ao buscar imagens da API:", error);
  }
}

function shuffleCards(cards: any[]) {
  const shuffled = [...cards, ...cards];
  shuffled.sort(() => Math.random() - 0.5);
  memoryBoardStore.shuffledCards = shuffled.map((card, index) => ({
    ...card,
    uniqueKey: `${card.id}-${index}`,
  }));
}

function startTimer() {
  setInterval(() => {
    memoryBoardStore.timeElapsed++;
  }, 1000);
}

function resetGame() {
  memoryBoardStore.resetGame();
  fetchImages();
}

function flipCard(index: number) {
  memoryBoardStore.flipCard(index);
  if (!memoryBoardStore.gameStarted) {
    memoryBoardStore.startGame();
    startTimer();
  }

  if (memoryBoardStore.flippedCards.length === 2) {
    memoryBoardStore.incrementAttempts();

    const [firstIndex, secondIndex] = memoryBoardStore.flippedCards;

    if (
      memoryBoardStore.shuffledCards[firstIndex].imageUrl ===
      memoryBoardStore.shuffledCards[secondIndex].imageUrl
    ) {
      memoryBoardStore.addMatchedCards([firstIndex, secondIndex]);
      memoryBoardStore.flippedCards = [];

      if (
        memoryBoardStore.matchedCards.length ===
        memoryBoardStore.shuffledCards.length
      ) {
        emit("game-finished", {
          time: memoryBoardStore.timeElapsed,
          attempts: memoryBoardStore.attempts,
        });
      }
    } else {
      setTimeout(() => {
        memoryBoardStore.flippedCards = [];
      }, 1000);
    }
  }
}

onMounted(() => {
  fetchImages();
});
</script>
