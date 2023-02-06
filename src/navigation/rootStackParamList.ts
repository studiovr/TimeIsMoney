import { DocumentDetailItemModel } from "../screens/documentDetail/typings";
import { DocumentCategoryModel, DocumentModel } from "../screens/main/typings";

export type RootStackParamList = {
	DOCUMENTDETAIL: {
		item: DocumentModel
	};
	DOCUMENTS: {
		item: DocumentCategoryModel
	};
	MAIN: undefined;
	SETTINGS: undefined;
	SCANNER: undefined;
}