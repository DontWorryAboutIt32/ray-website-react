export default function Skills() {
  return (
    <section id='skills-section'>
      <div className='container py-3'>
        <h1 className='text-center my-4'>Skills</h1>

        <div className='row text-center g-4 skills'>
          <div className='col-12 col-sm-6 col-lg-3'>
            {/* HTML */}
            <i className='devicon-html5-plain-wordmark'></i>
            <p>Structuring Content</p>
          </div>
          <div className='col-12 col-sm-6 col-lg-3'>
            {/* CSS */}
            <i className='devicon-css3-plain-wordmark'></i>
            <p>Looking Good</p>
          </div>
          <div className='col-12 col-sm-6 col-lg-3'>
            {/* Bootstrap */}
            <i className='devicon-bootstrap-plain-wordmark'></i>
            <p>Easy Shortcut</p>
          </div>
          <div className='col-12 col-sm-6 col-lg-3'>
            {/* Java */}
            <i className='devicon-java-plain-wordmark'></i>
            <p>Object-oriented</p>
          </div>
        </div>
      </div>
    </section>
  );
}
