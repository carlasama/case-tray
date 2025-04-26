<template>
  <FancyBackground>
    <h1
      class="text-6xl font-bold mb-8 text-white tracking-wide animate-bounce flex gap-4"
      style="font-family: 'Fredoka', sans-serif"
    >
      <span>🧠</span>
      <span class="text-purple-400">Jogo</span>
      <span class="text-fuchsia-400">da</span>
      <span class="text-pink-400">Memória</span>
    </h1>

    <button
      @click="loginWithGoogle"
      class="relative z-10 flex items-center justify-center bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl mb-12 group gap-4 cursor-pointer"
    >
      <img
        src="../assets/icons/google-icon.svg"
        alt="Logo do Google"
        width="30"
      />
      <span class="text-base">Entrar com Google</span>
    </button>

    <div class="absolute bottom-8 text-white/70 text-sm animate-pulse">
      Clique no botão para começar a jogar!
    </div>
  </FancyBackground>
</template>

<script setup lang="ts">
import FancyBackground from "@/components/atoms/FancyBackground.vue";

function loginWithGoogle() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;

  const scope = "profile email";
  const responseType = "token";

  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

  window.location.href = url;
}
</script>

<style scoped></style>
