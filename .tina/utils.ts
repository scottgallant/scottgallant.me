export const filenameToLabel = (filename) => {
  return filename
    .replace(/.md+$/, "")
    .split(/[.\/]+/)
    .pop()
    .replace("-", " ");
};
