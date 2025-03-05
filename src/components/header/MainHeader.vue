<script setup lang="ts">
import NavigationMenu from './navigation-menu/NavigationMenu.vue'
</script>

<style src="./main-header.css" />

<template>
  <header>
      <div id="title" class="header-item">
        <!-- titre du site -->
        <div class="texte-titre" id="carre-gris"></div>
        <h1 class="texte-titre" id="juliesol">Julie Sol</h1>
        <h2 class="texte-titre" id="orthopedagogue">
          <span id="header-separator">/</span>&nbsp; ORTHOPÉDAGOGUE
        </h2>
      </div>
      <div id="socials" class="header-item">
        <a href="https://ca.pinterest.com/julieorthopedagogie/" target="_blank"><i id="pinterest" class="fab fa-pinterest fa-2xl icon"></i></a>
        <a href="https://www.linkedin.com/in/julie-sol-636895132/" target="_blank"><i id="instagram" class="fa-brands fa-instagram fa-2xl icon"></i></a>
      </div>
  </header>
</template>