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

export class DocumentFieldModel<T> {
    mask?: string;
    regex?: string;
    isValid?: boolean;
    options?: any[];
    value: T;
    type: InputTypeEnum;

    constructor(
        value: T,
        type: InputTypeEnum,
        mask?: string,
        regex?: string,
        isValid?: boolean,
        options?: any[]
    ) {
        this.mask = mask;
        this.regex = regex;
        this.isValid = isValid;
        this.options = options;
        this.value = value;
        this.type = type;
    }
}