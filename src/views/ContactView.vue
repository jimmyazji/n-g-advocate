<template>
  <transition name="fade" appear>
    <img
      class="object-contain"
      src="@/assets/contact.jpg"
      alt="Dubai landscape"
    />
  </transition>
  <transition name="scale" appear>
    <div class="py-16 text-gold-600">
      <h1 class="font-overlock tracking-wide text-2xl flex justify-center">
        {{ $t("about.get in touch") }}
      </h1>
      <div
        class="sm:flex justify-center max-w-xs sm:max-w-4xl mx-auto py-12 space-y-5 sm:space-y-0"
      >
        <div
          class="sm:ltr:border-r-2 border-b sm:border-b-0 pb-10 border-gold-600 sm:px-2 md:px-6"
        >
          <i
            class="fa-solid fa-mobile-screen-button text-4xl flex justify-center py-4"
          />
          <h1 class="text-center font-semibold text-2xl">{{ $t("phone") }}</h1>
          <p class="text-center text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
            eius!
          </p>
        </div>
        <div
          class="sm:border-r-2 border-b sm:border-b-0 pb-10 border-gold-600 sm:px-2 md:px-6"
        >
          <i
            class="fa-solid fa-map-location-dot text-4xl flex justify-center py-4"
          />
          <h1 class="text-center font-semibold text-2xl">
            {{ $t("address") }}
          </h1>
          <p class="text-center text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
            eius!
          </p>
        </div>
        <div class="sm:rtl:border-r-2 border-gold-600 sm:px-2 md:px-6">
          <i class="fa-solid fa-envelope text-4xl flex justify-center py-4" />
          <h1 class="text-center font-semibold text-2xl">{{ $t("email") }}</h1>
          <p class="text-center text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
            eius!
          </p>
        </div>
      </div>
      <div class="text-gray-300">
        <h2
          class="max-w-xs sm:max-w-lg uppercase font-semibold leading-tight text-xl py-6 text-center mx-auto"
        >
          {{ $t("about.questions") }}<br />{{ $t("about.message us") }}
        </h2>
        <div class="max-w-2xl mx-2 sm:mx-auto py-6 space-y-4">
          <Input
            class="block w-full"
            :placeholder="$t('about.name')"
            :title="$t('about.name')"
            type="text"
          />
          <Input
            class="block w-full"
            :placeholder="$t('about.email')"
            :title="$t('about.email')"
            type="email"
          />
          <Input
            class="block w-full"
            :placeholder="$t('about.subject')"
            :title="$t('about.subject')"
            type="text"
          />
          <TextArea
            cols="30"
            class="block w-full"
            :placeholder="$t('about.message')"
            :title="$t('about.message')"
            rows="10"
          ></TextArea>
          <button
            class="bg-gold-600 hover:bg-gold-400 focus:bg-gold-400 focus:outline-none border-2 border-gold-900 text-gray-800 px-4 py-3 flex justify-center items-center leading-tight font-bold text-sm uppercase transition-colors mt-8"
          >
            {{ $t("about.send message") }}
          </button>
        </div>
        <h1
          class="font-overlock tracking-wide text-2xl flex justify-center text-gold-600"
        >
          {{ $t("about.connect") }}
        </h1>
        <div class="text-4xl flex justify-center text-gold-600 py-8">
          <a class="hover:text-[#4267B2] transition-colors" href=""
            ><i class="fab fa-facebook-square mx-2"
          /></a>
          <a class="hover:text-[#00acee] transition-colors" href=""
            ><i class="fab fa-twitter-square mx-2"
          /></a>
          <a class="transition-colors" href=""
            ><i class="fab fa-instagram-square mx-2"
          /></a>
          <a class="hover:text-[#0077b5] transition-colors" href=""
            ><i class="fab fa-linkedin mx-2"
          /></a>
        </div>
        <iframe
          class="mx-auto"
          width="100%"
          height="300"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=dubai%20mall&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
  </transition>
</template>
<script setup>
import Input from "@/components/FormInput.vue";
import TextArea from "@/components/FormTextArea.vue";
</script>
<style>
.fab.fa-instagram-square:hover {
  color: transparent;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  background: -webkit-radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  background-clip: text;
  -webkit-background-clip: text;
}
</style>
