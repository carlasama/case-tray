<template>
    <div
      class="card"
      :class="{ 'flipped': isFlipped }"
      @click="flipCard"
    >
      <img v-if="isFlipped" :src="card.imageUrl" alt="Card Image" class="card-image" />
      <div v-else class="card-back"></div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  import { defineProps, defineEmits } from "vue";
  
  interface Card {
    id: number;
    imageUrl: string;
  }
  
  const props = defineProps({
    card: {
      type: Object as () => Card,
      required: true,
    },
    isFlipped: {
      type: Boolean,
      required: true,
    },
  });
  
  const emit = defineEmits(["flip"]);
  
  function flipCard() {
    emit("flip");
  }
  </script>
  
  <style scoped>
  .card {
    width: 100px;
    height: 100px;
    background-color: #fff;
    border-radius: 8px;
    position: relative;
    cursor: pointer;
  }
  
  .card.flipped .card-back {
    display: none;
  }
  
  .card.flipped .card-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .card-back {
    background-color: #ddd;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  
  .card-image {
    display: none;
  }
  </style>
  