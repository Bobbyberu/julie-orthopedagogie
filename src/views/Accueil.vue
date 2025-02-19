<script setup lang="ts">
import Header from '../components/header/Header.vue'
import Contact from '../components/contact/Contact.vue'
import About from '@/components/about/About.vue'
</script>

<style src="../components/accueil/accueil.css"></style>

<template>
    <main>
      <!-- unfix header-->
        <Header />
        <div class="img-container">
          <!-- TODO responsive -->
            <img class="full-width-img" src="/src/assets/img/accueil_cubes.jpg" />
            <div id="description-background">
                <div id="description-contenu">
                    <h1>Julie Sol</h1>
                    <div id="ptite-barre" />
                    <h2>Orthopédagogue</h2>
                    <p id="montreal-description">Montréal</p>
                </div>
            </div>
        </div>
        <About />
        <Contact />
    </main>
</template>
