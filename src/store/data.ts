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
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 2,
                        "title": "Имя",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 3,
                        "title": "Отчество",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 4,
                        "title": "Пол",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 5,
                        "title": "Дата рождения",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 6,
                        "title": "Место рождения",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 7,
                        "title": "Серия",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 8,
                        "title": "Номер",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 9,
                        "title": "Паспорт выдан",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 10,
                        "title": "Дата выдачи",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 11,
                        "title": "Код подразделения",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 12,
                        "title": "Адрес регистрации",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    }
                ]
            },
            {
                "id": 2,
                "title": "Загран паспорт",
                "status": false,
                "fields": [
                    {
                        "id": 1,
                        "title": "Фамилия",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 2,
                        "title": "Имя",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 3,
                        "title": "Отчество",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 4,
                        "title": "Фамилия латиницей",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 5,
                        "title": "Имя латиницей",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 6,
                        "title": "Дата рождения",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 7,
                        "title": "Пол",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 8,
                        "title": "Место рождения",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 9,
                        "title": "Необязательно Гражданство",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 10,
                        "title": "Серия",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 11,
                        "title": "Номер",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 12,
                        "title": "Дата выдачи",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 13,
                        "title": "Дата окончания срока",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 14,
                        "title": "Орган выдавший",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    }
                ]
            },
            {
                "id": 3,
                "title": "Свидетельство о рождении",
                "status": false,
                "fields": [
                    {
                        "id": 1,
                        "title": "Фамилия",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 2,
                        "title": "Имя",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 3,
                        "title": "Отчество",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 4,
                        "title": "Дата рождения",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 5,
                        "title": "Место рождения",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 6,
                        "title": "Дата составления акта",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 7,
                        "title": "Номер записи акта",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 8,
                        "title": "Отец - Фамилия",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 9,
                        "title": "Отец - Имя",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 10,
                        "title": "Отец - Отчество",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 11,
                        "title": "Отец - Гражданство",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 12,
                        "title": "Мать - Фамилия",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 13,
                        "title": "Мать - Имя",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 14,
                        "title": "Мать - Отчество",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 15,
                        "title": "Мать - Гражданство",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 16,
                        "title": "Место государственной регистрации",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 17,
                        "title": "Дата выдачи",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 18,
                        "title": "Серия свидетельства",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 19,
                        "title": "Номер свидетельства",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    }
                ]
            },
            {
                "id": 4,
                "title": "Военный билет",
                "status": false,
                "fields": [
                    {
                        "id": 1,
                        "title": "Фамилия",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 2,
                        "title": "Имя",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 3,
                        "title": "Отчество",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 4,
                        "title": "Дата рождения",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 5,
                        "title": "Серия",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 6,
                        "title": "Номер",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 7,
                        "title": "Место выдачи",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 8,
                        "title": "Дата выдачи",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 9,
                        "title": "Звание того кто выдал",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 10,
                        "title": "Кем присвоено",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 11,
                        "title": "Номер приказа",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 12,
                        "title": "Дата приказа",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 13,
                        "title": "Специальность: номер ВУС, Код ВУС, наименование должности",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 14,
                        "title": "Категория запаса",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 15,
                        "title": "Группа учета",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 16,
                        "title": "Состав",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 17,
                        "title": "Мед освидетельствования",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    }
                ]
            },
            {
                "id": 5,
                "title": "Пенсионное удостоверение",
                "status": false,
                "fields": [
                    {
                        "id": 1,
                        "title": "Фамилия",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 2,
                        "title": "Имя",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 3,
                        "title": "Отчество",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 4,
                        "title": "Год рождения",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 5,
                        "title": "Номер",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 6,
                        "title": "Тип",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 7,
                        "title": "Группа инвалидности",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    }
                ]
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
                "fields": [
                    {
                        "id": 1,
                        "title": "Фамилия",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 2,
                        "title": "Фамилия латиницей",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 3,
                        "title": "Имя",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 4,
                        "title": "Имя латиницей",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 5,
                        "title": "Отчество",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 6,
                        "title": "Отчество латиницей",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 7,
                        "title": "Дата рождения",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 8,
                        "title": "Место рождения",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 9,
                        "title": "Дата выдачи",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 10,
                        "title": "Дата окончания действия",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 11,
                        "title": "Подразделение/кем выдано",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 12,
                        "title": "Номер",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 13,
                        "title": "Где выдано",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 14,
                        "title": "Категории",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    }]
            },
            {
                "id": 2,
                "title": "Свидетельство о регистрации ТС",
                "status": false,
                "fields": [{
                    "id": 1,
                    "title": "Фамилия",
                    "field": {
                        "mask": "",
                        "regex": "",
                        "isValid": false,
                        "options": [],
                        "value": "",
                        "type": 1,
                    }
                },
                {
                    "id": 2,
                    "title": "Фамилия латиницей",
                    "field": {
                        "mask": "",
                        "regex": "",
                        "isValid": false,
                        "options": [],
                        "value": "",
                        "type": 1,
                    }
                },
                {
                    "id": 3,
                    "title": "Имя",
                    "field": {
                        "mask": "",
                        "regex": "",
                        "isValid": false,
                        "options": [],
                        "value": "",
                        "type": 1,
                    }
                },
                {
                    "id": 4,
                    "title": "Имя латиницей",
                    "field": {
                        "mask": "",
                        "regex": "",
                        "isValid": false,
                        "options": [],
                        "value": "",
                        "type": 1,
                    }
                },
                {
                    "id": 5,
                    "title": "Отчество",
                    "field": {
                        "mask": "",
                        "regex": "",
                        "isValid": false,
                        "options": [],
                        "value": "",
                        "type": 1,
                    }
                },
                {
                    "id": 6,
                    "title": "Адрес регистрации владельца",
                    "field": {
                        "mask": "",
                        "regex": "",
                        "isValid": false,
                        "options": [],
                        "value": "",
                        "type": 1,
                    }
                },
                {
                    "id": 7,
                    "title": "Серия",
                    "field": {
                        "mask": "",
                        "regex": "",
                        "isValid": false,
                        "options": [],
                        "value": "",
                        "type": 1,
                    }
                },
                {
                    "id": 8,
                    "title": "Номер",
                    "field": {
                        "mask": "",
                        "regex": "",
                        "isValid": false,
                        "options": [],
                        "value": "",
                        "type": 1,
                    }
                },
                {
                    "id": 9,
                    "title": "Кем выдано",
                    "field": {
                        "mask": "",
                        "regex": "",
                        "isValid": false,
                        "options": [],
                        "value": "",
                        "type": 1,
                    }
                },
                {
                    "id": 10,
                    "title": "Дата выдачи",
                    "field": {
                        "mask": "",
                        "regex": "",
                        "isValid": false,
                        "options": [],
                        "value": "",
                        "type": 1,
                    }
                },
                {
                    "id": 11,
                    "title": "Регистрационный знак ТС",
                    "field": {
                        "mask": "",
                        "regex": "",
                        "isValid": false,
                        "options": [],
                        "value": "",
                        "type": 1,
                    }
                },
                {
                    "id": 12,
                    "title": "Марка/модель",
                    "field": {
                        "mask": "",
                        "regex": "",
                        "isValid": false,
                        "options": [],
                        "value": "",
                        "type": 1,
                    }
                },
                {
                    "id": 13,
                    "title": "Тип ТС",
                    "field": {
                        "mask": "",
                        "regex": "",
                        "isValid": false,
                        "options": [],
                        "value": "",
                        "type": 1,
                    }
                },
                {
                    "id": 14,
                    "title": "Категория ТС",
                    "field": {
                        "mask": "",
                        "regex": "",
                        "isValid": false,
                        "options": [],
                        "value": "",
                        "type": 1,
                    }
                },
                {
                    "id": 15,
                    "title": "Год выпуска",
                    "field": {
                        "mask": "",
                        "regex": "",
                        "isValid": false,
                        "options": [],
                        "value": "",
                        "type": 1,
                    }
                },
                {
                    "id": 16,
                    "title": "Номер шасси",
                    "field": {
                        "mask": "",
                        "regex": "",
                        "isValid": false,
                        "options": [],
                        "value": "",
                        "type": 1,
                    }
                },
                {
                    "id": 17,
                    "title": "Номер кузова",
                    "field": {
                        "mask": "",
                        "regex": "",
                        "isValid": false,
                        "options": [],
                        "value": "",
                        "type": 1,
                    }
                },
                {
                    "id": 18,
                    "title": "Цвет",
                    "field": {
                        "mask": "",
                        "regex": "",
                        "isValid": false,
                        "options": [],
                        "value": "",
                        "type": 1,
                    }
                },
                {
                    "id": 19,
                    "title": "Мощность",
                    "field": {
                        "mask": "",
                        "regex": "",
                        "isValid": false,
                        "options": [],
                        "value": "",
                        "type": 1,
                    }
                },
                {
                    "id": 20,
                    "title": "Экологический класс",
                    "field": {
                        "mask": "",
                        "regex": "",
                        "isValid": false,
                        "options": [],
                        "value": "",
                        "type": 1,
                    }
                },
                {
                    "id": 21,
                    "title": "Серия номер ПТС",
                    "field": {
                        "mask": "",
                        "regex": "",
                        "isValid": false,
                        "options": [],
                        "value": "",
                        "type": 1,
                    }
                },
                {
                    "id": 22,
                    "title": "Разрешенная масса",
                    "field": {
                        "mask": "",
                        "regex": "",
                        "isValid": false,
                        "options": [],
                        "value": "",
                        "type": 1,
                    }
                },
                {
                    "id": 23,
                    "title": "Масса без нагрузки",
                    "field": {
                        "mask": "",
                        "regex": "",
                        "isValid": false,
                        "options": [],
                        "value": "",
                        "type": 1,
                    }
                }
                ]
            },
            {
                "id": 3,
                "title": "Паспорт Транспортного Средства",
                "status": false,
                "fields": [
                    {
                        "id": 1,
                        "title": "Серия Номер",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 2,
                        "title": "VIN",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 3,
                        "title": "Марка модель",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 4,
                        "title": "Тип ТС",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 5,
                        "title": "Категория",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 6,
                        "title": "Год выпуска ТС",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 7,
                        "title": "Модель и номер двигателя",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 8,
                        "title": "Номер шасси",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 9,
                        "title": "Номер кузова",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 10,
                        "title": "Цвет",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 11,
                        "title": "Мощность двигателя л.с. (кВт)",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 12,
                        "title": "Рабочий объем двигателя",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 13,
                        "title": "Тип двигателя",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 14,
                        "title": "Экологический класс",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 15,
                        "title": "Разрешенная масса",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 16,
                        "title": "Масса без нагрузки",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 17,
                        "title": "Изготовитель ТС",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 18,
                        "title": "Одобрение типа Номер",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 19,
                        "title": "Одобрение типа дата",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 20,
                        "title": "Одобрение типа орган",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 21,
                        "title": "Страна вывоза",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 22,
                        "title": "Серия ТД ТПО",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 23,
                        "title": "Номер ТД ТПО",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 24,
                        "title": "Таможенные ограничения",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    }
                ]
            },
            {
                "id": 4,
                "title": "Полис ОСАГО",
                "status": false,
                "fields": [
                    {
                        "id": 1,
                        "title": "Серия Номер",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 2,
                        "title": "Страховая сумма",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 3,
                        "title": "Действителен с….",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 4,
                        "title": "Действителен до…",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 5,
                        "title": "Название страховой компании",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 6,
                        "title": "Адрес страховой компании",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    }
                ]
            },
            {
                "id": 5,
                "title": "Полис КАСКО",
                "status": false,
                "fields": [
                    {
                        "id": 1,
                        "title": "Серия Номер",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 2,
                        "title": "Срок действия с …",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 3,
                        "title": "Срок действия до…",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 4,
                        "title": "Страховая компания",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 5,
                        "title": "Страховая премия",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 6,
                        "title": "Число водителей",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    }
                ]
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
                "fields": [
                    {
                        "id": 1,
                        "title": "Фамилия",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 2,
                        "title": "Имя",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 3,
                        "title": "Отчество",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 4,
                        "title": "Пол",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 5,
                        "title": "Дата рождения",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 6,
                        "title": "Место рождения",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 7,
                        "title": "Номер",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    }
                ]
            },
            {
                "id": 2,
                "title": "СНИЛС",
                "status": false,
                "fields": [
                    {
                        "id": 1,
                        "title": "Фамилия",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 2,
                        "title": "Имя",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 3,
                        "title": "Отчество",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 4,
                        "title": "Дата рождения",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 5,
                        "title": "Место рождения",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 6,
                        "title": "Пол",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 7,
                        "title": "Дата регистрации",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 8,
                        "title": "Номер",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    }
                ]
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
                "fields": [
                    {
                        "id": 1,
                        "title": "Фамилия мужа",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 2,
                        "title": "Имя мужа",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 3,
                        "title": "Отчество мужа",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 4,
                        "title": "Гражданство мужа",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 5,
                        "title": "Дата рождения мужа",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 6,
                        "title": "Место рождения мужа",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 7,
                        "title": "Фамилия жены",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 8,
                        "title": "Имя жены",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 9,
                        "title": "Отчество жены",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 10,
                        "title": "Гражданство жены",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 11,
                        "title": "Дата рождения жены",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 12,
                        "title": "Место рождения жены",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 13,
                        "title": "Дата заключения брака",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 14,
                        "title": "Дата записи акта",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 15,
                        "title": "Номер записи акта",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 16,
                        "title": "Новая фамилия мужа",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 17,
                        "title": "Новая фамилия жены",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 18,
                        "title": "Место гос регистрации",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 19,
                        "title": "Дата выдачи",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 20,
                        "title": "Серия Номер",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    }
                ]
            },
            {
                "id": 2,
                "title": "Свидетельство о разводе",
                "status": false,
                "fields": [
                    {
                        "id": 1,
                        "title": "Фамилия мужа",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 2,
                        "title": "Имя мужа",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 3,
                        "title": "Отчество мужа",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 4,
                        "title": "Гражданство мужа",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 5,
                        "title": "Дата рождения мужа",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 6,
                        "title": "Место рождения мужа",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 7,
                        "title": "Фамилия жены",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 8,
                        "title": "Имя жены",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 9,
                        "title": "Отчество жены",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 10,
                        "title": "Гражданство жены",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 11,
                        "title": "Дата рождения жены",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 12,
                        "title": "Место рождения жены",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 13,
                        "title": "Дата развода",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 14,
                        "title": "Основание",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 15,
                        "title": "Дата основания",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 16,
                        "title": "Дата записи акта",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 17,
                        "title": "Номер записи акта",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 18,
                        "title": "Новая фамилия",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 19,
                        "title": "Фамилия заявителя",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 20,
                        "title": "Имя заявителя",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 21,
                        "title": "Отчество заявителя",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 22,
                        "title": "Место гос регистрации",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 23,
                        "title": "Дата выдачи",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 24,
                        "title": "Серия Номер",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    }
                ]
            },
            {
                "id": 3,
                "title": "Свидетельство об усыновлении",
                "status": false,
                "fields": [
                    {
                        "id": 1,
                        "title": "Фамилия ребёнка",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 2,
                        "title": "Имя ребёнка",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 3,
                        "title": "Отчество ребёнка",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 4,
                        "title": "Дата рождения ребёнка",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 5,
                        "title": "Место рождения ребёнка",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 6,
                        "title": "Фамилия мужа",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 7,
                        "title": "Имя мужа",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 8,
                        "title": "Отчество мужа",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 9,
                        "title": "Гражданство мужа",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 10,
                        "title": "Фамилия жены",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 11,
                        "title": "Имя жены",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 12,
                        "title": "Отчество жены",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 13,
                        "title": "Гражданство жены",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 14,
                        "title": "Новая Фамилия ребёнка",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 15,
                        "title": "Новое Имя ребёнка",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 16,
                        "title": "Новое Отчество ребёнка",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 17,
                        "title": "Новая Дата рождения ребёнка",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 18,
                        "title": "Новое Место рождения ребёнка",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 19,
                        "title": "Дата записи акта",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 20,
                        "title": "Номер записи акта",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 21,
                        "title": "Место гос регистрации",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 22,
                        "title": "Дата выдачи",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 23,
                        "title": "Серия Номер",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    }
                ]
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
                "fields": [
                    {
                        "id": 1,
                        "title": "Фамилия",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 2,
                        "title": "Имя",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 3,
                        "title": "Отчество",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 4,
                        "title": "Дата рождения",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 5,
                        "title": "Пол",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 6,
                        "title": "Номер полиса",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 7,
                        "title": "Срок действия",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 8,
                        "title": "Дата регистрации",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 9,
                        "title": "Название страховой организации",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 10,
                        "title": "Адрес организации",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 11,
                        "title": "Телефон организации",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 12,
                        "title": "ФИО представителя",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    }
                ]
            },
            {
                "id": 2,
                "title": "Полис ДМС",
                "status": false,
                "fields": [
                    {
                        "id": 1,
                        "title": "Номер полиса",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 2,
                        "title": "Срок действия",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 3,
                        "title": "Страховая компания",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    }
                ]
            },
            {
                "id": 3,
                "title": "Справка об инвалидности",
                "status": false,
                "fields": [
                    {
                        "id": 1,
                        "title": "Наименование организации",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 2,
                        "title": "Серия Номер справки",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 3,
                        "title": "Фамилия",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 4,
                        "title": "Имя",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 5,
                        "title": "Отчество",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 6,
                        "title": "Дата рождения",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 7,
                        "title": "Адрес регистрации",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 8,
                        "title": "Дата установления инвалидности",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    }
                ]
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
                "fields": [
                    {
                        "id": 1,
                        "title": "Модель",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 2,
                        "title": "Калибр",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 3,
                        "title": "Серия",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 4,
                        "title": "Номер",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 5,
                        "title": "Год выпуска",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 6,
                        "title": "Дата выдачи",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 7,
                        "title": "Действительно до…",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 8,
                        "title": "Кем выдано",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    }
                ]
            },
            {
                "id": 2,
                "title": "Охотничий билет",
                "status": false,
                "fields": [
                    {
                        "id": 1,
                        "title": "Номер",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 2,
                        "title": "Фамилия",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 3,
                        "title": "Имя",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 4,
                        "title": "Отчество",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 5,
                        "title": "Дата рождения",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 6,
                        "title": "Кем выдан",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 7,
                        "title": "Дата выдачи",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    }
                ]
            },
            {
                "id": 3,
                "title": "Разрешение РОХа",
                "status": false,
                "fields": [
                    {
                        "id": 1,
                        "title": "Номер",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 2,
                        "title": "Фамилия",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 3,
                        "title": "Имя",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 4,
                        "title": "Отчество",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 5,
                        "title": "Пол",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    },
                    {
                        "id": 6,
                        "title": "Место регистрации",
                        "field": {
                            "mask": "",
                            "regex": "",
                            "isValid": false,
                            "options": [],
                            "value": "",
                            "type": 1,
                        }
                    }
                ]
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