<template>
  <div>
    <div class="Header">
      <nav class="container navbar navbar-expand-md navbar-light bg-transparent">
        <a class="navbar-brand" href="#">Narendra Ram</a>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#case_studies">Case Studies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                target="_blank"
                href="https://www.upwork.com/freelancers/~01d7fc59aedbaa665c"
              >Hire Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <section class="IntroSection">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-auto text-right pr-lg-0">
            <img src="~/assets/images/nr_memoji.png" class="img-fluid Memoji" />
          </div>
          <div class="col-lg-5 text-left align-self-center pl-lg-0">
            <h1>Hi, I'm Narendra</h1>
            <h2>Full Stack Designer</h2>
            <p
              class="mt-2 mb-0"
            >A freelance full-stack designer and a writer, Hoping humans may one day be able to live digitally forever.</p>
          </div>
        </div>
      </div>
      <div class="container IntroFooter">
        <div class="row justify-content-between">
          <div class="col-auto text-left">
            <div class="SocialLinks">
              <a href="https://twitter.com/narendra__ram" target="_blank" class="SocialLink">
                <img src="~/assets/icons/tw.svg" />
              </a>
              <a href="https://www.behance.net/narendraram" target="_blank" class="SocialLink">
                <img src="~/assets/icons/be.svg" />
              </a>
              <a href="https://dribbble.com/narendraram" target="_blank" class="SocialLink">
                <img src="~/assets/icons/dr.svg" />
              </a>
            </div>
          </div>
          <div class="col-auto text-right">
            <a href="#portfolio">
              <img src="~/assets/icons/down.svg" class="ScrollDown" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <hr />
    </div>
    <section id="portfolio">
      <div class="container">
        <h2>Portfolio</h2>
        <h3>Here are some of my works</h3>
        <div class="row mt-3">
          <div class="col-12 col-sm-12 col-md-12 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3">
            <div class="PortfolioItem">
              <div class="PortfolioItem_img gtrendz">
                <img src="~/assets/images/gtrendz.png" alt />
              </div>
              <div class="PortfolioItem_body">
                <h4>GTrendz Online</h4>
                <h5>A Multivendor E-Commerce</h5>
                <p
                  class="PortfolioItem_description"
                >I worked on the frontend requirements for the website, react-native application, and the angular dashboards for both admin and seller.</p>
                <a
                  href="https://gtrendz.online"
                  rel="no-follow"
                  class="ProjectLink"
                  target="_blank"
                >
                  website
                  <img src="~/assets/icons/link.svg" class="ProjectLink_img" />
                </a>
                <a
                  href="https://apps.apple.com/us/app/gtrendz-footwear-exclusive/id1438408594"
                  rel="no-follow"
                  class="ProjectLink"
                  target="_blank"
                >
                  App
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
          <div class="col-12 col-sm-12 col-md-12 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3">
            <div class="PortfolioItem">
              <div class="PortfolioItem_img blaz">
                <img src="~/assets/images/blaz.png" alt />
              </div>
              <div class="PortfolioItem_body">
                <h4>Blaz App</h4>
                <h5>Deployments & Scaling</h5>
                <p
                  class="PortfolioItem_description"
                >I have been working on building the frontend part for the blaz app and the landing pages for the website. It’s a work in progress.</p>
                <a href="https://blaz.app/" rel="no-follow" class="ProjectLink" target="_blank">
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
          <div class="col-12 col-sm-12 col-md-12 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3">
            <div class="PortfolioItem">
              <div class="PortfolioItem_img deliveryapp">
                <img src="~/assets/images/instantapp.png" alt />
              </div>
              <div class="PortfolioItem_body">
                <h4>Instant Delivery App</h4>
                <h5>Delivery Platform</h5>
                <p
                  class="PortfolioItem_description"
                >Designed from scratch using UX Research techniques such as interviews, surveys, from paper sketches to a digital prototype.</p>
                <a href="#" rel="no-follow" class="ProjectLink">
                  App
                  <img src="~/assets/icons/link.svg" class="ProjectLink_img" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3">
            <div class="PortfolioItem">
              <div class="PortfolioItem_img nuxtsites">
                <img src="~/assets/images/nuxt.png" alt />
              </div>
              <div class="PortfolioItem_body">
                <h4>Nuxt.js Websites</h4>
                <h5>Small Businesses & Companies</h5>
                <p
                  class="PortfolioItem_description"
                >It’s has been my choice for building websites for small scales businesses and corporate websites. Here are some of the recent projects.</p>
                <a href="https://aroliant.com" rel="no-follow" class="ProjectLink" target="_blank">
                  website
                  <img src="~/assets/icons/link.svg" class="ProjectLink_img" />
                </a>
                <a href="https://oilr.in" rel="no-follow" class="ProjectLink" target="_blank">
                  website
                  <img src="~/assets/icons/link.svg" class="ProjectLink_img" />
                </a>
                <a
                  href="http://sgv.construction/"
                  rel="no-follow"
                  class="ProjectLink"
                  target="_blank"
                >
                  website
                  <img src="~/assets/icons/link.svg" class="ProjectLink_img" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3">
            <div class="PortfolioItem">
              <div class="PortfolioItem_img vsapp">
                <img src="~/assets/images/vs.png" alt />
              </div>
              <div class="PortfolioItem_body">
                <h4>VS App</h4>
                <h5>Live Streaming Platform</h5>
                <p
                  class="PortfolioItem_description"
                >I worked on building an app-like frontend for the project. There were a lot of challenges when creating flexible layouts for all screens.</p>
                <a
                  href="https://app.vinegarstrokes.com/"
                  rel="no-follow"
                  class="ProjectLink"
                  target="_blank"
                >
                  app
                  <img src="~/assets/icons/link.svg" class="ProjectLink_img" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3">
            <div class="PortfolioItem">
              <div class="PortfolioItem_img cardsapp">
                <img src="~/assets/images/cardsapp.png" alt />
              </div>
              <div class="PortfolioItem_body">
                <h4>Coaching Cards</h4>
                <h5>Mobile App</h5>
                <p
                  class="PortfolioItem_description"
                >Designed the app in Figma, using UX techniques and testing. The design went through two iterations before the final one.</p>
                <a href="https://gtrendz.online" rel="no-follow" class="ProjectLink">
                  website
                  <img src="~/assets/icons/link.svg" class="ProjectLink_img" />
                </a>
                <a href="https://gtrendz.online" rel="no-follow" class="ProjectLink">
                  App
                  <img src="~/assets/icons/link.svg" class="ProjectLink_img" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3">
            <div class="PortfolioItem">
              <div class="PortfolioItem_img pos">
                <img src="~/assets/images/billapp.png" alt />
              </div>
              <div class="PortfolioItem_body">
                <h4>POS</h4>
                <h5>Billing Software</h5>
                <p
                  class="PortfolioItem_description"
                >Simple design, easy to understand & use when compared to others in the market. Also, i helped the team to build the frontend.</p>
                <a
                  href="https://dribbble.com/shots/11695070-POS-Billing-Software-Design"
                  rel="no-follow"
                  class="ProjectLink"
                  target="_blank"
                >
                  Design
                  <img src="~/assets/icons/link.svg" class="ProjectLink_img" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3">
            <div class="PortfolioItem">
              <div class="PortfolioItem_img hnm">
                <img src="~/assets/images/hostnmeet.png" alt />
              </div>
              <div class="PortfolioItem_body">
                <h4>HostnMeet</h4>
                <h5>A Meetup Website</h5>
                <p
                  class="PortfolioItem_description"
                >Worked on the frontend for creating complex layouts, routes, and building mostly HTML Form parts of the website.</p>
                <a href="#" rel="no-follow" class="ProjectLink" target="_blank">
                  website
                  <img src="~/assets/icons/link.svg" class="ProjectLink_img" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <h3 class="mt-5">Open Source Contributions</h3>
        <div class="row mt-1">
          <div class="col-12 col-sm-12 col-md-12 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3">
            <div class="OpenSourceItem">
              <div class="OpenSourceItem_img hash2dev">
                <img src="~/assets/images/hash2.png" alt />
              </div>
              <div class="OpenSourceItem_body">
                <h5>Hash2.dev</h5>
                <p
                  class="OpenSourceItem_description"
                >It’s a small project, a website for developer tools. I contributed to redesigning the site with the latest bootstrap framework.</p>
                <a href="https://hash2.dev/" rel="no-follow" class="ProjectLink" target="_blank">
                  Website
                  <img src="~/assets/icons/link.svg" class="ProjectLink_img" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3">
            <div class="OpenSourceItem">
              <div class="OpenSourceItem_img filesapp">
                <img src="~/assets/images/filesapp.png" alt />
              </div>
              <div class="OpenSourceItem_body">
                <h5>Felix App</h5>
                <p
                  class="OpenSourceItem_description"
                >I have been contributing to design and frontend development (UX/UI) for this dockerized file manager in my free time.</p>
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
              <img src="~/assets/images/footwear_study.png" class="img-fluid CaseStudy_img" alt />
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
            <h3>Timeline</h3>
            <div class="Timeline">
              <div class="Timeline_Item">
                <div class="Timeline_ItemYear">2020</div>
                <div class="Timeline_ItemContent">
                  <div class="Timeline_ItemEmoji">🎉</div>
                  <div>Now, Focusing on Full Stack Design.</div>
                </div>
              </div>
              <div class="Timeline_Item">
                <div class="Timeline_ItemYear">2020</div>
                <div class="Timeline_ItemContent">
                  <div class="Timeline_ItemEmoji">😎</div>
                  <div>Realized my passion for user experience design, Then studied & graduated as UX designer from Udacity.</div>
                </div>
              </div>
              <div class="Timeline_Item">
                <div class="Timeline_ItemYear">2019</div>
                <div class="Timeline_ItemContent">
                  <div class="Timeline_ItemEmoji">🚁</div>
                  <div>I explored opportunities while also studying Machine Learning Foundations.</div>
                </div>
              </div>
              <div class="Timeline_Item">
                <div class="Timeline_ItemYear">2019</div>
                <div class="Timeline_ItemContent">
                  <div class="Timeline_ItemEmoji">👨🏽‍💻</div>
                  <div>I started working as a Frontend Developer.</div>
                </div>
              </div>
              <div class="Timeline_Item">
                <div class="Timeline_ItemYear">2018</div>
                <div class="Timeline_ItemContent">
                  <div class="Timeline_ItemEmoji">🚀</div>
                  <div>I joined a friend and created a tech company together.</div>
                </div>
              </div>
              <div class="Timeline_Item">
                <div class="Timeline_ItemYear">2018</div>
                <div class="Timeline_ItemContent">
                  <div class="Timeline_ItemEmoji">💻</div>
                  <div>I started developing websites for college events, symposiums, etc.</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <h3>About Me</h3>
            <p>I’m from Tamil Nadu, India. I love simple things that make a significant impact on people’s lives. I believe simple things can be more powerful. I am determined to create a positive impact by creating more simplistic design solutions for users.</p>
            <p>After i graduated diploma in mechanical engineering, I discontinued my bachelor’s degree and started a company called Aroliant with an old high school friend. I learned a lot from working with my team as a frontend developer. Working as a frontend developer, i got so inspired by the designers. That pointed me to my next profound interest in UX-design. I enrolled in the UX Design program with Udacity and have taken many steps towards my goal of making a positive impact. I have fallen in love with this new role as a UX Designer.</p>
            <p>Aside from all this, I enjoy Netflix, I’m into pop music, gaming, I consume podcasts, I like cycling, I’m excited about solar projects, and I care about the environment.</p>
            <p>I feel the design is the most crucial thing that completely shifts our perception of our world.</p>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <hr />
    </div>

    <section>
      <div class="container">
        <h2>What else?</h2>
        <div class="row">
          <div class="col-lg-6 mb-3">
            <h3>Research</h3>
            <p>For now, only research i do is UX Research for projects, but trying to make time for my other interests.</p>
          </div>
          <div class="col-lg-6 mb-3">
            <h3>What do i know?(Skills)</h3>
            <p>UX/UI Design, HTML, CSS, Angular, Bootstrap, SCSS, CSS Animations, Adobe Photoshop, Adobe Illustrator, Figma, Adobe XD, Adobe Premiere Pro, Adobe Animate, Python, and Javascript.</p>
          </div>
          <div class="col-lg-6 mb-3">
            <h3>What am i doing in my free time?</h3>
            <p>Learn something about space or lie down and stargaze. Read a book if the power is out.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 mb-3">
            <h3>Here's something more</h3>
            <div class="badge badge-light">Indian Parents 🤦🏻‍♂️</div>
            <div class="badge badge-light">Netflix Chilling</div>
            <div class="badge badge-light">I’m தமிழ்</div>
            <div class="badge badge-light">Gaming</div>
            <div class="badge badge-light">iPhones &amp; Androids</div>
            <div class="badge badge-light">Pizza 🍕</div>
          </div>
          <div class="col-lg-6 mb-3">
            <h3>Wanna talk to me?</h3>
            <a
              href="mailto:nkr96@icloud.com"
              target="_blank"
              class="btn btn-primary btn-sm"
            >Say 👋🏼 Hello</a>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <img src="~/assets/images/vanakam.png" class="img-fluid Memoji_vanakam mb-2" />
            <h3 class="mb-1">Thank you for stopping by</h3>
            <p class="mb-0">designed &amp; developed by yours truly</p>
            <a class="footer-brand">Narendra Ram</a>
          </div>
        </div>
      </div>
    </section>

    <!-- <div class="Overlay">
      <h1>It's not ready yet!</h1>
      <h4>Please check back later.</h4>
    </div>-->
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
        content: "I’m Narendra Ram, a freelance Full Stack Designer."
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "narendra ram, narendra, ram, full stack designer, designer narendra, naren, naren ram, freelance designer"
      }
    ]
  }
};
</script>