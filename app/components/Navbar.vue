<template>
  <div>
    <!-- Mobile Header -->
    <nav class="fixed top-0 left-0 right-0 font-made z-50 xl:hidden" >
      <div class="flex items-center justify-between p-4" >
        <NuxtLink @click="isOpen = false" to="/" class="font-bold text-lg" >Javiera Zuñiga</NuxtLink>
        <button @click="isOpen = !isOpen" class="text-2xl focus:outline-none" >
          <span v-if="!isOpen">☰</span>
          <span v-else>✕</span>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Slide -->
    <Transition name="slide">
      <div v-if="isOpen" class="fixed top-0 right-0 h-screen w-full bg-white  z-40 xl:hidden flex flex-col justify-between p-6 pt-20" >
        <div class="flex flex-col space-y-4">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.path" 
            :to="link.path" 
            @click="isOpen = false" 
            class="text-2xl font-made text-center"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
    </Transition>

    <!-- Desktop Menu -->
    <nav class="fixed left-0 top-0 h-screen w-48  z-50 hidden xl:block " >
      <div class="flex flex-col justify-between h-full p-6" >
        <div class="flex flex-col space-y-5" >
          <NuxtLink to="/" class="font-extrabold text-2xl whitespace-nowrap" >Javiera Zuñiga</NuxtLink>
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.path" 
            :to="link.path"
            class="text-xl hover:scale-110 transition-all"
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
        navLinks: [
          { name: 'Trabajos', path: '/trabajos' },
          { name: 'Sobre mi', path: '/sobre-mi' }
        ]
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