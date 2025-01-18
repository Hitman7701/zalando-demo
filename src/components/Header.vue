<script setup>
// Cette partie sera complétée dans quelques chapitres
</script>

<template>
  <header>
    <div class="headerTop">
      <div class="container">
        <p>Essayez d’abord, <span>payez après</span></p>
        <p>LIVRAISON & RETOUR <span>GRATUITS*</span></p>
        <p>Retour et <span>remboursement</span></p>
      </div>
    </div>

    <div class="headerBottom">
      <div class="container">
        <nav>
          <a>Femme</a>
          <a>Homme</a>
          <a>Enfant</a>
        </nav>

        <img src="../assets/img/logo_fcp7ga.svg" alt="Logo Zalando" />

        <nav>
          <p>Icône 1</p>
          <p>Icône 2</p>
          <p>Icône 3</p>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* header top */

.headerTop {
  background-color: var(--light-grey);
}

.headerTop .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-top-height);
  color: var(--dark-grey);
  font-size: 12px;
}

span {
  color: var(--main-orange);
}

/* header bottom  */

.headerBottom {
  border-bottom: 1px solid #d0d1d3;
}

.headerBottom .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-bottom-height);
}

img {
  width: 155px;
  cursor: pointer;
}

nav {
  flex: 1;
  display: flex;
  gap: 10px;
}

nav:last-of-type {
  justify-content: flex-end;
}

nav a {
  font-weight: bold;
  padding: 10px 15px;
  cursor: pointer;
}

nav a:first-child {
  background-color: var(--main-black);
  color: white;
}
</style>
