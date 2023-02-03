export interface Category{
    title: string;
    description: string;
    listDocuments: Documents[]
}

interface Documents{
    title: string;
    status: boolean;
}