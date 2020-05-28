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
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Hire Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h1>Hi, I'm Narendra</h1>
            <h2>Full Stack Designer</h2>
            <div class="SocialLinks">
              <img src="~/assets/icons/tw.svg" class="SocialLink" />
              <img src="~/assets/icons/be.svg" class="SocialLink" />
              <img src="~/assets/icons/dr.svg" class="SocialLink" />
              <img src="~/assets/icons/dev.svg" class="SocialLink" />
            </div>
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
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3">
            <div class="PortfolioItem">
              <div class="PortfolioItem_img">
                <img src="~/assets/images/gtrendz.png" alt />
              </div>
              <div class="PortfolioItem_body">
                <h4>GTrendz Online</h4>
                <h5>A Multivendor E-Commerce</h5>
                <p
                  class="PortfolioItem_description"
                >I worked on the frontend requirements for website, react-native application and the angular dashboards.</p>
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
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3">
            <div class="PortfolioItem">
              <div class="PortfolioItem_img">
                <img src="~/assets/images/project.svg" alt />
              </div>
              <div class="PortfolioItem_body">
                <h4>Blaz App</h4>
                <h5>Deployments & Scaling</h5>
                <p
                  class="PortfolioItem_description"
                >I have been working on building the frontend part for the blaz app and the landing pages for the website. It’s a work in progress.</p>
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
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3">
            <div class="PortfolioItem">
              <div class="PortfolioItem_img">
                <img src="~/assets/images/project.svg" alt />
              </div>
              <div class="PortfolioItem_body">
                <h4>Instant Delivery App</h4>
                <h5>Delivery Platform</h5>
                <p
                  class="PortfolioItem_description"
                >Designed from scratch using UX Research techniques such as interviews, surveys, from paper sketches to a digital prototype.</p>
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
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3">
            <div class="PortfolioItem">
              <div class="PortfolioItem_img">
                <img src="~/assets/images/project.svg" alt />
              </div>
              <div class="PortfolioItem_body">
                <h4>Nuxt.js Websites</h4>
                <h5>Small Businesses & Companies</h5>
                <p
                  class="PortfolioItem_description"
                >It’s has been my choice for building websites for small scales businesses and corporate websites.</p>
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
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3">
            <div class="PortfolioItem">
              <div class="PortfolioItem_img">
                <img src="~/assets/images/project.svg" alt />
              </div>
              <div class="PortfolioItem_body">
                <h4>VS App</h4>
                <h5>Live Streaming Platform</h5>
                <p
                  class="PortfolioItem_description"
                >Designed from scratch using UX Research techniques such as interviews, surveys, from paper sketches to a digital prototype.</p>
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
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3">
            <div class="PortfolioItem">
              <div class="PortfolioItem_img">
                <img src="~/assets/images/project.svg" alt />
              </div>
              <div class="PortfolioItem_body">
                <h4>Coaching Cards</h4>
                <h5>Mobile App</h5>
                <p
                  class="PortfolioItem_description"
                >It’s has been my choice for building websites for small scales businesses and corporate websites.</p>
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
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3">
            <div class="PortfolioItem">
              <div class="PortfolioItem_img">
                <img src="~/assets/images/project.svg" alt />
              </div>
              <div class="PortfolioItem_body">
                <h4>POS</h4>
                <h5>Billing Software</h5>
                <p
                  class="PortfolioItem_description"
                >Designed from scratch using UX Research techniques such as interviews, surveys, from paper sketches to a digital prototype.</p>
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
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3">
            <div class="PortfolioItem">
              <div class="PortfolioItem_img">
                <img src="~/assets/images/project.svg" alt />
              </div>
              <div class="PortfolioItem_body">
                <h4>HostnMeet</h4>
                <h5>A Meetup Website</h5>
                <p
                  class="PortfolioItem_description"
                >A service used to organize online groups that host in-person events for people with similar interests.</p>
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
        </div>
        <h3 class="mt-5">Open Source Contributions</h3>
        <div class="row mt-1">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3">
            <div class="OpenSource_item">
              <h5>DevTools</h5>
              <p
                class="PortfolioItem_description"
              >It’s a small project, a website for developer tools. I contributed to redesigning the site with the latest bootstrap framework a while ago.</p>
              <a href="#" rel="no-follow" class="ProjectLink">website</a>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 p-3 p-sm-3 p-md-3 p-lg-3">
            <div class="OpenSource_item">
              <h5>Felix App</h5>
              <p
                class="PortfolioItem_description"
              >I have been contributing to design and frontend development (UX/UI) for this dockerized file manager on GitHub</p>
              <a href="#" rel="no-follow" class="ProjectLink">website</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <hr />
    </div>
    <section>
      <div class="container">
        <h2>Case Study</h2>
        <h3>Explore the case studies of my projects</h3>

        <div class="CaseStudy">
          <div class="CaseStudy_itemLeft"></div>
          <div class="CaseStudy_item"></div>
          <div class="CaseStudy_itemRight"></div>
        </div>
        <div class="w-100 text-center pt-4">
          <h4>GTrendz Online</h4>
          <h5>Design</h5>
        </div>
      </div>
    </section>
    <div class="container">
      <hr />
    </div>
    <section>
      <div class="container">
        <h2>My Story &amp; Experience</h2>

        <div class="row">
          <div class="col-lg-6">
            <h3>Timeline</h3>
            <div class="Timeline">
              <div class="Timeline_Item">
                <div class="Timeline_ItemYear">2020</div>
                <div class="Timeline_ItemContent">
                  <div class="Timeline_ItemEmoji">😎</div>
                  <div>Realized my passion in user experience design, Then studied & graduated as UX designer from Udacity.com</div>
                </div>
              </div>
              <div class="Timeline_Item">
                <div class="Timeline_ItemYear">2019</div>
                <div class="Timeline_ItemContent">
                  <div class="Timeline_ItemEmoji">🚁</div>
                  <div>Exploring opportunities, while also studying Machine Learning Foundations</div>
                </div>
              </div>
              <div class="Timeline_Item">
                <div class="Timeline_ItemYear">2019</div>
                <div class="Timeline_ItemContent">
                  <div class="Timeline_ItemEmoji">👨🏽‍💻</div>
                  <div>Started working as a Frontend Developer</div>
                </div>
              </div>
              <div class="Timeline_Item">
                <div class="Timeline_ItemYear">2018</div>
                <div class="Timeline_ItemContent">
                  <div class="Timeline_ItemEmoji">🚀</div>
                  <div>I joined my friend and started a tech company with him</div>
                </div>
              </div>
              <div class="Timeline_Item">
                <div class="Timeline_ItemYear">2018</div>
                <div class="Timeline_ItemContent">
                  <div class="Timeline_ItemEmoji">💻</div>
                  <div>Start developing websites for college events, symposiums, etc</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <h3>About Me</h3>
            <p>I’m from Tamil Nadu, India. I love simple things that make a significant impact on people’s lives. I believe simple designs can be more powerful. I am determined to create a positive impact by creating the most simplistic design solutions for users.</p>
            <p>I dropped out of college and started a company called Aroliant with an old high school friend. I learned a lot from working with my team as a frontend developer. Working as a frontend developer, i got so inspired by the designers. That pointed me to my next profound interest in UX-design. I enrolled in the UX Design program with Udacity and have taken many steps towards my goal of making a positive impact. I have fallen in love with this new role as a UX Designer.</p>
            <p>Aside from all this, I enjoy Netflix, I’m into pop music, gaming, I consume podcasts, I love cycling, I’m passionate about solar projects, and I genuinely care about the environment.</p>
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
          <div class="col-lg-6">
            <h3>Research</h3>
            <p>For now, only research i do is UX Research for projects, but trying to make time for my other interests.</p>
          </div>
          <div class="col-lg-6">
            <h3>What do i know?(Skills)</h3>
            <p>UX/UI Design, HTML, CSS, Angular, Bootstrap, SCSS, CSS Animations, Adobe Photoshop, Adobe Illustrator, Figma, Adobe XD, Adobe Premiere Pro, Adobe Animate, Python, and Javascript.</p>
          </div>
          <div class="col-lg-6">
            <h3>What am i doing in my free time</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cupiditate laudantium animi totam quibusdam.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <h3>Here is something personal</h3>
          </div>
          <div class="col-lg-6">
            <h3>Wanna talk to me?</h3>
            <p>Say Hello</p>
          </div>
        </div>
      </div>
    </section>

    <footer class="pt-5 pb-4">
      <div class="container text-center">
        <h3 class="mb-1">Thank you for stopping by</h3>
        <p class="mb-0">designed &amp; developed by yours truly</p>
        <a class="footer-brand" href="#">Narendra Ram</a>
      </div>
    </footer>

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
        content: "I'm Narendra Ram, Full Stack Designer from Earth."
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "narendra ram, narendra, ram, full stack designer, designer narendra, naren, naren ram"
      }
    ]
  }
};
</script>

<style>
.Overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  color: hsla(0, 0%, 75%, 1);
  left: 0;
  top: 0;
  z-index: 100;
}
</style>