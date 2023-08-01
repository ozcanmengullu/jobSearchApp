<script setup>
</script>

<template>
  <div id="app">
    <div class="headTitle">
      <h1> Dünyanın En Büyük İş Bulma Sitesine Hoş Geldiniz</h1>
      <h4> Kariyerize En Uygun Fırsatları Bulmak İçin Hemen Arayın</h4>
    </div>
    <div>
      <b-navbar class="searchMenu">
        <b-button variant="outline-success" href="/jobs" class="my-2 my-sm-0" type="submit">İş Bul</b-button>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
.logo {
 width: 150px;
}
.searchMenu {
  margin: 35px;
  text-align: center;
  justify-content: center;
}
h1 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}
h4 {
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.headTitle {
  margin-top: 75px;
}
</style>
