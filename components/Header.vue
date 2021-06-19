<template>
  <nav class="container Navbar">
    <nuxt-link class="navbar-brand py-1" to="/"
      ><img
        src="~/assets/images/logo.svg"
        class="Logo"
        alt="narendraram designer"
    /></nuxt-link>

    <div class="Navbar_child">
      <a class="p-1 p-md-0 p-lg-0 nav-link ms-0" href="#about">About</a>
      <a
        class="p-1 p-md-0 p-lg-0 nav-link ms-0 ms-md-2 ms-lg-2"
        href="#services"
        >Services</a
      >
      <nuxt-link
        to="/hire-freelance-ui-ux-designer-india"
        class="p-1 p-md-0 p-lg-0 nav-link ms-0 ms-md-2 ms-lg-2"
        >HireMe</nuxt-link
      >
      <a class="p-1 p-md-0 p-lg-0 nav-link ms-0 ms-md-2 ms-lg-2" href="#contact"
        >Contact</a
      >
      <nuxt-link
        class="p-1 p-md-0 p-lg-0 nav-link ms-0 ms-md-2 ms-lg-2"
        to="/blog"
        >Blog</nuxt-link
      >
    </div>
  </nav>
</template>