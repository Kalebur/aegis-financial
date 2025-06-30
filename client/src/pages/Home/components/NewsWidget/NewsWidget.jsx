import "./NewsWidget.css";
import { formatDateToLong } from "../../../../utils/dateFormatter";

export const NewsWidget = ({ articles }) => {
  const sliceTitle = (title) => {
    return title.slice(0, title.lastIndexOf("-") - 1);
  };

  return (
    <div className="widget news-widget">
      <p className="widget-title">Local News</p>
      <ul id="news-list">
        {articles.map((article) => (
          <li key={article.guid}>
            {/* <p>{JSON.stringify(article)}</p> */}
            <p className="published-date">
              {formatDateToLong(article.pubDate)}
            </p>
            <a className="headline-link" href={article.link} target="__blank">
              {sliceTitle(article.title)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
