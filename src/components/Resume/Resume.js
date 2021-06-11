import React, { Component } from 'react'

export default class Resume extends Component {
    render() {
      return (
        <div>
          <section id="resume" className="s-resume target-section">
        <div className="row s-resume__section">
          <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Career</h3>
          </div>
          <div className="column large-9 tab-12">
            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">USAA</h4>
                <p className="resume-block__header-meta">
                  <span>Data Scientist</span> 
                  <span className="resume-block__header-date">
                    January 2021 - Present
                  </span>
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
              </p>
            </div> {/* end resume-block */}

            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">USAA</h4>
                <p className="resume-block__header-meta">
                  <span>Data Analyst Intern</span> 
                  <span className="resume-block__header-date">
                    May 2020 - July 2020
                  </span>
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
              </p>
            </div> {/* end resume-block */}

            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">Microsoft</h4>
                <p className="resume-block__header-meta">
                  <span>Software Engineer Intern</span> 
                  <span className="resume-block__header-date">
                    May 2018 - August 2019
                  </span>
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
              </p>
            </div> {/* end resume-block */}

          </div>
        </div> {/* s-resume__section */}

        {/* EDUCATION */}
        <div className="row s-resume__section">
          <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Education</h3>
          </div>
          <div className="column large-9 tab-12">
            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">The University of Texas at San Antonio (UTSA) </h4>
                <p className="resume-block__header-meta">
                  <span>M.S. Information Technology (IT), Cyber Security</span> 
                  <span className="resume-block__header-date">
                    Present
                  </span>
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
              </p>
            </div> {/* end resume-block */}
            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">The University of Texas at El Paso (UTEP)</h4>
                <p className="resume-block__header-meta">
                  <span>B.S. Computer Science | Math Minor | Data Analytics Concentration</span> 
                  <span className="resume-block__header-date">
                    December 2020
                  </span>
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
              </p>
            </div> {/* end resume-block */}
          </div>
        </div> {/* s-resume__section */}

        {/* SKILLS */}
        <div className="row s-resume__section">
          <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Skills</h3>
          </div>
          <div className="column large-9 tab-12">
            <div className="resume-block">
              <p>
                Although my specialty is currently data analytics, I also have experience in software engineering, software developement, and web design. Here are some of the skills I have acquired over the years!
              </p>
              <ul className="skill-bars-fat">
                <li>
                  <div className="progress percent90" />
                  <strong>Python</strong>
                </li>
                <li>
                  <div className="progress percent85" />
                  <strong>Java</strong>
                </li>
                <li>
                  <div className="progress percent85" />
                  <strong>R</strong>
                </li>
                <li>
                  <div className="progress percent80" />
                  <strong>VueJS</strong>
                </li>
                <li>
                  <div className="progress percent90" />
                  <strong>SQL</strong>
                </li>
                <li>
                  <div className="progress percent90" />
                  <strong>Hadoop</strong>
                </li>
                <li>
                  <div className="progress percent60" />
                  <strong>ReactJS</strong>
                </li>
                
              </ul>
            </div> {/* end resume-block */}
          </div>
        </div> {/* s-resume__section */}
      </section> {/* end s-resume */}
        </div>
      )
    }
  }