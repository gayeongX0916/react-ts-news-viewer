const fetchNewsData = async (category:string) => {
  const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6f590d4a5c5d4169b3b5b1ad805d7d7f`;

  return fetch(URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`${Error}`);
      }
      return res.json();
    })
    .then((data) => data.articles);
};

export default fetchNewsData;
