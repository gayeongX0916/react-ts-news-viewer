import type { NewsData } from "../types/NewsData";
import NewsItem from "./NewsItem";

type NewsList = {
  articles: NewsData[];
};

const NewsList = ({ articles }: NewsList) => {
  return (
    <div className="news-list">
      {articles.map((item, index) => (
        <NewsItem key={index} {...item} />
      ))}
    </div>
  );
};

export default NewsList;
