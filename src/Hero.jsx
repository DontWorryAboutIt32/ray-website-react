import pfp from "./assets/img/Scuffed-pfp.jpeg"
import heroBg from "./assets/img/hero.jpg"

export default function Hero() {
  return (
    <section id="hero-section">
      <div
        className="hero-img"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="pfp text-center">
          <img
            src={pfp}
            className="img-fluid border border-5"
            alt="Raymond's face"
          />
          <h1>Raymond Tran</h1>
          <h4 className="fst-italic">Chill, Relax, Code</h4>
          <div className="d-none d-sm-none d-md-none d-lg-none d-xl-block">
            <h4>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                and ..zzz... Sleep
              </a>
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}
