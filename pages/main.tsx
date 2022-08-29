import React, { useEffect, useState } from "react";
import styles from "../styles/Main.module.css";
import { PostInfo } from "./api/hackerNewsApi";
import * as HackerNewsApi from "./api/hackerNewsApi";
import * as DateHelper from "./helper/dateHelper";

type Props = {};

export default function Main({}: Props): JSX.Element {
  const [topResults, setTopResults] = useState<PostInfo[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const temp = await HackerNewsApi.genTopStories(10);
      setTopResults(temp);
      setLoading(false);
    })();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!topResults) return <p>No data</p>;

  const subhead = (result: PostInfo) => {
    const time = DateHelper.calculateHowLongAgo(result.time);
    return (
      <h4>
        {result.score} points by {result.by} {time} ago | {result.descendants}{" "}
        comments
      </h4>
    );
  };

  return (
    <div className={styles.root}>
      {topResults.map((result, key) => (
        <div key={result.id}>
          <h2>
            {key + 1}. <a href={result.url}>{result.title}</a>
          </h2>
          {subhead(result)}
        </div>
      ))}
    </div>
  );
}
