<template>
  <div>
    <nav 
      :class="[
        'fixed top-0 left-0 right-0 font-made z-50 xl:hidden transition-all duration-300',
        scrolled ? 'bg-white/20 backdrop-blur-lg' : ' bg-transparent'
      ]"
    >
      <div class="flex items-center justify-between p-4" >
        <NuxtLink @click="isOpen = false" to="/" class="font-bold text-2xl text-gray-700" >Javiera Zuñiga</NuxtLink>
        <button @click="isOpen = !isOpen" class="flex flex-col gap-1.5 w-7 focus:outline-none" >
          <span :class="[
              'block h-0.5 w-full bg-gray-700 rounded transition-all duration-300 ease-in-out',
              isOpen ? 'rotate-45 translate-y-2' : ''
            ]"></span>
            <span :class="[
              'block h-0.5 w-full bg-gray-700 rounded transition-all duration-300 ease-in-out',
              isOpen ? 'opacity-0' : 'opacity-100'
            ]"></span>
            <span :class="[
              'block h-0.5 w-full bg-gray-700 rounded transition-all duration-300 ease-in-out',
              isOpen ? '-rotate-45 -translate-y-2' : ''
            ]"></span>
        </button>
      </div>
    </nav>
    <Transition name="slide">
      <div v-if="isOpen" class="fixed top-0 right-0 h-full w-full bg-white/20 backdrop-blur-lg  z-40 xl:hidden flex flex-col justify-between p-6 pt-20" >
        <div class="flex flex-col space-y-4">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.path" 
            :to="link.path" 
            @click="isOpen = false" 
            class="text-2xl font-made text-start text-gray-700"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
    </Transition>

    <nav class="fixed left-0 top-0 h-screen w-48  z-50 hidden xl:block " >
      <div class="flex flex-col justify-between h-full p-6" >
        <div class="flex flex-col space-y-5" >
          <NuxtLink to="/" class="font-bold text-2xl whitespace-nowrap text-gray-700" >Javiera Zuñiga</NuxtLink>
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.path" 
            :to="link.path"
            class="text-2xl hover:translate-x-2 hover:font-bold transition-all text-gray-700"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false,
        scrolled: false,
        navLinks: [
          { name: 'Trabajos', path: '/trabajos' },
          { name: 'Experiencia', path: '/experiencia'},
          { name: 'Sobre mi', path: '/sobre-mi' },
        ]
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll() {
        this.scrolled = window.scrollY > 50
      }
    }
  }
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>