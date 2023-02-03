export interface DocumentDetailItemModel {
    title: string;
    field: DocumentFieldModel;
}

export interface DocumentFieldModel {
    mask: string;
    regex: string;
    isValid: boolean;
    value: any;
}