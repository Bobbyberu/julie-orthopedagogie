<style src="./contact.css" />

<template>
  <section id="contact">
    <div class="section-container">
      <!-- same font as about section -->
      <h2 class="section-title">Me contacter</h2>
      <div id="contact-details">
        <div class="contact-item">
          <div class="icon-container">
            <MailIcon height="50" width="50" />
          </div>
          <div class="info-container">
            <p class="email">
              <a href="mailto:orthopedagogie.julie@gmail.com">orthopedagogie.julie@gmail.com</a>
            </p>
          </div>
        </div>

        <div class="contact-item">
          <div class="icon-container">
            <MapIcon height="50" width="50" />
          </div>
          <div class="info-container">
            <p>
              835 Avenue Turnbull<br />
              G1R 2X4, Québec
            </p>
          </div>
        </div>
      </div>
      <div id="maps-container">
        {{ map }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import MailIcon from '@/components/icons/MailIcon.vue'
import MapIcon from '@/components/icons/MapIcon.vue'
import { onMounted } from 'vue'
import { initMap } from '@/services/maps.service'

let map :any;

onMounted(async () => {
  map = initMap();
});
</script>
