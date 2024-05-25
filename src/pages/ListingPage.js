import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader/Loader";
import NewsList from "../components/NewsList/NewsList";
import "../App.css";
import Pagination from "../components/Pagination";
import "../components/ListingPage.css";
function ListingPage() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerpage, setNewsPerPage] = useState(20);
  // For pagination setting index positioning
  const lastNewsIndex = currentPage * newsPerpage;
  const firstNewsIndex = lastNewsIndex - newsPerpage;
  const currentNews = filteredArticles.slice(firstNewsIndex, lastNewsIndex);
  const paginateNews = (pageNumber) => setCurrentPage(pageNumber);

  // Perforiming side effect operation to fetch Data from API
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=apple&from=2024-05-24&to=2024-05-24&sortBy=popularity&apiKey=a305a0daec9247af919c5cf0cd5186f1"
        );
        const removeNullData = response.data.articles.filter(
          (item) =>
            item.author != null &&
            item.title != null &&
            item.description != null &&
            item.urlToImage != null &&
            item.url != null
        );
        setArticles(removeNullData);
        setFilteredArticles(removeNullData);
        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    }
    fetchData();
  }, []);

  const handleUserInputChange = (e) => {
    setUserData(e.target.value);
    if (!e.target.value) {
      setFilteredArticles(articles);
    }
  };
  // Search Functionality to filter data
  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = articles.filter(
      (item) =>
        item.author.toLowerCase().includes(userData.toLowerCase()) ||
        item.title.toLowerCase().includes(userData.toLowerCase()) ||
        item.description.toLowerCase().includes(userData.toLowerCase())
    );
    setFilteredArticles(filtered);
  };

  return (
    <div>
      <div className="search-form">
        <input
          type="text"
          value={userData}
          onChange={handleUserInputChange}
          placeholder="Search news..."
          className="search-input"
        />
        <button onClick={handleSearch} type="submit" className="search-button">
          Search
        </button>
      </div>
      {loading ? (
        <Loader />
      ) : currentNews.length ? (
        <>
          <NewsList articles={currentNews} />
          <Pagination
            totalNews={filteredArticles.length}
            newsPerpage={newsPerpage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setNewsPerPage={setNewsPerPage}
            paginateNews={paginateNews}
          />
        </>
      ) : (
        <p className="noresults">No results found</p>
      )}
    </div>
  );
}

export default ListingPage;
