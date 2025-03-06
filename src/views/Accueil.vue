<script setup lang="ts">
import Contact from '@/components/accueil/contact/Contact.vue'
import About from '@/components/accueil/about/About.vue'
import MainHeader from '@/components/header/MainHeader.vue'
</script>

<style src="../components/accueil/accueil.css"></style>

<template>
  <main>
    <MainHeader />
    <div class="img-container">
      <img class="full-width-img" src="/src/assets/img/accueil_cubes.jpg" />
      <div id="description-background">
        <div id="description-contenu">
          <h1>Julie Sol</h1>
          <div id="ptite-barre" />
          <h2>Orthopédagogue</h2>
          <p id="quebec-description">Québec</p>
        </div>
      </div>
    </div>
    <About />
    <Contact />
  </main>
</template>
