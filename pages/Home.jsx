// import Link from "next/link";
// import Head from "next/head";
// import Image from "next/image";
// import Meta from "./Components/Meta";
// import bg1 from "../public/images/479552.jpg"; // Import local image
// import { useEffect } from "react";
// // import "../styles/home.scss"; // Import SCSS file

// export default function Home() {
//   useEffect(() => {
//     // Optional: Initialize Owl Carousel or other JS plugins if needed
//   }, []);

//   return (
//     <>
//       <Meta
//         title="Home"
//         description="Welcome to GIVEHOPE, a platform to make a difference."
//       />

//       <div className="block-31" style={{ position: "relative" }}>
//         <div className="owl-carousel loop-block-31">
//           <div
//             className="block-30 block-30-sm item"
//             style={{
//               backgroundImage: `url(${bg1.src})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//             data-stellar-background-ratio="0.5"
//           >
//             <div className="container">
//               <div className="row align-items-center justify-content-center text-center">
//                 <div className="col-md-7">
//                   <h2 className="heading mb-5">
//                     Free Website Template for Charity Websites.
//                   </h2>
//                   <p style={{ display: "inline-block" }}>
//                     <a
//                       href="https://vimeo.com/channels/staffpicks/93951774"
//                       data-fancybox
//                       className="ftco-play-video d-flex"
//                     >
//                       <span className="play-icon-wrap align-self-center mr-4">
//                         <span className="ion-ios-play"></span>
//                       </span>
//                       <span className="align-self-center">Watch Video</span>
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import Link from "next/link";
import Meta from "./Components/Meta";
import Image from "next/image";
import bg1 from "../public/images/479552.jpg"; // Import local image
import { useEffect, useState } from "react";
import "../styles/home.scss"; // Import SCSS file

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Counter animation logic
    const target = 1321901;
    let start = 0;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / target));
    const timer = setInterval(() => {
      start += 5000;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Meta
        title="Home"
        description="Welcome to GIVEHOPE, a platform to make a difference."
      />

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h2>Free Website Template for Charity Websites.</h2>
          <p className="video-wrap">
            <a
              href="https://vimeo.com/channels/staffpicks/93951774"
              data-fancybox
              className="play-video"
            >
              <span
                className="play-icon"
                // style={{
                //   justifyContent: "center",
                //   alignItems: "center",
                //   display: "flex",
                // }}
              >
                ▶
              </span>
              <span>Watch Video</span>
            </a>
          </p>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="who-we-are">
        <div className="who-we-are-content">
          <div className="stats-box">
            <span className="stats-text">Served Over</span>
            <div className="counter">{count.toLocaleString()}</div>
            <span className="stats-text">Children in 150 Countries</span>
            <p>
              <Link href="#" className="btn-light">
                View Our Program
              </Link>
            </p>
          </div>
          <div className="text-box">
            <h2>Who Are We?</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <p>
              <Link href="#" className="btn-primary">
                Learn More
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
