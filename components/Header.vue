<template>
  <div class="container">
    <nav class="navbar navbar-expand-md navbar-light bg-white mt-1 p-0">
      <nuxt-link class="navbar-brand p-0 col-auto" to="/"
        ><img
          src="~/assets/images/logo.svg"
          class="Logo"
          alt="narendraram designer"
      /></nuxt-link>

      <ul class="col-auto navbar-nav flex-row flex-wrap ms-md-auto">
        <li class="nav-item">
          <a class="p-1 p-md-0 p-lg-0 nav-link ms-0" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a
            class="p-1 p-md-0 p-lg-0 nav-link ms-0 ms-md-2 ms-lg-2"
            href="#services"
            >Services</a
          >
        </li>
        <li class="nav-item">
          <nuxt-link
            to="/hire-freelance-ui-ux-designer-india"
            class="p-1 p-md-0 p-lg-0 nav-link ms-0 ms-md-2 ms-lg-2"
            >Hire Me</nuxt-link
          >
        </li>
        <li class="nav-item">
          <a
            class="p-1 p-md-0 p-lg-0 nav-link ms-0 ms-md-2 ms-lg-2"
            href="#contact"
            >Contact</a
          >
        </li>
        <li class="nav-item">
          <nuxt-link
            class="p-1 p-md-0 p-lg-0 nav-link ms-0 ms-md-2 ms-lg-2"
            to="/blog"
            >Blog</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>