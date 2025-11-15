<template>
  <section
    id="hero"
    class="heroSection bg-cover bg-top bg-no-repeat min-h-[60vh] flex items-center justify-center px-6 py-12"
  >
    <div class="max-w-3xl text-center">
      <h1 class="text-4xl sm:text-6xl font-extrabold text-[#F1F1EB] mb-6 leading-tight">
        Tingkatkan Prestasimu Bersama EDUSmart
      </h1>

      <p class="text-[#F1F1EB] text-lg sm:text-xl mb-10">
        Pusat informasi dan pendaftaran program bimbingan belajar untuk siswa dari berbagai jenjang.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          @click="scrollToSection('program')"
          class="bg-[#497498] text-[#F1F1EB] px-6 py-3 rounded-lg font-semibold hover:bg-[#6294bd] transition-colors"
        >
          Lihat Program
        </button>

        <button
          @click="scrollToSection('daftar')"
          class="bg-[#FAF9F4] border border-[#497498] text-[#497498] px-6 py-3 rounded-lg font-semibold hover:bg-[#cddae4] transition-colors"
        >
          Daftar Sekarang
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
function scrollToSection(id) {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.heroSection {
  background-image: url('@/assets/kelas.jpg');
}
</style>
