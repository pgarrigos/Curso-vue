<template>
  <div>
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

    <InputModal
      :open="modalOpen"
      @close="modalOpen = false"
      @value="onNewValue"
      placeholder="Ingrese el nombre del proyecto..."
      title="Nuevo proyecto"
      sub-title="Pon un nombre único a tu proyecto"
    />

    <fab-button @click="modalOpen = true">
      <AddCircle />
    </fab-button>
  </div>
</template>

<script lang="ts" setup>
import InputModal from '../../common/components/InputModal.vue';
import FabButton from '../../common/components/FabButton.vue';
import AddCircle from '../../common/icons/AddCircle.vue';
import { ref } from 'vue';

const modalOpen = ref(false);

const onNewValue = (projectName: string) => {};
</script>
