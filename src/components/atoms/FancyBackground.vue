<template>
    <div
      class="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 flex flex-col items-center justify-center p-4 overflow-hidden relative"
    >
      <div class="absolute opacity-20">
        <div
          v-for="i in 8"
          :key="i"
          class="absolute w-16 h-16 bg-white rounded-lg shadow-lg"
          :style="getCardStyle(i)"
        ></div>
      </div>
  
      <slot />
  
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          v-for="i in 15"
          :key="'particle-' + i"
          class="absolute rounded-full bg-white/10"
          :style="getParticleStyle(i)"
        ></div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  function getCardStyle(index: number) {
    return {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      transform: `rotate(${Math.random() * 360}deg)`,
      animationDelay: `${index * 0.2}s`,
    };
  }
  
  function getParticleStyle(index: number) {
    return {
      width: `${Math.random() * 10 + 5}px`,
      height: `${Math.random() * 10 + 5}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${index * 0.3}s`
    };
  }
  </script>
  
  <style scoped>
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  </style>
  