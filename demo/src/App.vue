<template>
  <transition
      name="view"
      appear
      enter-active-class="animate__animated animate__fadeIn"
  >
    <router-view/>
  </transition>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}
</style>
