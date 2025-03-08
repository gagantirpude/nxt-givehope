import Link from "next/link";
import Meta from "./Components/Meta";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const [count, setCount] = useState(0);
  const [fundraisers, setFundraisers] = useState([]);
  const [stats, setStats] = useState(null);
  const [whoWeAre, setWhoWeAre] = useState(null);
  const [goals, setGoals] = useState([]);
  const [donations, setDonations] = useState([]);
  const [successStory, setSuccessStory] = useState(null);
  const [latestNews, setLatestNews] = useState([]);
  const counterRef = useRef(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/home");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();

        // Filter out empty or invalid news, and limit to max 6 news
        const filteredNews = data.latestNews
          .filter((news) => news.title && news.image && news.link) // Ensure valid data
          .slice(0, 6); // Limit to maximum 6

        // // Ensure minimum 3 news items are shown
        // if (filteredNews.length < 3) {
        //   console.warn("Less than 3 news items available, displaying all.");
        // }

        setStats(data.stats);
        setWhoWeAre(data.whoWeAre);
        setFundraisers(data.fundraisers);
        setGoals(data.goals);
        setDonations(data.latestDonations);
        setSuccessStory(data.successStory);
        setLatestNews(filteredNews);
      } catch (error) {
        console.error("Error fetching home page data:", error);
      }
    };

    fetchData();
  }, []);

  // Counter Animation
  useEffect(() => {
    if (!stats) return;
    const target = stats.childrenServed || 1000000; // Default fallback
    const duration = 2000;
    const step = Math.ceil(target / (duration / 50));

    const timer = setInterval(() => {
      counterRef.current += step;
      if (counterRef.current >= target) {
        counterRef.current = target;
        clearInterval(timer);
      }
      setCount(counterRef.current);
    }, 50);

    return () => clearInterval(timer);
  }, [stats]);

  return (
    <>
      <Meta
        title="Home"
        description="Welcome to GIVEHOPE, a platform to make a difference."
      />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2>{stats?.heroTitle || "Loading..."}</h2>
          <p className="video-wrap">
            <a
              href={stats?.videoUrl || "#"}
              data-fancybox
              className="play-video"
              aria-label="Watch Video"
            >
              <span className="play-icon">▶</span>
              <span>Watch Video</span>
            </a>
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      {whoWeAre && (
        <section className="who-we-are">
          <div className="who-we-are-content">
            <div className="stats-box">
              <span className="stats-text">Served Over</span>
              <div className="counter">{count.toLocaleString()}</div>
              <span className="stats-text">
                {stats?.countriesServed} Countries
              </span>
              <p>
                <Link href={stats?.programLink || "#"} className="btn-light">
                  View Our Program
                </Link>
              </p>
            </div>
            <div className="text-box">
              <h2>{whoWeAre.title}</h2>
              <p>{whoWeAre.description}</p>
              <p>
                <Link
                  href={whoWeAre.learnMoreLink || "#"}
                  className="btn-primary"
                >
                  Learn More
                </Link>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Our Goal Section */}
      {goals.length > 0 && (
        <section className="our-goal">
          <div className="goal-content">
            {goals.map((goal, index) => (
              <div className="goal-item" key={index}>
                <div className="icon">{goal.icon}</div>
                <h3>{goal.title}</h3>
                <p>{goal.description}</p>
                <p>
                  <Link href={goal.link || "#"} className="link-underline">
                    Learn More
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Latest Fundraisers Section */}
      <section className="latest-fundraisers">
        <div className="fundraiser-header">
          <h2>Latest Fundraisers</h2>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p>
            <Link href="#" className="link-underline">
              View All Fundraisers
            </Link>
          </p>
        </div>

        {fundraisers.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {fundraisers.map((fundraiser, index) => (
              <SwiperSlide key={index}>
                <div className="fundraiser-card">
                  <Link href="#">
                    <Image
                      src={fundraiser.image}
                      alt={fundraiser.title}
                      width={300}
                      height={200}
                      className="fundraiser-img"
                    />
                  </Link>
                  <div className="fundraiser-body">
                    <h3>
                      <Link href="#">{fundraiser.title}</Link>
                    </h3>
                    <p>{fundraiser.description}</p>
                    <span className="donation-time">
                      Last donation {fundraiser.lastDonation}
                    </span>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${fundraiser.progress}%` }}
                      ></div>
                    </div>
                    <span className="fund-raised">
                      {fundraiser.raised} raised of {fundraiser.goal}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="error-message">
            No fundraisers available at the moment.
          </p>
        )}
      </section>

      {/* Latest Donations Section (Now Horizontal) */}
      <section className="latest-donations">
        <div className="container">
          <div className="section-header">
            <h2>Latest Donations</h2>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p>
              <Link href="#" className="view-all">
                View All Donations
              </Link>
            </p>
          </div>

          {donations.length > 0 ? (
            <div className="donations-row">
              {donations.map((donation, index) => (
                <div className="donation-item" key={index}>
                  <Image
                    src={donation.image}
                    alt={`Donor ${donation.name}`}
                    width={80}
                    height={80}
                    className="donor-photo"
                  />
                  <div className="donation-info">
                    <h3>{donation.name}</h3>
                    <span className="donation-time">
                      Donated {donation.timeAgo}
                    </span>
                    <p>
                      Donated <span className="amount">{donation.amount}</span>
                      {"$"}
                      <br />
                      <em>for</em>{" "}
                      <Link href="#" className="donation-cause">
                        {donation.cause}
                      </Link>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="error-message">
              No donations available at the moment.
            </p>
          )}
        </div>
      </section>

      {/* Success Stories Section */}
      {successStory && (
        <section
          className="featured-section"
          style={{ backgroundImage: `url(${successStory.backgroundImage})` }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="success-content">
              <div className="image-wrapper">
                <Image
                  src={successStory.image}
                  alt="Success Story"
                  width={600}
                  height={400}
                  className="img-fluid"
                />
              </div>
              <div className="text-content">
                <span className="featured-text">Success Stories</span>
                <h2>{successStory.title}</h2>
                <p>{successStory.description}</p>
                <span className="fund-raised">
                  We have raised {successStory.raisedAmount}
                </span>
                <p>
                  <Link
                    href={successStory.storyLink}
                    className="btn btn-success"
                  >
                    Read The Full Story
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Latest News Section */}
      <section className="latest-news">
        <div className="container">
          <div className="section-header">
            <h2>Latest News</h2>
          </div>

          {latestNews.length >= 0 ? (
            <div>
              <div className="news-grid">
                {latestNews.slice(0, 3).map((news, index) => (
                  <div className="news-card" key={index}>
                    <Link href={news.link} className="img-wrap">
                      <Image
                        src={news.image}
                        alt={news.title}
                        width={400}
                        height={250}
                        className="news-img"
                      />
                    </Link>
                    <h3>
                      <Link href={news.link}>{news.title}</Link>
                    </h3>
                    <span className="date">{news.date}</span>
                    <p>{news.description}</p>
                    <p>
                      <Link href={news.link} className="link-underline">
                        Read More
                      </Link>
                    </p>
                  </div>
                ))}
              </div>

              {/* Show View More Button if there are more than 3 news items */}
              {latestNews.length > 3 && (
                <div className="view-more">
                  <Link href="/blog" className="btn-view-more">
                    View More News
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <p className="error-message">
              Not enough news available at the moment.
            </p>
          )}
        </div>
      </section>

      {/* Be A Volunteer Today Section */}
      <section className="volunteer-section">
        <div className="container">
          <div className="volunteer-content">
            <div className="volunteer-image">
              <Image
                src="/images/479552.jpg"
                alt="Be A Volunteer"
                width={500}
                height={400}
              />
            </div>
            <div className="volunteer-form">
              <h2>Be A Volunteer Today</h2>
              <form action="#" method="post">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="message"
                    cols="30"
                    rows="3"
                    placeholder="Write your message"
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn-submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
