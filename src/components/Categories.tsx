import { Link } from "react-router-dom";

const categoriesItem = [
  { name: "all", text: "전체보기" },
  { name: "business", text: "비즈니스" },
  { name: "entertainment", text: "엔터테인먼트" },
  { name: "health", text: "건강" },
  { name: "science", text: "과학" },
  { name: "sports", text: "스포츠" },
  { name: "technology", text: "기술" },
];

type CategoriesProps = {
  selectedCategory: string;
  onSelect: (value: string) => void;
};

const Categories = ({ selectedCategory, onSelect }: CategoriesProps) => {
  return (
    <div className="categories">
      {categoriesItem.map((item) => (
        <Link to={item.name === "all" ? "/" : `/${item.name}`}>
          <button
            key={item.name}
            className={`${
              selectedCategory === item.name ? "isClick" : ""
            } categories-item`}
            onClick={() => onSelect(item.name)}
          >
            {item.text}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
