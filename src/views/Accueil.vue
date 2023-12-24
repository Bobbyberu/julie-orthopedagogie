<script setup lang="ts">
import Header from '../components/header/Header.vue'
import Contact from '../components/contact/Contact.vue'
</script>

<style src="../components/accueil/accueil.css"></style>

<template>
    <main>
        <Header />
        <div class="img-container">
            <img id="cubes-jeu-accueil" src="/src/assets/img/accueil_cubes.jpg" />
            <div id="description-background">
                <div id="description-contenu">
                    <h1>Julie Sol</h1>
                    <div id="ptite-barre" />
                    <h2>Orthopédagogue</h2>
                    <p id="montreal-description">Montréal</p>
                </div>
            </div>
        </div>
        <Contact />
    </main>
</template>
