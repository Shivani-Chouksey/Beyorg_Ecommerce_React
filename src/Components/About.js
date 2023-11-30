import React from 'react';

import '../css/user/about.min.css';

import about from '../img/about1.webp';
import about2 from '../img/about2.webp';
import about3 from '../img/about3.webp';
import about4 from '../img/about4.webp';
import about5 from '../img/about5.webp';
import about6 from '../img/about6.webp';


export default function About() {
    return (
        <>
            <header className="page">
                <div className="page_main container-fluid">
                    <div className="container">
                        <h1 className="page_header">About</h1>
                        <p className="page_text">Nibh tellus molestie nunc non blandit. Mi tempus imperdiet nulla malesuada pellentesque elit</p>
                    </div>
                </div>
                <div className="container">
                    <ul className="page_breadcrumbs d-flex flex-wrap">
                        <li className="page_breadcrumbs-item">
                            <a className="link" href="index.html">Home</a>
                        </li>

                        <li className="page_breadcrumbs-item current">
                            <span>About</span>
                        </li>
                    </ul>
                </div>
            </header>
            {/* About content start */}

            {/* About section start */}
            <section className="about section--nopb">
                <div className="container">
                    <div className="about_main d-lg-flex justify-content-between">
                        <div className="about_main-content col-lg-6 col-xl-auto">
                            <h2 className="about_main-content_header">
                                Our knowledgeable team can help you design experiences tailored to your needs by accessing one of the flower
                                selections
                            </h2>
                            <p className="about_main-content_text">
                                Elementum eu facilisis sed odio morbi quis commodo odio. Mauris rhoncus aenean vel elit scelerisque mauris
                                pellentesque. Accumsan sit amet nulla facilisi morbi tempus. Suscipit tellus mauris a diam maecenas sed enim
                                ut sem. Turpis egestas maecenas pharetra convallis posuere
                            </p>
                        </div>
                        <div className="about_main-media">
                            <picture>
                                <source data-srcset={about} srcset={about} type="image/webp" />
                                <img className="lazy" data-src={about} src={about} alt="media" />
                            </picture>
                        </div>
                    </div>
                    <ul className="about_numbers d-flex flex-wrap">
                        <li className="about_numbers-group col-sm-6 col-lg-3" data-order="1">
                            <div className="wrapper d-flex flex-column align-items-center align-items-sm-start">
                                <span className="countNum number d-flex align-items-center secondary" data-suffix="+" data-value="180">0</span>
                                <p className="number-label">New products to explore. Arcu vitae elementum curabitur vitae nunc sed</p>
                            </div>
                        </li>
                        <li className="about_numbers-group col-sm-6 col-lg-3" data-order="2">
                            <div className="wrapper d-flex flex-column align-items-center align-items-sm-start">
                                <span className="countNum number d-flex align-items-center secondary" data-suffix="X" data-value="3">0</span>
                                <p className="number-label">Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur vitae nunc</p>
                            </div>
                        </li>
                        <li className="about_numbers-group col-sm-6 col-lg-3" data-order="3">
                            <div className="wrapper d-flex flex-column align-items-center align-items-sm-start">
                                <span className="countNum number d-flex align-items-center secondary" data-suffix="%" data-value="100">0</span>
                                <p className="number-label">Mauris a diam maecenas sed enim ut sem curabitur vitae nunc sed</p>
                            </div>
                        </li>
                        <li className="about_numbers-group col-sm-6 col-lg-3" data-order="4">
                            <div className="wrapper d-flex flex-column align-items-center align-items-sm-start">
                                <span className="countNum number d-flex align-items-center secondary" data-suffix="K" data-value="11">0</span>
                                <p className="number-label">Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur vitae nunc</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            {/* About section end */}
            {/* Features section start */}

            <section className="features section--nopb">
                <div className="container">
                    <div className="features_header">
                        <h2 className="features_header-title">How We Work</h2>
                        <p className="features_header-text">
                            Accumsan sit amet nulla facilisi morbi tempus. Suscipit tellus mauris a diam maecenas sed enim ut sem
                        </p>
                    </div>
                    <section className='container'>
                        <div className="row align-items-start">
                            <div className="col text-center">
                                <h1>   <i className="bi bi-truck "></i></h1>
                                <h4 className="title mt-5 " >Free Shipping & Returns</h4>
                                <p className="text">Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur vitae nunc</p>
                            </div>
                            <div className="col text-center">
                                <h1>
                                    <i className="bi bi-currency-rupee"></i>

                                </h1>
                                <h4 className="title mt-5">Money Back Guarantee</h4>
                                <p className="text">Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur vitae nunc sed</p>
                            </div>
                            <div className="col  ">
                                <h1><i className="bi bi-headset"></i></h1>
                                <h4 className="title mt-5">Online Support</h4>
                                <p className="text">Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur vitae nunc sed</p>
                            </div>
                            <div className="col text-center ">
                                <h1><i className="bi bi-bank "></i></h1>
                                <h4 className="title mt-5">100% Secure Payment</h4>
                                <p className="text">Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur vitae nunc sed</p>
                            </div>
                        </div>
                    </section>
                    {/* <ul className="features-list d-md-flex flex-wrap justify-content-xl-between">
                        <li
                            className="features-list_item col-md-6 col-xl-3 d-flex flex-column align-items-center"
                            data-order="1"
                            data-aos="fade-up"
                        >
                            <span className="icon d-flex align-items-center justify-content-center">
                            <i className="bi bi-currency-rupee"></i>
                            </span>
                            <h4 className="title">Free Shipping & Returns</h4>
                            <p className="text">Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur vitae nunc</p>
                        </li>
                        <li
                            className="features-list_item col-md-6 col-xl-3 d-flex flex-column align-items-center"
                            data-order="2"
                            data-aos="fade-up"
                        >
                            <span className="icon d-flex align-items-center justify-content-center">
                                <svg className="" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0 25C0 11.2156 11.2156 0 25 0C38.7844 0 50 11.2156 50 25C50 38.7844 38.7844 50 25 50C11.2156 50 0 38.7844 0 25ZM3.125 25C3.125 37.0625 12.9375 46.875 25 46.875C37.0625 46.875 46.875 37.0625 46.875 25C46.875 12.9375 37.0625 3.125 25 3.125C12.9375 3.125 3.125 12.9375 3.125 25Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M25.5109 23.9229C22.8562 23.9229 20.613 22.4689 20.613 20.7483C20.613 19.0277 22.8562 17.5737 25.5109 17.5737C27.013 17.5737 28.404 18.0308 29.3248 18.8245C29.9975 19.4054 31.026 19.3515 31.6301 18.6912C32.2309 18.0372 32.1689 17.034 31.493 16.4499C30.3501 15.4626 28.8154 14.7959 27.1436 14.5324V12.8118C27.1436 11.9356 26.4121 11.2245 25.5109 11.2245C24.6097 11.2245 23.8783 11.9356 23.8783 12.8118V14.5261C20.1558 15.1166 17.3477 17.6816 17.3477 20.7483C17.3477 24.2499 21.0113 27.0975 25.5109 27.0975C28.1656 27.0975 30.4089 28.5515 30.4089 30.2721C30.4089 31.9927 28.1656 33.4467 25.5109 33.4467C24.0089 33.4467 22.6179 32.9896 21.697 32.1959C21.0244 31.6118 19.9926 31.6689 19.3917 32.3292C18.7909 32.9832 18.853 33.9864 19.5289 34.5705C20.6717 35.561 22.2064 36.2245 23.8783 36.4912V38.2086C23.8783 39.0848 24.6097 39.7959 25.5109 39.7959C26.4121 39.7959 27.1436 39.0848 27.1436 38.2086V36.4943C30.866 35.9039 33.6742 33.3388 33.6742 30.2721C33.6742 26.7705 30.0105 23.9229 25.5109 23.9229Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                            <h4 className="title">Money Back Guarantee</h4>
                            <p className="text">Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur vitae nunc sed</p>
                        </li>
                        <li
                            className="features-list_item col-md-6 col-xl-3 d-flex flex-column align-items-center"
                            data-order="3"
                            data-aos="fade-up"
                        >
                            <span className="icon d-flex align-items-center justify-content-center">
                                <svg className="" width="47" height="50" viewBox="0 0 47 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M41.2292 20.6684H41.3542C44.2277 20.6684 46.2265 23.8244 46.2264 26.485V34.2202C46.2264 36.6336 44.5398 38.3044 41.8538 38.49L40.6669 40.2227C38.3206 43.3138 34.6389 45.126 30.7349 45.1113C30.5595 46.2319 30.0354 47.2703 29.2356 48.0817C28.0503 49.2834 26.4339 49.9728 24.7381 50C21.3125 50.0002 18.5257 47.2672 18.4915 43.8738C18.5146 40.9805 20.5779 38.4977 23.4397 37.9196C26.7861 37.2434 30.0524 39.3828 30.7349 42.698C33.8524 42.7127 36.7936 41.2673 38.6681 38.7995L38.793 38.6139H37.3563C37.3328 38.6128 37.3092 38.611 37.2858 38.6086C36.634 38.5395 36.1622 37.9601 36.2319 37.3144V22.1535C36.2319 21.4108 36.6692 20.6683 37.3563 20.6683H38.7306V17.6361C38.7306 9.26299 31.8786 2.47514 23.4264 2.47514C14.9742 2.47514 8.12218 9.26299 8.12218 17.6361V20.6683H9.49645C10.1836 20.6683 10.6208 21.4109 10.6208 22.1535V37.3144C10.6233 37.3376 10.6251 37.361 10.6262 37.3843C10.6571 38.0329 10.1512 38.5836 9.49645 38.614H4.87398L4.85772 38.6138C4.84166 38.6136 4.82563 38.6133 4.80954 38.6128C2.08503 38.5442 -0.0676036 36.3007 0.00162401 33.6017V25.8665C0.00162401 23.0817 2.12544 20.6684 4.87398 20.6684H5.62353V17.6362C5.62353 7.89601 13.594 0 23.4264 0C33.2587 0 41.2292 7.89601 41.2292 17.6362V20.6684ZM4.87398 36.1387H8.12218V23.1436H4.87398C3.49971 23.1436 2.50027 24.4431 2.50027 25.8664V33.6015C2.4992 33.6236 2.49836 33.6455 2.49776 33.6674C2.465 34.9999 3.52888 36.1063 4.87398 36.1387ZM27.4242 46.3492C26.732 47.0928 25.7593 47.5186 24.7382 47.525C22.7059 47.493 21.0566 45.8864 20.9903 43.8739C20.9894 41.8575 22.6388 40.2222 24.6743 40.2214C26.7097 40.2206 28.3604 41.8545 28.3613 43.8709V43.8739C28.4133 44.7927 28.0732 45.6909 27.4242 46.3492ZM41.3542 36.1387C42.1037 36.1387 43.7279 35.8912 43.7279 34.2204V26.4852C43.7279 25.062 42.7284 23.1437 41.3542 23.1437H38.7306V36.1387H41.3542Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                            <h4 className="title">Online Support</h4>
                            <p className="text">Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur vitae nunc sed</p>
                        </li>
                        <li
                            className="features-list_item col-md-6 col-xl-3 d-flex flex-column align-items-center"
                            data-order="4"
                            data-aos="fade-up"
                        >
                            <span className="icon d-flex align-items-center justify-content-center">
                                <svg className="" width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M47.311 27.6956C46.4686 27.6956 45.7849 28.3823 45.7849 29.2284V39.9578H3.05233V21.5645H19.8401C20.6826 21.5645 21.3663 20.8778 21.3663 20.0318C21.3663 19.1857 20.6826 18.499 19.8401 18.499H3.05233V12.3679H19.8401C20.6826 12.3679 21.3663 11.6812 21.3663 10.8351C21.3663 9.98905 20.6826 9.30237 19.8401 9.30237H3.05233C1.36744 9.30237 0 10.6757 0 12.3679V39.9578C0 41.6499 1.36744 43.0233 3.05233 43.0233H45.7849C47.4698 43.0233 48.8372 41.6499 48.8372 39.9578V29.2284C48.8372 28.3823 48.1535 27.6956 47.311 27.6956Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M14.7285 27.907H8.52695C7.67114 27.907 6.97656 28.6884 6.97656 29.6512C6.97656 30.614 7.67114 31.3954 8.52695 31.3954H14.7285C15.5843 31.3954 16.2789 30.614 16.2789 29.6512C16.2789 28.6884 15.5843 27.907 14.7285 27.907Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M38.3926 0.1248L49.0758 4.83422C49.6374 5.08225 50.0006 5.65052 50.0006 6.27844V12.5577C50.0006 21.2073 46.8964 26.2558 38.5514 31.1881C38.3163 31.3263 38.0538 31.3953 37.7913 31.3953C37.5288 31.3953 37.2663 31.3263 37.0313 31.1881C28.6862 26.2432 25.582 21.1947 25.582 12.5577V6.27844C25.582 5.65052 25.9453 5.08225 26.5038 4.83422L37.187 0.1248C37.5746 -0.0415999 38.005 -0.0415999 38.3926 0.1248ZM37.7913 28.0046C44.6163 23.7975 46.9483 19.807 46.9483 12.5577V7.31451L37.7913 3.27697L28.6344 7.31451V12.5577C28.6344 19.7976 30.9663 23.7881 37.7913 28.0046Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M42.4773 9.62645C41.8524 9.11805 40.9396 9.21674 40.4338 9.85971L35.8643 15.7392L34.0562 12.9579C33.6056 12.2701 32.7016 12.0877 32.0417 12.5423C31.3761 12.9998 31.1929 13.9299 31.6377 14.6147L34.5445 19.1006C34.8033 19.4983 35.2277 19.7436 35.6928 19.7675C35.7131 19.7675 35.7364 19.7675 35.7538 19.7675C36.1927 19.7675 36.6113 19.5641 36.8904 19.2053L42.7041 11.7288C43.2041 11.0829 43.1052 10.1438 42.4773 9.62645Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                            <h4 className="title">100% Secure Payment</h4>
                            <p className="text">Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur vitae nunc sed</p>
                        </li>
                    </ul> */}
                </div>
            </section>
            {/* Features section end */}
            {/* Sale section start */}
            <section className="sale section--nopb">
                <div className="container">
                    <div className="sale_grid d-grid">
                        <div className="sale_header">
                            <h2 className="sale_header-title mb-4">Buy Beyorg Beyond  Organic Product </h2>
                            {/* <p className="sale_header-text">Two free samples with any order when you spend $50</p> */}
                            <a className="sale_header-btn btn" href="shop.html">Shop Now</a>
                        </div>
                        <div className="sale_grid-item sale_grid-item--pm">
                            <div className="sale_grid-item_bg">
                                <picture>
                                    <source data-srcset={about2} srcset={about2} type="image/webp" />
                                    <img className="lazy" data-src={about2} src={about2} alt="media" />
                                </picture>
                            </div>
                            <div className="sale_grid-item_content d-flex flex-column justify-content-end ">
                                <h3 className="sale_grid-item_title">Leaf Powder</h3>
                                <div className="wrapper d-flex flex-column">
                                    <span className="text">Sale up to 5%</span>
                                    <a className="btn--underline" href="shop.html">Shop now</a>
                                </div>
                            </div>
                        </div>
                        <div className="sale_grid-item sale_grid-item--am">
                            <div className="sale_grid-item_bg">
                                <picture>
                                    <source data-srcset={about3} srcset={about3} type="image/webp" />
                                    <img className="lazy" data-src={about3} src={about3} alt="media" />
                                </picture>
                            </div>
                            <div className="sale_grid-item_content d-flex flex-column justify-content-start  ">
                                <h3 className="sale_grid-item_title ">Himalayan Salt</h3>
                                <div className="wrapper d-flex flex-column">
                                    <span className="text">Sale up to 15%</span>
                                    <a className="btn--underline" href="shop.html">Shop now</a>
                                </div>
                            </div>
                        </div>
                        <div className="sale_grid-item sale_grid-item--medical">
                            <div className="sale_grid-item_bg">
                                <picture>
                                    <source
                                        data-srcset={about4}
                                        srcset={about4}
                                        type="image/webp"
                                    />
                                    <img
                                        className="lazy"
                                        data-src={about4}
                                        src={about4}
                                        alt="media"
                                    />
                                </picture>
                            </div>
                            <div className="sale_grid-item_content d-flex flex-column justify-content-start">
                                <h3 className="sale_grid-item_title">Wood Charcoal Powder</h3>
                                <div className="wrapper d-flex flex-column">
                                    <span className="text">Sale up to 20%</span>
                                    <a className="btn--underline" href="shop.html">Shop now</a>
                                </div>
                            </div>
                        </div>
                        <div className="sale_grid-item sale_grid-item--weekly">
                            <div className="sale_grid-item_bg">
                                <picture>
                                    <source
                                        data-srcset={about5}
                                        srcset={about5}
                                        type="image/webp"
                                    />
                                    <img className="lazy" data-src={about5} src={about5} alt="media" />
                                </picture>
                            </div>
                            <div className="sale_grid-item_content d-flex flex-column justify-content-center">
                                <span className="label d-flex align-items-center justify-content-center">-30%</span>
                                <span className="sale_grid-item_subtitle">Wood Powder</span>
                                <h3 className="sale_grid-item_title">Weekly Special <span className="linebreak"> Products</span></h3>
                                <a className="btn--underline" href="shop.html">Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Sale section end */}
            {/* Newsletter section start */}
            <section className="newsletter section">
                <div className="container">
                    <div className="wrapper">
                        <div className="newsletter_deco">
                            {/* <div className="newsletter_deco-wrapper">
                                <picture>
                                    <source
                                        data-srcset="img/banner.png"
                                        srcset="img/banner.png"
                                        type="image/webp"
                                    />
                                    <img
                                        className="lazy leaf leaf--left"
                                        data-src="img/banner.png"
                                        src="img/banner.png"
                                        alt="deco"
                                    />
                                </picture>
                            </div> */}
                            {/* <div className="newsletter_deco-wrapper">
                                <picture>
                                    <source
                                        data-srcset="img/placeholder.jpg"
                                        srcset="img/placeholder.jpg"
                                        type="image/webp"
                                    />
                                    <img
                                        className="lazy leaf leaf--right"
                                        data-src="img/placeholder.jpg"
                                        src="img/placeholder.jpg"
                                        alt="deco"
                                    />
                                </picture>
                            </div> */}
                        </div>
                        <div className="newsletter_highlight">
                            <span className="underlay underlay--left">
                                <span className="underlay_circle underlay_circle--accent"></span>
                            </span>
                            <span className="underlay underlay--right">
                                <span className="underlay_circle underlay_circle--small underlay_circle--green"></span>
                                <span className="underlay_circle underlay_circle--big underlay_circle--green"></span>
                            </span>
                        </div>
                        <div className="newsletter_content">
                            <div className="newsletter_header">
                                <h2 className="newsletter_header-title">Checkout  Products</h2>
                                <p className="newsletter_header-text">
                                    Discover nature's power with Beyorg's organic skincare products, which are free of harmful substances and rich with natural goodness for healthy, glowing skin.                                </p>
                            </div>
                            <a className="sale_header-btn btn" href="shop.html">Checkout</a>


                            {/* <form className="newsletter_form d-sm-flex" data-type="newsletter" action="#" method="post">
                                <input className="newsletter_form-field field required" type="text" data-type="email" placeholder="Email" />
                                <button className="newsletter_form-btn btn" type="submit">Send</button>
                            </form> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* Newsletter section end */}
            {/* Guide section start */}
            <section className="guide section">
                <div className="container d-flex flex-column-reverse flex-lg-row">
                    <div className="guide_media">
                        <picture>
                            <source data-srcset={about6} srcset={about6} type="image/webp" />
                            <img className="lazy guide_media-img" data-src={about6} src={about6} alt="media" />
                        </picture>
                        <span className="underlay">
                            <span className="underlay_circle underlay_circle--accent"></span>
                            <span className="underlay_circle underlay_circle--green"></span>
                        </span>
                    </div>
                    <div className="guide_main col-lg-6 offset-xxl-6">
                        <div className="guide_main-header">
                            <h2 className="guide_main-header_title">How to Buy Products Online</h2>
                            <p className="guide_main-header_text">
                                Elementum eu facilisis sed odio morbi quis commodo odio. Mauris rhoncus aenean vel elit scelerisque mauris
                                pellentesque
                            </p>
                        </div>
                        <ul className="guide_main-list">
                            <li className="guide_main-list_item d-flex justify-content-between" data-aos="fade-up">
                                <span className="step d-flex align-items-center justify-content-center">1</span>
                                <div className="wrapper">
                                    <h5 className="title">Sing up & Get verified</h5>
                                    <p className="text">Metus vulputate eu scelerisque felis imperdiet proin fermentum leo</p>
                                </div>
                            </li>
                            <li className="guide_main-list_item d-flex justify-content-between" data-aos="fade-up">
                                <span className="step d-flex align-items-center justify-content-center">2</span>
                                <div className="wrapper">
                                    <h5 className="title">Order online</h5>
                                    <p className="text">Eget dolor morbi non arcu risus quis varius quam quisque</p>
                                </div>
                            </li>
                            <li className="guide_main-list_item d-flex justify-content-between" data-aos="fade-up">
                                <span className="step d-flex align-items-center justify-content-center">3</span>
                                <div className="wrapper">
                                    <h5 className="title">Receive your order</h5>
                                    <p className="text">Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate</p>
                                </div>
                            </li>
                        </ul>
                        <div className="guide_main-secondary d-flex flex-column flex-sm-row justify-content-between">
                            <div className="guide_main-secondary_item">
                                <h5 className="title">Express delivery service</h5>
                                <p className="text">Arcu felis bibendum ut tristique et egestas. Id semper risus in hendrerit gravida rutrum</p>
                            </div>
                            <div className="guide_main-secondary_item">
                                <h5 className="title">Support team is available 24/7</h5>
                                <div className="wrapper d-flex align-items-center">
                                    <span className="icon d-flex align-items-center justify-content-center">
                                        <i className="icon-call"></i>
                                    </span>
                                    <div className="wrapper d-flex flex-column">
                                        <span>Phone number</span>
                                        <a className="link" href="tel:+1234567890">+1-202-555-0133</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Guide section end */}
            {/* Team section start */}
            {/* <section className="team section--nopb">
                <div className="container">
                    <div className="team_header">
                        <h2 className="team_header-title">Meet the Specialist Team</h2>
                        <p className="team_header-text">Vivamus at augue eget arcu dictum varius. Pharetra et ultrices neque ornare</p>
                    </div>
                    <ul className="team_list d-flex flex-wrap">
                        <li className="team_list-item col-12 col-md-6 col-xl-4 col-xxl-3" data-order="1" data-aos="fade-up">
                            <div className="wrapper d-flex flex-column">
                                <div className="team_list-item_img">
                                    <picture>
                                        <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                                        <img className="lazy img" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="Richard Edwards" />
                                    </picture>
                                    <div className="overlay d-flex justify-content-center align-items-end">
                                        <ul className="overlay_socials d-flex justify-content-center align-items-center">
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://facebook.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://instagram.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-instagram"></i>
                                                </a>
                                            </li>
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://twitter.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-twitter"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team_list-item_info d-flex flex-column align-items-center">
                                    <span className="name">Richard Edwards</span>
                                    <span className="profession secondary">CEO & Founder</span>
                                </div>
                            </div>
                        </li>
                        <li className="team_list-item col-12 col-md-6 col-xl-4 col-xxl-3" data-order="2" data-aos="fade-up">
                            <div className="wrapper d-flex flex-column">
                                <div className="team_list-item_img">
                                    <picture>
                                        <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                                        <img className="lazy img" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="Maria White" />
                                    </picture>
                                    <div className="overlay d-flex justify-content-center align-items-end">
                                        <ul className="overlay_socials d-flex justify-content-center align-items-center">
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://facebook.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://instagram.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-instagram"></i>
                                                </a>
                                            </li>
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://twitter.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-twitter"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team_list-item_info d-flex flex-column align-items-center">
                                    <span className="name">Maria White</span>
                                    <span className="profession secondary">Support Engineer</span>
                                </div>
                            </div>
                        </li>
                        <li className="team_list-item col-12 col-md-6 col-xl-4 col-xxl-3" data-order="3" data-aos="fade-up">
                            <div className="wrapper d-flex flex-column">
                                <div className="team_list-item_img">
                                    <picture>
                                        <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                                        <img className="lazy img" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="Chris Gibson" />
                                    </picture>
                                    <div className="overlay d-flex justify-content-center align-items-end">
                                        <ul className="overlay_socials d-flex justify-content-center align-items-center">
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://facebook.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://instagram.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-instagram"></i>
                                                </a>
                                            </li>
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://twitter.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-twitter"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team_list-item_info d-flex flex-column align-items-center">
                                    <span className="name">Chris Gibson</span>
                                    <span className="profession secondary">Lab Assistant</span>
                                </div>
                            </div>
                        </li>
                        <li className="team_list-item col-12 col-md-6 col-xl-4 col-xxl-3" data-order="4" data-aos="fade-up">
                            <div className="wrapper d-flex flex-column">
                                <div className="team_list-item_img">
                                    <picture>
                                        <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                                        <img className="lazy img" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="Linda Nelson" />
                                    </picture>
                                    <div className="overlay d-flex justify-content-center align-items-end">
                                        <ul className="overlay_socials d-flex justify-content-center align-items-center">
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://facebook.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://instagram.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-instagram"></i>
                                                </a>
                                            </li>
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://twitter.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-twitter"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team_list-item_info d-flex flex-column align-items-center">
                                    <span className="name">Linda Nelson</span>
                                    <span className="profession secondary">Lab Assistant</span>
                                </div>
                            </div>
                        </li>
                        <li className="team_list-item col-12 col-md-6 col-xl-4 col-xxl-3" data-order="5" data-aos="fade-up">
                            <div className="wrapper d-flex flex-column">
                                <div className="team_list-item_img">
                                    <picture>
                                        <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                                        <img className="lazy img" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="Katrina King" />
                                    </picture>
                                    <div className="overlay d-flex justify-content-center align-items-end">
                                        <ul className="overlay_socials d-flex justify-content-center align-items-center">
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://facebook.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://instagram.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-instagram"></i>
                                                </a>
                                            </li>
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://twitter.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-twitter"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team_list-item_info d-flex flex-column align-items-center">
                                    <span className="name">Katrina King</span>
                                    <span className="profession secondary">Sales Manager</span>
                                </div>
                            </div>
                        </li>
                        <li className="team_list-item col-12 col-md-6 col-xl-4 col-xxl-3" data-order="6" data-aos="fade-up">
                            <div className="wrapper d-flex flex-column">
                                <div className="team_list-item_img">
                                    <picture>
                                        <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                                        <img className="lazy img" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="John Anderson" />
                                    </picture>
                                    <div className="overlay d-flex justify-content-center align-items-end">
                                        <ul className="overlay_socials d-flex justify-content-center align-items-center">
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://facebook.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://instagram.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-instagram"></i>
                                                </a>
                                            </li>
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://twitter.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-twitter"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team_list-item_info d-flex flex-column align-items-center">
                                    <span className="name">John Anderson</span>
                                    <span className="profession secondary">Sales Manager</span>
                                </div>
                            </div>
                        </li>
                        <li className="team_list-item col-12 col-md-6 col-xl-4 col-xxl-3" data-order="7" data-aos="fade-up">
                            <div className="wrapper d-flex flex-column">
                                <div className="team_list-item_img">
                                    <picture>
                                        <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                                        <img className="lazy img" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="Randy Stewart" />
                                    </picture>
                                    <div className="overlay d-flex justify-content-center align-items-end">
                                        <ul className="overlay_socials d-flex justify-content-center align-items-center">
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://facebook.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://instagram.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-instagram"></i>
                                                </a>
                                            </li>
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://twitter.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-twitter"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team_list-item_info d-flex flex-column align-items-center">
                                    <span className="name">Randy Stewart</span>
                                    <span className="profession secondary">Sales Manager</span>
                                </div>
                            </div>
                        </li>
                        <li className="team_list-item col-12 col-md-6 col-xl-4 col-xxl-3" data-order="8" data-aos="fade-up">
                            <div className="wrapper d-flex flex-column">
                                <div className="team_list-item_img">
                                    <picture>
                                        <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                                        <img className="lazy img" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="Zachary Wagner" />
                                    </picture>
                                    <div className="overlay d-flex justify-content-center align-items-end">
                                        <ul className="overlay_socials d-flex justify-content-center align-items-center">
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://facebook.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://instagram.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-instagram"></i>
                                                </a>
                                            </li>
                                            <li className="list-item">
                                                <a
                                                    className="link d-inline-flex justify-content-center align-items-center"
                                                    href="https://twitter.com"
                                                    target="_blank"
                                                    rel="noopener norefferer"
                                                >
                                                    <i className="icon-twitter"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team_list-item_info d-flex flex-column align-items-center">
                                    <span className="name">Zachary Wagner</span>
                                    <span className="profession secondary">Social Media Manager</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section> */}
            {/* Team section end */}
            {/* Latest posts section start */}
            {/* <section className="latest section">
                <div className="container">
                    <h2 className="latest_header">Latest Posts</h2>
                    <ul className="latest_posts d-md-flex flex-wrap">
                        <li className="latest_posts-post col-md-6 col-xl-4" data-order="1" data-aos="fade-up">
                            <div className="latest_posts-post_wrapper">
                                <div className="media">
                                    <picture>
                                        <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                                        <img
                                            className="lazy"
                                            data-src="img/placeholder.jpg"
                                            src="img/placeholder.jpg"
                                            alt="What Are The Different Types Of Cannabis Products?"
                                        />
                                    </picture>
                                </div>
                                <div className="metadata d-flex">
                                    <span className="metadata_item d-flex align-items-center">
                                        <i className="icon-calendar secondary icon"></i>
                                        September 30, 2021
                                    </span>
                                    <span className="metadata_item d-flex align-items-center">
                                        <i className="icon-comments secondary icon"></i>
                                        <span className="metadata_item-text">No Comments</span>
                                        <span className="metadata_item-number">0</span>
                                    </span>
                                </div>
                                <div className="main">
                                    <a className="title" href="post.html" target="_blank" rel="noopener norefferer"
                                        >What Are The Different Types Of Cannabis Products?</a
                                    >
                                    <p className="preview">Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus</p>
                                </div>
                            </div>
                        </li>
                        <li className="latest_posts-post col-md-6 col-xl-4" data-order="2" data-aos="fade-up">
                            <div className="latest_posts-post_wrapper">
                                <div className="media">
                                    <picture>
                                        <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                                        <img
                                            className="lazy"
                                            data-src="img/placeholder.jpg"
                                            src="img/placeholder.jpg"
                                            alt="Get the Best Out of Your Cannabis Experience"
                                        />
                                    </picture>
                                </div>
                                <div className="metadata d-flex">
                                    <span className="metadata_item d-flex align-items-center">
                                        <i className="icon-calendar secondary icon"></i>
                                        September 30, 2021
                                    </span>
                                    <span className="metadata_item d-flex align-items-center">
                                        <i className="icon-comments secondary icon"></i>
                                        <span className="metadata_item-text">No Comments</span>
                                        <span className="metadata_item-number">0</span>
                                    </span>
                                </div>
                                <div className="main">
                                    <a className="title" href="post.html" target="_blank" rel="noopener norefferer"
                                        >Get the Best Out of Your Cannabis Experience</a
                                    >
                                    <p className="preview">Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus</p>
                                </div>
                            </div>
                        </li>
                        <li className="latest_posts-post col-md-6 col-xl-4" data-order="3" data-aos="fade-up">
                            <div className="latest_posts-post_wrapper">
                                <div className="media">
                                    <picture>
                                        <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                                        <img
                                            className="lazy"
                                            data-src="img/placeholder.jpg"
                                            src="img/placeholder.jpg"
                                            alt="Factors in Choosing Cannabis Products"
                                        />
                                    </picture>
                                </div>
                                <div className="metadata d-flex">
                                    <span className="metadata_item d-flex align-items-center">
                                        <i className="icon-calendar secondary icon"></i>
                                        September 30, 2021
                                    </span>
                                    <span className="metadata_item d-flex align-items-center">
                                        <i className="icon-comments secondary icon"></i>
                                        <span className="metadata_item-text">No Comments</span>
                                        <span className="metadata_item-number">0</span>
                                    </span>
                                </div>
                                <div className="main">
                                    <a className="title" href="post.html" target="_blank" rel="noopener norefferer"
                                        >Factors in Choosing Cannabis Products</a
                                    >
                                    <p className="preview">Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section> */}
            {/* Latest posts section end */}
            {/* Instagram section start */}
            {/* <section className="instagram">
                <div className="container">
                    <div className="instagram_header">
                        <h2 className="instagram_header-title mt-4">Follow Us on Instagram</h2>
                        <p className="instagram_header-text">
                            Accumsan sit amet nulla facilisi morbi tempus. Suscipit tellus mauris a diam maecenas sed enim ut sem
                        </p>
                    </div>
                </div>
                <div className="instagram_slider swiper">
                    <div className="swiper-wrapper" id="components">
                        <div className="instagram_slider-slide swiper-slide">
                            <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                <picture>
                                    <source data-srcset="img/orange.png" srcset="img/orange.png" type="image/webp" />
                                    <img className="lazy" data-src="img/orange.png" src="img/orange.png" alt="instagram post" />
                                </picture>
                                <span className="overlay d-flex justify-content-center align-items-center">
                                    <i className="icon-instagram"></i>
                                </span>
                            </a>
                        </div>
                        <div className="instagram_slider-slide swiper-slide">
                            <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                <picture>
                                    <source data-srcset="img/alovera.png" srcset="img/alovera.png" type="image/webp" />
                                    <img className="lazy" data-src="img/alovera.png" src="img/alovera.png" alt="instagram post" />
                                </picture>
                                <span className="overlay d-flex justify-content-center align-items-center">
                                    <i className="icon-instagram"></i>
                                </span>
                            </a>
                        </div>
                        <div className="instagram_slider-slide swiper-slide">
                            <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                <picture>
                                    <source data-srcset="img/amla.png" srcset="img/amla.png" type="image/webp" />
                                    <img className="lazy" data-src="img/amla.png" src="img/amla.png" alt="instagram post" />
                                </picture>
                                <span className="overlay d-flex justify-content-center align-items-center">
                                    <i className="icon-instagram"></i>
                                </span>
                            </a>
                        </div>
                        <div className="instagram_slider-slide swiper-slide">
                            <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                <picture>
                                    <source data-srcset="img/reetha.png" srcset="img/reetha.png" type="image/webp" />
                                    <img className="lazy" data-src="img/reetha.png" src="img/reetha.png" alt="instagram post" />
                                </picture>
                                <span className="overlay d-flex justify-content-center align-items-center">
                                    <i className="icon-instagram"></i>
                                </span>
                            </a>
                        </div>
                        <div className="instagram_slider-slide swiper-slide">
                            <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                <picture>
                                    <source data-srcset="img/tulsi.png" srcset="img/tulsi.png" type="image/webp" />
                                    <img className="lazy" data-src="img/tulsi.png" src="img/tulsi.png" alt="instagram post" />
                                </picture>
                                <span className="overlay d-flex justify-content-center align-items-center">
                                    <i className="icon-instagram"></i>
                                </span>
                            </a>
                        </div>
                        <div className="instagram_slider-slide swiper-slide">
                            <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                <picture>
                                    <source data-srcset="img/hibiscus.png" srcset="img/hibiscus.png" type="image/webp" />
                                    <img className="lazy" data-src="img/hibiscus.png" src="img/hibiscus.png" alt="instagram post" />
                                </picture>
                                <span className="overlay d-flex justify-content-center align-items-center">
                                    <i className="icon-instagram"></i>
                                </span>
                            </a>
                        </div>
                        <div className="instagram_slider-slide swiper-slide">
                            <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                <picture>
                                    <source data-srcset="img/shikakai insta.png" srcset="img/shikakai insta.png" type="image/webp" />
                                    <img className="lazy" data-src="img/shikakai insta.png" src="img/shikakai insta.png" alt="instagram post" />
                                </picture>
                                <span className="overlay d-flex justify-content-center align-items-center">
                                    <i className="icon-instagram"></i>
                                </span>
                            </a>
                        </div>
                        <div className="instagram_slider-slide swiper-slide">
                            <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                <picture>
                                    <source data-srcset="img/brahmi leaf.png" srcset="img/brahmi leaf.png" type="image/webp" />
                                    <img className="lazy" data-src="img/brahmi leaf.png" src="img/brahmi leaf.png" alt="instagram post" />
                                </picture>
                                <span className="overlay d-flex justify-content-center align-items-center">
                                    <i className="icon-instagram"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* Instagram section end */}

        </>
    )
}
