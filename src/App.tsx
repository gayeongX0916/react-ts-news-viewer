import "./App.css";
import Categories from "./components/Categories";
import NewsList from "./components/NewsList";

function App() {
  return (
    <div className="news-viewer">
      <Categories />
      <NewsList />
    </div>
  );
}

export default App;
