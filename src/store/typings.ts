export interface Category {
    id: number
    title: string;
    description: string;
    icon: string;
    listDocuments: Document[];
}

interface Document {
    id: number;
    title: string;
    status: boolean;
    fields: DocumentField[];
}

interface DocumentField {
    id: number;
    title: string;
    value: any;
    mask: string;
    regex: string;
}