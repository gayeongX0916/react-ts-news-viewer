import { NavLink } from "react-router-dom";

const categoriesItem = [
  { name: "all", text: "전체보기" },
  { name: "business", text: "비즈니스" },
  { name: "entertainment", text: "엔터테인먼트" },
  { name: "health", text: "건강" },
  { name: "science", text: "과학" },
  { name: "sports", text: "스포츠" },
  { name: "technology", text: "기술" },
];

const Categories = () => {
  return (
    <div className="categories">
      {categoriesItem.map((item) => (
        <NavLink
          key={item.name}
          to={item.name === "all" ? "/" : `/${item.name}`}
          className={({ isActive }) =>
            isActive ? "isClick categories-item" : "categories-item"
          }
        >
          {item.text}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
