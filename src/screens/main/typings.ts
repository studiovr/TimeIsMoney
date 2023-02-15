import { ImageSourcePropType } from "react-native/types";
import { DocumentDetailItemModel } from "../documentDetail/typings";

export interface IDocumentCategory {
    id: number;
    title: string;
    description: string;
    icon: string;
    listDocuments: Document[];
    count?: number;
}

export class DocumentCategoryModel {
    id: number;
    title: string;
    description: string;
    icon: ImageSourcePropType;
    count: number;
    listDocuments: Document[];

    constructor(
        id: number, 
        title: string, 
        description: string, 
        icon: string, 
        listDocuments: Document[],
        count: number) {

            this.id = id;
            this.title = title;
            this.description = description;
            this.count = listDocuments.filter(x => x.status).length;
            this.listDocuments = listDocuments;
            this.count = count;
            this.icon = images.get(icon) ?? require('../../assets/default.png');
    }
}

export interface Document {
    id: number;
    title: string;
    status: boolean;
    fields: DocumentDetailItemModel[];
}

export class DocumentModel {
    id: number;
    title: string;
    status: boolean;
    fields: DocumentDetailItemModel[];

    constructor(
        id: number, 
        title: string, 
        status: boolean, 
        fields: DocumentDetailItemModel[]) {

            this.id = id;
            this.title = title;
            this.status = status;
            this.fields = fields;
    }
}

export interface DocumentField {
    id: number;
    title: string;
    value: any;
    mask: string;
    regex: string;
}

export class DocumentFieldModel {
    id: number;
    title: string;
    value: any;
    mask: string;
    regex: string;


    constructor(
        id: number, 
        title: string, 
        value: any,
        mask: string,
        regex: string) {

            this.id = id;
            this.title = title;
            this.value = value;
            this.mask = mask;
            this.regex = regex;
    }
}

export const images: Map<string, ImageSourcePropType> = new Map<string, ImageSourcePropType> (
    [
        ['default', require('../../assets/default.png')],
        ['profile', require('../../assets/profile2.png')],
        ['transport', require('../../assets/transport.png')],
        ['state', require('../../assets/state.png')],
        ['plus', require('../../assets/plus.png')],

    ]
);