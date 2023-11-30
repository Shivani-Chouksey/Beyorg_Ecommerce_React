import React from 'react'
import moroccan from '../img/moroccan.webp'
export default function ProductDetails(){
return (
    <>
        <header className="page">
            <div className="page_main container-fluid">
                <div className="container">
                    <h1 className="page_header">Product Details</h1>
                    <p className="page_text">Beyond organic goods prioritize sustainability, biodiversity, and ecological harmony, going above and beyond traditional organic standards to promote chemical-free living.</p>
                </div>
            </div>
            <div className="container">
                <ul className="page_breadcrumbs d-flex flex-wrap">
                    <li className="page_breadcrumbs-item">
                        <a className="link" href="index.html">Home</a>
                    </li>

                    <li className="page_breadcrumbs-item current">
                        <span>Single Product</span>
                    </li>
                </ul>
            </div>
        </header>
        {/*  Single product content start */}
        <main>
            <section className="about section--nopb">
                <div className="container">
                    {/*  Product main */}
                    <div className="about_main d-lg-flex flex-nowrap">
                        <div className="about_main-slider">
                            <div className="about_main-slider--single" data-modal="false">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <a href={moroccan} data-role="gallery">
                                            <picture>
                                                <source
                                                    data-srcset={moroccan}
                                                    srcset={moroccan}
                                                    type="image/webp"
                                                />
                                                <img
                                                    className="lazy"
                                                    data-src={moroccan}
                                                    src={moroccan}
                                                    alt="media"
                                                />
                                            </picture>
                                        </a>
                                    </div>
                                    <div className="swiper-slide">
                                        <a href="img/02.jpg" data-role="gallery">
                                            <picture>
                                                <source
                                                    data-srcset="img/02.jpg"
                                                    srcset="img/02.jpg"
                                                    type="image/webp"
                                                />
                                                <img
                                                    className="lazy"
                                                    data-src="img/02.jpg"
                                                    src="img/02.jpg"
                                                    alt="media"
                                                />
                                            </picture>
                                        </a>
                                    </div>
                                    <div className="swiper-slide">
                                        <a href="img/03.jpg" data-role="gallery">
                                            <picture>
                                                <source
                                                    data-srcset="img/03.jpg"
                                                    srcset="img/03.jpg"
                                                    type="image/webp"
                                                />
                                                <img
                                                    className="lazy"
                                                    data-src="img/03.jpg"
                                                    src="img/03.jpg"
                                                    alt="media"
                                                />
                                            </picture>
                                        </a>
                                    </div>
                                </div>
                                <div className="swiper-controls d-flex align-items-center justify-content-between">
                                    <a className="swiper-button-prev d-inline-flex align-items-center justify-content-center" href="#">
                                        <i className="icon-caret_left icon"></i>
                                    </a>
                                    <a className="swiper-button-next d-inline-flex align-items-center justify-content-center" href="#">
                                        <i className="icon-caret_right icon"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="about_main-slider--thumbs">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <picture>
                                            <source
                                                data-srcset="img/moroccan.png"
                                                srcset="img/moroccan.png"
                                                type="image/webp"
                                            />
                                            <img
                                                className="lazy"
                                                data-src="img/moroccan.png"
                                                src="img/moroccan.png"
                                                alt="media"
                                            />
                                        </picture>
                                    </div>
                                    <div className="swiper-slide">
                                        <picture>
                                            <source
                                                data-srcset="img/03.jpg"
                                                srcset="img/03.jpg"
                                                type="image/webp"
                                            />
                                            <img
                                                className="lazy"
                                                data-src="img/03.jpg"
                                                src="img/03.jpg"
                                                alt="media"
                                            />
                                        </picture>
                                    </div>
                                    <div className="swiper-slide">
                                        <picture>
                                            <source
                                                data-srcset="img/04.jpg"
                                                srcset="img/04.jpg"
                                                type="image/webp"
                                            />
                                            <img
                                                className="lazy"
                                                data-src="img/04.jpg"
                                                src="img/04.jpg"
                                                alt="media"
                                            />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about_main-info">
                            <div className="about_main-info_product d-sm-flex align-items-center justify-content-between">
                                <h2 className="title">MOROCCAN RHASSOUL Clay Powder</h2>
                                <div className="action d-flex">
                                    <a className="action_link d-flex align-items-center justify-content-center" href="#" data-role="wishlist">
                                        <i className="icon-heart"></i>
                                    </a>
                                    {/*  <a className="action_link d-flex align-items-center justify-content-center" href="#" data-trigger="compare">
                                        <i className="icon-compare"></i>
                                    </a> */}
                                </div>
                            </div>
                            <div className="about_main-info_rating d-flex align-items-center">
                                <ul className="stars d-flex align-items-center accent">
                                    <li className="stars_star">
                                        <i className="icon-star_fill"></i>
                                    </li>
                                    <li className="stars_star">
                                        <i className="icon-star_fill"></i>
                                    </li>
                                    <li className="stars_star">
                                        <i className="icon-star_fill"></i>
                                    </li>
                                    <li className="stars_star">
                                        <i className="icon-star_fill"></i>
                                    </li>
                                    <li className="stars_star">
                                        <i className="icon-star_fill"></i>
                                    </li>
                                </ul>
                                <a className="reviews-amount" href="#reviews">(5 customer reviews)</a>
                            </div>
                            <p className="about_main-info_description">
                                Rhassoul clay powder is a 100% natural micro-fine powder used for skin and hair care DIY recipes. It deeply exfoliates and rejuvenates the skin while promoting hair growth and making hair strands healthy and shiny.
                            </p>
                            <span style={{ color: "green", fontWeight: "500" }}>Special price</span><br />

                            <span className="about_main-info_price me-3"> ₹ 261</span> <span style={{ textDecoration: "line-through " }} className="me-3"> ₹ 461</span><span style={{ color: "green", fontWeight: "600" }}>64% Off</span>
                            <span className="text-success"><br /> <i className="ri-truck-line me-2"></i>Free Delievry </span><br />
                            <h5 style={{ color: "red" }}>Hurry, Only a few left!</h5>
                            <div className="about_main-info_buy d-flex align-items-center">
                                <div className="qty d-flex align-items-center justify-content-between">
                                    <span className="qty_minus control disabled d-flex align-items-center">
                                        <i className="icon-minus"></i>
                                    </span>
                                    <input className="qty_amount" type="number" readonly value="1" min="1" max="99" />
                                    <span className="qty_plus control d-flex align-items-center">
                                        <i className="icon-plus"></i>
                                    </span>
                                </div>


                            </div>
                            <a className="btn me-4 " href="#"> Add to Cart</a>
                            <a className="btn mb-4 " href="#">Buy Now</a>
                            <hr />
                            <ul className="about_main-info_list">
                                <h3>Specifications</h3><br />
                                <li className="list-item">
                                    <span className="property">Model Name:</span>
                                    <span className="value">Moroccan Red Clay Powder Hair Care ,Hair Masks</span>
                                </li>
                                <li className="list-item">
                                    <span className="property">Quantity:</span>
                                    <span className="value">100 g</span>
                                </li>
                                <li className="list-item">
                                    <span className="property">Pack of:</span>
                                    <span className="value">1</span>
                                </li>
                                <li className="list-item">
                                    <span className="property">Applied For:</span>
                                    <span className="value">
                                        Anti-dandruff, Daily Care, Damage Repair, Deep Conditioning, Dryness Care, Hair Shine, Hair Volumizing, Nourishment & Moisturization, Scalp Cleansing, Straightening & Smoothening, Split-ends</span>
                                </li>
                                <li className="list-item">
                                    <span className="property">Hair Condition:</span>
                                    <span className="value">
                                        Chemically Treated Hair, Colored Hair, Damaged Hair, Permed Hair</span>
                                </li>
                                {/*  <li className="list-item">
                                    <span className="property">Effects:</span>
                                    <span className="value">Calm, Happy, Relaxed</span>
                                </li>
                                <li className="list-item">
                                    <span className="property">Tags:</span>
                                    <span className="value">Cannabis, oil</span>
                                </li>
                                <li className="list-item">
                                    <span className="property">SKU:</span>
                                    <span className="value">1234567</span>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    {/*  Product additional information */}
                    <div className="about_secondary">
                        <div className="about_secondary-content">
                            <ul className="about_secondary-content_nav nav nav-tabs" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <div
                                        className="nav-link active"
                                        id="description-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#description"
                                        role="tab"
                                        aria-selected="true"
                                    >
                                        Description
                                    </div>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <div
                                        className="nav-link"
                                        id="additional-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#additionalInfo"
                                        role="tab"
                                        aria-selected="false"
                                    >
                                        Additional Information
                                    </div>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <div
                                        className="nav-link"
                                        id="reviews-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#reviews"
                                        role="tab"
                                        aria-selected="false"
                                    >
                                        Reviews <span id="reviewsCount">(2)</span>
                                    </div>
                                </li>

                            </ul>
                            <div className="about_secondary-content_tabs tab-content" id="productTabs">
                                <div className="wrapper">
                                    <h4
                                        className="accordion_component-item_header d-flex justify-content-between align-items-center"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#description"
                                        aria-expanded="true"
                                    >
                                        Description
                                        <i className="icon-caret_down transform icon"></i>
                                    </h4>
                                    <div
                                        className="tab-pane collapse show active"
                                        id="description"
                                        role="tabpanel"
                                        aria-labelledby="description-tab"
                                        data-bs-parent="#productTabs"
                                    >
                                        <p className="text">
                                            Elementum eu facilisis sed odio morbi quis commodo odio. Mauris rhoncus aenean vel elit
                                            scelerisque mauris pellentesque. Arcu felis bibendum ut tristique et egestas. Id semper risus in
                                            hendrerit gravida rutrum. Eu mi bibendum neque egestas congue.
                                        </p>
                                        <p className="text">
                                            Dignissim enim sit amet venenatis. At tellus at urna condimentum mattis pellentesque id nibh.
                                            Sollicitudin ac orci phasellus egestas tellus rutrum. Eget mi proin sed libero enim sed. Quisque
                                            non tellus orci ac auctor augue mauris. Sit amet luctus venenatis lectus magna fringilla.
                                        </p>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <h4
                                        className="accordion_component-item_header d-flex justify-content-between align-items-center"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#additionalInfo"
                                    >
                                        Additional Information
                                        <i className="icon-caret_down icon"></i>
                                    </h4>
                                    <div
                                        className="tab-pane collapse"
                                        id="additionalInfo"
                                        role="tabpanel"
                                        aria-labelledby="additional-tab"
                                        data-bs-parent="#productTabs"
                                    >
                                        <table className="table d-flex flex-column">
                                            <tbody>
                                                <tr className="table_row d-flex flex-column flex-lg-row">
                                                    <th className="table_row-header">Ingredients:</th>
                                                    <td className="table_row-cell">Organic MCT Oil, CBD Isolate</td>
                                                </tr>
                                                <tr className="table_row d-flex flex-column flex-lg-row">
                                                    <th className="table_row-header">Flavors:</th>
                                                    <td className="table_row-cell">
                                                        Natural 1500mg, Calm 750mg, Focus 750mg, Energize 750mg, Sleep 750mg, Recover 750mg
                                                    </td>
                                                </tr>
                                                <tr className="table_row d-flex flex-column flex-lg-row">
                                                    <th className="table_row-header">Recommended Usage:</th>
                                                    <td className="table_row-cell">
                                                        Once a day, place a full dropper under your tongue and hold for a minute. Repeat as
                                                        necessary
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <h4
                                        className="accordion_component-item_header d-flex justify-content-between align-items-center"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#reviews"
                                    >
                                        <span className="wrapper"> Reviews (<span id="reviewsCountResponsive">2</span>) </span>
                                        <i className="icon-caret_down icon"></i>
                                    </h4>
                                    <div
                                        className="tab-pane collapse"
                                        id="reviews"
                                        role="tabpanel"
                                        aria-labelledby="reviews-tab"
                                        data-bs-parent="#productTabs"
                                    >
                                        <div className="reviews-section">
                                            <ul className="reviews-section_list">
                                                <li className="review">
                                                    <div className="review_header d-sm-flex flex-wrap">
                                                        <span className="name">Dawn Fowler</span>
                                                        <div className="rating d-flex">
                                                            <i className="icon-star_fill star"></i>
                                                            <i className="icon-star_fill star"></i>
                                                            <i className="icon-star_fill star"></i>
                                                            <i className="icon-star_fill star"></i>
                                                            <i className="icon-star star"></i>
                                                        </div>
                                                        <span className="timestamp">{"September 30, 2021 at 9:52 am"}</span>
                                                    </div>
                                                    <p className="review_main">
                                                        Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed
                                                        vulputate mi. In nulla posuere sollicitudin aliquam ultrices.
                                                    </p>
                                                    <div className="review_secondary d-lg-flex">
                                                        <div className="review_secondary-block">
                                                            <span className="review_secondary-block_header">Benefits:</span>
                                                            <p className="review_secondary-block_text">
                                                                In nulla posuere sollicitudin aliquam ultrices.
                                                            </p>
                                                        </div>
                                                        <div className="review_secondary-block">
                                                            <span className="review_secondary-block_header">Disadvantages:</span>
                                                            <p className="review_secondary-block_text">
                                                                Viverra aliquet eget sit amet tellus cras adipiscing enim
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <a className="review_reply link btn--underline" href="#">Reply</a>
                                                </li>
                                                <li className="review">
                                                    <div className="review_header d-sm-flex flex-wrap">
                                                        <span className="name">Charles Sanchez</span>
                                                        <div className="rating d-flex">
                                                            <i className="icon-star_fill star"></i>
                                                            <i className="icon-star_fill star"></i>
                                                            <i className="icon-star_fill star"></i>
                                                            <i className="icon-star_fill star"></i>
                                                            <i className="icon-star_fill star"></i>
                                                        </div>
                                                        <span className="timestamp">"October 1, 2021 at 11:52 am"</span>
                                                    </div>
                                                    <p className="review_main">Aliquam sem fringilla ut morbi tincidunt augue.</p>
                                                    <ul
                                                        className="review_media d-flex flex-wrap justify-content-between justify-content-sm-start"
                                                    >
                                                        <li className="review_media-item">
                                                            <a href="img/placeholder.jpg" data-caption="Image caption">
                                                                <picture>
                                                                    <source
                                                                        data-srcset="img/placeholder.jpg"
                                                                        srcset="img/placeholder.jpg"
                                                                        type="image/webp"
                                                                    />
                                                                    <img
                                                                        className="gallery-img lazy"
                                                                        data-src="img/placeholder.jpg"
                                                                        src="img/placeholder.jpg"
                                                                        alt="media"
                                                                    />
                                                                </picture>
                                                            </a>
                                                        </li>
                                                        <li className="review_media-item">
                                                            <a href="img/placeholder.jpg" data-caption="Image caption">
                                                                <picture>
                                                                    <source
                                                                        data-srcset="img/placeholder.jpg"
                                                                        srcset="img/placeholder.jpg"
                                                                        type="image/webp"
                                                                    />
                                                                    <img
                                                                        className="gallery-img lazy"
                                                                        data-src="img/placeholder.jpg"
                                                                        src="img/placeholder.jpg"
                                                                        alt="media"
                                                                    />
                                                                </picture>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a className="review_reply link btn--underline" href="#">Reply</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="form-section">
                                            <h4 className="form-section_header">Add Review</h4>
                                            <form
                                                className="form-section_form form d-flex flex-column flex-lg-row flex-wrap justify-content-between"
                                                action="#"
                                                method="post"
                                                id="reviewForm"
                                                data-type="userComment"
                                            >
                                                <div className="field-wrapper">
                                                    <label className="label" for="reviewName">Your Name</label>
                                                    <input className="field required" type="text" id="reviewName" placeholder="Your Name" />
                                                </div>
                                                <div className="field-wrapper">
                                                    <label className="label" for="reviewEmail">Your Email</label>
                                                    <input
                                                        className="field required"
                                                        type="text"
                                                        data-type="email"
                                                        id="reviewEmail"
                                                        placeholder="you@example.com"
                                                    />
                                                </div>
                                                <div className="field-wrapper fluid">
                                                    <label className="label" for="reviewContent">Message</label>
                                                    <textarea
                                                        className="field field--message required"
                                                        id="reviewContent"
                                                        placeholder="Type Your Message"
                                                    ></textarea>
                                                </div>
                                                <div
                                                    className="form-section_footer d-flex flex-column flex-sm-row flex-wrap justify-content-between"
                                                >
                                                    <div className="rating d-flex" data-type="changeable">
                                                        <i className="icon-star_fill star"></i>
                                                        <i className="icon-star_fill star"></i>
                                                        <i className="icon-star_fill star"></i>
                                                        <i className="icon-star_fill star"></i>
                                                        <i className="icon-star_fill star"></i>
                                                    </div>
                                                    <div className="btn-wrapper btn-wrapper--underline">
                                                        <a className="link btn--underline" href="#">Add photos</a>
                                                    </div>
                                                    <div className="btn-wrapper">
                                                        <button className="btn" type="submit">Leave a Reply</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Top products section start */}
            <section className="top section">
                <div className="container">
                    <h2 className="top_header">Related Products</h2>
                    <ul className="top_list d-lg-flex flex-wrap">
                        <li className="top_list-item col-lg-6" data-order="1">
                            <div className="top_list-item_wrapper d-flex flex-column flex-sm-row flex-lg-column flex-xxl-row">
                                <div className="media">
                                    <a href="product.html" target="_blank" rel="noopener norefferer">
                                        <picture>
                                            <source data-srcset={moroccan} srcset={moroccan} type="image/webp" />
                                            <img className="lazy" data-src={moroccan} src={moroccan} alt="media" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="main d-md-flex flex-column">
                                    <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer"
                                    > "Activated Charcoal Powder  Pure Natural Herbal & OrganicProduct  (100 g)"</a>
                                    {/*  <ul className="main_table d-flex flex-column">
                                        <li className="list-item">
                                            <span className="property">THC</span>
                                            <span className="value">110.00-160.00%</span>
                                        </li>
                                        <li className="list-item">
                                            <span className="property">CBD</span>
                                            <span className="value">0.00-1.00mg/g</span>
                                        </li>
                                    </ul> */}
                                    <div className="main_price">
                                        <span className="price price--old">₹45.99</span>
                                        <span className="price price--new">₹36.87</span>
                                    </div>
                                    <div className="d-flex">
                                        <a className="btn" href="#">Add to Cart</a>
                                        <div className="action d-flex">
                                            <a
                                                className="action_link d-flex align-items-center justify-content-center"
                                                href="wishlist.html"
                                                data-role="wishlist"
                                            >
                                                <i className="icon-heart"></i>
                                            </a>
                                            <a
                                                className="action_link d-flex align-items-center justify-content-center"
                                                href="product.html"
                                                data-trigger="view"
                                            >
                                                <i className="icon-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="top_list-item col-lg-6" data-order="2">
                            <div className="top_list-item_wrapper d-flex flex-column flex-sm-row flex-lg-column flex-xxl-row">
                                <div className="media">
                                    <a href="product.html" target="_blank" rel="noopener norefferer">
                                        <picture>
                                            <source data-srcset={moroccan} srcset={moroccan} type="image/webp" />
                                            <img className="lazy" data-src={moroccan} src={moroccan} alt="media" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="main d-md-flex flex-column">
                                    <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer">Activated Charcoal Powder Pure Natural Herbal & OrganicProduct (100 g)</a>
                                    {/*  <ul className="main_table d-flex flex-column">
                                        <li className="list-item">
                                            <span className="property">THC</span>
                                            <span className="value">110.00-160.00%</span>
                                        </li>
                                        <li className="list-item">
                                            <span className="property">CBD</span>
                                            <span className="value">0.00-1.00mg/g</span>
                                        </li>
                                    </ul> */}
                                    <div className="main_price">
                                        <span className="price price--old">₹20.14</span>
                                        <span className="price price--new">₹16.97</span>
                                    </div>
                                    <div className="d-flex">
                                        <a className="btn" href="#">Add to Cart</a>
                                        <div className="action d-flex">
                                            <a
                                                className="action_link d-flex align-items-center justify-content-center"
                                                href="wishlist.html"
                                                data-role="wishlist"
                                            >
                                                <i className="icon-heart"></i>
                                            </a>
                                            <a
                                                className="action_link d-flex align-items-center justify-content-center"
                                                href="product.html"
                                                data-trigger="view"
                                            >
                                                <i className="icon-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/*  <li className="top_list-item col-lg-6" data-order="3">
                            <div className="top_list-item_wrapper d-flex flex-column flex-sm-row flex-lg-column flex-xxl-row">
                                <div className="media">
                                    <a href="product.html" target="_blank" rel="noopener norefferer">
                                        <picture>
                                            <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                                            <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="media" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="main d-md-flex flex-column">
                                    <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer"
                                        >Boost THC Tincture – Indica</a
                                    >
                                    <ul className="main_table d-flex flex-column">
                                        <li className="list-item">
                                            <span className="property">THC</span>
                                            <span className="value">110.00-160.00%</span>
                                        </li>
                                        <li className="list-item">
                                            <span className="property">CBD</span>
                                            <span className="value">0.00-1.00mg/g</span>
                                        </li>
                                    </ul>
                                    <div className="main_price">
                                        <span className="price price--old">₹43.55</span>
                                        <span className="price price--new">₹26.98</span>
                                    </div>
                                    <div className="d-flex">
                                        <a className="btn" href="#">Add to Cart</a>
                                        <div className="action d-flex">
                                            <a
                                                className="action_link d-flex align-items-center justify-content-center"
                                                href="#"
                                                data-role="wishlist"
                                            >
                                                <i className="icon-heart"></i>
                                            </a>
                                            <a
                                                className="action_link d-flex align-items-center justify-content-center"
                                                href="#"
                                                data-trigger="view"
                                            >
                                                <i className="icon-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="top_list-item col-lg-6" data-order="4">
                            <div className="top_list-item_wrapper d-flex flex-column flex-sm-row flex-lg-column flex-xxl-row">
                                <div className="media">
                                    <a href="product.html" target="_blank" rel="noopener norefferer">
                                        <picture>
                                            <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                                            <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="media" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="main d-md-flex flex-column">
                                    <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer">Ace Of Spade</a>
                                    <ul className="main_table d-flex flex-column">
                                        <li className="list-item">
                                            <span className="property">THC</span>
                                            <span className="value">110.00-160.00%</span>
                                        </li>
                                        <li className="list-item">
                                            <span className="property">CBD</span>
                                            <span className="value">0.00-1.00mg/g</span>
                                        </li>
                                    </ul>
                                    <div className="main_price">
                                        <span className="price price--old">₹19.97</span>
                                        <span className="price price--new">₹13.22</span>
                                    </div>
                                    <div className="d-flex">
                                        <a className="btn" href="#">Add to Cart</a>
                                        <div className="action d-flex">
                                            <a
                                                className="action_link d-flex align-items-center justify-content-center"
                                                href="#"
                                                data-role="wishlist"
                                            >
                                                <i className="icon-heart"></i>
                                            </a>
                                            <a
                                                className="action_link d-flex align-items-center justify-content-center"
                                                href="#"
                                                data-trigger="view"
                                            >
                                                <i className="icon-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </section>
            {/*  Top products section end */}
        </main>
    </>
)
}
