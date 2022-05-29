export const PullQuote = (props) => {
  const encodedText = encodeURIComponent(props.children);
  return (
    <blockquote className="pull-quote">
      <p>
        <a
          className="pull-quote__link"
          aria-label="Share on Twitter"
          href={`https://twitter.com/share?text=${encodedText}`}
        >
          {props.children}
        </a>
      </p>
      <div className="pull-quote__quotation">
        <div className="pull-quote__bg">
          <span className="pull-quote__symbol">“</span>
        </div>
      </div>
    </blockquote>
  );
};
