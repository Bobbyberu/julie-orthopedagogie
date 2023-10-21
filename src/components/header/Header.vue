<script setup lang="ts">
import NavigationMenu from './navigation-menu/NavigationMenu.vue';
</script>

<style src="./header.css"/>

<template>
    <header class="container">
        <div class="row justify-content-between">
            <div class="col titre-site">
                <!-- titre du site -->
                <div class="row justify-content-start">
                    <h1 class="col" id="juliesol">Julie Sol</h1>
                    <h2 class="col" id="orthopedagogue">/ ORTHOPÉDAGOGUE</h2>
                </div>
            </div>
            <div class="col">
                <navigation-menu />
            </div>
        </div>
    </header>
</template>