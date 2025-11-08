<template>
  <section class="max-w-7xl mx-auto px-10 py-20" >
    <div ref="header" class="mb-10">
      <h1 class="text-6xl md:text-8xl font-extrabold text-gray-700 mb-4">
        Mis <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Trabajos</span>
      </h1>
    </div>

    <div ref="gridContainer" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div 
        v-for="(image, index) in images" 
        :key="index"
        ref="workItems"
        :class="[
          'work-item group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 shadow-2xl hover:shadow-3xl hover:z-10',
          image.size === 'large' ? 'md:col-span-2 md:row-span-2 h-[500px]' : 'h-[240px]',
          image.size === 'wide' ? 'md:col-span-2 h-[240px]' : '',
          image.size === 'tall' ? 'md:row-span-2 h-[484px]' : ''
        ]"
      >
        <img 
          :src="image.url" 
          :alt="image.title"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-2xl"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div>
            <h3 class="text-white font-bold text-xl mb-1">{{ image.title }}</h3>
            <p class="text-white/80 text-sm">{{ image.category }}</p>
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
const gridContainer = ref(null)
const workItems = ref([])

const images = [
  {
    url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop',
    title: 'Proyecto 1',
    category: 'Diseño Web',
    size: 'large'
  },
  {
    url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=400&fit=crop',
    title: 'Proyecto 2',
    category: 'Branding',
    size: 'normal'
  },
  {
    url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=400&fit=crop',
    title: 'Proyecto 3',
    category: 'UI/UX',
    size: 'normal'
  },
  {
    url: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=800&fit=crop',
    title: 'Proyecto 4',
    category: 'Ilustración',
    size: 'tall'
  },
  {
    url: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=400&fit=crop',
    title: 'Proyecto 5',
    category: 'Fotografía',
    size: 'normal'
  },
  {
    url: 'https://images.unsplash.com/photo-1600132806608-231446b2e7af?w=800&h=400&fit=crop',
    title: 'Proyecto 6',
    category: 'Diseño Gráfico',
    size: 'wide'
  },
  {
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
    title: 'Proyecto 7',
    category: 'Editorial',
    size: 'normal'
  },
  {
    url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=400&fit=crop',
    title: 'Proyecto 8',
    category: 'Packaging',
    size: 'normal'
  },
  {
    url: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=400&h=800&fit=crop',
    title: 'Proyecto 9',
    category: 'Identidad Visual',
    size: 'tall'
  },
  {
    url: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=600&h=600&fit=crop',
    title: 'Proyecto 10',
    category: 'Campaña Digital',
    size: 'large'
  },
  {
    url: 'https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?w=400&h=400&fit=crop',
    title: 'Proyecto 11',
    category: 'Motion Graphics',
    size: 'normal'
  },
  {
    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop',
    title: 'Proyecto 12',
    category: 'Tipografía',
    size: 'normal'
  },
  {
    url: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=400&fit=crop',
    title: 'Proyecto 13',
    category: 'Web Design',
    size: 'wide'
  },
  {
    url: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=400&h=400&fit=crop',
    title: 'Proyecto 14',
    category: 'App Design',
    size: 'normal'
  },
  {
    url: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=400&fit=crop',
    title: 'Proyecto 15',
    category: 'Social Media',
    size: 'normal'
  },
  {
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=800&fit=crop',
    title: 'Proyecto 16',
    category: 'Poster Design',
    size: 'tall'
  },
  {
    url: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=400&h=400&fit=crop',
    title: 'Proyecto 17',
    category: 'Logo Design',
    size: 'normal'
  },
  {
    url: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=400&fit=crop',
    title: 'Proyecto 18',
    category: 'Banner Design',
    size: 'wide'
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

  // Initial grid entrance animation
  tl.from(gridContainer.value, {
    opacity: 0,
    y: 50,
    duration: 0.8
  }, 0.8)

  // Setup scroll animations for each item
  workItems.value.forEach((item) => {
    gsap.set(item, { opacity: 0, y: 50 })
    
    gsap.to(item, {
      opacity: 1,
      y: 0,
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