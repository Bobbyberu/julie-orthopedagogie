
<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style src="./navigation-menu.css"/>

<template>
    <nav>
        <ul>
        <li><RouterLink class="router-link-header" to="/">ACCUEIL</RouterLink></li>
        <li><RouterLink class="router-link-header" to="/about">À PROPOS</RouterLink></li>
        <li><RouterLink class="router-link-header" to="/materiel">MATÉRIEL</RouterLink></li>
        <li><RouterLink class="router-link-header" to="/blog">BLOGUE</RouterLink></li>
    </ul>
    </nav>
</template>