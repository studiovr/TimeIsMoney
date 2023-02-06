import { ViewStyle } from "react-native/types";

export interface ModalModel {
    title: string;
    description: string;
    primaryAction: ActionModel;
    secondaryAction: ActionModel;
    style?: ViewStyle;
}

interface ActionModel {
    title: string;
    action: () => void;
}