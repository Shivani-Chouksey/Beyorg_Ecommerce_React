import React from 'react';
import '../css/user/shop.min.css';
import tulsi from '../img/Tulsi leaf powder.png';
import alovera from '../img/alovera leaf powder.jpg';
import Shikakai from '../img/shikakai powder.png';
import wood from '../img/wood.png';
import moroccan from '../img/moroccan.png';
import hibiscus from '../img/hibiscus powder.png';
import calamine from '../img/calamine clay powder.png';
import deadSalt from '../img/Dead sea salt.png';
// import tulsi from '../img/Tulsi leaf powder.png';
import tulsiCombo from '../img/tulsi combo.jpg';
import aloverai from '../img/alovera.png';
import amlai from '../img/amla.png';
import reethai from '../img/reetha.png';
import tulsii from '../img/tulsi.png';
import hibiscusi from '../img/hibiscus.png';
import shikakaii from '../img/shikakai insta.png';
import brahmii from '../img/brahmi leaf.png';
import orangei from '../img/orange.png';




export default function Product() {
    return (
    <>
            <main>
                <header className="page">
                    <div className="page_main container-fluid">
                        <div className="container">
                            <h1 className="page_header">Products</h1>
                            <p className="page_text">Discover nature's power with Beyorg's organic skincare products, which are free of harmful substances and rich with natural goodness for healthy, glowing skin.</p>
                        </div>
                    </div>
                    <div className="container">
                        <ul className="page_breadcrumbs d-flex flex-wrap">
                            <li className="page_breadcrumbs-item">
                                <a className="link" href="index.html">Home</a>
                            </li>

                            <li className="page_breadcrumbs-item current">
                                <span>Shop</span>
                            </li>
                        </ul>
                    </div>
                </header>
                {/* <!-- Shop content start --> */}
                <main>
                    {/* <!-- Products section start --> */}
                    <div className="shop-wrapper section--nopb">
                        <div className="container d-flex flex-lg-row flex-wrap flex-column justify-content-between">
                            <a
                                className="filterTrigger d-flex d-lg-none align-items-center justify-content-center"
                                href="#"
                                data-bs-toggle="collapse"
                                data-bs-target="#shopFilters"
                            >
                                Filters
                                <i className="icon-caret_down icon"></i>
                            </a>
                            <div className="shop_products d-flex flex-column">
                                <ul className="shop_products-list d-sm-flex flex-wrap">
                                    <li className="shop_products-list_item col-sm-6 col-md-4 col-lg-6 col-xl-4" data-order="1">
                                        <div className="wrapper d-flex flex-column">
                                            <div className="media">
                                                <div className="overlay d-flex flex-column align-items-center justify-content-center">
                                                    <ul className="action d-flex align-items-center justify-content-center">

                                                        <li className="list-item">
                                                            <a className="action_link d-flex align-items-center justify-content-center" href="#">
                                                                <i className="icon-basket"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-item">
                                                            <a
                                                                className="action_link d-flex align-items-center justify-content-center"
                                                                href="#"
                                                                data-role="wishlist"
                                                            >
                                                                <i className="icon-heart"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-item">
                                                            <a
                                                                className="action_link d-flex align-items-center justify-content-center"
                                                                href="product.html"
                                                                data-trigger="view"
                                                            >
                                                                <i className="icon-eye"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <picture>
                                                    <source data-srcset={tulsi} srcset={tulsi} type="image/webp" />
                                                    <img className="lazy" data-src={tulsi} src={tulsi} alt="media" />
                                                </picture>
                                            </div>
                                            <div className="main d-flex flex-column">
                                                <div className="main_rating">
                                                    <ul className="main_rating-stars d-flex align-items-center accent">
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
                                                <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer"
                                                >Organic TULSI leaf Powder</a
                                                >
                                                <div className="main_price">
                                                    <span className="price">₹7.97</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="shop_products-list_item col-sm-6 col-md-4 col-lg-6 col-xl-4" data-order="2">
                                        <div className="wrapper d-flex flex-column">
                                            <div className="media">
                                                <div className="overlay d-flex flex-column align-items-center justify-content-center">
                                                    <ul className="action d-flex align-items-center justify-content-center">

                                                        <li className="list-item">
                                                            <a className="action_link d-flex align-items-center justify-content-center" href="#">
                                                                <i className="icon-basket"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-item">
                                                            <a
                                                                className="action_link d-flex align-items-center justify-content-center"
                                                                href="#"
                                                                data-role="wishlist"
                                                            >
                                                                <i className="icon-heart"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-item">
                                                            <a
                                                                className="action_link d-flex align-items-center justify-content-center"
                                                                href="product.html"
                                                                data-trigger="view"
                                                            >
                                                                <i className="icon-eye"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <picture>
                                                    <source data-srcset={alovera} srcset={alovera} type="image/webp" />
                                                    <img className="lazy" data-src={alovera} src={alovera} alt="media" />
                                                </picture>
                                            </div>
                                            <div className="main d-flex flex-column">
                                                <div className="main_rating">
                                                    <ul className="main_rating-stars d-flex align-items-center accent">
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
                                                <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer"
                                                >Alovera</a
                                                >
                                                <div className="main_price">
                                                    <span className="price">₹7.97</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="shop_products-list_item col-sm-6 col-md-4 col-lg-6 col-xl-4" data-order="3">
                                        <div className="wrapper d-flex flex-column">
                                            <div className="media">
                                                <span className="sale d-flex align-items-center justify-content-center">-10%</span>
                                                <div className="overlay d-flex flex-column align-items-center justify-content-center">
                                                    <ul className="action d-flex align-items-center justify-content-center">
                                                        {/* <!-- <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="compare"
                                                    >
                                                        <i className="icon-compare"></i> --> */}
                                                        {/* </a>
                                                </li> */}
                                                        <li className="list-item">
                                                            <a className="action_link d-flex align-items-center justify-content-center" href="#">
                                                                <i className="icon-basket"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-item">
                                                            <a
                                                                className="action_link d-flex align-items-center justify-content-center"
                                                                href="#"
                                                                data-role="wishlist"
                                                            >
                                                                <i className="icon-heart"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-item">
                                                            <a
                                                                className="action_link d-flex align-items-center justify-content-center"
                                                                href="product.html"
                                                                data-trigger="view"
                                                            >
                                                                <i className="icon-eye"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <picture>
                                                    <source data-srcset={Shikakai} srcset={Shikakai} type="image/webp" />
                                                    <img className="lazy" data-src={Shikakai} src={Shikakai} alt="media" />
                                                </picture>
                                            </div>
                                            <div className="main d-flex flex-column">
                                                <div className="main_rating">
                                                    <ul className="main_rating-stars d-flex align-items-center accent">
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
                                                        <li className="main_rating-stars_star">
                                                            <i className="icon-star"></i>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer">Shikakai Powder</a>
                                                <div className="main_price">
                                                    <span className="price price--old">₹10.97</span>
                                                    <span className="price price--new">₹6.97</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="shop_products-list_item col-sm-6 col-md-4 col-lg-6 col-xl-4" data-order="4">
                                        <div className="wrapper d-flex flex-column">
                                            <div className="media">
                                                <div className="overlay d-flex flex-column align-items-center justify-content-center">
                                                    <ul className="action d-flex align-items-center justify-content-center">
                                                        {/* <!-- <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="compare"
                                                    >
                                                        <i className="icon-compare"></i>
                                                    </a>
                                                </li> --> */}
                                                        <li className="list-item">
                                                            <a className="action_link d-flex align-items-center justify-content-center" href="#">
                                                                <i className="icon-basket"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-item">
                                                            <a
                                                                className="action_link d-flex align-items-center justify-content-center"
                                                                href="#"
                                                                data-role="wishlist"
                                                            >
                                                                <i className="icon-heart"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-item">
                                                            <a
                                                                className="action_link d-flex align-items-center justify-content-center"
                                                                href="product.html"
                                                                data-trigger="view"
                                                            >
                                                                <i className="icon-eye"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <picture>
                                                    <source data-srcset={wood} srcset={wood} type="image/webp" />
                                                    <img className="lazy" data-src={wood} src={wood} alt="media" />
                                                </picture>
                                            </div>
                                            <div className="main d-flex flex-column">
                                                <div className="main_rating">
                                                    <ul className="main_rating-stars d-flex align-items-center accent">
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
                                                <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer"
                                                >wood charcoal powder</a
                                                >
                                                <div className="main_price">
                                                    <span className="price">₹7.97</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="shop_products-list_item col-sm-6 col-md-4 col-lg-6 col-xl-4" data-order="5">
                                        <div className="wrapper d-flex flex-column">
                                            <div className="media">
                                                <span className="sale d-flex align-items-center justify-content-center">-15%</span>
                                                <div className="overlay d-flex flex-column align-items-center justify-content-center">
                                                    <ul className="action d-flex align-items-center justify-content-center">
                                                        {/* <!-- <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="compare"
                                                    >
                                                        <i className="icon-compare"></i>
                                                    </a>
                                                </li> --> */}
                                                        <li className="list-item">
                                                            <a className="action_link d-flex align-items-center justify-content-center" href="#">
                                                                <i className="icon-basket"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-item">
                                                            <a
                                                                className="action_link d-flex align-items-center justify-content-center"
                                                                href="#"
                                                                data-role="wishlist"
                                                            >
                                                                <i className="icon-heart"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-item">
                                                            <a
                                                                className="action_link d-flex align-items-center justify-content-center"
                                                                href="product.html"
                                                                data-trigger="view"
                                                            >
                                                                <i className="icon-eye"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <picture>
                                                    <source data-srcset={moroccan} srcset={moroccan} type="image/webp" />
                                                    <img className="lazy" data-src={moroccan} src={moroccan} alt="media" />
                                                </picture>
                                            </div>
                                            <div className="main d-flex flex-column">
                                                <div className="main_rating">
                                                    <ul className="main_rating-stars d-flex align-items-center accent">
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
                                                <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer"
                                                >Moroccan</a
                                                >
                                                <div className="main_price">
                                                    <span className="price price--old">₹10.97</span>
                                                    <span className="price price--new">₹6.97</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="shop_products-list_item col-sm-6 col-md-4 col-lg-6 col-xl-4" data-order="6">
                                        <div className="wrapper d-flex flex-column">
                                            <div className="media">
                                                <div className="overlay d-flex flex-column align-items-center justify-content-center">
                                                    <ul className="action d-flex align-items-center justify-content-center">
                                                        {/* <!-- <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="compare"
                                                    >
                                                        <i className="icon-compare"></i>
                                                    </a>
                                                </li> --> */}
                                                        <li className="list-item">
                                                            <a className="action_link d-flex align-items-center justify-content-center" href="#">
                                                                <i className="icon-basket"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-item">
                                                            <a
                                                                className="action_link d-flex align-items-center justify-content-center"
                                                                href="#"
                                                                data-role="wishlist"
                                                            >
                                                                <i className="icon-heart"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-item">
                                                            <a
                                                                className="action_link d-flex align-items-center justify-content-center"
                                                                href="product.html"
                                                                data-trigger="view"
                                                            >
                                                                <i className="icon-eye"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <picture>
                                                    <source data-srcset={hibiscus} srcset={hibiscus} type="image/webp" />
                                                    <img className="lazy" data-src={hibiscus} src={hibiscus} alt="media" />
                                                </picture>
                                            </div>
                                            <div className="main d-flex flex-column">
                                                <div className="main_rating">
                                                    <ul className="main_rating-stars d-flex align-items-center accent">
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
                                                <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer"
                                                >Hibiscus Powder</a
                                                >
                                                <div className="main_price">
                                                    <span className="price price--old">₹10.97</span>
                                                    <span className="price price--new">₹6.97</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="shop_products-list_item col-sm-6 col-md-4 col-lg-6 col-xl-4" data-order="5">
                                        <div className="wrapper d-flex flex-column">
                                            <div className="media">
                                                <span className="sale d-flex align-items-center justify-content-center">-15%</span>
                                                <div className="overlay d-flex flex-column align-items-center justify-content-center">
                                                    <ul className="action d-flex align-items-center justify-content-center">
                                                        {/* <!-- <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="compare"
                                                    >
                                                        <i className="icon-compare"></i>
                                                    </a>
                                                </li> --> */}
                                                        <li className="list-item">
                                                            <a className="action_link d-flex align-items-center justify-content-center" href="#">
                                                                <i className="icon-basket"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-item">
                                                            <a
                                                                className="action_link d-flex align-items-center justify-content-center"
                                                                href="#"
                                                                data-role="wishlist"
                                                            >
                                                                <i className="icon-heart"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-item">
                                                            <a
                                                                className="action_link d-flex align-items-center justify-content-center"
                                                                href="product.html"
                                                                data-trigger="view"
                                                            >
                                                                <i className="icon-eye"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <picture>
                                                    <source data-srcset={calamine} srcset={calamine} type="image/webp" />
                                                    <img className="lazy" data-src={calamine} src={calamine} alt="media" />
                                                </picture>
                                            </div>
                                            <div className="main d-flex flex-column">
                                                <div className="main_rating">
                                                    <ul className="main_rating-stars d-flex align-items-center accent">
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
                                                <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer"
                                                >calamine clay powder</a
                                                >
                                                <div className="main_price">
                                                    <span className="price price--old">₹10.97</span>
                                                    <span className="price price--new">₹6.97</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="shop_products-list_item col-sm-6 col-md-4 col-lg-6 col-xl-4" data-order="5">
                                        <div className="wrapper d-flex flex-column">
                                            <div className="media">
                                                <span className="sale d-flex align-items-center justify-content-center">-15%</span>
                                                <div className="overlay d-flex flex-column align-items-center justify-content-center">
                                                    <ul className="action d-flex align-items-center justify-content-center">
                                                        {/* <!-- <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="compare"
                                                    >
                                                        <i className="icon-compare"></i>
                                                    </a>
                                                </li> --> */}
                                                        <li className="list-item">
                                                            <a className="action_link d-flex align-items-center justify-content-center" href="#">
                                                                <i className="icon-basket"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-item">
                                                            <a
                                                                className="action_link d-flex align-items-center justify-content-center"
                                                                href="#"
                                                                data-role="wishlist"
                                                            >
                                                                <i className="icon-heart"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-item">
                                                            <a
                                                                className="action_link d-flex align-items-center justify-content-center"
                                                                href="product.html"
                                                                data-trigger="view"
                                                            >
                                                                <i className="icon-eye"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <picture>
                                                    <source data-srcset={deadSalt} srcset={deadSalt} type="image/webp" />
                                                    <img className="lazy" data-src={deadSalt} src={deadSalt} alt="media" />
                                                </picture>
                                            </div>
                                            <div className="main d-flex flex-column">
                                                <div className="main_rating">
                                                    <ul className="main_rating-stars d-flex align-items-center accent">
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
                                                <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer"
                                                >Dead sea salt</a
                                                >
                                                <div className="main_price">
                                                    <span className="price price--old">₹10.97</span>
                                                    <span className="price price--new">₹6.97</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="shop_products-list_item col-sm-6 col-md-4 col-lg-6 col-xl-4" data-order="5">
                                        <div className="wrapper d-flex flex-column">
                                            <div className="media">
                                                <span className="sale d-flex align-items-center justify-content-center">-15%</span>
                                                <div className="overlay d-flex flex-column align-items-center justify-content-center">
                                                    <ul className="action d-flex align-items-center justify-content-center">
                                                        {/* <!-- <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="compare"
                                                    >
                                                        <i className="icon-compare"></i>
                                                    </a>
                                                </li> --> */}
                                                        <li className="list-item">
                                                            <a className="action_link d-flex align-items-center justify-content-center" href="#">
                                                                <i className="icon-basket"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-item">
                                                            <a
                                                                className="action_link d-flex align-items-center justify-content-center"
                                                                href="#"
                                                                data-role="wishlist"
                                                            >
                                                                <i className="icon-heart"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-item">
                                                            <a
                                                                className="action_link d-flex align-items-center justify-content-center"
                                                                href="product.html"
                                                                data-trigger="view"
                                                            >
                                                                <i className="icon-eye"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <picture>
                                                    <source data-srcset={tulsi} srcset={tulsi} type="image/webp" />
                                                    <img className="lazy" data-src={tulsi} src={tulsi} alt="media" />
                                                </picture>
                                            </div>
                                            <div className="main d-flex flex-column">
                                                <div className="main_rating">
                                                    <ul className="main_rating-stars d-flex align-items-center accent">
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
                                                <a className="main_title " href="product.html" target="_blank" rel="noopener norefferer"
                                                >Tulsi leaf powder</a   >

                                                <div className="main_price" id="last-product" style={{ paddingTop: "-100px;" }}>
                                                    <span className="price price--old">₹10.97</span>
                                                    <span className="price price--new">₹6.97</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* <li className="shop_products-list_item col-sm-6 col-md-4 col-lg-6 col-xl-4" data-order="5">
                                <div className="wrapper d-flex flex-column">
                                    <div className="media">
                                        <span className="sale d-flex align-items-center justify-content-center">-15%</span>
                                        <div className="overlay d-flex flex-column align-items-center justify-content-center">
                                            <ul className="action d-flex align-items-center justify-content-center">
                                                <!-- <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="compare"
                                                    >
                                                        <i className="icon-compare"></i>
                                                    </a>
                                                </li> -->
                                                <li className="list-item">
                                                    <a className="action_link d-flex align-items-center justify-content-center" href="#">
                                                        <i className="icon-basket"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-role="wishlist"
                                                    >
                                                        <i className="icon-heart"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="product.html"
                                                        data-trigger="view"
                                                    >
                                                        <i className="icon-eye"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <picture>
                                            <source data-srcset="img/Tulsi leaf powder.png" srcset="img/Tulsi leaf powder.png" type="image/webp" />
                                            <img className="lazy" data-src="img/Tulsi leaf powder.png" src="img/Tulsi leaf powder.png" alt="media" />
                                        </picture>
                                    </div>
                                    <div className="main d-flex flex-column">
                                        <div className="main_rating">
                                            <ul className="main_rating-stars d-flex align-items-center accent">
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
                                        <a className="main_title " href="product.html" target="_blank" rel="noopener norefferer"
                                            >Tulsi leaf powder</a   >
                                     
                                        <div className="main_price" id="last-product" style={{paddingTop: "-100px;"}}>
                                            <span className="price price--old">₹10.97</span>
                                            <span className="price price--new">₹6.97</span>
                                        </div>
                                    </div>
                                </div>
                            </li> */}
                                    {/* <!-- <li className="shop_products-list_item col-sm-6 col-md-4 col-lg-6 col-xl-4" data-order="7">
                                <div className="wrapper d-flex flex-column">
                                    <div className="media">
                                        <div className="overlay d-flex flex-column align-items-center justify-content-center">
                                            <ul className="action d-flex align-items-center justify-content-center">
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="compare"
                                                    >
                                                        <i className="icon-compare"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a className="action_link d-flex align-items-center justify-content-center" href="#">
                                                        <i className="icon-basket"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-role="wishlist"
                                                    >
                                                        <i className="icon-heart"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="view"
                                                    >
                                                        <i className="icon-eye"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <picture>
                                            <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                                            <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="media" />
                                        </picture>
                                    </div>
                                    <div className="main d-flex flex-column">
                                        <div className="main_rating">
                                            <ul className="main_rating-stars d-flex align-items-center accent">
                                                <li className="main_rating-stars_star">
                                                    <i className="icon-star_fill"></i>
                                                </li>
                                                <li className="main_rating-stars_star">
                                                    <i className="icon-star_fill"></i>
                                                </li>
                                                <li className="main_rating-stars_star">
                                                    <i className="icon-star"></i>
                                                </li>
                                                <li className="main_rating-stars_star">
                                                    <i className="icon-star"></i>
                                                </li>
                                                <li className="main_rating-stars_star">
                                                    <i className="icon-star"></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer"
                                            >Witchcraft Cannabis</a
                                        >
                                        <div className="main_price">
                                            <span className="price">₹7.97</span>
                                        </div>
                                    </div>
                                </div>
                            </li> */}
                                    {/* <li className="shop_products-list_item col-sm-6 col-md-4 col-lg-6 col-xl-4" data-order="8">
                                <div className="wrapper d-flex flex-column">
                                    <div className="media">
                                        <span className="sale d-flex align-items-center justify-content-center">-15%</span>
                                        <div className="overlay d-flex flex-column align-items-center justify-content-center">
                                            <ul className="action d-flex align-items-center justify-content-center">
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="compare"
                                                    >
                                                        <i className="icon-compare"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a className="action_link d-flex align-items-center justify-content-center" href="#">
                                                        <i className="icon-basket"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-role="wishlist"
                                                    >
                                                        <i className="icon-heart"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="view"
                                                    >
                                                        <i className="icon-eye"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <picture>
                                            <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                                            <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="media" />
                                        </picture>
                                    </div>
                                    <div className="main d-flex flex-column">
                                        <div className="main_rating">
                                            <ul className="main_rating-stars d-flex align-items-center accent">
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
                                        <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer"
                                            >House Terp Sauce – 1 Gram</a
                                        >
                                        <div className="main_price">
                                            <span className="price price--old">₹10.97</span>
                                            <span className="price price--new">₹6.97</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="shop_products-list_item col-sm-6 col-md-4 col-lg-6 col-xl-4" data-order="9">
                                <div className="wrapper d-flex flex-column">
                                    <div className="media">
                                        <span className="sale d-flex align-items-center justify-content-center">-15%</span>
                                        <div className="overlay d-flex flex-column align-items-center justify-content-center">
                                            <ul className="action d-flex align-items-center justify-content-center">
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="compare"
                                                    >
                                                        <i className="icon-compare"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a className="action_link d-flex align-items-center justify-content-center" href="#">
                                                        <i className="icon-basket"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-role="wishlist"
                                                    >
                                                        <i className="icon-heart"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="view"
                                                    >
                                                        <i className="icon-eye"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <picture>
                                            <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                                            <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="media" />
                                        </picture>
                                    </div>
                                    <div className="main d-flex flex-column">
                                        <div className="main_rating">
                                            <ul className="main_rating-stars d-flex align-items-center accent">
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
                                        <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer">Chem Dawg</a>
                                        <div className="main_price">
                                            <span className="price price--old">₹10.97</span>
                                            <span className="price price--new">₹6.97</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="shop_products-list_item col-sm-6 col-md-4 col-lg-6 col-xl-4" data-order="10">
                                <div className="wrapper d-flex flex-column">
                                    <div className="media">
                                        <div className="overlay d-flex flex-column align-items-center justify-content-center">
                                            <ul className="action d-flex align-items-center justify-content-center">
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="compare"
                                                    >
                                                        <i className="icon-compare"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a className="action_link d-flex align-items-center justify-content-center" href="#">
                                                        <i className="icon-basket"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-role="wishlist"
                                                    >
                                                        <i className="icon-heart"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="view"
                                                    >
                                                        <i className="icon-eye"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <picture>
                                            <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                                            <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="media" />
                                        </picture>
                                    </div>
                                    <div className="main d-flex flex-column">
                                        <div className="main_rating">
                                            <ul className="main_rating-stars d-flex align-items-center accent">
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
                                        <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer">Ice Wreck</a>
                                        <div className="main_price">
                                            <span className="price">₹7.97</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="shop_products-list_item col-sm-6 col-md-4 col-lg-6 col-xl-4" data-order="11">
                                <div className="wrapper d-flex flex-column">
                                    <div className="media">
                                        <span className="sale d-flex align-items-center justify-content-center">-15%</span>
                                        <div className="overlay d-flex flex-column align-items-center justify-content-center">
                                            <ul className="action d-flex align-items-center justify-content-center">
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="compare"
                                                    >
                                                        <i className="icon-compare"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a className="action_link d-flex align-items-center justify-content-center" href="#">
                                                        <i className="icon-basket"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-role="wishlist"
                                                    >
                                                        <i className="icon-heart"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="view"
                                                    >
                                                        <i className="icon-eye"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <picture>
                                            <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                                            <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="media" />
                                        </picture>
                                    </div>
                                    <div className="main d-flex flex-column">
                                        <div className="main_rating">
                                            <ul className="main_rating-stars d-flex align-items-center accent">
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
                                        <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer"
                                            >Full Spectrum THC: Natural</a
                                        >
                                        <div className="main_price">
                                            <span className="price price--old">₹10.97</span>
                                            <span className="price price--new">₹6.97</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="shop_products-list_item col-sm-6 col-md-4 col-lg-6 col-xl-4" data-order="12">
                                <div className="wrapper d-flex flex-column">
                                    <div className="media">
                                        <div className="overlay d-flex flex-column align-items-center justify-content-center">
                                            <ul className="action d-flex align-items-center justify-content-center">
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="compare"
                                                    >
                                                        <i className="icon-compare"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a className="action_link d-flex align-items-center justify-content-center" href="#">
                                                        <i className="icon-basket"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-role="wishlist"
                                                    >
                                                        <i className="icon-heart"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="view"
                                                    >
                                                        <i className="icon-eye"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <picture>
                                            <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                                            <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="media" />
                                        </picture>
                                    </div>
                                    <div className="main d-flex flex-column">
                                        <div className="main_rating">
                                            <ul className="main_rating-stars d-flex align-items-center accent">
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
                                        <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer">Pink Diablo</a>
                                        <div className="main_price">
                                            <span className="price">₹7.97</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="shop_products-list_item col-sm-6 col-md-4 col-lg-6 col-xl-4" data-order="13">
                                <div className="wrapper d-flex flex-column">
                                    <div className="media">
                                        <div className="overlay d-flex flex-column align-items-center justify-content-center">
                                            <ul className="action d-flex align-items-center justify-content-center">
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="compare"
                                                    >
                                                        <i className="icon-compare"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a className="action_link d-flex align-items-center justify-content-center" href="#">
                                                        <i className="icon-basket"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-role="wishlist"
                                                    >
                                                        <i className="icon-heart"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="view"
                                                    >
                                                        <i className="icon-eye"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <picture>
                                            <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                                            <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="media" />
                                        </picture>
                                    </div>
                                    <div className="main d-flex flex-column">
                                        <div className="main_rating">
                                            <ul className="main_rating-stars d-flex align-items-center accent">
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
                                                <li className="main_rating-stars_star">
                                                    <i className="icon-star"></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer"
                                            >Coconut Based Tinctures</a
                                        >
                                        <div className="main_price">
                                            <span className="price">₹7.97</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="shop_products-list_item col-sm-6 col-md-4 col-lg-6 col-xl-4" data-order="14">
                                <div className="wrapper d-flex flex-column">
                                    <div className="media">
                                        <span className="sale d-flex align-items-center justify-content-center">-15%</span>
                                        <div className="overlay d-flex flex-column align-items-center justify-content-center">
                                            <ul className="action d-flex align-items-center justify-content-center">
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="compare"
                                                    >
                                                        <i className="icon-compare"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a className="action_link d-flex align-items-center justify-content-center" href="#">
                                                        <i className="icon-basket"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-role="wishlist"
                                                    >
                                                        <i className="icon-heart"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="view"
                                                    >
                                                        <i className="icon-eye"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <picture>
                                            <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                                            <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="media" />
                                        </picture>
                                    </div>
                                    <div className="main d-flex flex-column">
                                        <div className="main_rating">
                                            <ul className="main_rating-stars d-flex align-items-center accent">
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
                                        <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer">Chem Dawg</a>
                                        <div className="main_price">
                                            <span className="price price--old">₹10.97</span>
                                            <span className="price price--new">₹6.97</span>
                                        </div>
                                    </div>
                                </div>
                            </li> */}
                                    {/* <li className="shop_products-list_item col-sm-6 col-md-4 col-lg-6 col-xl-4" data-order="15">
                                <div className="wrapper d-flex flex-column">
                                    <div className="media">
                                        <div className="overlay d-flex flex-column align-items-center justify-content-center">
                                            <ul className="action d-flex align-items-center justify-content-center">
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="compare"
                                                    >
                                                        <i className="icon-compare"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a className="action_link d-flex align-items-center justify-content-center" href="#">
                                                        <i className="icon-basket"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-role="wishlist"
                                                    >
                                                        <i className="icon-heart"></i>
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a
                                                        className="action_link d-flex align-items-center justify-content-center"
                                                        href="#"
                                                        data-trigger="view"
                                                    >
                                                        <i className="icon-eye"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <picture>
                                            <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                                            <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="media" />
                                        </picture>
                                    </div>
                                    <div className="main d-flex flex-column">
                                        <div className="main_rating">
                                            <ul className="main_rating-stars d-flex align-items-center accent">
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
                                        <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer"
                                            >Tangerine Dream</a
                                        >
                                        <div className="main_price">
                                            <span className="price">₹7.97</span>
                                        </div>
                                    </div>
                                </div>
                            </li> --> */}
                                </ul>
                                <ul className="pagination d-flex align-items-center">
                                    <li className="pagination-page">
                                        <a
                                            className="pagination-page_link d-flex align-items-center justify-content-center"
                                            href="#"
                                            data-current="true"
                                        >1</a
                                        >
                                    </li>
                                    <li className="pagination-page">
                                        <a className="pagination-page_link d-flex align-items-center justify-content-center" href="#">2</a>
                                    </li>
                                    <li className="pagination-page">
                                        <a className="pagination-page_link d-flex align-items-center justify-content-center" href="#">3</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="shop_aside">
                                <div className="shop_aside-wrapper collapse" id="shopFilters">
                                    <div className="shop_aside-block shop_aside-block--search">
                                        <h4 className="shop_aside-block_header d-flex align-items-center">
                                            <span className="leaf">
                                                {/* <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.584 22.1185C18.1022 22.2634 16.697 21.9115 15.3804 20.9798C15.3517 20.9591 15.3229 20.9409 15.2942 20.9202C16.089 22.1625 16.1225 23.3349 16.539 24C15.4043 23.4643 14.4707 22.7914 13.8507 21.9089C13.7574 22.0486 13.7215 22.2272 13.8172 22.4808C13.032 21.7872 12.4312 20.6899 11.9524 19.3208C11.9476 19.3312 11.9452 19.3415 11.9405 19.3493C11.4641 20.7054 10.8656 21.7924 10.0828 22.4808C10.181 22.2272 10.1451 22.0486 10.0493 21.9089C9.42932 22.7914 8.49572 23.4643 7.36104 24C7.77757 23.3375 7.81109 22.1625 8.60584 20.9202C8.56514 20.9487 8.52445 20.9798 8.48615 21.0031C7.17911 21.9141 5.78829 22.2609 4.31848 22.1185C4.56983 22.0228 4.73979 21.8649 4.79964 21.632C2.34117 21.7614 1.12031 20.8711 0 19.898C0.0406952 19.9006 0.0837842 19.9057 0.126873 19.9083C1.57993 19.9808 3.97616 18.5651 6.62853 17.9052C6.61656 17.9 6.6022 17.8948 6.59262 17.8896C3.61709 16.6784 1.9031 14.7451 1.01977 12.3408C1.17537 12.5246 1.35012 12.6178 1.54402 12.6204C0.608034 9.7735 0.677455 7.77035 1.37885 6.29774C1.49375 8.05762 6.66204 9.6855 8.90028 13.3968C8.89071 13.3528 8.88113 13.314 8.87395 13.27C8.32576 10.8087 8.47418 8.07315 9.16121 5.13053C9.20908 5.79307 9.31202 6.22269 9.69982 6.49185C9.91048 3.89085 10.643 1.79971 11.95 0.267578C13.2571 1.79971 13.9896 3.89085 14.2002 6.49185C14.588 6.22269 14.691 5.79307 14.7388 5.13053C15.4378 8.12491 15.5791 10.9045 14.9974 13.3968C15.0309 13.3372 15.0668 13.2829 15.1027 13.2234C15.1051 13.2208 15.1051 13.2182 15.1075 13.213C17.2691 9.84079 21.8318 8.22067 22.4494 6.59796V6.59537C22.4901 6.49702 22.5116 6.39609 22.5188 6.29515C23.2202 7.76776 23.2896 9.77091 22.3536 12.6178C22.5475 12.6126 22.7247 12.5194 22.8779 12.3383C21.9898 14.7529 20.2662 16.6914 17.2691 17.9026C17.3074 17.9129 17.3457 17.9233 17.3816 17.931C20.0651 18.6246 22.4781 20.0584 23.8977 19.8954C22.7797 20.8685 21.5589 21.7588 19.098 21.6294C19.1627 21.8675 19.3302 22.0228 19.584 22.1185Z"
                                                fill="#258F67"
                                            />
                                            <path
                                                d="M12.3627 16.6732C12.3627 16.6732 9.45119 17.3788 6.85934 17.5985C3.80271 16.3889 2.04202 14.4581 1.13462 12.057C1.29446 12.2405 1.47398 12.3335 1.67316 12.3361C0.711665 9.49296 0.782978 7.49241 1.50348 6.02173C1.50594 6.02173 1.79857 15.6032 12.3627 16.6732Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M11.7116 16.7864C11.7116 16.7864 10.0667 16.3102 8.77415 13.0731C8.25027 10.5985 8.39211 7.84804 9.04868 4.88941C9.09443 5.55556 9.1928 5.98751 9.56341 6.25813C9.76473 3.64299 10.4648 1.54046 11.7138 0C11.2174 6.38824 10.904 12.4824 11.7116 16.7864Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M22.3487 6.552C20.8856 12.8009 17.0985 15.79 12.0293 16.9711C13.0596 16.6693 14.1769 15.0226 15.1296 13.2119C15.132 13.2093 15.132 13.2067 15.1343 13.2015C17.2608 9.81172 21.7419 8.18576 22.3487 6.552Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M23.9996 19.4003C19.2292 19.9109 15.026 19.3955 12.0508 16.6816C12.0508 16.6816 14.9231 17.4656 17.4842 17.5807C20.1675 18.2208 22.5778 19.5513 23.9996 19.4003Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M16.4192 23.6094C14.6332 21.5095 13.2143 19.1771 12.0742 16.6633C13.1894 18.0582 14.3113 19.4709 15.3222 20.6281C15.295 20.6077 15.2678 20.5898 15.2406 20.5694C15.9931 21.7982 16.0249 22.9554 16.4192 23.6094Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M12.2037 19.1457C11.7042 20.4843 11.0767 21.5573 10.256 22.2368C10.3589 21.9864 10.3213 21.8102 10.2209 21.6722C9.57084 22.5433 8.59201 23.2076 7.40234 23.7364C9.34998 21.5445 10.9713 19.2351 12.2137 16.7903C12.3342 17.2476 12.299 18.1545 12.2037 19.1457Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M12.0016 16.896C11.9154 17.0026 10.0093 19.3149 8.54143 20.9535C7.23401 21.8691 5.84277 22.2176 4.37251 22.0746C4.62394 21.9783 4.79395 21.8197 4.85382 21.5856C2.39461 21.7156 1.17339 20.8209 0.0527344 19.8429C0.0934418 19.8455 0.136544 19.8507 0.179646 19.8533C4.51858 20.2227 8.54862 19.5204 12.0016 16.896Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M12.811 16.7992C12.811 17.2789 12.4464 17.6674 11.9963 17.6674C11.5462 17.6674 11.1816 17.2789 11.1816 16.7992C11.1816 16.3195 11.5462 15.9309 11.9963 15.9309C12.4464 15.9309 12.811 16.3195 12.811 16.7992Z"
                                                fill="#214842"
                                            />
                                        </svg> --> */}
                                            </span>
                                            Search by Products
                                        </h4>
                                        <form className="form form--search" data-type="searchProducts" action="#" method="get">
                                            <input className="field required" type="text" placeholder="Search..." />
                                            <button className="btn" type="submit">Search</button>
                                        </form>
                                    </div>
                                    <div className="shop_aside-block shop_aside-block--categories">
                                        <h4 className="shop_aside-block_header d-flex align-items-center">
                                            <span className="leaf">
                                                {/* <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.584 22.1185C18.1022 22.2634 16.697 21.9115 15.3804 20.9798C15.3517 20.9591 15.3229 20.9409 15.2942 20.9202C16.089 22.1625 16.1225 23.3349 16.539 24C15.4043 23.4643 14.4707 22.7914 13.8507 21.9089C13.7574 22.0486 13.7215 22.2272 13.8172 22.4808C13.032 21.7872 12.4312 20.6899 11.9524 19.3208C11.9476 19.3312 11.9452 19.3415 11.9405 19.3493C11.4641 20.7054 10.8656 21.7924 10.0828 22.4808C10.181 22.2272 10.1451 22.0486 10.0493 21.9089C9.42932 22.7914 8.49572 23.4643 7.36104 24C7.77757 23.3375 7.81109 22.1625 8.60584 20.9202C8.56514 20.9487 8.52445 20.9798 8.48615 21.0031C7.17911 21.9141 5.78829 22.2609 4.31848 22.1185C4.56983 22.0228 4.73979 21.8649 4.79964 21.632C2.34117 21.7614 1.12031 20.8711 0 19.898C0.0406952 19.9006 0.0837842 19.9057 0.126873 19.9083C1.57993 19.9808 3.97616 18.5651 6.62853 17.9052C6.61656 17.9 6.6022 17.8948 6.59262 17.8896C3.61709 16.6784 1.9031 14.7451 1.01977 12.3408C1.17537 12.5246 1.35012 12.6178 1.54402 12.6204C0.608034 9.7735 0.677455 7.77035 1.37885 6.29774C1.49375 8.05762 6.66204 9.6855 8.90028 13.3968C8.89071 13.3528 8.88113 13.314 8.87395 13.27C8.32576 10.8087 8.47418 8.07315 9.16121 5.13053C9.20908 5.79307 9.31202 6.22269 9.69982 6.49185C9.91048 3.89085 10.643 1.79971 11.95 0.267578C13.2571 1.79971 13.9896 3.89085 14.2002 6.49185C14.588 6.22269 14.691 5.79307 14.7388 5.13053C15.4378 8.12491 15.5791 10.9045 14.9974 13.3968C15.0309 13.3372 15.0668 13.2829 15.1027 13.2234C15.1051 13.2208 15.1051 13.2182 15.1075 13.213C17.2691 9.84079 21.8318 8.22067 22.4494 6.59796V6.59537C22.4901 6.49702 22.5116 6.39609 22.5188 6.29515C23.2202 7.76776 23.2896 9.77091 22.3536 12.6178C22.5475 12.6126 22.7247 12.5194 22.8779 12.3383C21.9898 14.7529 20.2662 16.6914 17.2691 17.9026C17.3074 17.9129 17.3457 17.9233 17.3816 17.931C20.0651 18.6246 22.4781 20.0584 23.8977 19.8954C22.7797 20.8685 21.5589 21.7588 19.098 21.6294C19.1627 21.8675 19.3302 22.0228 19.584 22.1185Z"
                                                fill="#258F67"
                                            />
                                            <path
                                                d="M12.3627 16.6732C12.3627 16.6732 9.45119 17.3788 6.85934 17.5985C3.80271 16.3889 2.04202 14.4581 1.13462 12.057C1.29446 12.2405 1.47398 12.3335 1.67316 12.3361C0.711665 9.49296 0.782978 7.49241 1.50348 6.02173C1.50594 6.02173 1.79857 15.6032 12.3627 16.6732Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M11.7116 16.7864C11.7116 16.7864 10.0667 16.3102 8.77415 13.0731C8.25027 10.5985 8.39211 7.84804 9.04868 4.88941C9.09443 5.55556 9.1928 5.98751 9.56341 6.25813C9.76473 3.64299 10.4648 1.54046 11.7138 0C11.2174 6.38824 10.904 12.4824 11.7116 16.7864Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M22.3487 6.552C20.8856 12.8009 17.0985 15.79 12.0293 16.9711C13.0596 16.6693 14.1769 15.0226 15.1296 13.2119C15.132 13.2093 15.132 13.2067 15.1343 13.2015C17.2608 9.81172 21.7419 8.18576 22.3487 6.552Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M23.9996 19.4003C19.2292 19.9109 15.026 19.3955 12.0508 16.6816C12.0508 16.6816 14.9231 17.4656 17.4842 17.5807C20.1675 18.2208 22.5778 19.5513 23.9996 19.4003Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M16.4192 23.6094C14.6332 21.5095 13.2143 19.1771 12.0742 16.6633C13.1894 18.0582 14.3113 19.4709 15.3222 20.6281C15.295 20.6077 15.2678 20.5898 15.2406 20.5694C15.9931 21.7982 16.0249 22.9554 16.4192 23.6094Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M12.2037 19.1457C11.7042 20.4843 11.0767 21.5573 10.256 22.2368C10.3589 21.9864 10.3213 21.8102 10.2209 21.6722C9.57084 22.5433 8.59201 23.2076 7.40234 23.7364C9.34998 21.5445 10.9713 19.2351 12.2137 16.7903C12.3342 17.2476 12.299 18.1545 12.2037 19.1457Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M12.0016 16.896C11.9154 17.0026 10.0093 19.3149 8.54143 20.9535C7.23401 21.8691 5.84277 22.2176 4.37251 22.0746C4.62394 21.9783 4.79395 21.8197 4.85382 21.5856C2.39461 21.7156 1.17339 20.8209 0.0527344 19.8429C0.0934418 19.8455 0.136544 19.8507 0.179646 19.8533C4.51858 20.2227 8.54862 19.5204 12.0016 16.896Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M12.811 16.7992C12.811 17.2789 12.4464 17.6674 11.9963 17.6674C11.5462 17.6674 11.1816 17.2789 11.1816 16.7992C11.1816 16.3195 11.5462 15.9309 11.9963 15.9309C12.4464 15.9309 12.811 16.3195 12.811 16.7992Z"
                                                fill="#214842"
                                            />
                                        </svg> --> */}
                                            </span>
                                            Product Categories
                                        </h4>
                                        <ul className="list">
                                            <li className="list-item d-flex align-items-center">
                                                <input type="radio" id="sale" name="category" />
                                                <label for="sale">Aloevera </label>
                                            </li>
                                            <li className="list-item">
                                                <input type="radio" id="flower" name="category" />
                                                <label for="flower">Plant</label>
                                            </li>
                                            <li className="list-item">
                                                <input type="radio" id="seeds" name="category" />
                                                <label for="seeds">Flower</label>
                                            </li>
                                            <li className="list-item">
                                                <input type="radio" id="oil" name="category" checked />
                                                <label for="oil">Salt</label>
                                            </li>
                                            <li className="list-item">
                                                <input type="radio" id="concentrate" name="category" />
                                                <label for="concentrate">Wood </label>
                                            </li>
                                            <li className="list-item">
                                                <input type="radio" id="cartridges" name="category" />
                                                <label for="cartridges"> fruit</label>
                                            </li>
                                            <li className="list-item">
                                                <input type="radio" id="cartridges" name="category" />
                                                <label for="cartridges"> Leaf</label>
                                            </li>


                                        </ul>
                                        {/* <!-- <ul className="list">
                                    <li className="list-item d-flex align-items-center">
                                        <input type="radio" id="sale" name="category" />
                                        <label for="sale">Aloevera </label>
                                    </li>
                                    <li className="list-item">
                                        <input type="radio" id="flower" name="category" />
                                        <label for="flower">Tulsi</label>
                                    </li>
                                    <li className="list-item">
                                        <input type="radio" id="seeds" name="category" />
                                        <label for="seeds">Aamla</label>
                                    </li>
                                    <li className="list-item">
                                        <input type="radio" id="oil" name="category" checked />
                                        <label for="oil">Shikakai</label>
                                    </li>
                                    <li className="list-item">
                                        <input type="radio" id="concentrate" name="category" />
                                        <label for="concentrate">Wood charcoal</label>
                                    </li>
                                    <li className="list-item">
                                        <input type="radio" id="cartridges" name="category" />
                                        <label for="cartridges">Hibiscus</label>
                                    </li>
                                    <li className="list-item">
                                        <input type="radio" id="edible" name="category" />
                                        <label for="edible">Reetha</label>
                                    </li>
                                    <li className="list-item">
                                        <input type="radio" id="edible" name="category" />
                                        <label for="edible">Sandalwood </label>
                                    </li>
                                    <li className="list-item">
                                        <input type="radio" id="edible" name="category" />
                                        <label for="edible">Rose petal</label>
                                    </li>
                                    <li className="list-item">
                                        <input type="radio" id="edible" name="category" />
                                        <label for="edible">Orange</label>
                                    </li>
                                    <li className="list-item">
                                        <input type="radio" id="edible" name="category" />
                                        <label for="edible">Neem</label>
                                    </li>
                                </ul> --> */}
                                    </div>
                                    {/* <!-- <div className="shop_aside-block shop_aside-block--types">
                                <h4 className="shop_aside-block_header d-flex align-items-center">
                                    <span className="leaf">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.584 22.1185C18.1022 22.2634 16.697 21.9115 15.3804 20.9798C15.3517 20.9591 15.3229 20.9409 15.2942 20.9202C16.089 22.1625 16.1225 23.3349 16.539 24C15.4043 23.4643 14.4707 22.7914 13.8507 21.9089C13.7574 22.0486 13.7215 22.2272 13.8172 22.4808C13.032 21.7872 12.4312 20.6899 11.9524 19.3208C11.9476 19.3312 11.9452 19.3415 11.9405 19.3493C11.4641 20.7054 10.8656 21.7924 10.0828 22.4808C10.181 22.2272 10.1451 22.0486 10.0493 21.9089C9.42932 22.7914 8.49572 23.4643 7.36104 24C7.77757 23.3375 7.81109 22.1625 8.60584 20.9202C8.56514 20.9487 8.52445 20.9798 8.48615 21.0031C7.17911 21.9141 5.78829 22.2609 4.31848 22.1185C4.56983 22.0228 4.73979 21.8649 4.79964 21.632C2.34117 21.7614 1.12031 20.8711 0 19.898C0.0406952 19.9006 0.0837842 19.9057 0.126873 19.9083C1.57993 19.9808 3.97616 18.5651 6.62853 17.9052C6.61656 17.9 6.6022 17.8948 6.59262 17.8896C3.61709 16.6784 1.9031 14.7451 1.01977 12.3408C1.17537 12.5246 1.35012 12.6178 1.54402 12.6204C0.608034 9.7735 0.677455 7.77035 1.37885 6.29774C1.49375 8.05762 6.66204 9.6855 8.90028 13.3968C8.89071 13.3528 8.88113 13.314 8.87395 13.27C8.32576 10.8087 8.47418 8.07315 9.16121 5.13053C9.20908 5.79307 9.31202 6.22269 9.69982 6.49185C9.91048 3.89085 10.643 1.79971 11.95 0.267578C13.2571 1.79971 13.9896 3.89085 14.2002 6.49185C14.588 6.22269 14.691 5.79307 14.7388 5.13053C15.4378 8.12491 15.5791 10.9045 14.9974 13.3968C15.0309 13.3372 15.0668 13.2829 15.1027 13.2234C15.1051 13.2208 15.1051 13.2182 15.1075 13.213C17.2691 9.84079 21.8318 8.22067 22.4494 6.59796V6.59537C22.4901 6.49702 22.5116 6.39609 22.5188 6.29515C23.2202 7.76776 23.2896 9.77091 22.3536 12.6178C22.5475 12.6126 22.7247 12.5194 22.8779 12.3383C21.9898 14.7529 20.2662 16.6914 17.2691 17.9026C17.3074 17.9129 17.3457 17.9233 17.3816 17.931C20.0651 18.6246 22.4781 20.0584 23.8977 19.8954C22.7797 20.8685 21.5589 21.7588 19.098 21.6294C19.1627 21.8675 19.3302 22.0228 19.584 22.1185Z"
                                                fill="#258F67"
                                            />
                                            <path
                                                d="M12.3627 16.6732C12.3627 16.6732 9.45119 17.3788 6.85934 17.5985C3.80271 16.3889 2.04202 14.4581 1.13462 12.057C1.29446 12.2405 1.47398 12.3335 1.67316 12.3361C0.711665 9.49296 0.782978 7.49241 1.50348 6.02173C1.50594 6.02173 1.79857 15.6032 12.3627 16.6732Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M11.7116 16.7864C11.7116 16.7864 10.0667 16.3102 8.77415 13.0731C8.25027 10.5985 8.39211 7.84804 9.04868 4.88941C9.09443 5.55556 9.1928 5.98751 9.56341 6.25813C9.76473 3.64299 10.4648 1.54046 11.7138 0C11.2174 6.38824 10.904 12.4824 11.7116 16.7864Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M22.3487 6.552C20.8856 12.8009 17.0985 15.79 12.0293 16.9711C13.0596 16.6693 14.1769 15.0226 15.1296 13.2119C15.132 13.2093 15.132 13.2067 15.1343 13.2015C17.2608 9.81172 21.7419 8.18576 22.3487 6.552Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M23.9996 19.4003C19.2292 19.9109 15.026 19.3955 12.0508 16.6816C12.0508 16.6816 14.9231 17.4656 17.4842 17.5807C20.1675 18.2208 22.5778 19.5513 23.9996 19.4003Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M16.4192 23.6094C14.6332 21.5095 13.2143 19.1771 12.0742 16.6633C13.1894 18.0582 14.3113 19.4709 15.3222 20.6281C15.295 20.6077 15.2678 20.5898 15.2406 20.5694C15.9931 21.7982 16.0249 22.9554 16.4192 23.6094Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M12.2037 19.1457C11.7042 20.4843 11.0767 21.5573 10.256 22.2368C10.3589 21.9864 10.3213 21.8102 10.2209 21.6722C9.57084 22.5433 8.59201 23.2076 7.40234 23.7364C9.34998 21.5445 10.9713 19.2351 12.2137 16.7903C12.3342 17.2476 12.299 18.1545 12.2037 19.1457Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M12.0016 16.896C11.9154 17.0026 10.0093 19.3149 8.54143 20.9535C7.23401 21.8691 5.84277 22.2176 4.37251 22.0746C4.62394 21.9783 4.79395 21.8197 4.85382 21.5856C2.39461 21.7156 1.17339 20.8209 0.0527344 19.8429C0.0934418 19.8455 0.136544 19.8507 0.179646 19.8533C4.51858 20.2227 8.54862 19.5204 12.0016 16.896Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M12.811 16.7992C12.811 17.2789 12.4464 17.6674 11.9963 17.6674C11.5462 17.6674 11.1816 17.2789 11.1816 16.7992C11.1816 16.3195 11.5462 15.9309 11.9963 15.9309C12.4464 15.9309 12.811 16.3195 12.811 16.7992Z"
                                                fill="#214842"
                                            />
                                        </svg>
                                    </span>
                                    Plant Type
                                </h4>
                                <ul className="list">
                                    <li className="list-item">
                                        <input type="radio" id="indica" name="type" />
                                        <label for="indica">Indica-Dominant</label>
                                    </li>
                                    <li className="list-item">
                                        <input type="radio" id="sativa" name="type" />
                                        <label for="sativa">Sativa-Dominant</label>
                                    </li>
                                    <li className="list-item">
                                        <input type="radio" id="hybrid" name="type" checked />
                                        <label for="hybrid">Hybrid</label>
                                    </li>
                                </ul>
                            </div> --> */}
                                    <div className="shop_aside-block shop_aside-block--weight">
                                        <h4 className="shop_aside-block_header d-flex align-items-center">

                                            Offers
                                        </h4>
                                        <ul className="list d-flex flex-wrap">
                                            <li className="list-item ">
                                                <input type="radio" id="weight1" name="weight" />
                                                <label for="weight1">Singal</label>
                                            </li>
                                            <li className="list-item">
                                                <input type="radio" id="weight2" name="weight" />
                                                <label for="weight2">Combo Products</label>
                                            </li>


                                        </ul>
                                    </div>
                                    <div className="shop_aside-block shop_aside-block--weight">
                                        <h4 className="shop_aside-block_header d-flex align-items-center">

                                            Products
                                        </h4>
                                        <ul className="list d-flex flex-wrap">
                                            <li className="list-item ">
                                                <input type="radio" id="weight1" name="weight" />
                                                <label for="weight1">Singal</label>
                                            </li>
                                            <li className="list-item">
                                                <input type="radio" id="weight2" name="weight" />
                                                <label for="weight2">Combo Products</label>
                                            </li>


                                        </ul>
                                    </div>
                                    <div className="shop_aside-block shop_aside-block--price">
                                        <h4 className="shop_aside-block_header d-flex align-items-center">

                                            Filter by Price
                                        </h4>
                                        <ul className="list">
                                            <li className="list-item">
                                                <input type="radio" id="010-thc" name="thc" checked />
                                                <label for="010-thc">Low-High</label>
                                            </li>
                                            <li className="list-item">
                                                <input type="radio" id="1020-thc" name="thc" />
                                                <label for="1020-thc">High-Low</label>
                                            </li>

                                        </ul>


                                    </div>
                                    {/* <!-- <div className="shop_aside-block shop_aside-block--sale">
                                <div className="content">
                                    <h4 className="shop_aside-block_header">Everything is 20% off for this special day!</h4>
                                    <p className="shop_aside-block_text">Excluding items already on sale</p>
                                    <div className="shop_aside-block_timer timer d-flex justify-content-start">
                                        <div className="timer_block d-flex flex-column justify-content-center">
                                            <span className="timer_block-number" id="hours">22</span>
                                        </div>
                                        <div className="timer_separator d-flex flex-column justify-content-center align-items-center">
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                        </div>
                                        <div className="timer_block d-flex flex-column justify-content-center">
                                            <span className="timer_block-number" id="minutes">00</span>
                                        </div>
                                        <div className="timer_separator d-flex flex-column justify-content-center align-items-center">
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                        </div>
                                        <div className="timer_block d-flex flex-column justify-content-center">
                                            <span className="timer_block-number" id="seconds">59</span>
                                        </div>
                                    </div>
                                    <a href="#" className="btn">Shop Now</a>
                                </div>
                                <picture>
                                    <source data-srcset="img/placeholder.jpg" srcset="img/placeholder.jpg" type="image/webp" />
                                    <img className="lazy leaf" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="media" />
                                </picture>
                            </div> --> */}
                                    {/* <!-- <div className="shop_aside-block shop_aside-block--thc">
                                <h4 className="shop_aside-block_header d-flex align-items-center">
                                    <span className="leaf">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.584 22.1185C18.1022 22.2634 16.697 21.9115 15.3804 20.9798C15.3517 20.9591 15.3229 20.9409 15.2942 20.9202C16.089 22.1625 16.1225 23.3349 16.539 24C15.4043 23.4643 14.4707 22.7914 13.8507 21.9089C13.7574 22.0486 13.7215 22.2272 13.8172 22.4808C13.032 21.7872 12.4312 20.6899 11.9524 19.3208C11.9476 19.3312 11.9452 19.3415 11.9405 19.3493C11.4641 20.7054 10.8656 21.7924 10.0828 22.4808C10.181 22.2272 10.1451 22.0486 10.0493 21.9089C9.42932 22.7914 8.49572 23.4643 7.36104 24C7.77757 23.3375 7.81109 22.1625 8.60584 20.9202C8.56514 20.9487 8.52445 20.9798 8.48615 21.0031C7.17911 21.9141 5.78829 22.2609 4.31848 22.1185C4.56983 22.0228 4.73979 21.8649 4.79964 21.632C2.34117 21.7614 1.12031 20.8711 0 19.898C0.0406952 19.9006 0.0837842 19.9057 0.126873 19.9083C1.57993 19.9808 3.97616 18.5651 6.62853 17.9052C6.61656 17.9 6.6022 17.8948 6.59262 17.8896C3.61709 16.6784 1.9031 14.7451 1.01977 12.3408C1.17537 12.5246 1.35012 12.6178 1.54402 12.6204C0.608034 9.7735 0.677455 7.77035 1.37885 6.29774C1.49375 8.05762 6.66204 9.6855 8.90028 13.3968C8.89071 13.3528 8.88113 13.314 8.87395 13.27C8.32576 10.8087 8.47418 8.07315 9.16121 5.13053C9.20908 5.79307 9.31202 6.22269 9.69982 6.49185C9.91048 3.89085 10.643 1.79971 11.95 0.267578C13.2571 1.79971 13.9896 3.89085 14.2002 6.49185C14.588 6.22269 14.691 5.79307 14.7388 5.13053C15.4378 8.12491 15.5791 10.9045 14.9974 13.3968C15.0309 13.3372 15.0668 13.2829 15.1027 13.2234C15.1051 13.2208 15.1051 13.2182 15.1075 13.213C17.2691 9.84079 21.8318 8.22067 22.4494 6.59796V6.59537C22.4901 6.49702 22.5116 6.39609 22.5188 6.29515C23.2202 7.76776 23.2896 9.77091 22.3536 12.6178C22.5475 12.6126 22.7247 12.5194 22.8779 12.3383C21.9898 14.7529 20.2662 16.6914 17.2691 17.9026C17.3074 17.9129 17.3457 17.9233 17.3816 17.931C20.0651 18.6246 22.4781 20.0584 23.8977 19.8954C22.7797 20.8685 21.5589 21.7588 19.098 21.6294C19.1627 21.8675 19.3302 22.0228 19.584 22.1185Z"
                                                fill="#258F67"
                                            />
                                            <path
                                                d="M12.3627 16.6732C12.3627 16.6732 9.45119 17.3788 6.85934 17.5985C3.80271 16.3889 2.04202 14.4581 1.13462 12.057C1.29446 12.2405 1.47398 12.3335 1.67316 12.3361C0.711665 9.49296 0.782978 7.49241 1.50348 6.02173C1.50594 6.02173 1.79857 15.6032 12.3627 16.6732Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M11.7116 16.7864C11.7116 16.7864 10.0667 16.3102 8.77415 13.0731C8.25027 10.5985 8.39211 7.84804 9.04868 4.88941C9.09443 5.55556 9.1928 5.98751 9.56341 6.25813C9.76473 3.64299 10.4648 1.54046 11.7138 0C11.2174 6.38824 10.904 12.4824 11.7116 16.7864Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M22.3487 6.552C20.8856 12.8009 17.0985 15.79 12.0293 16.9711C13.0596 16.6693 14.1769 15.0226 15.1296 13.2119C15.132 13.2093 15.132 13.2067 15.1343 13.2015C17.2608 9.81172 21.7419 8.18576 22.3487 6.552Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M23.9996 19.4003C19.2292 19.9109 15.026 19.3955 12.0508 16.6816C12.0508 16.6816 14.9231 17.4656 17.4842 17.5807C20.1675 18.2208 22.5778 19.5513 23.9996 19.4003Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M16.4192 23.6094C14.6332 21.5095 13.2143 19.1771 12.0742 16.6633C13.1894 18.0582 14.3113 19.4709 15.3222 20.6281C15.295 20.6077 15.2678 20.5898 15.2406 20.5694C15.9931 21.7982 16.0249 22.9554 16.4192 23.6094Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M12.2037 19.1457C11.7042 20.4843 11.0767 21.5573 10.256 22.2368C10.3589 21.9864 10.3213 21.8102 10.2209 21.6722C9.57084 22.5433 8.59201 23.2076 7.40234 23.7364C9.34998 21.5445 10.9713 19.2351 12.2137 16.7903C12.3342 17.2476 12.299 18.1545 12.2037 19.1457Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M12.0016 16.896C11.9154 17.0026 10.0093 19.3149 8.54143 20.9535C7.23401 21.8691 5.84277 22.2176 4.37251 22.0746C4.62394 21.9783 4.79395 21.8197 4.85382 21.5856C2.39461 21.7156 1.17339 20.8209 0.0527344 19.8429C0.0934418 19.8455 0.136544 19.8507 0.179646 19.8533C4.51858 20.2227 8.54862 19.5204 12.0016 16.896Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M12.811 16.7992C12.811 17.2789 12.4464 17.6674 11.9963 17.6674C11.5462 17.6674 11.1816 17.2789 11.1816 16.7992C11.1816 16.3195 11.5462 15.9309 11.9963 15.9309C12.4464 15.9309 12.811 16.3195 12.811 16.7992Z"
                                                fill="#214842"
                                            />
                                        </svg>
                                    </span>
                                    THC
                                </h4>
                                <ul className="list">
                                    <li className="list-item">
                                        <input type="radio" id="010-thc" name="thc" checked />
                                        <label for="010-thc">0% - 10%</label>
                                    </li>
                                    <li className="list-item">
                                        <input type="radio" id="1020-thc" name="thc" />
                                        <label for="1020-thc">10% - 20%</label>
                                    </li>
                                    <li className="list-item">
                                        <input type="radio" id="3040-thc" name="thc" />
                                        <label for="3040-thc">30% - 40%</label>
                                    </li>
                                    <li className="list-item">
                                        <input type="radio" id="4050-thc" name="thc" />
                                        <label for="4050-thc">40% - 50%</label>
                                    </li>
                                </ul>
                            </div> --> */}
                                    {/* <!-- <div className="shop_aside-block shop_aside-block--cbd">
                                <h4 className="shop_aside-block_header d-flex align-items-center">
                                    <span className="leaf">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.584 22.1185C18.1022 22.2634 16.697 21.9115 15.3804 20.9798C15.3517 20.9591 15.3229 20.9409 15.2942 20.9202C16.089 22.1625 16.1225 23.3349 16.539 24C15.4043 23.4643 14.4707 22.7914 13.8507 21.9089C13.7574 22.0486 13.7215 22.2272 13.8172 22.4808C13.032 21.7872 12.4312 20.6899 11.9524 19.3208C11.9476 19.3312 11.9452 19.3415 11.9405 19.3493C11.4641 20.7054 10.8656 21.7924 10.0828 22.4808C10.181 22.2272 10.1451 22.0486 10.0493 21.9089C9.42932 22.7914 8.49572 23.4643 7.36104 24C7.77757 23.3375 7.81109 22.1625 8.60584 20.9202C8.56514 20.9487 8.52445 20.9798 8.48615 21.0031C7.17911 21.9141 5.78829 22.2609 4.31848 22.1185C4.56983 22.0228 4.73979 21.8649 4.79964 21.632C2.34117 21.7614 1.12031 20.8711 0 19.898C0.0406952 19.9006 0.0837842 19.9057 0.126873 19.9083C1.57993 19.9808 3.97616 18.5651 6.62853 17.9052C6.61656 17.9 6.6022 17.8948 6.59262 17.8896C3.61709 16.6784 1.9031 14.7451 1.01977 12.3408C1.17537 12.5246 1.35012 12.6178 1.54402 12.6204C0.608034 9.7735 0.677455 7.77035 1.37885 6.29774C1.49375 8.05762 6.66204 9.6855 8.90028 13.3968C8.89071 13.3528 8.88113 13.314 8.87395 13.27C8.32576 10.8087 8.47418 8.07315 9.16121 5.13053C9.20908 5.79307 9.31202 6.22269 9.69982 6.49185C9.91048 3.89085 10.643 1.79971 11.95 0.267578C13.2571 1.79971 13.9896 3.89085 14.2002 6.49185C14.588 6.22269 14.691 5.79307 14.7388 5.13053C15.4378 8.12491 15.5791 10.9045 14.9974 13.3968C15.0309 13.3372 15.0668 13.2829 15.1027 13.2234C15.1051 13.2208 15.1051 13.2182 15.1075 13.213C17.2691 9.84079 21.8318 8.22067 22.4494 6.59796V6.59537C22.4901 6.49702 22.5116 6.39609 22.5188 6.29515C23.2202 7.76776 23.2896 9.77091 22.3536 12.6178C22.5475 12.6126 22.7247 12.5194 22.8779 12.3383C21.9898 14.7529 20.2662 16.6914 17.2691 17.9026C17.3074 17.9129 17.3457 17.9233 17.3816 17.931C20.0651 18.6246 22.4781 20.0584 23.8977 19.8954C22.7797 20.8685 21.5589 21.7588 19.098 21.6294C19.1627 21.8675 19.3302 22.0228 19.584 22.1185Z"
                                                fill="#258F67"
                                            />
                                            <path
                                                d="M12.3627 16.6732C12.3627 16.6732 9.45119 17.3788 6.85934 17.5985C3.80271 16.3889 2.04202 14.4581 1.13462 12.057C1.29446 12.2405 1.47398 12.3335 1.67316 12.3361C0.711665 9.49296 0.782978 7.49241 1.50348 6.02173C1.50594 6.02173 1.79857 15.6032 12.3627 16.6732Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M11.7116 16.7864C11.7116 16.7864 10.0667 16.3102 8.77415 13.0731C8.25027 10.5985 8.39211 7.84804 9.04868 4.88941C9.09443 5.55556 9.1928 5.98751 9.56341 6.25813C9.76473 3.64299 10.4648 1.54046 11.7138 0C11.2174 6.38824 10.904 12.4824 11.7116 16.7864Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M22.3487 6.552C20.8856 12.8009 17.0985 15.79 12.0293 16.9711C13.0596 16.6693 14.1769 15.0226 15.1296 13.2119C15.132 13.2093 15.132 13.2067 15.1343 13.2015C17.2608 9.81172 21.7419 8.18576 22.3487 6.552Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M23.9996 19.4003C19.2292 19.9109 15.026 19.3955 12.0508 16.6816C12.0508 16.6816 14.9231 17.4656 17.4842 17.5807C20.1675 18.2208 22.5778 19.5513 23.9996 19.4003Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M16.4192 23.6094C14.6332 21.5095 13.2143 19.1771 12.0742 16.6633C13.1894 18.0582 14.3113 19.4709 15.3222 20.6281C15.295 20.6077 15.2678 20.5898 15.2406 20.5694C15.9931 21.7982 16.0249 22.9554 16.4192 23.6094Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M12.2037 19.1457C11.7042 20.4843 11.0767 21.5573 10.256 22.2368C10.3589 21.9864 10.3213 21.8102 10.2209 21.6722C9.57084 22.5433 8.59201 23.2076 7.40234 23.7364C9.34998 21.5445 10.9713 19.2351 12.2137 16.7903C12.3342 17.2476 12.299 18.1545 12.2037 19.1457Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M12.0016 16.896C11.9154 17.0026 10.0093 19.3149 8.54143 20.9535C7.23401 21.8691 5.84277 22.2176 4.37251 22.0746C4.62394 21.9783 4.79395 21.8197 4.85382 21.5856C2.39461 21.7156 1.17339 20.8209 0.0527344 19.8429C0.0934418 19.8455 0.136544 19.8507 0.179646 19.8533C4.51858 20.2227 8.54862 19.5204 12.0016 16.896Z"
                                                fill="#214842"
                                            />
                                            <path
                                                d="M12.811 16.7992C12.811 17.2789 12.4464 17.6674 11.9963 17.6674C11.5462 17.6674 11.1816 17.2789 11.1816 16.7992C11.1816 16.3195 11.5462 15.9309 11.9963 15.9309C12.4464 15.9309 12.811 16.3195 12.811 16.7992Z"
                                                fill="#214842"
                                            />
                                        </svg>
                                    </span>
                                    CBD
                                </h4>
                                <ul className="list">
                                    <li className="list-item">
                                        <input type="radio" id="010-cbd" name="cbd" />
                                        <label for="010-cbd">0% - 10%</label>
                                    </li>
                                    <li className="list-item">
                                        <input type="radio" id="1020-cbd" name="cbd" checked />
                                        <label for="1020-cbd">10% - 20%</label>
                                    </li>
                                    <li className="list-item">
                                        <input type="radio" id="3040-cbd" name="cbd" />
                                        <label for="3040-cbd">30% - 40%</label>
                                    </li>
                                    <li className="list-item">
                                        <input type="radio" id="4050-cbd" name="cbd" />
                                        <label for="4050-cbd">40% - 50%</label>
                                    </li>
                                </ul>
                            </div> --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Products section end -->
            <!-- Promo section start --> */}
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
                    {/* <!-- Promo section end -->
            <!-- Top products section start --> */}
                    <section className="top section--nopb">
                        <div className="container">
                            <h2 className="top_header">Top Sales Products</h2>
                            <ul className="top_list d-lg-flex flex-wrap">
                                <li className="top_list-item col-lg-6" data-order="1">
                                    <div className="top_list-item_wrapper d-flex flex-column flex-sm-row flex-lg-column flex-xxl-row">
                                        <div className="media">
                                            <a href="product.html" target="_blank" rel="noopener norefferer">
                                                <picture>
                                                    <source data-srcset={tulsiCombo} srcset={tulsiCombo} type="image/webp" />
                                                    <img className="lazy" data-src={tulsiCombo} src={tulsiCombo} alt="media" />
                                                </picture>
                                            </a>
                                        </div>
                                        <div className="main d-md-flex flex-column">
                                            <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer"
                                            >BEYORG Tulsi Powder  - 100% Natural, BioOrganic, With Premium Quality  (500 g)</a>
                                            <span>free Delievry</span>
                                            {/* <!-- <ul className="main_table d-flex flex-column">
                                        <li className="list-item">
                                            <span className="property">₹ 561</span>
                                          
                                        </li>
                                        <li className="list-item">
                                            <span className="property">CBD</span>
                                            <span className="value">0.00-1.00mg/g</span>
                                        </li>
                                    </ul>
                                    --> */}
                                            <div className="main_price">
                                                <span className="price price--old">₹ 861</span>
                                                <span className="price price--new">₹ 561</span>
                                                <h5 id="price-offer">24% off</h5>
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
                                                    <source data-srcset={alovera} srcset={alovera} type="image/webp" />
                                                    <img className="lazy" data-src={alovera} src={alovera} alt="media" />
                                                </picture>
                                            </a>
                                        </div>
                                        <div className="main d-md-flex flex-column">
                                            <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer"
                                            >wood charcoal powder 100% Natural, BioOrganic, With Premium Quality  (500 g)</a>
                                            <span>free Delievry</span>

                                            <div className="main_price">
                                                <span className="price price--old">₹ 861</span>
                                                <span className="price price--new">₹ 561</span>
                                                <h5 id="price-offer">24% off</h5>
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
                                <li className="top_list-item col-lg-6" data-order="3">
                                    <div className="top_list-item_wrapper d-flex flex-column flex-sm-row flex-lg-column flex-xxl-row">
                                        <div className="media">
                                            <a href="product.html" target="_blank" rel="noopener norefferer">
                                                <picture>
                                                    <source data-srcset={hibiscus} srcset={hibiscus} type="image/webp" />
                                                    <img className="lazy" data-src={hibiscus} src={hibiscus} alt="media" />
                                                </picture>
                                            </a>
                                        </div>
                                        <div className="main d-md-flex flex-column">
                                            <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer"
                                            >hibiscus powder  100% Natural, BioOrganic, With Premium Quality  (500 g)</a>
                                            <span>free Delievry</span>

                                            <div className="main_price">
                                                <span className="price price--old">₹ 861</span>
                                                <span className="price price--new">₹ 561</span>
                                                <h5 id="price-offer">24% off</h5>
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
                                <li className="top_list-item col-lg-6" data-order="4">
                                    <div className="top_list-item_wrapper d-flex flex-column flex-sm-row flex-lg-column flex-xxl-row">
                                        <div className="media">
                                            <a href="product.html" target="_blank" rel="noopener norefferer">
                                                <picture>
                                                    <source data-srcset={calamine} srcset={calamine} type="image/webp" />
                                                    <img className="lazy" data-src={calamine} src={calamine} alt="media" />
                                                </picture>
                                            </a>
                                        </div>
                                        <div className="main d-md-flex flex-column">
                                            <a className="main_title" href="product.html" target="_blank" rel="noopener norefferer"
                                            >calamine clay Powder  100% Natural, BioOrganic, With Premium Quality  (500 g)</a>
                                            <span>free Delievry</span>

                                            <div className="main_price">
                                                <span className="price price--old">₹ 861</span>
                                                <span className="price price--new">₹ 561</span>
                                                <h5 id="price-offer">24% off</h5>
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
                            </ul>
                        </div>
                    </section>
                    {/* <!-- Top products section end -->
            <!-- SEO section start --> */}
                    {/* <!-- <section className="seo section--nopb">
                <div className="container">
                    <h2 className="seo_header">SEO Text</h2>
                    <div className="seo_content d-lg-flex justify-content-between">
                        <p className="seo_content-text">
                            Orci nulla pellentesque dignissim enim. Quis commodo odio aenean sed adipiscing diam. Quis auctor elit sed
                            vulputate. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Nunc faucibus a
                            pellentesque sit amet porttitor eget dolor morbi. Nunc sed augue lacus viverra. Tempus imperdiet nulla malesuada
                            pellentesque elit eget gravida. Neque sodales ut etiam sit amet. Nam at lectus urna duis convallis. Aenean sed
                            adipiscing diam donec. Mattis ullamcorper velit sed ullamcorper morbi. A diam sollicitudin tempor id eu nisl.
                        </p>
                        <p className="seo_content-text">
                            Arcu felis bibendum ut tristique et egestas. Id semper risus in hendrerit gravida rutrum. Eu mi bibendum neque
                            egestas congue. Risus nullam eget felis eget. Turpis massa tincidunt dui ut ornare lectus sit. Dictumst
                            vestibulum rhoncus est pellentesque elit. Sit amet nisl purus in mollis nunc. Aenean pharetra magna ac placerat.
                            In hendrerit gravida rutrum quisque non tellus orci ac. Condimentum mattis pellentesque id nibh tortor id
                            aliquet lectus proin. Arcu cursus vitae congue mauris rhoncus aenean vel. Sed id semper risus in hendrerit
                            gravida rutrum.
                        </p>
                    </div>
                </div>
            </section> --> */}
                    {/* <!-- SEO section end -->
            <!-- Instagram section start --> */}
                    <section className="instagram">
                        <div className="container">
                            <div className="instagram_header mt-5">
                                <h2 className="instagram_header-title">Follow Us on Instagram</h2>
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
                                            <source data-srcset={orangei} srcset={orangei} type="image/webp" />
                                            <img className="lazy" data-src={orangei} src={orangei} alt="instagram post" />
                                        </picture>
                                        <span className="overlay d-flex justify-content-center align-items-center">
                                            <i className="icon-instagram"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="instagram_slider-slide swiper-slide">
                                    <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                        <picture>
                                            <source data-srcset={aloverai} srcset={aloverai} type="image/webp" />
                                            <img className="lazy" data-src={aloverai} src={aloverai} alt="instagram post" />
                                        </picture>
                                        <span className="overlay d-flex justify-content-center align-items-center">
                                            <i className="icon-instagram"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="instagram_slider-slide swiper-slide">
                                    <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                        <picture>
                                            <source data-srcset={amlai} srcset={amlai} type="image/webp" />
                                            <img className="lazy" data-src={amlai} src={amlai} alt="instagram post" />
                                        </picture>
                                        <span className="overlay d-flex justify-content-center align-items-center">
                                            <i className="icon-instagram"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="instagram_slider-slide swiper-slide">
                                    <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                        <picture>
                                            <source data-srcset={reethai} srcset={reethai} type="image/webp" />
                                            <img className="lazy" data-src={reethai} src={reethai} alt="instagram post" />
                                        </picture>
                                        <span className="overlay d-flex justify-content-center align-items-center">
                                            <i className="icon-instagram"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="instagram_slider-slide swiper-slide">
                                    <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                        <picture>
                                            <source data-srcset={tulsii} srcset={tulsii} type="image/webp" />
                                            <img className="lazy" data-src={tulsii} src={tulsii} alt="instagram post" />
                                        </picture>
                                        <span className="overlay d-flex justify-content-center align-items-center">
                                            <i className="icon-instagram"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="instagram_slider-slide swiper-slide">
                                    <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                        <picture>
                                            <source data-srcset={hibiscusi} srcset={hibiscusi} type="image/webp" />
                                            <img className="lazy" data-src={hibiscusi} src={hibiscusi} alt="instagram post" />
                                        </picture>
                                        <span className="overlay d-flex justify-content-center align-items-center">
                                            <i className="icon-instagram"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="instagram_slider-slide swiper-slide">
                                    <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                        <picture>
                                            <source data-srcset={shikakaii} srcset={shikakaii} type="image/webp" />
                                            <img className="lazy" data-src={shikakaii} src={shikakaii} alt="instagram post" />
                                        </picture>
                                        <span className="overlay d-flex justify-content-center align-items-center">
                                            <i className="icon-instagram"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="instagram_slider-slide swiper-slide">
                                    <a className="link" href="https://instagram.com" target="_blank" rel="noopener norefferer">
                                        <picture>
                                            <source data-srcset={brahmii} srcset={brahmii} type="image/webp" />
                                            <img className="lazy" data-src={brahmii} src={brahmii} alt="instagram post" />
                                        </picture>
                                        <span className="overlay d-flex justify-content-center align-items-center">
                                            <i className="icon-instagram"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- Instagram section end --> */}
                </main>
                {/* <!-- Homepage content end --> */}
                </main>
            </>
            )}
