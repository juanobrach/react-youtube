import "./styles.css";
import axios from "axios";
import { useCallback, useEffect } from "react";

const KEY = "AIzaSyBQ17626CWmZ4Hb-lWSCXUSrO9YNkJ9WxY";

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY
  }
});

export default function App() {
  // declare the async data fetching function
  const fetchData = useCallback(async (method: string) => {
    console.log("m", method);
    const search = await youtube.get(`/${method}`, {
      params: {
        q: "react native"
      }
    });

    const videos = search.data.items;
    console.log("v", videos);
    if (!search) return;

    // const videosThumbnails = await Promise.all(
    //   videos.map(async (video) => {
    //     console.log(video);
    //     return video;
    //   })
    // );

    // console.log("videosThumbnails", videosThumbnails);
  }, []);

  useEffect(() => {
    (async () => console.log("fetch", await fetchData("search")))();
  }, [fetchData]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
