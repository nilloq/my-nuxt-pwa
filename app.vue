<script setup lang="ts">
const { t } = useI18n()

useHead({
  titleTemplate: title => title ? `${title} | ${t('HEADER.TITLE')}` : t('HEADER.TITLE')
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
