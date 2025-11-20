import "./app.css"
import Services from "./components/add-card/add-cartcha"
import Addcard from "./components/add-card/addcard"
import Btn from "./components/comp-card/btn"
import ComCard from "./components/comp-card/com-card"
import Header from "./components/header/header"

function App() {
  return (
    <>
      <Header />


      <main>
        <section id="home">
          <div className="container information">
            <div className="">
              <h1 className="px">
                Transform Your Digital
                <br />
                Presence
              </h1>
              <p className="p__info">
                We create innovative digital solutions that drive growth and elevate your
                <br />
                brand. From web development to digital marketing, we're your partners in
                <br />
                digital transformation.
              </p>

              <div className="two__btn">
                <button className="get__btn1">
                  Get Started
                </button>
                <button className="get__btn2">
                  Our Work
                </button>
              </div>

              <div className="statistiks">
                < ComCard name="150" phref="Projects Completed" />
                < ComCard name="95" phref="Client Satisfaction" />
                < ComCard name="24" phref="Team Members" />
              </div>
            </div>

            <img className="aqilbn" src="https://bootstrapmade.com/content/demo/Clarity/assets/img/misc/misc-16.webp" alt="" />
          </div>
        </section>

        <section id="about">
          <div className="container about">

            <div className="">
              <h5 className="ab__store">
                Discover Our Story
              </h5>


              <h1 className="nimadr">
                Innovative Solutions for a
                <br />
                Digital-First World
              </h1>

              <p className="about__lorem__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                <br />
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                <br />
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <div>

                <div className="">
                  <div className=" a__flex">
                    <div className="galochka">
                      <img className="a__img" src="/public/imgs/galichka.png" alt="" />
                    </div>
                    <div className="a__text">
                      <p>
                        Excepteur sint occaecat cupidatat non proident.
                      </p>
                    </div>
                  </div>

                  <div className=" a__flex">
                    <div className="galochka">
                      <img className="a__img" src="/public/imgs/galichka.png" alt="" />
                    </div>
                    <div className="a__text">
                      <p>
                        Excepteur sint occaecat cupidatat non proident.
                      </p>
                    </div>
                  </div>

                  <div className=" a__flex">
                    <div className="galochka">
                      <img className="a__img" src="/public/imgs/galichka.png" alt="" />
                    </div>
                    <div className="a__text">
                      <p>
                        Excepteur sint occaecat cupidatat non proident.
                      </p>
                    </div>
                  </div>

                </div>

                <button className="a__btn">
                  Discover More
                </button>
              </div>
            </div>


            <div className="abu__img__ota">
              <img className="asbout__img" src="https://bootstrapmade.com/content/demo/Clarity/assets/img/about/about-9.webp" alt="" />

            </div>


          </div>
        </section>



        <section id="services" class="services-section">
          <div class="container">
            <div class="section-header">
              <h2 className="section_">Services</h2>
              <p className="section_">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>



            <div className="servise__card">
              <Services brend="Brand Identity Design" textp="Donec vel sapien augue integer urna vel turpis cursus porta aliquam ligula eget ultricies." />
              <Services brend="UI/UX Design" textp="Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum tellus pellentesque eu." />
              <Services brend="Web Development" textp="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." />
              <Services brend="Mobile App Design" textp="Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida." />
              <Services brend="Digital Marketing" textp="Sed porttitor lectus nibh donec sollicitudin molestie malesuada proin eget tortor risus." />
              <Services brend="SEO Optimization" textp="Curabitur arcu erat accumsan id imperdiet et porttitor at sem pellentesque habitant morbi." />
            </div>

            <div className="alohida">
              <h1>
                Ready to Transform Your Digital Presence?
              </h1>
              <p>
                Let's discuss your project and create something amazing together
              </p>
              <button>
                Get Started Tody
              </button>
            </div>

          </div>
        </section>



        <section>
          <div className="container profil">
            <div className="prof">
              <h1>
                Portfolio
              </h1>
              <p>
                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
              </p>

              <div className="btnslar">
                <Btn turi="All Projects" />
                <Btn turi="Web Design" />
                <Btn turi="Mobile Apps" />
                <Btn turi="Branding" />
                <Btn turi="UI/UX" />
              </div>
            </div>




            <div className="card__gread">

              <Addcard name="Digital Innovation Platform" discripshn="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." />
              <Addcard name="Smart Productivity App" discripshn="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." />
              <Addcard name="Modern Brand Identity" discripshn="Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id." />
              <Addcard name="SaaS Dashboard Design" discripshn="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." />
              <Addcard name="E-commerce Platform" discripshn="Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed." />
              <Addcard name="Fintech Mobile Solution" discripshn="Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus. Sed porttitor lectus nibh." />


            </div>



            <div className="btn__1__s">
              <h1>
                Ready to Transform Your Digital Presence?
              </h1>
              <p>
                Let's discuss your project and create something amazing together
              </p>

         
                <button class="">Start a Project</button>
           
              
            </div>



          </div>
        </section>


      </main>

    </>
  )
}

export default App