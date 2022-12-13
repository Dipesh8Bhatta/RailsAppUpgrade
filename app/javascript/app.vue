<template>
  <div id="app">
    <p>{{ message }}</p>

    <a href="/hello/show_current_time">
      Enter Damn it!
    </a>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
