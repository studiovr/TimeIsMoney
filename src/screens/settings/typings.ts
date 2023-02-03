import { ImageSourcePropType } from "react-native/types";

export interface SettingItemModel {
    title: string;
    icon: ImageSourcePropType;
    clickAction: () => void;
}