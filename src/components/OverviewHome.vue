<template>
  <section
    id="overview"
    class="overviewSection bg-[#FAF9F4] py-10 px-6 lg:px-30 flex flex-col lg:flex-row items-center gap-12"
  >
    <div class="lg:w-1/2">
      <h2 class="text-4xl font-bold text-[#37556e] mb-6">Tentang EDUSmart</h2>
      <p class="text-xl text-[#1E2143] mb-6 leading-relaxed">
        EduSmart hadir dengan komitmen untuk memberikan pengalaman belajar yang menyenangkan dan
        efektif bagi setiap siswa. Kami memahami bahwa setiap anak memiliki gaya belajar yang unik.
        Karena itu, kami merancang program dan layanan yang fleksibel, interaktif, dan berorientasi
        pada hasil. Berikut keunggulan kami yang membuat ribuan siswa mempercayakan pendidikannya
        pada EduSmart:
      </p>
      <ul class="text-xl list-disc list-inside text-[#1E2143] space-y-2">
        <li>Program Terstruktur Sesuai Jenjang.</li>
        <li>Tutor Profesional dan Berpengalaman.</li>
        <li>Pendekatan Belajar Personal.</li>
        <li>Metode Belajar Aktif dan Interaktif.</li>
        <li>Terbukti Meningkatkan Prestasi Akademik.</li>
      </ul>
    </div>

    <div class="aboutImage lg:w-1/2 flex justify-center">
      <img
        src="@/assets/AboutImage.jpg"
        alt="Tentang EDUSmart"
        class="shadow-md w-full max-w-[600px]"
      />
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.overview {
  scroll-margin-top: 40px;
}
</style>
