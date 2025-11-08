<template>
  <main class="max-w-7xl mx-auto px-10 py-20" >
    <div ref="header" class="mb-10">
      <h1 class="text-6xl md:text-8xl font-extrabold text-black/90 mb-4">
        Sobre <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Mí</span>
      </h1>
    </div>

    <div class="grid md:grid-cols-2 gap-12">
      <div ref="content" class="order-2 md:order-1">
        <h2 class="text-3xl md:text-4xl font-bold text-black/90 mb-6">Hola, soy Javiera</h2>
        <div class="space-y-4 text-lg text-black/70 leading-relaxed">
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
          <a href="#" class="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all">
            Descargar CV
          </a>
          <a href="#" class="px-6 py-3 border-2 border-black/20 text-black/80 rounded-lg font-semibold hover:border-black/40 hover:scale-105 transition-all">
            Contacto
          </a>
        </div>
      </div>
      <div ref="imageContainer" class="order-1 md:order-2 flex items-start justify-center">
        <img 
          src="/images/2.jpg" 
          alt="Javiera Zuñiga"
          class="w-full max-w-md object-cover rounded-2xl shadow-2xl"
        >
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
  }, '-=0.5')

  // Content animations
  tl.from(content.value.querySelector('h2'), {
    opacity: 0,
    x: -50,
    duration: 0.8
  }, '-=0.5')

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