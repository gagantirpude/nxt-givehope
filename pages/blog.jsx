import { useEffect, useState } from "react";
import Meta from "./Components/Meta";
import Link from "next/link";
import Image from "next/image";
import "../styles/blog.scss";

export default function Blog() {
  const [allNews, setAllNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/home");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();

        setAllNews(data.latestNews);
        setFilteredNews(data.latestNews);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchData();
  }, []);

  // Filter news based on category
  const filterNews = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredNews(allNews);
    } else {
      setFilteredNews(allNews.filter((news) => news.category === category));
    }
  };

  return (
    <>
      {/*  */}
      <Meta
        title="Blog"
        description="Get in touch with GIVEHOPE for more information."
      />

      {/*  */}

      <div className="blog-container">
        <h2 className="blog-title">Latest News & Updates</h2>

        {/* Filter Buttons */}
        <div className="news-filters">
          {["All", "Water", "Food", "Education"].map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => filterNews(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="news-grid">
          {filteredNews.map((news, index) => (
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
              <div className="news-content">
                <span className="news-category">{news.category}</span>
                <h3>
                  <Link href={news.link}>{news.title}</Link>
                </h3>
                <span className="date">{news.date}</span>
                <p>{news.description}</p>
                <p>
                  <Link href={news.link} className="read-more">
                    Read More →
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No news message */}
        {filteredNews.length === 0 && (
          <p className="error-message">No news available for this category.</p>
        )}
      </div>
    </>
  );
}
