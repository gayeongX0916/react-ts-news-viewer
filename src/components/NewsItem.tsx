type NewsItem = {
  author: string;
  content: string;
  title: string;
  urlToImage: string;
};

const NewsItem = ({ author, content, title, urlToImage }: NewsItem) => {
  return (
    <div className="news-item">
      <img className="news-item-img" src={urlToImage} width={50} height={50} />
      <div className="news-item-wrapper">
        <h4 className="news-item-title">{title}</h4>
        <span className="news-item-des">{content}</span>
        <span className="news-item-des">{author}</span>
      </div>
    </div>
  );
};

export default NewsItem;
