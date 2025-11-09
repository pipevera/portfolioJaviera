<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html, body {
  background: linear-gradient(to bottom right, #f9fafb, #e5e7eb);
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  min-height: 100dvh;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>