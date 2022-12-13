<template>
  <div id="stime">
    <p>You are just here for current time!</p>
    <br/>
    <br/>
    <p>{{ terrible_message }}</p>
    <br/>
    <a href="/hello/say_hello">
    Back to Hello Vue
    </a>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      terrible_message: 'Look if vue-turbolinks work or not'
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  color: blue;
  text-align: center;
}
</style>
