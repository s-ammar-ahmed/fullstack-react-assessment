import React, { useState, useEffect, useRef } from "react";

const ApiList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const isFirstRender = useRef(true);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}`
      );
      const result = await response.json();
      await delay(1000); //addded so that the loader is visible
      setData((prevData) => [...prevData, ...result]);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Only fetch data if not the first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    fetchData();

    return () => {
      setData([]);
    };
    // eslint-disable-next-line
  }, [page]);

  const loadMore = () => setPage(page + 1);

  return (
    <div>
      <div className="sticky-header">Sticky Header</div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      {loading && <div className="spinner"></div>}
      <button onClick={loadMore} disabled={loading}>
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
};

export default ApiList;
