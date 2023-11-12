<script setup lang="ts">
import { toggleDark } from '~/composables'
import useEventsBus from '~/composables/core/eventBus'
const sidebarCollapsed = ref(false)
const { emit } = useEventsBus()
watch(sidebarCollapsed, (val) => {
  emit('sidebarCollapsed', val)
})

const { t } = useI18n()

</script>
<template>
  <!-- header component -->

  <header
    :class="`duration-700 w-full md:fixed right-0 z-20 shadow-md  md:py-0  md:h-16 bg-white dark:bg-primary-900`">
    <nav class="container mx-auto w-full flex flex-row justify-between items-center space-y-2 md:space-y-none">
      <div class="flex items-center justify-center h-16 text-xl">
        <RouterLink to="/" class="dark:text-white text-primary-400 font-semibold italic" aria-label="go to home">
          SPORTNEWS
        </RouterLink>
      </div>
    </nav>
  </header>
</template>
<style scoped>

</style>
