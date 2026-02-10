<template>
  <section class="max-w-7xl mx-auto px-10 py-20">
    <div ref="header" class="mb-16">
      <h1 class="text-6xl md:text-8xl font-extrabold text-gray-700 mb-4">
        Mi <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Experiencia</span>
      </h1>
      <!-- <p class="text-xl text-gray-600 mt-4">Un recorrido por mi trayectoria profesional</p> -->
    </div>

    <div class="relative">
      <div 
        ref="timelineLine"
        class="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-600 transform md:-translate-x-1/2"
      ></div>
      <div class="space-y-3">
        <div 
          v-for="(experience, index) in experiences" 
          :key="index"
          ref="timelineItems"
          :class="[
            'relative flex items-center',
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          ]"
        >
          <div 
            class="absolute left-8 md:left-1/2 w-6 h-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full transform md:-translate-x-1/2 z-10 shadow-lg"
          >
            <div class="absolute inset-1 bg-white rounded-full"></div>
          </div>

          <div 
            :class="[
              'ml-20 md:ml-0 md:w-5/12',
              index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'
            ]"
          >
            <div class=" p-6 rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <span class="inline-block px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full mb-3">
                {{ experience.period }}
              </span>
              <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ experience.position }}</h3>
              <h4 class="text-lg font-semibold text-purple-600 mb-3">{{ experience.company }}</h4>
              <p class="text-gray-600 leading-relaxed mb-4">{{ experience.description }}</p>
              <div class="mt-4 flex flex-wrap gap-2" :class="index % 2 === 0 ? 'md:justify-end' : ''">
                <span 
                  v-for="skill in experience.skills" 
                  :key="skill"
                  class="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const header = ref(null)
const timelineLine = ref(null)
const timelineItems = ref([])

const experiences = [
  {
    period: 'Feb 2023 - Actualidad',
    position: 'Diseñadora Gráfica Senior',
    company: 'Pichara',
    description: 'Marketing y Publicidad. Desarrollo de estrategias visuales y campañas creativas para diversos clientes. Liderando proyectos de branding y comunicación visual.',
    skills: ['Marketing', 'Publicidad', 'Branding', 'Estrategia Visual']
  },
  {
    period: 'Mar 2021 - Sept 2022',
    position: 'Diseñadora Multimedia',
    company: 'The Brands Club',
    description: 'Marketing Digital. Creación de contenido multimedia para campañas digitales, diseño de piezas para redes sociales y desarrollo de identidades visuales para marcas.',
    skills: ['Marketing Digital', 'Multimedia', 'Social Media', 'Contenido Digital']
  },
  {
    period: 'Ene 2020 - Mar 2021',
    position: 'Diseñadora Gráfica',
    company: 'Empresas DBS',
    description: 'Marketing. Diseño de materiales gráficos para campañas de marketing, desarrollo de piezas publicitarias y apoyo en estrategias de comunicación visual.',
    skills: ['Marketing', 'Diseño Gráfico', 'Publicidad', 'Comunicación Visual']
  },
  {
    period: 'Sept 2018 - Dic 2019',
    position: 'Diseñadora Gráfica',
    company: 'L\'Oréal',
    description: 'Diseño y desarrollo de materiales gráficos para productos de belleza. Colaboración en campañas de marketing y creación de contenido visual para la marca.',
    skills: ['Diseño Gráfico', 'Belleza', 'Retail', 'Packaging']
  }
]

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  // Header animation
  tl.from(header.value, {
    opacity: 0,
    y: -50,
    duration: 1
  })

  // Timeline line animation
  gsap.from(timelineLine.value, {
    scaleY: 0,
    transformOrigin: 'top',
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: timelineLine.value,
      start: 'top 80%',
      end: 'bottom bottom',
      toggleActions: 'play none none reverse'
    }
  })

  // Timeline items animation
  timelineItems.value.forEach((item, index) => {
    const isEven = index % 2 === 0
    
    gsap.from(item, {
      opacity: 0,
      x: isEven ? -100 : 100,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        end: 'top 60%',
        toggleActions: 'play none none reverse'
      }
    })
  })
})
</script>
