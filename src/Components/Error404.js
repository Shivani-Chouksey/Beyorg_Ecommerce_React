import React from 'react'

export default function Error404() {
    
  return (
    <>
        <main className="error section--nopb my-5">
            <div className="container">
                <div className="error_media">
                    <picture>
                        <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                        <img className="lazy error_media-img" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="404" />
                    </picture>
                </div>
                <div className="error_main d-flex flex-column align-items-center">
                    <h3 className="error_main-title">Page not Found</h3>
                    <p className="error_main-text d-md-flex flex-column align-items-center">
                        <span className="linebreak">The page you are looking for doesn't exist.</span>
                        <span className="linebreak">Looks like you are in the wrong place.</span>
                        <span className="linebreak">Let us guide you back!</span>
                    </p>
                    <a className="btn" href="index.html">Back to Home Page</a>
                </div>
            </div>
        </main>
    </>
  )
}
