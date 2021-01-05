<template>
  <div class="container">
    <nav class="navbar navbar-expand-md navbar-light bg-white mt-1 p-0">
      <nuxt-link class="navbar-brand p-0" to="/"
        ><img
          src="~/assets/images/logo.svg"
          class="Logo"
          alt="narendraram designer"
      /></nuxt-link>
      <button
        class="navbar-toggler d-lg-none border-0 p-0"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img src="~/assets/icons/menu.svg" alt="" />
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="p-1 p-md-0 p-lg-0 nav-link ml-0" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a
              class="p-1 p-md-0 p-lg-0 nav-link ml-0 ml-md-2 ml-lg-2"
              href="#services"
              >Services</a
            >
          </li>
          <li class="nav-item">
            <nuxt-link
              class="p-1 p-md-0 p-lg-0 nav-link ml-0 ml-md-2 ml-lg-2"
              to="/pricing"
              >Pricing</nuxt-link
            >
          </li>
          <li class="nav-item">
            <a
              class="p-1 p-md-0 p-lg-0 nav-link ml-0 ml-md-2 ml-lg-2"
              href="#contact"
              >Contact</a
            >
          </li>
          <li class="nav-item">
            <a
              class="p-1 p-md-0 p-lg-0 nav-link ml-0 ml-md-2 ml-lg-2"
              href="https://blog.narendra.design"
              >Blog</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>