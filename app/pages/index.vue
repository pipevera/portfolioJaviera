<template>
    <main class="container mx-auto h-full lg:h-svh py-20 px-10 flex items-center justify-start sm:justify-center md:justify-center w-full font-made" >
      <!-- Mobile version -->
      <div class="flex flex-col items-start justify-center h-full md:hidden space-y-8">
        <div ref="mobileTitle">
          <h1 class="text-6xl font-extrabold text-black/90" >
            Javiera<br> <span class="inline-block ms-24 sm:ms-40" >Zuñiga</span> 
          </h1>
          <p class="text-xl text-black/70 mt-2">Graphic Designer</p>
        </div>
        <img ref="mobileImage" class="w-full max-w-md rounded-2xl shadow-2xl" src="/images/1.png" alt="Javiera Zuñiga">
        <NuxtLink ref="mobileLink" to="/trabajos" class="text-lg text-black/80 hover:text-black transition-colors">
          Ver mi trabajo >>
        </NuxtLink>
      </div>

      <!-- Desktop version -->
      <div class="hidden md:block relative">
        <div ref="desktopTitle" class="absolute top-10 -right-10 z-20">
          <h1 class="text-7xl font-extrabold text-black/90" >
            Javiera<br> <span class="inline-block ms-40" >Zuñiga</span> 
          </h1>
          <p class="text-2xl text-black/70 mt-4 ms-40">Graphic Designer</p>
        </div>
        <div class="flex items-center gap-12">
          <img ref="desktopImage" class="w-full max-w-lg relative z-0 rounded-2xl shadow-2xl" src="/images/1.png" alt="Javiera Zuñiga">
          <NuxtLink ref="desktopLink" to="/trabajos" class="text-xl text-black/80 hover:text-black transition-colors whitespace-nowrap">
            Ver mi trabajo >>
          </NuxtLink>
        </div>
      </div>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const mobileTitle = ref(null)
const mobileImage = ref(null)
const mobileLink = ref(null)
const desktopTitle = ref(null)
const desktopImage = ref(null)
const desktopLink = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  // Mobile animations
  tl.from(mobileTitle.value, {
    opacity: 0,
    y: -50,
    duration: 1
  })
  .from(mobileImage.value, {
    opacity: 0,
    scale: 0.8,
    duration: 1
  }, '-=0.5')
  .from(mobileLink.value, {
    opacity: 0,
    x: -30,
    duration: 0.8
  }, '-=0.5')

  // Desktop animations
  tl.from(desktopTitle.value, {
    opacity: 0,
    y: -50,
    duration: 1
  }, 0)
  .from(desktopImage.value, {
    opacity: 0,
    scale: 0.8,
    rotation: -5,
    duration: 1.2
  }, '-=0.7')
  .from(desktopLink.value, {
    opacity: 0,
    x: 50,
    duration: 0.8
  }, '-=0.6')
})
</script>

<style>


</style>