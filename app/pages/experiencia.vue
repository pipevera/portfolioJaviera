<template>
  <section class="max-w-5xl mx-auto px-10 py-20 overflow-x-hidden">
    <div ref="header" class="mb-16">
      <h1 class="text-6xl md:text-8xl font-extrabold text-gray-700 mb-4">
        Mi <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Experiencia</span>
      </h1>
      <!-- <p class="text-xl text-gray-600 mt-4">Un recorrido por mi trayectoria profesional</p> -->
    </div>

    <div class="relative pl-4 md:pl-0">
      <div 
        ref="timelineLine"
        class="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-600 transform md:-translate-x-1/2"
      ></div>
      <div class="space-y-6">
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
            class="absolute -left-4 md:left-1/2 w-6 h-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full transform -translate-x-1/2 z-10 shadow-lg"
          >
            <div class="absolute inset-1 bg-white rounded-full"></div>
          </div>

          <div 
            :class="[
              'ml-6 md:ml-0 md:w-6/12',
              index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'
            ]"
          >
            <div class=" p-6 rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <span class="inline-block px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full mb-3">
                {{ experience.period }}
              </span>
              <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ experience.position }}</h3>
              <h4 class="text-lg font-semibold text-purple-600 mb-3">{{ experience.company }}</h4>
              <p class="text-gray-600 text-sm mb-4">{{ experience.description }}</p>
              <div class="mt-4 flex flex-wrap gap-2" :class="index % 2 === 0 ? 'md:justify-end' : ''">
                <span 
                  v-for="skill in experience.skills" 
                  :key="skill"
                  class="px-3 py-1 border border-purple-700 text-xs text-purple-700  rounded-full"
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

useHead({
  title: 'Experiencia - Javiera Zuñiga',
  meta: [
    { name: 'description', content: 'Mi trayectoria profesional: Pichara, The Brands Club, L\'Oréal, DBS y más. Experiencia en diseño gráfico y marketing.' },
    { name: 'keywords', content: 'experiencia laboral, trayectoria, CV, diseñadora gráfica, marketing' }
  ]
})

gsap.registerPlugin(ScrollTrigger)

const header = ref(null)
const timelineLine = ref(null)
const timelineItems = ref([])

const experiences = [
  {
    period: '2023 - Actualidad',
    position: 'Diseñadora Gráfica Senior',
    company: 'Pichara',
    description: 'Liderando la creación de piezas gráficas para marketing y publicidad. Conceptualización y diseño integral de campañas 360°, desarrollo de material POP y diseño de vitrinas para tiendas. Diseño de papelería corporativa, folletos, catálogos y cartas de color. Gestión de E-Commerce, revestimiento de páginas web, diseño de mailings y contenido para medios y RRSS.',
    skills: ['Campañas 360°', 'Material POP', 'E-Commerce', 'RRSS', 'Branding', 'Fotografía']
  },
  {
    period: '2021 - 2022',
    position: 'Diseñadora Multimedia Digital',
    company: 'The Brands Club',
    description: 'Especializada en marketing para E-Commerce. Desarrollo de campañas digitales integrales, gestión de contenido para RRSS, diseño de mailings estratégicos y planificación de medios digitales. Creación de piezas multimedia optimizadas para plataformas digitales.',
    skills: ['E-Commerce', 'Marketing Digital', 'RRSS', 'Mailing', 'Plan de Medios']
  },
  {
    period: '2020 - 2021',
    position: 'Diseñadora Gráfica',
    company: 'DBS Beauty Store y Tiendas Make Up',
    description: 'Diseño de piezas gráficas para el área de marketing. Desarrollo de campañas publicitarias, gestión de RRSS, diseño de packaging para productos de belleza. Revestimiento y actualización de E-Commerce, creación de mailings y material POP para puntos de venta.',
    skills: ['Marketing', 'Packaging', 'E-Commerce', 'RRSS', 'Material POP']
  },
  {
    period: '2018 - 2019',
    position: 'Diseñadora Gráfica',
    company: 'L\'ORÉAL',
    description: 'Creación de piezas gráficas para las marcas Maybelline New York y Vogue. Desarrollo de campañas 360° integradas, gestión de RRSS, diseño de packaging premium, catálogos y cartas de color. Producción de mailings, material POP para retail y planificación de medios publicitarios.',
    skills: ['Campañas 360°', 'Packaging', 'RRSS', 'Catálogos', 'Retail']
  },
  {
    period: '2017',
    position: 'Asistente de Capacitación',
    company: 'OTIC SOFOFA',
    description: 'Gestión y coordinación de servicios de capacitación en Edificio CCU, Las Condes. Apoyo administrativo en programas de formación profesional y desarrollo de competencias.',
    skills: ['Gestión', 'Capacitación', 'Coordinación', 'Administración']
  },
  {
    period: '2017',
    position: 'Diseñadora de Proyecto Social',
    company: 'Ministerio de Desarrollo Social',
    description: 'Proyecto Atlas de Acción Social 2017. Diseño y diagramación completa del Atlas de Áreas Prioritarias para 75 Comunas de Chile. Trabajo con datos geográficos y sociales para crear material editorial de alto impacto.',
    skills: ['Diseño Editorial', 'Diagramación', 'Infografías', 'Proyecto Social']
  },
  {
    period: '2015 - 2017',
    position: 'Diseñadora Freelance',
    company: 'Independiente',
    description: 'Desarrollo de proyectos de diseño gráfico para diversos clientes. Gestión integral de proyectos desde la conceptualización hasta la entrega final, abarcando identidad visual, material publicitario y diseño digital.',
    skills: ['Diseño Gráfico', 'Gestión de Proyectos', 'Branding']
  },
  {
    period: '2015',
    position: 'Práctica Profesional',
    company: 'Eduk Diseño',
    description: 'Estudio de diseño especializado. Apoyo en diseño de gráfica corporativa y marketing, colaboración en proyectos de museografía. Fotografía de productos, edición y postproducción, diseño y diagramación de catálogos comerciales.',
    skills: ['Diseño Corporativo', 'Fotografía', 'Catálogos', 'Museografía']
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
