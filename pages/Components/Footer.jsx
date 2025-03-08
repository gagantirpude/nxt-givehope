import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import "../styles/footer.scss";

export default function Footer() {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const res = await fetch("/api/home");
        if (!res.ok) throw new Error("Failed to fetch news data");
        const data = await res.json();

        // Ensure at least 3 news items and show max 3
        const filteredNews = data.latestNews.slice(0, 3);
        setLatestNews(filteredNews);
      } catch (error) {
        console.error("Error fetching latest news:", error);
      }
    };

    fetchLatestNews();
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* About Us Section */}
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vedalia and Consonant, there live the blind texts.
            </p>
            <p>
              Separated they live in Bookmarks grove right at the coast of the
              Semantics, a large language ocean.
            </p>
            <Link href="#" className="link-underline">
              Read More
            </Link>
          </div>

          {/* Recent Blogs Section (Dynamic Latest News) */}
          <div className="footer-section recent-blogs">
            <h3>Latest News</h3>
            {latestNews.length > 0 ? (
              latestNews.map((news, index) => (
                <div className="blog-item" key={index}>
                  <Image
                    src={news.image}
                    alt={news.title}
                    width={80}
                    height={80}
                  />
                  <div className="blog-info">
                    <h4>
                      <Link href={news.link}>{news.title}</Link>
                    </h4>
                    <span>{news.date} | Admin</span>
                  </div>
                </div>
              ))
            ) : (
              <p>No recent news available.</p>
            )}
          </div>

          {/* Contact Information */}
          <div className="footer-section contact">
            <h3>Get Connected</h3>
            <ul>
              <li>
                <span className="icon-map"></span> 203 Fake St. Mountain View,
                San Francisco, USA
              </li>
              <li>
                <Link href="#">
                  <span className="icon-phone"></span> +2 392 3929 210
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="icon-envelope"></span> info@yourdomain.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>
            Copyright &copy; {new Date().getFullYear()} All rights reserved |
            Made with ❤️ by{" "}
            <Link href="#" target="_blank">
              NextUs
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
