<template>
    <main class="container mx-auto h-full lg:h-svh py-20 px-10 flex items-center justify-start sm:justify-center md:justify-center w-full font-made" >
      <!-- Mobile version -->
      <div class="flex flex-col items-start justify-center h-full  md:hidden space-y-8">
        <div>
          <h1 class="text-6xl font-extrabold text-black/90" >
            Javiera<br> <span class="inline-block ms-24 sm:ms-40" >Zuñiga</span> 
          </h1>
          <p class="text-xl text-black/70 mt-2">Graphic Designer</p>
        </div>
        <img class="w-full max-w-md" src="https://placehold.co/500x700" alt="Javiera Zuñiga">
        <a href="#trabajo" class="text-lg text-black/80 hover:text-black transition-colors">
          Ver mi trabajo >>
        </a>
      </div>

      <div class="hidden md:block relative ">
        <div class="absolute top-10 -right-10 z-20">
          <h1 class="text-7xl font-extrabold text-black/90" >
            Javiera<br> <span class="inline-block ms-40" >Zuñiga</span> 
          </h1>
          <p class="text-2xl text-black/70 mt-4 ms-40">Graphic Designer</p>
        </div>
        <div class="flex items-center gap-12">
          <img class="w-full max-w-lg relative z-0" src="https://placehold.co/500x700" alt="Javiera Zuñiga">
          <NuxtLink to="/trabajos" class="text-xl text-black/80 hover:text-black transition-colors whitespace-nowrap">
            Ver mi trabajo >>
          </NuxtLink>
        </div>
      </div>
    </main>
</template>

<script>

</script>

<style>


</style>