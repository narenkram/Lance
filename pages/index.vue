<template>
  <div>
    <div class="Section">
      <div class="bg-light text-center p-lg-5 rounded-lg">
        <h1 class="display-3 text-dark">Narendra Ram</h1>
        <p class="Designation">Front-end Developer</p>
        <p class="lead">
          <a
            class="btn btn-primary btn-lg border-0 rounded-pill"
            href="https://twitter.com/nkr_96"
            role="button"
          >Say Hello!</a>
        </p>
      </div>
    </div>

    <div class="Section">
      <div class="container">
        <div class="w-100 text-center">
          <h3>Portfolio</h3>
        </div>
        <div class="row">
          <div class="col-lg-4 p-2">
            <div class="Project card">
              <div class="Project__image">
                <img src="https://img.blaz.app/300x300" class="card-img" alt />
                <div class="Project__links">
                  <a href="https://github.com/">
                    <i class="fab fa-github fa-2x"></i>
                  </a>
                  <a href="https://github.com/">View Demo</a>
                </div>
              </div>
              <div class="card-body">
                <div class="card-title">E-Commerce</div>
                <div class="card-subtitle">A complete e-commerce website.</div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 p-2">
            <div class="Project card">
              <div class="Project__image">
                <img src="https://img.blaz.app/300x300" class="card-img" alt />
                <div class="Project__links">
                  <a href="https://github.com/">
                    <i class="fab fa-github fa-2x"></i>
                  </a>
                  <a href="https://github.com/">View Demo</a>
                </div>
              </div>
              <div class="card-body">
                <div class="card-title">E-Commerce</div>
                <div class="card-subtitle">A complete e-commerce website.</div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 p-2">
            <div class="Project card">
              <div class="Project__image">
                <img src="https://img.blaz.app/300x300" class="card-img" alt />
                <div class="Project__links">
                  <a href="https://github.com/">
                    <i class="fab fa-github fa-2x"></i>
                  </a>
                  <a href="https://github.com/">View Demo</a>
                </div>
              </div>
              <div class="card-body">
                <div class="card-title">E-Commerce</div>
                <div class="card-subtitle">A complete e-commerce website.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="row py-5">
          <div class="col-12 text-center">
            <h3>Like my work?</h3>
            <a
              class="btn btn-outline-primary"
              href="https://paypal.me/narenram/5"
            >Buy me a waffle &#129479;</a>
            <a
              class="btn btn-outline-primary"
              href="https://paypal.me/narenram/10"
            >Buy me a pizza &#127829;</a>
          </div>
        </div>
      </div>
    </div>

    <div class="Section bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <a
              class="twitter-timeline"
              data-height="500"
              data-theme="dark"
              href="https://twitter.com/nkr_96?ref_src=twsrc%5Etfw"
            >Tweets by nkr_96</a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>
