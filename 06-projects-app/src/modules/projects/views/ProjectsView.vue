<template>
  <div>
    <custom-modal>
      <div class="w-full overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th></th>
              <th>Projecto</th>
              <th>Tareas</th>
              <th>Avance</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
          </tbody>
        </table>
      </div>
    </custom-modal>

    <InputModal
      :open="modalOpen"
      @close="modalOpen = false"
      @value="onNewValue"
      placeholder="Ingrese el nombre del proyecto..."
      title="Nuevo proyecto"
      sub-title="Pon un nombre único a tu proyecto"
    />

    <custom-modal :open="customModalOpen">
      <template #header>
        <h1 class="text-3xl">Titulo del modal</h1>
      </template>

      <template #body>
        <p>
          Officia nulla tempor id voluptate magna proident proident. Adipisicing ipsum do sunt nisi
          ullamco proident velit ipsum mollit amet fugiat.
        </p>
      </template>

      <template #footer>
        <div class="flex justify-end">
          <button @click="customModalOpen = false" class="btn mr-4">Close</button>
          <button @click="customModalOpen = false" class="btn btn-primary">Aceptar</button>
        </div>
      </template>
    </custom-modal>

    <fab-button @click="modalOpen = true">
      <AddCircle />
    </fab-button>

    <fab-button @click="customModalOpen = true" position="bottom-left">
      <ModalIcon />
    </fab-button>
  </div>
</template>

<script lang="ts" setup>
import InputModal from '../../common/components/InputModal.vue';
import FabButton from '../../common/components/FabButton.vue';
import AddCircle from '../../common/icons/AddCircle.vue';
import CustomModal from '../../common/components/CustomModal.vue';
import ModalIcon from '../../common/icons/ModalIcon.vue';
import { ref } from 'vue';

const modalOpen = ref(false);
const customModalOpen = ref(false);

const onNewValue = (projectName: string) => {
  console.log({ projectName });
};
</script>
