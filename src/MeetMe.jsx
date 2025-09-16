import meetImg from "./assets/img/Meet_code.jpg"

export default function MeetMe() {
  return (
    <section id="meet-me-section">
      <h1 className="text-center p-3">Meet Me</h1>
      <div className="container my-5">
        <div className="row text-center g-4" id="meet-me-content">
          <div className="col-12 col-md-6">
            <img
              src={meetImg}
              className="img-fluid"
              alt="computer w/ coding program on a desk w/ cozy vibes"
            />
          </div>
          <div className="col-12 col-md-6" id="meet-me-text">
            <p className="fs-5">
              Hey all, welcome to my portfolio website. I've made this by
              incorporating concepts and skills using html, css, and bootstrap
              I've gained from "Coding for Web". I've been interested in
              computers and software development since I was 13 and dreamed to
              work as a software engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
