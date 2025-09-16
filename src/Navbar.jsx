export default function Navbar() {
  return (
    <nav
      id='mainbar'
      className='navbar navbar-expand-md bg-body-tertiary fixed-top'
      data-bs-theme='dark'
    >
      <div className='container-fluid'>
        {/* pc icon */}
        <a className='navbar-brand' href='#hero-section'>
          <i className='bi bi-pc-display'></i>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a
                className='nav-link active'
                aria-current='page'
                href='#meet-me-section'
              >
                Meet Me
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#skills-section'>
                Skills
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#carousel-section'>
                Pets
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#contact-section'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
