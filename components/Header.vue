<template>
  <nav class="container Navbar">
    <nuxt-link class="navbar-brand py-1" to="/"
      ><img
        src="~/assets/images/logo.svg"
        class="Logo"
        alt="narendraram designer"
    /></nuxt-link>

    <div class="Navbar_child">
      <a class="p-1 p-md-0 p-lg-0 nav-link ms-0" href="#services">
        <span class="nav-link_number">1. </span>Services</a
      >
      <a class="p-1 p-md-0 p-lg-0 nav-link ms-0 ms-md-2 ms-lg-2" href="#about"
        ><span class="nav-link_number">2. </span>About</a
      >

      <a class="p-1 p-md-0 p-lg-0 nav-link ms-0 ms-md-2 ms-lg-2" href="#contact"
        ><span class="nav-link_number">3. </span>Contact</a
      >
    </div>
  </nav>
</template>