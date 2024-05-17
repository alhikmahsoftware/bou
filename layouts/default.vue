<template>
  <div>
    <nav>
      <LayoutNavbar />
    </nav>

    <!-- dynamic pages -->
    <main class="min-h-screen font-poppins">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<style scoped>
/* Max width 767px */
@media only screen and (max-width: 767px) {
  .min-h-screen {
    min-height: initial;
  }
}
</style>
