<script setup lang="ts">
import NavigationMenu from './navigation-menu/NavigationMenu.vue'
</script>

<style src="./main-header.css" />

<template>
  <!-- TODO pas responsive -->
  <header>
      <div id="title" class="header-item">
        <!-- titre du site -->
        <div class="texte-titre" id="carre-gris"></div>
        <h1 class="texte-titre" id="juliesol">Julie Sol</h1>
        <h2 class="texte-titre" id="orthopedagogue">/&nbsp;&nbsp; ORTHOPÉDAGOGUE</h2>
      </div>
      <div id="socials" class="header-item">
        <i id="linkedin" class="fab fa-linkedin fa-xl icon"></i>
        <i id="instagram" class="fa-brands fa-instagram fa-xl icon"></i>
      </div>
  </header>
</template>