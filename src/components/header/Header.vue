<script setup lang="ts">
import NavigationMenu from './navigation-menu/NavigationMenu.vue';
</script>

<style src="./header.css"/>

<template>
    <!-- TODO pas responsive -->
    <header class="container">
        <div class="row">
            <div class="col-6 titre-site">
                <!-- titre du site -->
                <div class="texte-titre" id="carre-gris"></div>
                <h1 class="texte-titre" id="juliesol">Julie Sol</h1>
                <h2 class="texte-titre" id="orthopedagogue">/&nbsp;&nbsp; ORTHOPÉDAGOGUE</h2>
            </div>
            <div class="col">
                <navigation-menu />
            </div>
        </div>
    </header>
</template>