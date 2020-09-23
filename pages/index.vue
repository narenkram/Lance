<template>
  <div>
    <div class="Header">
      <nav
        class="container navbar navbar-expand-md navbar-light bg-transparent"
      >
        <a class="navbar-brand" href="#"
          ><img
            src="https://via.placeholder.com/72x72"
            alt="narendraram designer"
        /></a>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src="~/assets/icons/menu.svg" />
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#pricing">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <section class="IntroSection">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7 text-left align-self-center">
            <h3>Hi, I'm Narendra.</h3>
            <h1>
              I’m a freelance UX/UI Designer & graphic designer specializing in
              Figma & Adobe Illustrator.
            </h1>
          </div>
          <div class="col-lg-5">
            <img
              src="https://via.placeholder.com/439x439"
              alt="narendraram"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="portfolio">
      <div class="container">
        <h1>What I do</h1>
        <div class="row mt-3">
          <div
            class="col-12 col-sm-12 col-md-12 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3"
          >
            <div class="PortfolioItem">
              <div class="PortfolioItem_img gtrendz">
                <img src="~/assets/images/gtrendz.png" alt />
              </div>
              <div class="PortfolioItem_body">
                <h4>GTrendz Online</h4>
                <h5>A Multivendor E-Commerce</h5>
                <p class="PortfolioItem_description">
                  I worked on the frontend requirements for the website,
                  react-native application, and the angular dashboards for both
                  admin and seller.
                </p>
                <a
                  href="https://dribbble.com/shots/12137183-Multi-Vendor-E-Commerce-App"
                  rel="no-follow"
                  class="ProjectLink"
                  target="_blank"
                >
                  Design
                  <img src="~/assets/icons/link.svg" class="ProjectLink_img" />
                </a>
                <a
                  href="https://gtrendz.online"
                  rel="no-follow"
                  class="ProjectLink"
                  target="_blank"
                >
                  Website
                  <img src="~/assets/icons/link.svg" class="ProjectLink_img" />
                </a>
                <a
                  href="https://seller.gtrendz.online/"
                  rel="no-follow"
                  class="ProjectLink"
                  target="_blank"
                >
                  Dashboard
                  <img src="~/assets/icons/link.svg" class="ProjectLink_img" />
                </a>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-sm-12 col-md-12 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3"
          >
            <div class="PortfolioItem">
              <div class="PortfolioItem_img blaz">
                <img src="~/assets/images/blaz.png" alt />
              </div>
              <div class="PortfolioItem_body">
                <h4>Blaz App</h4>
                <h5>Deployments & Scaling</h5>
                <p class="PortfolioItem_description">
                  I have been working on building the frontend part for the blaz
                  app and the landing pages for the website. It’s a work in
                  progress.
                </p>
                <a
                  href="https://blaz.app/"
                  rel="no-follow"
                  class="ProjectLink"
                  target="_blank"
                >
                  website
                  <img src="~/assets/icons/link.svg" class="ProjectLink_img" />
                </a>
                <a
                  href="https://docs.blaz.app/"
                  rel="no-follow"
                  class="ProjectLink"
                  target="_blank"
                >
                  Docs
                  <img src="~/assets/icons/link.svg" class="ProjectLink_img" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <h1 class="mt-5">Latest Projects</h1>
        <div class="row mt-1">
          <div
            class="col-12 col-sm-12 col-md-12 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3"
          >
            <div class="OpenSourceItem">
              <div class="OpenSourceItem_img hash2dev">
                <img src="~/assets/images/hash2.png" alt />
              </div>
              <div class="OpenSourceItem_body">
                <h5>Hash2.dev</h5>
                <p class="OpenSourceItem_description">
                  It’s a small project, a website for developer tools. I
                  contributed to redesigning the site with the latest bootstrap
                  framework.
                </p>
                <a
                  href="https://hash2.dev/"
                  rel="no-follow"
                  class="ProjectLink"
                  target="_blank"
                >
                  Website
                  <img src="~/assets/icons/link.svg" class="ProjectLink_img" />
                </a>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-sm-12 col-md-12 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3"
          >
            <div class="OpenSourceItem">
              <div class="OpenSourceItem_img filesapp">
                <img src="~/assets/images/filesapp.png" alt />
              </div>
              <div class="OpenSourceItem_body">
                <h5>Felix App</h5>
                <p class="OpenSourceItem_description">
                  I have been contributing to design and frontend development
                  (UX/UI) for this dockerized file manager in my free time.
                </p>
                <a
                  href="https://github.com/aroliant/felix"
                  rel="no-follow"
                  class="ProjectLink"
                  target="_blank"
                >
                  Source Code
                  <img src="~/assets/icons/link.svg" class="ProjectLink_img" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <hr />
    </div>
    <section id="case_studies">
      <div class="container">
        <h2>Case Studies</h2>
        <h3>Explore the case studies of my projects</h3>

        <div class="CaseStudy">
          <div class="CaseStudy_itemLeft"></div>
          <div class="CaseStudy_item">
            <a
              href="https://docs.google.com/presentation/d/1du5My4KMPilYKJvPEyqZBjTKPpAzx5ES2sbASfAsgOA/edit?usp=sharing"
              target="_blank"
            >
              <img
                src="~/assets/images/footwear_study.png"
                class="img-fluid CaseStudy_img"
                alt
              />
            </a>
          </div>
          <div class="CaseStudy_itemRight"></div>
          <div class="CaseStudy_actions">
            <div class="CaseStudy_btnLeft">
              <img src="~/assets/icons/left.svg" />
            </div>
            <div class="CaseStudy_btnRight">
              <img src="~/assets/icons/right.svg" />
            </div>
          </div>
        </div>
        <div class="w-100 text-center pt-4">
          <h4>Footwear App</h4>
          <h5>UX Research</h5>
        </div>
      </div>
    </section>
    <div class="container">
      <hr />
    </div>
    <section id="about">
      <div class="container">
        <h2>My Story &amp; Experience</h2>

        <div class="row">
          <div class="col-lg-6">
            
          </div>
          <div class="col-lg-6">
            <h3>About Me</h3>
            <p>
              I’m from Tamil Nadu, India. I love simple things that make a
              significant impact on people’s lives. I believe simple things can
              be more powerful. I am determined to create a positive impact by
              creating more simplistic design solutions for users.
            </p>
            <p>
              After i graduated diploma in mechanical engineering, I
              discontinued my bachelor’s degree and started a company called
              Aroliant with an old high school friend. I learned a lot from
              working with my team as a frontend developer. Working as a
              frontend developer, i got so inspired by the designers. That
              pointed me to my next profound interest in UX-design. I enrolled
              in the UX Design program with Udacity and have taken many steps
              towards my goal of making a positive impact. I have fallen in love
              with this new role as a UX Designer.
            </p>
            <p>
              Aside from all this, I enjoy Netflix, I’m into pop music, gaming,
              I consume podcasts, I like cycling, I’m excited about solar
              projects, and I care about the environment.
            </p>
            <p>
              I feel the design is the most crucial thing that completely shifts
              our perception of our world.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <h2>What else?</h2>
      
        <div class="row">
          <div class="col-12 text-center">
            <div class="SocialLinks">
              <a
                href="https://twitter.com/narendra__ram"
                target="_blank"
                class="SocialLink"
              >
                <img src="~/assets/icons/tw.svg" />
              </a>
              <a
                href="https://www.behance.net/narendraram"
                target="_blank"
                class="SocialLink"
              >
                <img src="~/assets/icons/be.svg" />
              </a>
              <a
                href="https://dribbble.com/narendraram"
                target="_blank"
                class="SocialLink"
              >
                <img src="~/assets/icons/dr.svg" />
              </a>
            </div>
            <img
              src="~/assets/images/vanakam.png"
              class="img-fluid Memoji_vanakam mb-2"
            />
            <h3 class="mb-1">Thank you for stopping by</h3>
            <p class="mb-0">designed &amp; developed by yours truly</p>
            <a class="footer-brand">Narendra Ram</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head: {
    title: "Narendra Ram",
    meta: [
      {
        hid: "description",
        itemprop: "description",
        content: "I’m Narendra Ram, a freelance Full Stack Designer.",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "narendra ram, narendra, ram, full stack designer, designer narendra, naren, naren ram, freelance designer",
      },
    ],
  },
};
</script>