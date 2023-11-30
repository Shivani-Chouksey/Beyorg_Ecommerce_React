import React from 'react';
import '../css/user/contacts.css'

export default function Contact() {
  return (
    <>
       <header className="page">
            <div className="page_main container-fluid">
                <div className="container">
                    <h1 className="page_header">Contacts</h1>
                    <p className="page_text">Discover nature's power with Beyorg's organic skincare products, which are free of harmful substances and rich with natural goodness for healthy, glowing skin</p>
                </div>
            </div>
            <div className="container">
                <ul className="page_breadcrumbs d-flex flex-wrap">
                    <li className="page_breadcrumbs-item">
                        <a className="link" href="index.html">Home</a>
                    </li>

                    <li className="page_breadcrumbs-item current">
                        <span>Contacts</span>
                    </li>
                </ul>
            </div>
        </header>
        {/* <!-- Contacts content start --> */}
     
            <div className="contacts section">
                <div className="container d-flex flex-wrap flex-xl-nowrap justify-content-between">
                    <div className="contacts_form col-12 col-lg-5">
                        <div className="contacts_form-header">
                            <h2 className="contacts_form-header_title">Have any Questions?</h2>
                            <p className="contacts_form-header_text">
                                Elementum eu facilisis sed odio morbi quis commodo odio. Mauris rhoncus aenean vel elit scelerisque mauris
                                pellentesque
                            </p>
                        </div>
                        <form className="contacts_form-form d-flex flex-column" data-type="feedback" action="form.php" method="post">
                            <label className="contacts_form-form_label" for="contactsName">Your Name</label>
                            <input
                                className="contacts_form-form_field field required"
                                type="text"
                                name="contactsName"
                                id="contactsName"
                                placeholder="Your name"
                            />
                            <label className="contacts_form-form_label" for="contactsEmail">Your Email</label>
                            <input
                                className="contacts_form-form_field field required"
                                type="text"
                                data-type="email"
                                name="contactsEmail"
                                id="contactsEmail"
                                placeholder="you@example.com"
                            />
                            <label className="contacts_form-form_label" for="contactsMessage">Message</label>
                            <textarea
                                className="contacts_form-form_field field required"
                                data-type="message"
                                name="contactsMessage"
                                id="contactsMessage"
                                placeholder="Type Your Message"
                            ></textarea>
                            <button className="contacts_form-form_btn btn" type="submit">Send a Message</button>
                        </form>
                    </div>
                    <div className="contacts_info col-12 col-lg-6 col-xl-auto flex-xl-grow-1">
                        <div className="contacts_info-map">
                           <div id="map">
                                <iframe src=
                                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin"
                                                    width="400"
                                                    height="300"
                                                    frameborder="0"
                                                    style={{border:"0"}}
                                                    allowfullscreen=""
                                                    aria-hidden="false"
                                                     tabindex="0">
                                            </iframe>
                            </div>
                        </div>
                        <ul className="contacts_info-list">
                            <li className="contacts_info-list_item d-flex flex-column flex-sm-row align-items-center">
                                <span className="icon d-flex justify-content-center align-items-center">
                                    <i className="icon-location"></i>
                                </span>
                                <div className="main d-flex flex-column">
                                    <span>211 Awadpuri Bhopal Apt. 287</span>
                                    <span>Bhopal</span>
                                </div>
                            </li>
                            <li className="contacts_info-list_item d-flex flex-column flex-sm-row align-items-center">
                                <span className="icon d-flex justify-content-center align-items-center">
                                    <i className="icon-call"></i>
                                </span>
                                <div className="main d-flex flex-column">
                                    <a className="link" href="tel:+1234567890">+1-896-882-3255</a>
                                    <a className="link" href="tel:+1234567890">+1-896-882-3255</a>
                                </div>
                            </li>
                            <li className="contacts_info-list_item d-flex flex-column flex-sm-row align-items-center">
                                <span className="icon d-flex justify-content-center align-items-center">
                                    <i className="icon-envelope_open"></i>
                                </span>
                                <div className="main d-flex flex-column">
                                    <a className="link" href="mailto:example@domain.com">Beyorg@cannabis.site</a>
                                    <a className="link" href="mailto:example@domain.com">Beyorg@test.site</a>
                                </div>
                            </li>
                        </ul>
                        <ul className="contacts_info-socials d-flex align-items-center justify-content-center justify-content-sm-start">
                            <li className="list-item">
                                <a className="link" href="https://facebook.com" target="_blank" rel="noopener norefferer">
                                    <i className="icon-facebook icon"></i>
                                </a>
                            </li>
                            <li className="list-item">
                                <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                    <i className="icon-instagram icon"></i>
                                </a>
                            </li>
                            <li className="list-item">
                                <a className="link" href="https://twitter.com" target="_blank" rel="noopener norefferer">
                                    <i className="icon-twitter icon"></i>
                                </a>
                            </li>
                            <li className="list-item">
                                <a className="link" href="https://whatsapp.com" target="_blank" rel="noopener norefferer">
                                    <i className="icon-whatsapp icon"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
       
    </>
  )
}
