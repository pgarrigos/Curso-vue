<template>
  <aside class="min-h-screen bg-base-200 w-72">
    <h2 class="mx-4 text-lg font-bold">
      <RouterLink to="/">Proyectos</RouterLink>
    </h2>
    <p v-if="projectsStore.noProjects" class="mx-4 text-sm text-gray-500">No hay Proyectos</p>

    <!-- Menu -->

    <ul v-else class="menu">
      <li v-for="project in projectsStore.projectList" :key="project.id">
        <template v-if="project.tasks.length > 0">
          <details>
            <summary>
              <RouterLink to="`/project/${project.id}`">
                {{ project.name }}
              </RouterLink>
            </summary>
            <ul>
              <li v-for="task in project.tasks" :key="task.id">
                <RouterLink :to="`/project/${project.id}`">{{ task.name }}</RouterLink>
              </li>
            </ul>
          </details>
        </template>

        <template v-else>
          <RouterLink :to="`/project/${project.id}`">
            {{ project.name }}
          </RouterLink>
        </template>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
import { useProjectsStore } from '../store/projects.store';

const projectsStore = useProjectsStore();
</script>
