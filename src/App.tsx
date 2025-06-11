import { useEffect, useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import NewsList from "./components/NewsList";
import fetchNewsData from "./api/fetchNewsData";
import type { NewsData } from "./types/NewsData";

function App() {
  const [articles, setAricles] = useState<NewsData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handleClick = (item: string) => {
    setSelectedCategory(item);
  };

  useEffect(() => {
    const query = selectedCategory === "all" ? "" : selectedCategory;
    fetchNewsData(query).then((data) => {
      setAricles(data);
    });
  }, [selectedCategory]);

  return (
    <div className="news-viewer">
      <Categories selectedCategory={selectedCategory} onSelect={handleClick} />
      <NewsList articles={articles} />
    </div>
  );
}

export default App;
