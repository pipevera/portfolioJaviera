<template>
  <section class="max-w-7xl mx-auto px-10 py-20" >
    <div class="mb-16">
      <h1 class="text-6xl md:text-8xl font-extrabold text-black/90 mb-4">
        Mis <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Trabajos</span>
      </h1>
      <p class="text-xl text-black/60">Proyectos seleccionados</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
      <div 
        v-for="(image, index) in images" 
        :key="index"
        :class="[
          'group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl',
          image.size === 'large' ? 'md:col-span-2 md:row-span-2' : '',
          image.size === 'wide' ? 'md:col-span-2' : '',
          image.size === 'tall' ? 'md:row-span-2' : ''
        ]"
      >
        <img 
          :src="image.url" 
          :alt="image.title"
          class="w-full h-full object-cover"
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
const images = [
  {
    url: 'https://placehold.co/600x800',
    title: 'Proyecto 1',
    category: 'Diseño Web',
    size: 'large'
  },
  {
    url: 'https://placehold.co/600x400',
    title: 'Proyecto 2',
    category: 'Branding',
    size: 'normal'
  },
  {
    url: 'https://placehold.co/600x400',
    title: 'Proyecto 3',
    category: 'UI/UX',
    size: 'normal'
  },
  {
    url: 'https://placehold.co/600x600',
    title: 'Proyecto 4',
    category: 'Ilustración',
    size: 'tall'
  },
  {
    url: 'https://placehold.co/800x400',
    title: 'Proyecto 5',
    category: 'Fotografía',
    size: 'wide'
  },
  {
    url: 'https://placehold.co/600x400',
    title: 'Proyecto 6',
    category: 'Diseño Gráfico',
    size: 'normal'
  }
]
</script>