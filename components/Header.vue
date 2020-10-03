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
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ml-2" href="#services">Services</a>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link ml-2" to="/pricing">Pricing</nuxt-link>
          </li>
          <li class="nav-item">
            <a class="nav-link ml-2" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>