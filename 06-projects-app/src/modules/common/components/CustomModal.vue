<template>
  <div>
    <dialog class="modal" :open="open">
      <div class="modal-box">
        <div class="border-b border-blue-500">
          <!-- Header -->
          <slot name="header" />
        </div>

        <div class="my-5">
          <slot name="body" />
        </div>

        <div class="pt-2 border-t border-t-blue-500">
          <slot name="footer" />
        </div>
      </div>
    </dialog>

    <div
      v-if="open"
      class="fixed top-0 left-0 z-10 w-screen h-screen bg-black opacity-50 modal-backdrop"
    ></div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  open?: boolean;
}

withDefaults(defineProps<Props>(), {
  open: false,
});
</script>
