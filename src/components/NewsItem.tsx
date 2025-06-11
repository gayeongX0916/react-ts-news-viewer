import exampleImg from "../assets/react.svg";

const NewsItem = () => {
  return (
    <div className="news-item">
      <img className="news-item-img" src={exampleImg} width={50} height={50} />
      <div className="news-item-wrapper">
        <h4 className="news-item-title">기사 제목</h4>
        <span className="news-item-des">기사 내용</span>
      </div>
    </div>
  );
};

export default NewsItem;
