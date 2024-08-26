<script setup>
defineProps(['GPA'])
</script>

<template>
  <div class="card flex column">
    <div class="grade-display-title">Your GPA</div>
    <div class="flex-grow">
      <h1 class="grade" v-if="GPA >= 0">{{ GPA }}</h1>
      <h1 class="fail-message" v-else>Fail</h1>
    </div>
  </div>
</template>
