const categoriesItem = [
  "전체보기",
  "비즈니스",
  "엔터테인먼트",
  "건강",
  "과학",
  "스포츠",
  "기술",
];

const Categories = () => {
  return (
    <div className="categories">
      {categoriesItem.map((item) => (
        <button className="categories-item">{item}</button>
      ))}
    </div>
  );
};

export default Categories;
