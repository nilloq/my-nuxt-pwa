<script setup lang="ts">
const user = useUser()
</script>

<template>
  <nav class="flex gap-3">
    <NuxtLink to="/">
      Home
    </NuxtLink>
    <NuxtLink to="/post">
      Articles
    </NuxtLink>
    <NuxtLink v-if="!user.isLoggedIn" to="/login">
      Login
    </NuxtLink>
    <a v-else href="#" @click.prevent="user.isLoggedIn = false">Logout</a>
  </nav>
  <slot />
</template>