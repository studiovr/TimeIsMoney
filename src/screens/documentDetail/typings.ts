import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/rootStackParamList";

export interface DocumentDetailItemModel {
    id: number;
    title: string;
    field: DocumentFieldModel;
    value: string;
    validTextChange: (id: number, value: string) => void;
}

export enum InputTypeEnum {
    TEXT,
    NUMBER,
    PHONE,
    SELECT,
    DATE,
}

export class DocumentFieldModel {
    mask?: string;
    regex?: string;
    options?: any[];
    type: InputTypeEnum;
    placeholder?: string;

    constructor(
        type: InputTypeEnum,
        mask?: string,
        regex?: string,
        options?: any[],
        placeholder?: string
    ) {
        this.mask = mask;
        this.regex = regex;
        this.options = options;
        this.type = type;
        this.placeholder = placeholder;
    }
}