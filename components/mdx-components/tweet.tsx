export const Tweet = (props) => {
  return (
    <blockquote class="twitter-tweet"><a href={`https://twitter.com/x/status/${props.tweetId}`}></a></blockquote>
  );
};