import { useEffect, useState } from "react";
import type { NewsData } from "../types/NewsData";
import fetchNewsData from "../api/fetchNewsData";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  const { category } = useParams();
  const [articles, setAricles] = useState<NewsData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const query = !category || category === "all" ? "" : category;
    setLoading(true);
    setError(null);

    fetchNewsData(query)
      .then((data) => {
        setAricles(data);
      })
      .catch(() => {
        setError("뉴스를 불러오는 중 문제가 발생했습니다.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="news-viewer">
      {loading && <p>뉴스를 불러오는 중입니다...</p>}
      {error && <p>{error}</p>}
      <Categories />
      <NewsList articles={articles} />
    </div>
  );
};

export default NewsPage;
