<script setup lang="ts">
import DarkLogo from '/images/logos/Darkprimary.svg';
</script>
<template>
    <div class="logo lh-normal">
        <NuxtLink to="/">
            <img :src="DarkLogo" alt="home" />
        </NuxtLink>
    </div>
</template>