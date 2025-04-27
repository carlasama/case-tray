import { ref, onMounted } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useMemoryBoardStore } from '@/stores/memoryBoardStore';

const apiUrl =
  'https://api.unsplash.com/photos/random?count=8&client_id=Ps3IRy4t2PrmzqNhd-Vr1x9Uv37TDSBRzI37hUVSKfs';

export function useMemoryBoard(emit?: (e: string, data: any) => void) {
  const memoryBoardStore = useMemoryBoardStore();
  const timerRef = ref<number | null>(null);

  async function fetchImages() {
    try {
      const response = await axios.get(apiUrl);
      const cards = response.data.map((image: any) => ({
        id: uuidv4(),
        imageUrl: image.urls.small,
      }));
      shuffleCards(cards);
    } catch (error) {
      console.error('Erro ao buscar imagens da API:', error);
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
    if (timerRef.value) {
      clearInterval(timerRef.value);
    }
    timerRef.value = setInterval(() => {
      memoryBoardStore.timeElapsed++;
    }, 1000) as unknown as number;
  }

  function stopTimer() {
    if (timerRef.value) {
      clearInterval(timerRef.value);
      timerRef.value = null;
    }
  }

  function resetGame() {
    stopTimer();
    memoryBoardStore.timeElapsed = 0;
    memoryBoardStore.attempts = 0;
    memoryBoardStore.flippedCards = [];
    memoryBoardStore.matchedCards = [];
    memoryBoardStore.gameStarted = false;
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
          stopTimer();
          if (emit) {
            emit('game-finished', {
              time: memoryBoardStore.timeElapsed,
              attempts: memoryBoardStore.attempts,
            });
          }
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

  return {
    memoryBoardStore,
    fetchImages,
    shuffleCards,
    startTimer,
    stopTimer,
    resetGame,
    flipCard,
  };
}
