export default function Contact() {
  return (
    <section id='contact-section'>
      <div className='container py-3'>
        <h1 className='text-center my-4'>Contact</h1>

        <div className='row text-center g-4 contact'>
          <div className='col-12 col-md-4'>
            {/* LinkedIn */}
            <a href='https://www.linkedin.com/in/ray-t-bit/'>
              <i className='devicon-linkedin-plain'></i>
            </a>
          </div>
          <div className='col-12 col-md-4'>
            {/* GitHub */}
            <a href='https://github.com/DontWorryAboutIt32'>
              <i className='devicon-github-original'></i>
            </a>
          </div>
          <div className='col-12 col-md-4'>
            {/* Email */}
            <a href='mailto:raytran2004v2@gmail.com'>
              <i className='devicon-google-plain'></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
