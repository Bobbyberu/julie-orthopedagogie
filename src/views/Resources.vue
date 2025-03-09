<style src="../components/resources/resources.css" />

<template>
  <main>
    <main-header />
    <div class="banner-title">
      <banner-title>
        <h1>Mes sélections de<br/> ressources</h1>
      </banner-title>
    </div>

    <div class="page-description">
      <p>
        Petite sélection de matériel et autres idées pédagogiques qui font partie intégrante de mes interventions orthopédagogiques.
      </p>
    </div>

    <div id="resources">
      <div id="resources-items-container">
        <resource-item>
          <img src="/src/assets/img/alec.png">
        </resource-item>
        <resource-item>
          <img src="/src/assets/img/serpents.png">
        </resource-item>
        <resource-item>
          <img src="/src/assets/img/Pikado.png">
        </resource-item>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import MainHeader from '@/components/header/MainHeader.vue'
import BannerTitle from '@/components/banner-title/BannerTitle.vue'
import ResourceItem from '@/components/resources/item/ResourceItem.vue'
import { authenticateImplicitWithAdc } from '@/services/gcpAuthenticator.service'
import { onMounted } from 'vue'

onMounted(async () => {
  await authenticateImplicitWithAdc();
})
</script>
