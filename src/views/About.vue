<template>
  <div
    class="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded-xl text-center"
  >
    <h1 class="text-2xl font-bold mb-4">🧠 Sobre o Jogo da Memória</h1>
    <p class="text-lg mb-2">
      Combine pares de cartas o mais rápido possível! Cada vez que virar duas
      cartas, conte como uma tentativa.
    </p>
    <ul class="text-left list-disc list-inside mb-4">
      <li>O jogo começa com todas as cartas viradas.</li>
      <li>Você pode virar 2 cartas por vez.</li>
      <li>Se forem iguais, permanecem viradas.</li>
      <li>Se forem diferentes, elas viram de volta após 1 segundo.</li>
      <li>Quando todos os pares forem encontrados, o jogo termina.</li>
    </ul>
    <router-link
      to="/"
      class="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Jogar Agora
    </router-link>
  </div>
</template>
