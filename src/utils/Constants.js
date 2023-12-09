export const LIVE_CHAT_COUNT = 35;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=5&regionCode=IN&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULTS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY +
  "&q=";

export const YOUTUBE_CHANNEL_DATA_API =
  // "https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=contentDetails&part=statistics&key=" + process.env.REACT_APP_GOOGLE_API_KEY + "&id="

  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY +
  "&id=";
