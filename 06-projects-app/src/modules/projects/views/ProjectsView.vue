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
          <tr v-for="(project, index) in projectsStore.projectList" :key="project.id" class="hover">
            <th>{{ index + 1 }}</th>
            <td>{{ project.name }}</td>
            <td>{{ project.tasks.length }}</td>
            <td>
              <progress class="w-56 progress progress-primary" value="1" max="100"></progress>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <InputModal
      :open="modalOpen"
      @close="modalOpen = false"
      @value="projectsStore.addProject"
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
          <button @click="customModalOpen = false" class="mr-4 btn">Close</button>
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
import CustomModal from '../../common/components/CustomModal.vue';
import FabButton from '../../common/components/FabButton.vue';
import InputModal from '../../common/components/InputModal.vue';
import AddCircle from '../../common/icons/AddCircle.vue';
import ModalIcon from '../../common/icons/ModalIcon.vue';
import { ref } from 'vue';
import { useProjectsStore } from '../store/projects.store';

const modalOpen = ref(false);
const customModalOpen = ref(false);

const projectsStore = useProjectsStore();
</script>
