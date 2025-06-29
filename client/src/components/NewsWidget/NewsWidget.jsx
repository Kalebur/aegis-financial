export const NewsWidget = ({ articles }) => {
  return (
    <div className="widget">
      <p className="news-title">Local News</p>
      <ul id="news-list">
        {articles.map((article) => (
          <li key={article.guid}>
            {/* <p>{JSON.stringify(article)}</p> */}
            <p>{article.pubDate}</p>
            <p>
              <a href={article.link} target="__blank">
                {article.title}
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
