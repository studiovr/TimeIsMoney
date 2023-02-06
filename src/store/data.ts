import { DocumentModel } from "../screens/documents/typings";
import { DocumentCategoryModel, IDocumentCategory } from "../screens/main/typings";

const data: IDocumentCategory[] = [
    {
        "id": 1,
        "icon": "profile",
        "title": "Удостоверения",
        "description": "Паспорт РФ, загранпаспорт, свидетельство о рождении, военный билет, Пенсионное удостоверение",
        "listDocuments": [
            {
                "id": 1,
                "title": "Паспорт РФ",
                "status": false,
                "fields": [
                    {
                        "id": 1,
                        "title": "Фамилия",
                        "value": "",
                        "mask": "",
                        "regex": ""
                    }
                ]
            },
            {
                "id": 2,
                "title": "Загран паспорт",
                "status": false,
                "fields": []
            },
            {
                "id": 3,
                "title": "Свидетельство о рождении",
                "status": false,
                "fields": []
            },
            {
                "id": 4,
                "title": "Военный билет",
                "status": false,
                "fields": []
            },
            {
                "id": 5,
                "title": "Пенсионное удостоверение",
                "status": false,
                "fields": []
            }
        ]
    },
    {
        "id": 2,
        "icon": "transport",
        "title": "Транспорт",
        "description": "Водительское удостоверение, СТС, ПТС, ОСАГО, КАСКО",
        "listDocuments": [
            {
                "id": 1,
                "title": "Водительское удостоверение",
                "status": false,
                "fields": []
            },
            {
                "id": 2,
                "title": "Свидетельство о регистрации ТС",
                "status": false,
                "fields": []
            },
            {
                "id": 3,
                "title": "Паспорт Транспортного Средства",
                "status": false,
                "fields": []
            },
            {
                "id": 4,
                "title": "Полис ОСАГО",
                "status": false,
                "fields": []
            },
            {
                "id": 5,
                "title": "Полис КАСКО",
                "status": false,
                "fields": []
            }
        ]
    },
    {
        "id": 3,
        "icon": "state",
        "title": "Государство",
        "description": "СНИЛС, ИНН",
        "listDocuments": [
            {
                "id": 1,
                "title": "ИНН",
                "status": false,
                "fields": []
            },
            {
                "id": 2,
                "title": "СНИЛС",
                "status": false,
                "fields": []
            }
        ]
    },
    {
        "id": 4,
        "icon": "default",
        "title": "Свидетельства",
        "description": "Свидетельство о браке, разводе, усыновлении",
        "listDocuments": [
            {
                "id": 1,
                "title": "Свидетельство о браке",
                "status": false,
                "fields": []
            },
            {
                "id": 2,
                "title": "Свидетельство о разводе",
                "status": false,
                "fields": []
            },
            {
                "id": 3,
                "title": "Свидетельство об усыновлении",
                "status": false,
                "fields": []
            }
        ]
    },
    {
        "id": 5,
        "icon": "plus",
        "title": "Медицина",
        "description": "ОМС, ДМС",
        "listDocuments": [
            {
                "id": 1,
                "title": "Полис ОМС",
                "status": false,
                "fields": []
            },
            {
                "id": 2,
                "title": "Полис ДМС",
                "status": false,
                "fields": []
            },
            {
                "id": 3,
                "title": "Справка об инвалидности",
                "status": false,
                "fields": []
            }
        ]
    },
    {
        "id": 6,
        "icon": "default",
        "title": "Охота",
        "description": "Лицензия на оружие, разрешение РОХа, охотничий билет",
        "listDocuments": [
            {
                "id": 1,
                "title": "Лицензия на оружие",
                "status": false,
                "fields": []
            },
            {
                "id": 2,
                "title": "Охотничий билет",
                "status": false,
                "fields": []
            },
            {
                "id": 3,
                "title": "Разрешение РОХа",
                "status": false,
                "fields": []
            }
        ]
    },
    {
        "id": 7,
        "icon": "default",
        "title": "Прочее",
        "description": "Диплом, фотокопии",
        "listDocuments": [
            {
                "id": 1,
                "title": "Хранилище фотографий",
                "status": false,
                "fields": []
            }
        ]
    }
]