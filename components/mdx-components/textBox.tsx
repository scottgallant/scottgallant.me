import { TinaMarkdown } from "tinacms/dist/rich-text";

export const TextBox = (props) => {
  return (
    <>
      <p className="text-gray-700 dark:text-gray-300">
        <TinaMarkdown
          content={props.text}
        />
      </p>
    </>
  );
};
