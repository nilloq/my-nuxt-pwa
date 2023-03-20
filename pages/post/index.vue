<script setup lang="ts">
definePageMeta({
  middleware: ['logger']
})
</script>

<template>
  <div class="p-4">
    <PostList />
  </div>
</template>