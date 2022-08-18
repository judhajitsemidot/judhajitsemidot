import {
  CommonButtonLoaderService,
  CommonLoaderService,
  SectionLoaderService,
} from "../../Services";

export const loaderType = {
  BUTTON: "button",
  COMMON: "common",
  INLINE: "inline",
  SECTION: "section",
  BUTTON_LOAD_MORE: "button_load_more",
  INLINE_SKELETON: "inline_skeleton",
  INLINE_LIST_SKELETON: "inline_list_skeleton",
  CATEGORY_SKELETON: "category_skeleton",
  TOP_CATEGORY_SKELETON: "top_category_skeleton",
  STORE_SKELETON: "store_skeleton",
  LIST: "list",
};

export const loaderClass = {
  BUTTON: "",
  COMMON: "loaderCommon",
  INLINE: "loaderInline",
  SECTION: "loaderSection",
  BUTTON_LOAD_MORE: "loaderButtonLoadMore",
  INLINE_SKELETON: "loaderInlineSkeleton",
  INLINE_LIST_SKELETON: "loaderInlineListSkeleton",
  CATEGORY_SKELETON: "loaderCategorySkeleton",
  TOP_CATEGORY_SKELETON: "loaderTopCategorySkeleton",
  STORE_SKELETON: "loaderStoreSkeleton",
  LIST: "loaderList",
};

export const StartLoader = (type, ittrationCount, loaderText) => {
 
  switch (type) {
    case loaderType.BUTTON:
    case loaderType.BUTTON_LOAD_MORE:
      CommonButtonLoaderService.startLoading(type);
      break;

    case loaderType.COMMON:
      CommonLoaderService.startLoading(type, loaderText);
      break;

    case loaderType.SECTION:
      SectionLoaderService.startLoading(type, loaderText);
      break;
    default:
  }
};

export const StopLoader = (type) => {
 
  switch (type) {
    case loaderType.BUTTON:
    case loaderType.BUTTON_LOAD_MORE:
      CommonButtonLoaderService.stopLoading(type);
      break;

    case loaderType.COMMON:
      CommonLoaderService.stopLoading();
      break;

    case loaderType.SECTION:
      SectionLoaderService.stopLoading();
      break;

    default:
  }
};
