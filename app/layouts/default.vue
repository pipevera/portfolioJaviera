<template>
  <div class="relative h-full">
    <!-- Fondo animado -->
    <div class="fixed h-full inset-0 -z-10 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
    </div>

    <Navbar />
    <slot />
  </div>
</template>

<style scoped>
.floating-shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(80px);
}

.shape-1 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  top: -150px;
  left: -150px;
  animation: float1 20s ease-in-out infinite;
}

.shape-2 {
  width: 450px;
  height: 450px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  bottom: -100px;
  right: -100px;
  animation: float2 15s ease-in-out infinite;
}

.shape-3 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  top: 50%;
  left: 50%;
  animation: float3 18s ease-in-out infinite;
}

@keyframes float1 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(100px, 50px) rotate(120deg);
  }
  66% {
    transform: translate(-50px, 100px) rotate(240deg);
  }
}

@keyframes float2 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(-80px, -60px) rotate(120deg);
  }
  66% {
    transform: translate(60px, -80px) rotate(240deg);
  }
}

@keyframes float3 {
  0%, 100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  33% {
    transform: translate(calc(-50% + 70px), calc(-50% - 70px)) rotate(120deg);
  }
  66% {
    transform: translate(calc(-50% - 70px), calc(-50% + 70px)) rotate(240deg);
  }
}
</style>
