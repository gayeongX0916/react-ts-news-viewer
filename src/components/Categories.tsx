import { useState } from "react";

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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "전체보기"
  );

  const handleClick = (item: string) => {
    setSelectedCategory(item);
  };

  return (
    <div className="categories">
      {categoriesItem.map((item) => (
        <button
          className={`${
            selectedCategory === item ? "isClick" : ""
          } categories-item`}
          onClick={() => handleClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;
