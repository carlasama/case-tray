<template>
  <FancyBackground>
    <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto px-2 sm:px-0 py-8 gap-6 relative z-10">
      <GameTitle />

      <BaseButton class="flex items-center justify-center group gap-4 w-full sm:w-auto mb-8" color="secondary" size="md" @click="loginWithGoogle">
        <img
          src="../assets/icons/google-icon.svg"
          alt="Logo do Google"
          width="30"
        />
        <span class="text-base">Entrar com Google</span>
      </BaseButton>

      <div class="text-white/70 text-sm animate-pulse text-center w-full">
        Clique no botão para começar a jogar!
      </div>
    </div>
  </FancyBackground>
</template>

<script setup lang="ts">
import FancyBackground from "@/components/atoms/FancyBackground.vue";
import BaseButton from "@/components/atoms/BaseButton.vue";
import GameTitle from "@/components/atoms/GameTitle.vue";

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
