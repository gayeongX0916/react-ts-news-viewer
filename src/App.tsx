import { useEffect, useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import NewsList from "./components/NewsList";
import fetchNewsData from "./api/fetchNewsData";
import type { NewsData } from "./types/NewsData";

function App() {
  const [articles, setAricles] = useState<NewsData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = (item: string) => {
    setSelectedCategory(item);
  };

  useEffect(() => {
    const query = selectedCategory === "all" ? "" : selectedCategory;
    fetchNewsData(query)
      .then((data) => {
        setLoading(true);
        setError(null);
        setAricles(data);
      })
      .catch(() => {
        setError("뉴스를 불러오는 중 문제가 발생했습니다.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedCategory]);

  return (
    <div className="news-viewer">
      {loading && <p>뉴스를 불러오는 중입니다...</p>}
      {error && <p>{error}</p>}
      <Categories selectedCategory={selectedCategory} onSelect={handleClick} />
      <NewsList articles={articles} />
    </div>
  );
}

export default App;
