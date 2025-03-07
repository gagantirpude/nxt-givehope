// import Link from "next/link";
// import Meta from "./Components/Meta";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "../styles/home.scss"; // Import SCSS file

// export default function Home() {
//   const [count, setCount] = useState(0);
//   const [fundraisers, setFundraisers] = useState([]);

//   useEffect(() => {
//     // Counter animation logic
//     const target = 1321901;
//     let start = 0;
//     const duration = 2000;
//     const stepTime = Math.abs(Math.floor(duration / target));
//     const timer = setInterval(() => {
//       start += 5000;
//       if (start >= target) {
//         start = target;
//         clearInterval(timer);
//       }
//       setCount(start);
//     }, stepTime);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     fetch("/data/demo.json")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Failed to fetch fundraisers data");
//         }
//         return res.json();
//       })
//       .then((data) => setFundraisers(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <>
//       <Meta
//         title="Home"
//         description="Welcome to GIVEHOPE, a platform to make a difference."
//       />

//       {/* Hero Section */}
//       <div className="hero-section">
//         <div className="hero-content">
//           <h2>Free Website Template for Charity Websites.</h2>
//           <p className="video-wrap">
//             <a
//               href="https://vimeo.com/channels/staffpicks/93951774"
//               data-fancybox
//               className="play-video"
//             >
//               <span
//                 className="play-icon"
//                 // style={{
//                 //   justifyContent: "center",
//                 //   alignItems: "center",
//                 //   display: "flex",
//                 // }}
//               >
//                 ▶
//               </span>
//               <span>Watch Video</span>
//             </a>
//           </p>
//         </div>
//       </div>

//       {/* Who We Are Section */}
//       <div className="who-we-are">
//         <div className="who-we-are-content">
//           <div className="stats-box">
//             <span className="stats-text">Served Over</span>
//             <div className="counter">{count.toLocaleString()}</div>
//             <span className="stats-text">Children in 150 Countries</span>
//             <p>
//               <Link href="#" className="btn-light">
//                 View Our Program
//               </Link>
//             </p>
//           </div>
//           <div className="text-box">
//             <h2>Who Are We?</h2>
//             <p>
//               Far far away, behind the word mountains, far from the countries
//               Vedalia and Consonant, there live the blind texts. Separated they
//               live in Bookmarks grove right at the coast of the Semantics, a
//               large language ocean.
//             </p>
//             <p>
//               A small river named Duden flows by their place and supplies it
//               with the necessary regelialia.
//             </p>
//             <p>
//               <Link href="#" className="btn-primary">
//                 Learn More
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Our Goal Section */}
//       <div className="our-goal">
//         <div className="goal-content">
//           <div className="goal-item">
//             <div className="icon">💡</div>
//             <h3>Our Mission</h3>
//             <p>
//               A small river named Duden flows by their place and supplies it
//               with the necessary regelialia.
//             </p>
//             <p>
//               <Link href="#" className="link-underline">
//                 Learn More
//               </Link>
//             </p>
//           </div>

//           <div className="goal-item">
//             <div className="icon">💰</div>
//             <h3>Make Donations</h3>
//             <p>
//               A small river named Duden flows by their place and supplies it
//               with the necessary regelialia.
//             </p>
//             <p>
//               <Link href="#" className="link-underline">
//                 Learn More
//               </Link>
//             </p>
//           </div>

//           <div className="goal-item">
//             <div className="icon">🤝</div>
//             <h3>We Need Volunteers</h3>
//             <p>
//               A small river named Duden flows by their place and supplies it
//               with the necessary regelialia.
//             </p>
//             <p>
//               <Link href="#" className="link-underline">
//                 Learn More
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Latest Fundraisers Section */}
//       <div className="latest-fundraisers">
//         <div className="fundraiser-header">
//           <h2>Latest Fundraisers</h2>
//           <p>Some quick example text to build on the card title.</p>
//           <p>
//             <Link href="#" className="link-underline">
//               View All Fundraisers
//             </Link>
//           </p>
//         </div>

//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={10}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000 }}
//           breakpoints={{
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {fundraisers.map((fundraiser, index) => (
//             <SwiperSlide key={index}>
//               <div className="fundraiser-card">
//                 <Link href="#">
//                   <Image
//                     src={fundraiser.image}
//                     alt={fundraiser.title}
//                     width={300}
//                     height={200}
//                     className="fundraiser-img"
//                   />
//                 </Link>
//                 <div className="fundraiser-body">
//                   <h3>
//                     <Link href="#">{fundraiser.title}</Link>
//                   </h3>
//                   <p>{fundraiser.description}</p>
//                   <span className="donation-time">
//                     Last donation {fundraiser.lastDonation}
//                   </span>
//                   <div className="progress-bar">
//                     <div
//                       className="progress-fill"
//                       style={{ width: `${fundraiser.progress}%` }}
//                     ></div>
//                   </div>
//                   <span className="fund-raised">
//                     {fundraiser.raised} raised of {fundraiser.goal}
//                   </span>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </>
//   );
// }

// import Link from "next/link";
// import Meta from "./Components/Meta";
// import Image from "next/image";
// import { useEffect, useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "../styles/home.scss"; // Import SCSS file

// export default function Home() {
//   const [count, setCount] = useState(0);
//   const [fundraisers, setFundraisers] = useState([]);
//   const counterRef = useRef(0);

//   useEffect(() => {
//     const target = 1321901;
//     const duration = 2000;
//     const step = Math.ceil(target / (duration / 50));

//     const timer = setInterval(() => {
//       counterRef.current += step;
//       if (counterRef.current >= target) {
//         counterRef.current = target;
//         clearInterval(timer);
//       }
//       setCount(counterRef.current);
//     }, 50);

//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const fetchFundraisers = async () => {
//       try {
//         const res = await fetch("/data/demo.json");
//         if (!res.ok) throw new Error("Failed to fetch fundraisers");
//         const data = await res.json();
//         setFundraisers(data);
//       } catch (error) {
//         console.error("Error fetching fundraisers:", error);
//       }
//     };

//     fetchFundraisers();
//   }, []);

//   return (
//     <>
//       <Meta
//         title="Home"
//         description="Welcome to GIVEHOPE, a platform to make a difference."
//       />

//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="hero-content">
//           <h2>Free Website Template for Charity Websites.</h2>
//           <p className="video-wrap">
//             <a
//               href="https://vimeo.com/channels/staffpicks/93951774"
//               data-fancybox
//               className="play-video"
//               aria-label="Watch our introduction video"
//             >
//               <span className="play-icon">▶</span>
//               <span>Watch Video</span>
//             </a>
//           </p>
//         </div>
//       </section>

//       {/* Who We Are Section */}
//       <section className="who-we-are">
//         <div className="who-we-are-content">
//           <div className="stats-box">
//             <span className="stats-text">Served Over</span>
//             <div className="counter">{count.toLocaleString()}</div>
//             <span className="stats-text">Children in 150 Countries</span>
//             <p>
//               <Link href="#" className="btn-light">
//                 View Our Program
//               </Link>
//             </p>
//           </div>
//           <div className="text-box">
//             <h2>Who Are We?</h2>
//             <p>
//               Far far away, behind the word mountains, far from the countries
//               Vedalia and Consonant, there live the blind texts. Separated they
//               live in Bookmarks grove right at the coast of the Semantics, a
//               large language ocean.
//             </p>
//             <p>
//               A small river named Duden flows by their place and supplies it
//               with the necessary regelialia.
//             </p>
//             <p>
//               <Link href="#" className="btn-primary">
//                 Learn More
//               </Link>
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Our Goal Section */}
//       <section className="our-goal">
//         <div className="goal-content">
//           {[
//             { icon: "💡", title: "Our Mission" },
//             { icon: "💰", title: "Make Donations" },
//             { icon: "🤝", title: "We Need Volunteers" },
//           ].map((goal, index) => (
//             <div className="goal-item" key={index}>
//               <div className="icon">{goal.icon}</div>
//               <h3>{goal.title}</h3>
//               <p>
//                 A small river named Duden flows by their place and supplies it
//                 with the necessary regelialia.
//               </p>
//               <p>
//                 <Link href="#" className="link-underline">
//                   Learn More
//                 </Link>
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Latest Fundraisers Section */}
//       <section className="latest-fundraisers">
//         <div className="fundraiser-header">
//           <h2>Latest Fundraisers</h2>
//           <p>Some quick example text to build on the card title.</p>
//           <p>
//             <Link href="#" className="link-underline">
//               View All Fundraisers
//             </Link>
//           </p>
//         </div>

//         {fundraisers.length > 0 ? (
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={10}
//             slidesPerView={1}
//             navigation
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 3000 }}
//             breakpoints={{
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//           >
//             {fundraisers.map((fundraiser, index) => (
//               <SwiperSlide key={index}>
//                 <div className="fundraiser-card">
//                   <Link href="#">
//                     <Image
//                       src={fundraiser.image}
//                       alt={`Image of ${fundraiser.title}`}
//                       width={300}
//                       height={200}
//                       className="fundraiser-img"
//                     />
//                   </Link>
//                   <div className="fundraiser-body">
//                     <h3>
//                       <Link href="#">{fundraiser.title}</Link>
//                     </h3>
//                     <p>{fundraiser.description}</p>
//                     <span className="donation-time">
//                       Last donation {fundraiser.lastDonation}
//                     </span>
//                     <div className="progress-bar">
//                       <div
//                         className="progress-fill"
//                         style={{ width: `${fundraiser.progress}%` }}
//                       ></div>
//                     </div>
//                     <span className="fund-raised">
//                       {fundraiser.raised} raised of {fundraiser.goal}
//                     </span>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         ) : (
//           <p className="error-message">
//             No fundraisers available at the moment.
//           </p>
//         )}
//       </section>
//     </>
//   );
// }

import Link from "next/link";
import Meta from "./Components/Meta";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/home.scss";

export default function Home() {
  const [count, setCount] = useState(0);
  const [fundraisers, setFundraisers] = useState([]);
  const [stats, setStats] = useState(null);
  const [whoWeAre, setWhoWeAre] = useState(null);
  const [goals, setGoals] = useState([]);
  const [donations, setDonations] = useState([]);
  const [successStory, setSuccessStory] = useState(null);
  const counterRef = useRef(0);

  // Fetch Dynamic Data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/home");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();

        setStats(data.stats);
        setWhoWeAre(data.whoWeAre);
        setFundraisers(data.fundraisers);
        setGoals(data.goals);
        setDonations(data.latestDonations);
        setSuccessStory(data.successStory);
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

      {/* Latest Donations Section (Now Horizontal)
      <section className="fund-raisers">
        <div className="container">
          <div className="section-header">
            <h2>Latest Donations</h2>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p>
              <Link href="#" className="link-underline">
                View All Donations
              </Link>
            </p>
          </div>

          {donations.length > 0 ? (
            <div className="donation-list">
              {donations.map((donation, index) => (
                <div className="donation-card" key={index}>
                  <Image
                    src={donation.image}
                    alt={`Donor ${donation.name}`}
                    width={100}
                    height={100}
                    className="donor-img"
                  />
                  <div className="donate-info">
                    <h2>{donation.name}</h2>
                    <span className="time">Donated {donation.timeAgo}</span>
                    <p>
                      Donated{" "}
                      <span className="text-success">${donation.amount}</span>{" "}
                      <br />
                      <em>for</em>{" "}
                      <Link href="#" className="link-underline fundraise-item">
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
      </section> */}

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
                      Donated <span className="amount">{donation.amount}</span>{" "}
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
    </>
  );
}
