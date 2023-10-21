
<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style src="./navigation-menu.css"/>

<template>
    <nav>
        <RouterLink to="/">ACCUEIL</RouterLink>
        <RouterLink to="/about">À PROPOS</RouterLink>
        <RouterLink to="/materiel">MATÉRIEL</RouterLink>
        <RouterLink to="/blog">BLOGUE</RouterLink>
    </nav>
</template>