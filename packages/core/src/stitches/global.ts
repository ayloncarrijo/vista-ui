import { globalCss } from "../stitches.config";

export const injectBaseStyles = globalCss({
  "*, ::before, ::after": {
    boxSizing: "border-box",
    borderWidth: 0,
    borderStyle: "solid",
    borderColor: "CurrentColor",
  },

  html: {
    WebkitTextSizeAdjust: "100%",
    MozTabSize: 4,
    tabSize: 4,
    fontFeatureSettings: "normal",
    typography: "$bodyLg",
  },

  body: {
    margin: 0,
    lineHeight: "inherit",
    backgroundColor: "$surface",
    color: "$onSurface",
  },

  hr: {
    height: 0,
    color: "inherit",
    borderTopWidth: 1,
  },

  "abbr:where([title])": {
    textDecoration: "underline dotted",
  },

  "h1, h2, h3, h4, h5, h6": {
    fontSize: "inherit",
    fontWeight: "inherit",
  },

  a: {
    color: "inherit",
    textDecoration: "inherit",
  },

  "b, strong": {
    fontWeight: "bolder",
  },

  "code, kbd, samp, pre": {
    fontFamily: "$mono",
    fontSize: "1em",
  },

  small: {
    fontSize: "80%",
  },

  "sub, sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline",
  },

  sub: {
    bottom: "-0.25em",
  },

  sup: {
    top: "-0.5em",
  },

  table: {
    textIndent: 0,
    borderColor: "inherit",
    borderCollapse: "collapse",
  },

  "button, input, optgroup, select, textarea": {
    fontFamily: "inherit",
    fontSize: "100%",
    fontWeight: "inherit",
    lineHeight: "inherit",
    color: "inherit",
    margin: 0,
    padding: 0,
  },

  "button, select": {
    textTransform: "none",
  },

  "button, [type='button'], [type='reset'], [type='submit']": {
    WebkitAppearance: "button",
    backgroundColor: "transparent",
    backgroundImage: "none",
  },

  ":-moz-focusring": {
    outline: "auto",
  },

  ":-moz-ui-invalid": {
    boxShadow: "none",
  },

  progress: {
    verticalAlign: "baseline",
  },

  "::-webkit-inner-spin-button, ::-webkit-outer-spin-button": {
    height: "auto",
  },

  "[type='search']": {
    WebkitAppearance: "textfield",
    outlineOffset: -2,
  },

  "::-webkit-search-decoration": {
    WebkitAppearance: "none",
  },

  "::-webkit-file-upload-button": {
    WebkitAppearance: "button",
    font: "inherit",
  },

  summary: {
    display: "list-item",
  },

  "blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre": {
    margin: 0,
  },

  fieldset: {
    margin: 0,
    padding: 0,
  },

  legend: {
    padding: 0,
  },

  "ol, ul, menu": {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },

  textarea: {
    resize: "vertical",
  },

  "input::placeholder, textarea::placeholder": {
    opacity: 1,
    color: "darkgray",
  },

  'button, [role="button"]': {
    cursor: "pointer",
  },

  ":disabled": {
    cursor: "default",
    pointerEvents: "none",
  },

  "img, svg, video, canvas, audio, iframe, embed, object": {
    display: "block",
    verticalAlign: "middle",
  },

  "img, video": {
    maxWidth: "100%",
    height: "auto",
  },

  "[hidden]": {
    display: "none",
  },
});
