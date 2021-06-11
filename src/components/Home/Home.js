import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <section id="hero" className="s-hero target-section">
          <div className="s-hero__bg rellax" data-rellax-speed={-7} />
          <div className="row s-hero__content">
            <div className="column">
              <div className="s-hero__content-about">
                <h1>Imani Aza </h1>
                <h3>
                  Wilkommen 👋! I am a United States based <span>data analyst</span>, <span>software engineer</span> and <span>data scientist</span> creating awesome dashboards and offering
                effective insights for small businesses and companies across the nation. <a className="smoothscroll" href="#about">Start scrolling </a>
                  to learn more <a className="smoothscroll" href="#about">about me</a>!
              </h3>
                <div className="s-hero__content-social">
                  <li><a href="https://twitter.com/imanisima13"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                  <li><a href="https://github.com/imanisima"><i className="fab fa-github" aria-hidden="true" /></a></li>
                  <li><a href="https://www.kaggle.com/imanisima"><i className="fab fa-kaggle" aria-hidden="true" /></a></li>
                  <li><a href="http://linkedin.com/in/imanisima"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                </div>
              </div> {/* end s-hero__content-about */}
            </div>
          </div> {/* s-hero__content */}
        </section>

        <div className="s-hero__scroll">
          <a href="#about" className="s-hero__scroll-link smoothscroll">
            <span className="scroll-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: '' }}><path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z" /></svg>
            </span>
            <span className="scroll-text">Scroll Down</span>
          </a>
        </div> {/* s-hero__scroll */}
      </div>
    )
  }
}