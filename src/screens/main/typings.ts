import { ImageSourcePropType } from "react-native/types";

export interface DocumentCategoryModel {
    title: string;
    description: string;
    icon: ImageSourcePropType;
    count: number;
}