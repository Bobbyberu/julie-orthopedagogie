<script setup lang="ts">
import Header from '../components/header/Header.vue'
import Contact from '../components/contact/Contact.vue'
</script>

<style src="../components/accueil/accueil.css"></style>

<template>
    <main>
        <!--Header /-->
        <div class="img-container">
            <img id="cubes-jeu-accueil" src="/src/assets/img/accueil_cubes.jpg" />
            <div id="description-background">
                <div id="description-contenu">
                    <h1>Julie Sol</h1>
                    <div id="ptite-barre" />
                    <h2>Orthopédagogue</h2>
                    <p id="montreal-description">Montréal</p>

                    <h2 id="in-progress">Site en cours de construction...</h2>

                    <div id="reseaux-sociaux">
                      <a href="https://www.linkedin.com/in/julie-sol-636895132/" target="_blank"><i id="linkedin" class="fab fa-linkedin fa-xl icon"></i></a>
                      <a href="https://www.instagram.com/0rthopedagogie/" target="_blank"><i id="instagram" class="fa-brands fa-instagram fa-xl icon"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <!--Contact /-->
    </main>
</template>
