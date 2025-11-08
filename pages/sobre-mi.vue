<template>
  <main class="max-w-7xl mx-auto px-6 py-20" >
    <div class="mb-16">
      <h1 class="text-6xl md:text-8xl font-extrabold text-black/90 mb-4">
        Sobre <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Mí</span>
      </h1>
      <p class="text-xl text-black/60">Conoce mi historia</p>
    </div>

    <div class="grid md:grid-cols-2 gap-12">
      <div class="order-2 md:order-1">
        <h2 class="text-3xl md:text-4xl font-bold text-black/90 mb-6">Hola, soy Javiera</h2>
        <div class="space-y-4 text-lg text-black/70 leading-relaxed">
          <p>
            Soy diseñadora y creativa apasionada por transformar ideas en experiencias visuales únicas. 
            Con más de 5 años de experiencia en el mundo del diseño, he trabajado en proyectos que van 
            desde branding hasta diseño web.
          </p>
          <p>
            Mi enfoque se centra en crear soluciones que no solo se vean bien, sino que también cuenten 
            una historia y conecten con las personas. Creo firmemente que el buen diseño tiene el poder 
            de cambiar perspectivas y generar impacto.
          </p>
          <p>
            Cuando no estoy diseñando, me encontrarás explorando nuevas tendencias, tomando fotografías 
            o disfrutando de un buen café mientras busco inspiración en los detalles cotidianos.
          </p>
        </div>
        <div class="mt-8 flex gap-4">
          <a href="#" class="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
            Descargar CV
          </a>
          <a href="#" class="px-6 py-3 border-2 border-black/20 text-black/80 rounded-lg font-semibold hover:border-black/40 transition-all">
            Contacto
          </a>
        </div>
      </div>
      <div class="order-1 md:order-2">
        <img 
          src="https://placehold.co/600x800" 
          alt="Javiera Zuñiga"
          class="w-full rounded-2xl shadow-2xl"
        >
      </div>
    </div>
  </main>
</template>

<script setup>
</script>