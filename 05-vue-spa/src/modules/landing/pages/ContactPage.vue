<template>
  <!-- component -->
  <section class="relative flex flex-1 h-full text-gray-600 body-font">
    <div class="absolute inset-0 bg-gray-300">

      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12494.904805969963!2d-0.806216448231729!3d38.47088190986931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63c5e46002ec49%3A0x3c97c53465a1ec7d!2sMercadona!5e0!3m2!1ses!2ses!4v1741608589296!5m2!1ses!2ses"
        style=""
      ></iframe>
    </div>
    <div class="container flex px-5 py-24 mx-auto">
      <div
        class="relative z-10 flex flex-col w-full p-8 mt-10 bg-white rounded-lg shadow-md lg:w-1/3 md:w-1/2 md:ml-auto md:mt-0"
      >
        <h2 class="mb-1 text-lg font-medium text-gray-900 title-font">Feedback</h2>
        <p class="mb-5 leading-relaxed text-gray-600">
          Post-ironic portland shabby chic echo park, banjo fashion axe
        </p>
        <div class="relative mb-4">
          <label for="email" class="text-sm leading-7 text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="text-sm leading-7 text-gray-600">Message</label>
          <textarea
            id="message"
            name="message"
            class="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          ></textarea>
        </div>
        <button
          class="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
        >
          Button
        </button>
        <p class="mt-3 text-xs text-gray-500">
          Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
        </p>
      </div>
    </div>
  </section>
</template>
