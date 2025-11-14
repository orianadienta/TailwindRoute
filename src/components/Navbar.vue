<template>
  <header class="bg-[#FAF9F4]">
    <nav class="flex items-center justify-between px-10 py-4">
      <div class="flex items-center space-x-3">
        <h1 class="text-5xl font-bold text-gray-800">EDUSmart</h1>
      </div>

      <div class="flex space-x-8">
        <RouterLink to="/" class="text-[#37556e] hover:text-blue-600 font-medium">Home</RouterLink>

        <a href="#about" class="text-[#37556e] hover:text-blue-600 font-medium">About</a>
        <a href="#testi" class="text-[#37556e] hover:text-blue-600 font-medium">Testimonial</a>
        <a href="#program" class="text-[#37556e] hover:text-blue-600 font-medium">Program</a>

        <RouterLink to="/contact" class="text-[#37556e] hover:text-blue-600 font-medium"
          >Contact</RouterLink
        >
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
