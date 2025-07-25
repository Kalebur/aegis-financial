import "./NewsWidget.css";
import { formatDateToLong } from "../../../../utils/dateUtils.js";

export const NewsWidget = ({ articles }) => {
  const sliceTitle = (title) => {
    const separator = " - ";
    const lastIndexOfSeparator = title.lastIndexOf(separator);

    if (lastIndexOfSeparator === -1) return title.trim();

    return title.slice(0, lastIndexOfSeparator);
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
