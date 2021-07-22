<template>
  <nav class="container Navbar">
    <a class="navbar-brand py-1" href="#intro"
      ><img
        src="~/assets/images/logo.svg"
        class="Logo"
        alt="narendraram designer"
    /></a>

    <div class="Navbar_child">
      <a class="p-1 p-md-0 p-lg-0 nav-link ms-0" href="#services">
        <span class="nav-link_number">1. </span>Services</a
      >
      <a class="p-1 p-md-0 p-lg-0 nav-link ms-0 ms-md-2 ms-lg-2" href="#work"
        ><span class="nav-link_number">2. </span>Work</a
      >
      <a class="p-1 p-md-0 p-lg-0 nav-link ms-0 ms-md-2 ms-lg-2" href="#about"
        ><span class="nav-link_number">3. </span>About</a
      >
      <a class="p-1 p-md-0 p-lg-0 nav-link ms-0 ms-md-2 ms-lg-2" href="#contact"
        ><span class="nav-link_number">4. </span>Contact</a
      >
      <a
        class="p-1 p-md-0 p-lg-0 nav-link ms-0 ms-md-2 ms-lg-2"
        data-toggle="tooltip"
        data-placement="right"
        title="Change language"
      >
        <img
          class="img-fluid LangSwitch_icon"
          src="~/assets/icons/lang.png"
          onclick="myFunction()"
          alt="langswitch_icon"
        />
      </a>
    </div>
  </nav>
</template>