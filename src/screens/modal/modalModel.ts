export interface ModalModel {
    title: string;
    description: string;
    primaryAction: ActionModel;
    secondaryAction: ActionModel;
}

interface ActionModel {
    title: string;
    action: () => void;
}