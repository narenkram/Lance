<template>
  <div>
    <div class="Section bg-light">
      <div class="bg-white text-center p-3 p-sm-4 p-md-5 p-lg-5 Intro shadow-sm">
        <h1 class="display-3 text-dark Name" data-aos="zoom-in">Narendra Ram</h1>
        <div class="Designation">
          <div class="Designation__text">Front-end Developer</div>
        </div>
        <p class="lead">
          <a
            class="btn btn-primary btn-lg border-0 rounded-pill"
            target="_blank"
            href="https://t.me/nkr_96"
            role="button"
          >Say &#128075; Hello!</a>
        </p>
      </div>
    </div>

    <div class="Section">
      <div class="container">
        <div class="w-100 text-center">
          <h2>Portfolio</h2>
        </div>
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-4 p-2">
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
          <div class="col-12 col-sm-6 col-md-4 col-lg-4 p-2">
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
          <div class="col-12 col-sm-6 col-md-4 col-lg-4 p-2">
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
      </div>
    </div>

    <div class="Section Section--half bg-primary">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="text-white">Like my work?</h2>
            <a class="btn btn-light m-1" href="https://paypal.me/narenram/5">Buy me a waffle &#129479;</a>
            <a class="btn btn-light m-1" href="https://paypal.me/narenram/10">Buy me a pizza &#127829;</a>
          </div>
        </div>
      </div>
    </div>

    <div class="Section bg-light">
      <div class="container">
        <div class="w-100 text-center">
          <h2>More about me</h2>
        </div>
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
            <a
              class="twitter-timeline"
              data-lang="en"
              data-height="243"
              data-link-color="#1876d2"
              href="https://twitter.com/nkr_96?ref_src=twsrc%5Etfw"
            >Tweets by nkr_96</a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
            <script
              type="text/javascript"
              src="https://platform.linkedin.com/badges/js/profile.js"
              async
              defer
            ></script>
            <div
              class="LI-profile-badge"
              data-version="v1"
              data-size="large"
              data-locale="en_US"
              data-type="horizontal"
              data-theme="light"
              data-vanity="nkr96"
            >
              <a
                target="_blank"
                class="LI-simple-link"
                href="https://in.linkedin.com/in/nkr96?trk=profile-badge"
              >Narendra Ram</a>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
            <div>
              <a href="https://steamcommunity.com/id/nkr96/" target="_blank">
                <img
                  class="img-fluid"
                  src="https://steamsignature.com/status/english//76561198327018390.png"
                  alt
                />
              </a>
              <a href="steam://friends/add/76561198327018390">
                <img
                  class="img-fluid p-1"
                  src="http://steamsignature.com/AddFriend.png"
                  alt="Add Friend"
                />
              </a>
            </div>
            <div class="py-3 mt-4">
              <h4 class="text-dark">
                Narendra Ram on
                <a
                  class="text-primary"
                  href="https://medium.com/@nkr96"
                  target="_blank"
                >
                  <i class="fab fa-medium mx-2"></i>Medium
                </a>
              </h4>
            </div>
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
