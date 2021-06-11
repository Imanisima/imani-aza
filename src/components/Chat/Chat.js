import React, { Component } from 'react'

export default class Chat extends Component {
    render() {
      return (
        <div>
          <section id="contact" className="s-contact target-section">
        <div className="row s-contact__header">
          <div className="column large-12">
            <h3 className="section-header-allcaps">Let's Chat</h3>
          </div>
        </div>
        <div className="row s-contact__content">
          <div className="column large-7 medium-12">
            <h4 className="huge-text">
              Have a new project in mind? Let's collaborate and build something awesome! :)
            </h4>
          </div>
          <div className="column large-4 medium-12">
            <div className="row contact-infos">
              <div className="column large-12 medium-6 tab-12">
                <div className="contact-block">
                  <h5 className="contact-block__header">
                    Email
                  </h5>
                  <p className="contact-block__content">
                    <a className="mailtoui" href="mailto:imanicaza@gmail.com">imanicaza at gmail</a>
                  </p>
                </div> {/* end contact-block */}
              </div>
              <div className="column large-12 medium-6 tab-12">
                <div className="contact-block">
                  <h5 className="contact-block__header">
                    Phone
                  </h5>
                  <p className="contact-block__content">
                    <a href="tel:+1975432345">+915-996-2525</a>
                  </p>
                </div> {/* end contact-block */}
              </div>
              <div className="column large-12">
                <a href="mailto:imanicaza@gmail.com" className="mailtoui btn btn--primary h-full-width">Let's Talk</a>
              </div>
            </div> {/* end contact-infos */}
          </div>
        </div> {/* s-contact__content */}
      </section> {/* end s-contact */}
        </div>
      )
    }
  }