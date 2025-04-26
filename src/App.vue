<template>
  <router-view />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

if (window.location.hash) {
  const hash = window.location.hash.substring(1)
  const params = new URLSearchParams(hash)

  const accessToken = params.get('access_token')

  if (accessToken) {
    console.log('Token de acesso:', accessToken)
    router.push('/home')
  }
}
</script>
