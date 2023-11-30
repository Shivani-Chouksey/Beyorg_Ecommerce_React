import React from 'react';
import '../css/user/wishlist.min.css';
import hibiscus from '../img/hibiscus powder.png'
import shikakai from '../img/shikakai powder.png'
import calamine from '../img/calamine clay powder.png'
import wood from '../img/wood.png'

export default function Wishlist() {
  return (
    <>
          <header className="page">
            <div className="page_main container-fluid">
                <div className="container">
                    <h1 className="page_header">Wishlist</h1>
                    <p className="page_text">Beyorg's pride goes beyond organic. Nothing to hide, and everything is natural</p>
                </div>
            </div>
            <div className="container">
                <ul className="page_breadcrumbs d-flex flex-wrap">
                    <li className="page_breadcrumbs-item">
                        <a className="link" href="index.html">Home</a>
                    </li>

                    <li className="page_breadcrumbs-item current">
                        <span>Wishlist</span>
                    </li>
                </ul>
            </div>
        </header>
       {/* Wishlist content start  */}
   
           {/* Wishlist products section start  */}
            <div className="products section--nopb">
                <div className="container">
                    <ul className="products_list d-sm-flex flex-wrap">
                        <li className="products_list-item col-sm-6 col-lg-4 col-xl-3" data-order="1">
                            <div className="products_list-item_wrapper d-flex flex-column">
                                <div className="media">
                                    <picture>
                                        <source data-srcset={hibiscus} srcset={hibiscus} type="image/webp" />
                                        <img
                                            className="lazy preview"
                                            data-src={hibiscus}
                                            src={hibiscus}
                                            alt="High CBD 50 Oil"
                                        />
                                    </picture>
                                    <div className="overlay d-flex justify-content-between align-items-start">
                                        <div className="action d-flex flex-column">
                                          
                                            <a className="action_link active d-flex align-items-center justify-content-center" href="#">
                                                <i className="icon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <span className="label">Sale</span>
                                </div>
                                <div className="main d-flex flex-column align-items-center justify-content-between">
                                    <div className="main_rating">
                                        <ul className="main_rating-stars d-flex align-items-center justify-content-center accent">
                                            <li className="main_rating-stars_star">
                                                <i className="icon-star_fill"></i>
                                            </li>
                                            <li className="main_rating-stars_star">
                                                <i className="icon-star_fill"></i>
                                            </li>
                                            <li className="main_rating-stars_star">
                                                <i className="icon-star_fill"></i>
                                            </li>
                                            <li className="main_rating-stars_star">
                                                <i className="icon-star_fill"></i>
                                            </li>
                                            <li className="main_rating-stars_star">
                                                <i className="icon-star_fill"></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="main_title">hibiscus powder For Glowing, Skin Hydration, AntiAcne & Pimple  (100 g)</h4>
                                    <ul className="main_table d-flex flex-column align-items-center">
                                       {/* <li className="list-item">
                                            <span className="property">Free Delievry </span>
                                            <span className="value">117.00-23.00%</span>
                                        </li>  */}
                                        <li className="list-item">
                                           {/* <span className="property">CBD</span>  */}
                                            <span className="property" style={{color:"red"}}>Hurry, Only a few left!</span>
                                        </li>
                                    </ul>
                                    <div className="main_price">
                                        <span className="price price--old">₹ 861</span>
                                        <span className="price price--new">₹ 561</span>
                                        <h5 id="price-offer" style={{color:"green"}}>24% off</h5>
                                    </div>
                                   {/* <div className="main_price">
                                        <span className="price price--old">$7.97</span>
                                        <span className="price price--new">$5.99</span>
                                    </div>  */}
                                    <a className="btn btn--green" href="#">Add to Cart</a>
                                </div>
                            </div>
                        </li>
                        <li className="products_list-item col-sm-6 col-lg-4 col-xl-3" data-order="2">
                            <div className="products_list-item_wrapper d-flex flex-column">
                                <div className="media">
                                    <picture>
                                        <source data-srcset={shikakai} srcset={shikakai} type="image/webp" />
                                        <img
                                            className="lazy preview"
                                            data-src={shikakai}
                                            src={shikakai}
                                            alt="Tangerine Dream"
                                        />
                                    </picture>
                                    <div className="overlay d-flex justify-content-between align-items-start">
                                        <div className="action d-flex flex-column">
                                          
                                            <a className="action_link active d-flex align-items-center justify-content-center" href="#">
                                                <i className="icon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="main d-flex flex-column align-items-center justify-content-between">
                                    <div className="main_rating">
                                        <ul className="main_rating-stars d-flex align-items-center justify-content-center accent">
                                            <li className="main_rating-stars_star">
                                                <i className="icon-star_fill"></i>
                                            </li>
                                            <li className="main_rating-stars_star">
                                                <i className="icon-star_fill"></i>
                                            </li>
                                            <li className="main_rating-stars_star">
                                                <i className="icon-star_fill"></i>
                                            </li>
                                            <li className="main_rating-stars_star">
                                                <i className="icon-star_fill"></i>
                                            </li>
                                            <li className="main_rating-stars_star">
                                                <i className="icon-star"></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="main_title">shikakai powder For Glowing, Skin Hydration, AntiAcne & Pimple  (100 g)</h4>
                                    <ul className="main_table d-flex flex-column align-items-center">
                                       {/* <li className="list-item">
                                            <span className="property">Free Delievry </span>
                                            <span className="value">117.00-23.00%</span>
                                        </li>  */}
                                        <li className="list-item">
                                           {/* <span className="property">CBD</span>  */}
                                            <span className="property"  style={{color: "red"}}>Hurry, Only a few left!</span>
                                        </li>
                                    </ul>
                                    <div className="main_price">
                                        <span className="price price--old">₹ 861</span>
                                        <span className="price price--new">₹ 561</span>
                                        <h5 id="price-offer"  style={{color: "green"}}>24% off</h5>
                                    </div>
                                    <a className="btn btn--green" href="#">Add to Cart</a>
                                </div>
                            </div>
                        </li>
                        <li className="products_list-item col-sm-6 col-lg-4 col-xl-3" data-order="3">
                            <div className="products_list-item_wrapper d-flex flex-column">
                                <div className="media">
                                    <picture>
                                        <source data-srcset={calamine} srcset={calamine} type="image/webp" />
                                        <img
                                            className="lazy preview"
                                            data-src={calamine}
                                            src={calamine}
                                            alt="Bruce Banner"
                                        />
                                    </picture>
                                    <div className="overlay d-flex justify-content-between align-items-start">
                                        <div className="action d-flex flex-column">
                                           
                                            <a className="action_link active d-flex align-items-center justify-content-center" href="#">
                                                <i className="icon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <span className="label">Sale</span>
                                </div>
                                <div className="main d-flex flex-column align-items-center justify-content-between">
                                    <div className="main_rating">
                                        <ul className="main_rating-stars d-flex align-items-center justify-content-center accent">
                                            <li className="main_rating-stars_star">
                                                <i className="icon-star_fill"></i>
                                            </li>
                                            <li className="main_rating-stars_star">
                                                <i className="icon-star_fill"></i>
                                            </li>
                                            <li className="main_rating-stars_star">
                                                <i className="icon-star_fill"></i>
                                            </li>
                                            <li className="main_rating-stars_star">
                                                <i className="icon-star_fill"></i>
                                            </li>
                                            <li className="main_rating-stars_star">
                                                <i className="icon-star_fill"></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="main_title">calamine clay powder For Glowing, Skin Hydration, AntiAcne & Pimple  (100 g)</h4>
                                    <ul className="main_table d-flex flex-column align-items-center">
                                       {/* <li className="list-item">
                                            <span className="property">Free Delievry </span>
                                            <span className="value">117.00-23.00%</span>
                                        </li>  */}
                                        <li className="list-item">
                                           {/* <span className="property">CBD</span>  */}
                                            <span className="property" style={{color: "red"}}>Hurry, Only a few left!</span>
                                        </li>
                                    </ul>
                                    <div className="main_price">
                                        <span className="price price--old">₹ 861</span>
                                        <span className="price price--new">₹ 561</span>
                                        <h5 id="price-offer"  style={{color: "green"}}>24% off</h5>
                                    </div>
                                   
                                   {/* <ul className="main_table d-flex flex-column align-items-center">
                                        <li className="list-item">
                                            <span className="property">THC</span>
                                            <span className="value">117.00-23.00%</span>
                                        </li>
                                        <li className="list-item">
                                            <span className="property">CBD</span>
                                            <span className="value">0.00-1.00%</span>
                                        </li>
                                    </ul>
                                    <div className="main_price">
                                        <span className="price price--old">$5.67</span>
                                        <span className="price price--new">$2.99</span>
                                    </div>  */}
                                    <a className="btn btn--green" href="#">Add to Cart</a>
                                </div>
                            </div>
                        </li>
                        <li className="products_list-item col-sm-6 col-lg-4 col-xl-3" data-order="4">
                            <div className="products_list-item_wrapper d-flex flex-column">
                                <div className="media">
                                    <picture>
                                        <source data-srcset={wood} srcset={wood} type="image/webp" />
                                        <img
                                            className="lazy preview"
                                            data-src={wood}
                                            src={wood}
                                            alt="Tangerine Dream"
                                        />
                                    </picture>
                                    <div className="overlay d-flex justify-content-between align-items-start">
                                        <div className="action d-flex flex-column">
                                           {/* <a
                                                className="action_link d-flex align-items-center justify-content-center"
                                                href="#"
                                                data-trigger="compare"
                                            >
                                                <i className="icon-compare"></i>
                                            </a>  */}
                                            <a className="action_link active d-flex align-items-center justify-content-center" href="wishlist.html">
                                                <i className="icon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="main d-flex flex-column align-items-center justify-content-between">
                                    <div className="main_rating">
                                        <ul className="main_rating-stars d-flex align-items-center justify-content-center accent">
                                            <li className="main_rating-stars_star">
                                                <i className="icon-star_fill"></i>
                                            </li>
                                            <li className="main_rating-stars_star">
                                                <i className="icon-star_fill"></i>
                                            </li>
                                            <li className="main_rating-stars_star">
                                                <i className="icon-star_fill"></i>
                                            </li>
                                            <li className="main_rating-stars_star">
                                                <i className="icon-star_fill"></i>
                                            </li>
                                            <li className="main_rating-stars_star">
                                                <i className="icon-star"></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="main_title"> Activated Charcoal Powder  Pure Natural Herbal & OrganicProduct  (200 g)</h4>
                                    <ul className="main_table d-flex flex-column align-items-center">
                                       {/* <li className="list-item">
                                            <span className="property">Free Delievry </span>
                                            <span className="value">117.00-23.00%</span>
                                        </li>  */}
                                        <li className="list-item">
                                           {/* <span className="property">CBD</span>  */}
                                            <span className="property" style={{color: "red"}}>Hurry, Only a few left!</span>
                                        </li>
                                    </ul>
                                    <div className="main_price">
                                        <span className="price price--old">₹ 861</span>
                                        <span className="price price--new">₹ 561</span>
                                        <h5 id="price-offer"  style={{color: "green"}}>24% off</h5>
                                    </div>
                                    <a className="btn btn--green" href="#">Add to Cart</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
           {/* Wishlist products section end  */}
           {/* Promo section start  */}
            <div className="promo section--nopb">
                <div className="container d-flex flex-column flex-md-row">
                    <div className="promo_banner promo_banner--big" data-aos="fade-right">
                        <h3 className="promo_banner-header">Browse our Products</h3>
                        <p className="promo_banner-text">
                            Beyorg provides quality natural and organic skincare products that are sustainably generated, free of harmful substances, and developed to enhance the natural beauty of the skin.
                        </p>
                        <a className="promo_banner-btn btn" href="#">Shop Now</a>
                    </div>
                    <div
                        className="promo_banner promo_banner--small d-flex flex-column justify-content-end align-items-start"
                        data-aos="fade-left"
                    >
                        <h3 className="promo_banner-header">Weekly Special</h3>
                        <a className="promo_banner-btn btn" href="#">Shop Now</a>
                    </div>
                </div>
            </div>
           {/* Promo section end  */}
           {/* Instagram section start  */}
          
      
    </>
  )
}
