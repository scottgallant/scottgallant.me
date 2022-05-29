export const CaptionedImage = (props) => {
  return (
    <figure>
      <img style={{ maxWidth: "100%" }} src={props.imgUrl} />

      <figcaption>{props.caption}</figcaption>
    </figure>
  );
};
