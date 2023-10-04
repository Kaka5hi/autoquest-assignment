import "./App.css";
import { BsSearch } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Card from "./components/Card";
import data from "./data";
import { useEffect, useMemo, useState } from "react";

function App() {
    // page count
    const [activePage, setActivePage] = useState(1);

    // cars data which is showed -> 6 cars per page
    const [cars, setCars] = useState([]);

    // query state for search functionality
    const [query, setQuery] = useState("");

    // function calculating each page cars
    const filteredCars = () => {
        let filteredData = data
            ?.slice((activePage - 1) * 6, activePage * 6)
            ?.filter((car) =>
                car.name.toLowerCase().includes(query.toLowerCase())
            );
        setCars(filteredData);
    };

    // function to filter out cars
    const searchedCars = useMemo(() => {
        return cars.filter((car) =>
            car.name.toLowerCase().includes(query.toLowerCase())
        );
    }, [cars, query]);

    const nextPage = () => {
        if (activePage <= 10) {
            setActivePage((prev) => prev + 1);
        }
    };

    const prevPage = () => {
        if (activePage > 1) {
            setActivePage((prev) => prev - 1);
        }
    };

    useEffect(() => {
        filteredCars();
    }, [activePage]);

    return (
        <>
            {/* navbar */}
            <nav>
                <ul>
                    <li className="left">
                        <img src="images/website-logo.svg" alt="website logo" />
                        <span>AutoQuest</span>
                    </li>

                    <li className="middle">
                        <span>home</span>
                        <span>service</span>
                        <span>Cars</span>
                        <span>contact</span>
                    </li>

                    <li className="right">
                        <button>sign in</button>
                    </li>
                </ul>
            </nav>

            {/* main body */}
            <div className="main-container">
                <div className="banner">
                    <div className="banner-text">
                        <div className="top">
                            <span className="heading-text">
                                Find Your Perfect Ride.
                            </span>
                            <span className="heading-text">
                                Your Ultimate Destination for Car Shopping
                                Bliss!
                            </span>
                        </div>
                        <div className="bottom">
                            <p>
                                Welcome to AutoQuest - Your Premier Car Search
                                Destination! Discover a world of automotive
                                excellence with our user-friendly platform.
                                Whether you're in the market for a sleek sports
                                car, a family-friendly SUV, or an eco-friendly
                                hybrid, we've got you covered.
                            </p>
                        </div>
                    </div>
                    <img src="images/banner.jpg" alt="Banner" />
                </div>

                <div className="featured-section">
                    <div className="featured-heading">
                        <h2>Explore by Category:</h2>
                        <p>
                            Dive into our diverse vehicle categories to easily
                            find the car that suits your style, needs, and
                            budget.
                        </p>
                    </div>

                    <div className="category">
                        <div className="single-category">
                            <img src="images/suv.jpg" alt="suv" />
                            <p>
                                suv
                                <span>
                                    SUVs, or Sport Utility Vehicles, combine
                                    versatility and ruggedness, ideal for
                                    off-road adventures and family transport
                                    with spacious interiors.
                                </span>
                            </p>
                        </div>
                        <div className="single-category">
                            <img src="images/hatcback.jpg" alt="suv" />
                            <p>
                                hatchback
                                <span>
                                    Hatchbacks are compact cars with a rear door
                                    that opens upward, offering efficient city
                                    driving and easy cargo access with style
                                </span>
                            </p>
                        </div>
                        <div className="single-category">
                            <img src="images/sedan.jpg" alt="suv" />
                            <p>
                                sedan
                                <span>
                                    Sedans are sleek, four-door cars with
                                    spacious interiors and a focus on comfort,
                                    making them ideal for commuting and
                                    families.
                                </span>
                            </p>
                        </div>
                        <div className="single-category">
                            <img src="images/sports.jpg" alt="suv" />
                            <p>
                                sports
                                <span>
                                    Sports cars are high-performance vehicles
                                    designed for speed and agility, providing
                                    exhilarating driving experiences and a
                                    strong sense of style.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="featured-section">
                    <div className="featured-heading">
                        <h2>Refine Your Search: Discover Your Dream Ride!</h2>
                        <p>
                            Refine your search with our meticulously curated
                            selection of vehicles that cater to your unique
                            preferences. From eco-friendly electric cars to
                            high-performance sports models. Let us help you take
                            the wheel of your dream ride.
                        </p>
                    </div>

                    <div className="search-section">
                        <div className="top-bar">
                            <div className="search">
                                <input
                                    type="text"
                                    placeholder="Search here..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                                <BsSearch />
                            </div>

                            <span>
                                relevance <MdOutlineKeyboardArrowDown />{" "}
                            </span>
                            <span>
                                all brands <MdOutlineKeyboardArrowDown />{" "}
                            </span>
                        </div>

                        <div className="search-items-container">
                            {query === ""
                                ? cars?.map((c) => {
                                      return <Card key={c?.id} info={c} />;
                                  })
                                : searchedCars?.map((c) => {
                                      return <Card key={c?.id} info={c} />;
                                  })}
                        </div>

                        <div className="pagination">
                            <div className="count">
                                <span style={{ textTransform: "capitalize" }}>
                                    page no. {activePage} out of{" "}
                                    {Math.ceil(data?.length / 6)}
                                </span>
                            </div>
                            <div className="next-prev-btn">
                                {activePage > 1 && (
                                    <button onClick={prevPage}>prev</button>
                                )}
                                {data?.length / activePage > 6 && (
                                    <button onClick={nextPage}>next</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer */}
            <footer>
                <div className="left-side">
                    <img src="images/website-logo.svg" alt="logo" />
                    <input type="email" placeholder="enter your email" />
                    <button>subscribe to our mail letters</button>
                </div>
                <div className="right-side">
                    <p>Your Ultimate Destination for Car Shopping Bliss!</p>
                    <ul>
                        <li>home</li>
                        <li>services</li>
                        <li>cars</li>
                        <li>contact</li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default App;
