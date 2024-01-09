import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import { desktopMediaQuery, tabletMediaQuery } from "./media-queries";

import { vars } from "./contract.css";

const baseGridTemplates = {
  1: "repeat(1, minmax(0, 1fr))",
  2: "repeat(2, minmax(0, 1fr))",
  3: "repeat(3, minmax(0, 1fr))",
  4: "repeat(4, minmax(0, 1fr))",
  5: "repeat(5, minmax(0, 1fr))",
  6: "repeat(6, minmax(0, 1fr))",
  7: "repeat(7, minmax(0, 1fr))",
  8: "repeat(8, minmax(0, 1fr))",
  9: "repeat(9, minmax(0, 1fr))",
  10: "repeat(10, minmax(0, 1fr))",
  11: "repeat(11, minmax(0, 1fr))",
  12: "repeat(12, minmax(0, 1fr))",
  none: "none",
};

const baseGridTracksSpans = {
  auto: "auto",
  "1": "span 1 / span 1",
  "2": "span 2 / span 2",
  "3": "span 3 / span 3",
  "4": "span 4 / span 4",
  "5": "span 5 / span 5",
  "6": "span 6 / span 6",
  "7": "span 7 / span 7",
  "8": "span 8 / span 8",
  "9": "span 9 / span 9",
  "10": "span 10 / span 10",
  "11": "span 11 / span 11",
  "12": "span 12 / span 12",
  full: "1 / -1",
};

const baseGridTracks = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "auto",
] as const;

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": tabletMediaQuery },
    desktop: { "@media": desktopMediaQuery },
  },
  defaultCondition: "mobile",
  properties: {
    display: [
      "none",
      "flex",
      "inline-flex",
      "grid",
      "inline-grid",
      "block",
      "inline-block",
      "contents",
    ],
    flexDirection: ["row", "column"],
    alignItems: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "start",
      "end",
      "baseline",
    ],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-between",
      "space-around",
      "space-evenly",
    ],
    flexGrow: ["0", "1"],
    flexShrink: ["0", "1"],
    flexBasis: ["auto", "0"],
    position: ["static", "relative", "absolute", "fixed", "sticky"],
    gridArea: ["auto"],
    gridTemplateAreas: ["none"],
    gridTemplateRows: baseGridTemplates,
    gridRow: baseGridTracksSpans,
    gridRowStart: baseGridTracks,
    gridRowEnd: baseGridTracks,
    gridTemplateColumns: baseGridTemplates,
    gridColumn: baseGridTracksSpans,
    gridColumnStart: baseGridTracks,
    gridColumnEnd: baseGridTracks,
    gridAutoFlow: ["row", "column", "dense", "row dense", "column dense"],
    order: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    flexWrap: ["nowrap", "wrap"],
    gap: vars.spacing,
    rowGap: vars.spacing,
    columnGap: vars.spacing,
    paddingTop: vars.spacing,
    paddingBottom: vars.spacing,
    paddingLeft: vars.spacing,
    paddingRight: vars.spacing,
    marginTop: { ...vars.spacing, auto: "auto" },
    marginBottom: { ...vars.spacing, auto: "auto" },
    marginLeft: { ...vars.spacing, auto: "auto" },
    marginRight: { ...vars.spacing, auto: "auto" },
    width: { ...vars.spacing, "100%": "100%", "100vw": "100vw" },
    height: { ...vars.spacing, "100%": "100%", "100vh": "100vh" },
    minHeight: ["auto", "100%", "0px"],
    minWidth: { ...vars.spacing, auto: "auto", "100%": "100%" },
    maxWidth: ["auto", "100%", "0px"],
    maxHeight: { ...vars.spacing, auto: "auto", "100%": "100%", "0px": "0px" },
    borderTopRightRadius: {
      ...vars.borderRadius,
      "50%": "50%",
      "100%": "100%",
    },
    borderTopLeftRadius: { ...vars.borderRadius, "50%": "50%", "100%": "100%" },
    borderBottomRightRadius: {
      ...vars.borderRadius,
      "50%": "50%",
      "100%": "100%",
    },
    borderBottomLeftRadius: {
      ...vars.borderRadius,
      "50%": "50%",
      "100%": "100%",
    },
    fontSize: { ...vars.fontSize, inherit: "inherit" },
    fontStyle: ["normal", "italic"],
    lineHeight: { ...vars.lineHeight, inherit: "inherit" },
    textAlign: ["center", "left", "right"],
    borderLeftWidth: vars.borderWidth,
    borderRightWidth: vars.borderWidth,
    borderTopWidth: vars.borderWidth,
    borderBottomWidth: vars.borderWidth,
    borderLeftStyle: ["none", "solid"],
    borderRightStyle: ["none", "solid"],
    borderTopStyle: ["none", "solid"],
    borderBottomStyle: ["none", "solid"],
    outlineStyle: ["none"],
    textTransform: ["uppercase"],
    letterSpacing: vars.letterSpacing,
    top: vars.spacing,
    bottom: vars.spacing,
    left: vars.spacing,
    right: vars.spacing,
    overflowX: ["hidden", "visible", "scroll", "auto"],
    overflowY: ["hidden", "visible", "scroll", "auto"],
    textOverflow: ["none", "ellipsis"],
    whiteSpace: ["normal", "nowrap"],
    wordBreak: ["break-word", "break-all", "normal"],
    zIndex: ["auto", "1", "2", "3"],
    aspectRatio: ["1 / 1"],
    objectFit: ["contain", "cover", "fill", "none", "scale-down"],
    fontWeight: vars.fontWeight,
    alignSelf: ["auto", "normal", "end", "center", "start"],
    justifySelf: ["auto", "normal", "end", "center", "start"],
    visibility: ["visible", "hidden"],
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    placeItems: ["alignItems", "justifyContent"],
    typeSize: ["fontSize", "lineHeight", "fontWeight", "letterSpacing"],
    borderWidth: [
      "borderTopWidth",
      "borderBottomWidth",
      "borderLeftWidth",
      "borderRightWidth",
    ],
    borderXWidth: ["borderLeftWidth", "borderRightWidth"],
    borderYWidth: ["borderTopWidth", "borderBottomWidth"],
    borderStyle: [
      "borderTopStyle",
      "borderBottomStyle",
      "borderLeftStyle",
      "borderRightStyle",
    ],
    borderXStyle: ["borderLeftStyle", "borderRightStyle"],
    borderYStyle: ["borderTopStyle", "borderBottomStyle"],
    inset: ["top", "bottom", "left", "right"],
    borderRadius: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
    overflow: ["overflowX", "overflowY"],
    flex: ["flexGrow", "flexShrink", "flexBasis"],
  },
});

const stateProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: "&:hover" },
    focus: { selector: "&:focus" },
    focusWithin: { selector: "&:focus-within" },
    focusVisible: { selector: "&:focus-visible" },
    active: { selector: "&:active" },
    disabled: { selector: "&[disabled]" },
    placeholder: { selector: "&::placeholder" },
  },
  defaultCondition: "default",
  properties: {
    borderColor: { ...vars.colors.border, transparent: "transparent" },
    color: { ...vars.colors.text, inherit: "inherit" },
    backgroundColor: { ...vars.colors.background, transparent: "transparent" },
    pointerEvents: ["none", "auto"],
    cursor: ["pointer", "not-allowed", "auto", "grabbing", "text"],
    boxShadow: { ...vars.boxShadow, none: "none" },
    transition: { ease: "transform 0.3s", all: "all 0.3s ease-in-out" },
    opacity: ["0", "0.2", "0.4", "0.6", "0.8", "1"],
    textDecoration: ["none", "underline"],
    transform: [],
    fill: { ...vars.colors.background, transparent: "transparent" },
    stroke: { ...vars.colors.border, transparent: "transparent" },
    listStyleType: ["none", "disc", "decimal"],
    listStylePosition: ["inside", "outside"],
    listStyleImage: ["none"],
  },
});

export const sprinkles = createSprinkles(responsiveProperties, stateProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
