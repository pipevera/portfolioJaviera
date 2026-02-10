<template>
  <main class="max-w-5xl mx-auto px-10 py-20" >
    <div ref="header" class="mb-10">
      <h1 class="text-6xl md:text-8xl font-extrabold text-gray-700 mb-4">
        Sobre <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Mí</span>
      </h1>
    </div>

    <div class="grid md:grid-cols-2 gap-12">
      <div ref="content" class="order-2 md:order-1">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-700 mb-6">Hola, soy Javiera</h2>
        <div class="space-y-4 text-sm text-black/70">
          <p ref="paragraph1">
            Soy diseñadora y creativa apasionada por transformar ideas en experiencias visuales únicas. 
            Con más de 5 años de experiencia en el mundo del diseño, he trabajado en proyectos que van 
            desde branding hasta diseño web.
          </p>
          <p ref="paragraph2">
            Mi enfoque se centra en crear soluciones que no solo se vean bien, sino que también cuenten 
            una historia y conecten con las personas. Creo firmemente que el buen diseño tiene el poder 
            de cambiar perspectivas y generar impacto.
          </p>
          <p ref="paragraph3">
            Cuando no estoy diseñando, me encontrarás explorando nuevas tendencias, tomando fotografías 
            o disfrutando de un buen café mientras busco inspiración en los detalles cotidianos.
          </p>
        </div>
        <div ref="buttons" class="mt-8 flex gap-4">
          <a href="/cv/cv-javiera-zuniga.pdf" target="_blank" class="px-3 py-3 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-xs text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            Descargar CV
          </a>
          <a href="https://www.linkedin.com/in/javiera-z%C3%BA%C3%B1iga-25ab4175/" target="_blank" rel="noopener noreferrer" class="px-3 py-3 text-xs w-full border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-600 hover:text-white hover:scale-105 transition-all flex items-center gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a href="mailto:javierac.zunigal@gmail.com" class="px-3 py-3 text-xs w-full border-2 border-pink-600 text-pink-600 rounded-lg font-semibold hover:bg-pink-600 hover:text-white hover:scale-105 transition-all flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Email
          </a>
        </div>
      </div>
      <div ref="imageContainer" class="order-1 md:order-2 flex items-start justify-center">
        <img 
          src="/images/2.jpg" 
          alt="Javiera Zuñiga"
          class="w-full max-w-md max-h-[500px] object-cover rounded-2xl shadow-2xl hover:scale-110 transition duration-300"
        >
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

useHead({
  title: 'Sobre Mí - Javiera Zuñiga',
  meta: [
    { name: 'description', content: 'Conoce más sobre Javiera Zuñiga, diseñadora gráfica con más de 5 años de experiencia en marketing, publicidad y diseño digital.' },
    { name: 'keywords', content: 'sobre mi, diseñadora gráfica, experiencia, CV, portafolio' }
  ]
})

gsap.registerPlugin(ScrollTrigger)

const header = ref(null)
const content = ref(null)
const imageContainer = ref(null)
const paragraph1 = ref(null)
const paragraph2 = ref(null)
const paragraph3 = ref(null)
const buttons = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  // Header animation
  tl.from(header.value, {
    opacity: 0,
    y: -50,
    duration: 1
  })

  // Image animation
  tl.from(imageContainer.value, {
    opacity: 0,
    x: 100,
    scale: 0.9,
    duration: 1
  }, 0.8)

  // Content animations
  tl.from(content.value.querySelector('h2'), {
    opacity: 0,
    x: -50,
    duration: 0.8
  }, 0.8)

  tl.from([paragraph1.value, paragraph2.value, paragraph3.value], {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8
  }, '-=0.3')

  tl.from(buttons.value, {
    opacity: 0,
    y: 20,
    duration: 0.8
  }, '-=0.3')
})
</script>