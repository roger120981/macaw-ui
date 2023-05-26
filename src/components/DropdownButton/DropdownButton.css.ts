import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "~/theme";

export const dropdownButton = recipe({
  base: [
    sprinkles({
      outlineStyle: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      placeItems: "center",
      padding: 0,
      cursor: {
        default: "pointer",
        disabled: "not-allowed",
      },
      borderColor: {
        default: "transparent",
        focus: "brandDefault",
        active: "brandDefault",
      },
      borderStyle: "solid",
      borderWidth: 1,
      color: {
        default: "iconNeutralDefault",
        disabled: "iconNeutralDisabled",
      },
    }),
  ],
  variants: {
    variant: {
      contained: sprinkles({
        backgroundColor: {
          default: "surfaceNeutralHighlight",
          hover: "surfaceNeutralDepressed",
          focusVisible: "surfaceNeutralHighlight",
          active: "surfaceNeutralHighlight",
          disabled: "interactiveNeutralHighlightDisabled",
        },
      }),
      text: sprinkles({
        backgroundColor: {
          default: "surfaceNeutralPlain",
          hover: "interactiveBrandHighlightDefault",
          focusVisible: "surfaceNeutralPlain",
          active: "surfaceNeutralPlain",
          disabled: "interactiveNeutralHighlightDisabled",
        },
      }),
    },
    size: {
      small: sprinkles({
        borderRadius: 2,
        paddingX: 2,
        paddingY: 1,
        typeSize: "buttonSmall",
        fontWeight: "bodyMedium",
        lineHeight: "captionMedium",
        gap: 3,
      }),
      medium: sprinkles({
        height: 8,
        borderRadius: 3,
        paddingX: 2,
        paddingY: 1.5,
        typeSize: "buttonMedium",
        fontWeight: "bodyMedium",
        gap: 1,
      }),
      large: sprinkles({
        height: 10,
        borderRadius: 3,
        paddingX: 3,
        paddingY: 2,
        typeSize: "buttonLarge",
        fontWeight: "bodyMedium",
        gap: 2,
      }),
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export type DropdownButtonVariants = RecipeVariants<typeof dropdownButton>;
