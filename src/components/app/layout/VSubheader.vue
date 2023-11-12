<script lang="ts" setup>
defineProps({
    title: {
        type: String,
        default: '',
    },
})
</script>
<template>
    <div class="flex flex-row w-full justify-between">
        <h2 class="font-semibold text-lg">{{ title }}</h2>
        <slot></slot>
    </div>
</template>