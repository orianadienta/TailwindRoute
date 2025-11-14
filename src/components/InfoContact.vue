<template>
  <main>
    <section class="bg-[#FAF9F4] py-20 px-6 lg:px-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div class="bg-white shadow-lg rounded-2xl p-4 h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70470.17088547465!2d116.87191204393069!3d-1.2442295083290567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df145d9930e7ed7%3A0x9849b154cb9a871b!2sDinas%20Pendidikan%20Kota%20Balikpapan!5e1!3m2!1sid!2sid!4v1763051862589!5m2!1sid!2sid"
            class="rounded-xl w-full h-full"
            style="border: 0"
            loading="lazy"
          ></iframe>
        </div>

        <div class="bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-start h-[500px]">
          <h2 class="text-4xl font-bold text-[#37556e] mb-4">Hubungi Kami</h2>

          <p class="text-[#1E2143] mb-4">
            EDUSmart adalah platform pembelajaran yang berfokus pada peningkatan prestasi siswa
            melalui pendekatan belajar yang menyenangkan dan efektif.
          </p>

          <div class="space-y-3">
            <div>
              <Icon icon="mdi:email" width="28" />
              <p class="text-gray-600 text-sm">Email:</p>
              <p class="font-semibold text-[#37556e]">info@edusmart.com</p>
            </div>
            <div>
              <Icon icon="mdi:phone" width="28" />
              <p class="text-gray-600 text-sm">Telepon:</p>
              <p class="font-semibold text-[#37556e]">+1 234 567 890</p>
            </div>
            <div>
              <Icon icon="mdi:location" width="28" />
              <p class="text-gray-600 text-sm">Alamat:</p>
              <p class="font-semibold text-[#37556e]">
                Jl. Ruhui Rahayu 1, Sepinggan, Balikpapan Selatan, Kota Balikpapan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>
