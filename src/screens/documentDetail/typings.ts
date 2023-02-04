export interface DocumentDetailItemModel {
    title: string;
    field: DocumentFieldModel<any>;
}

export enum InputTypeEnum {
    TEXT,
    NUMBER,
    PASSWORD,
    SELECT,
    DATE,
}

export interface DocumentFieldModel<T> {
    mask?: string;
    regex?: string;
    isValid?: boolean;
    options?: any[];
    value: T;
    type: InputTypeEnum;
}