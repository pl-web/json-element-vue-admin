![LOGO](./src/assets/admin-logo.png)

# JSON-Element-Vue-Admin

## use json-config file initial table-page form-page tree-page ...


## quickly for create base-page

> Page Json Config Example

##### Table-Page

```json

{
	"table_demo": {
        "type": "TablePage",
        "state": {
            "created": "created",
            "card": {
                "title": "TablePage-Title", // 标题 - title
                "buttons": [
                    {
                        "label": "创建",
                        "action": "openCreateDialog",
                        "type": "primary"
                    }
                ] // 表单型页面全局操作按钮 - card-buttons(global-button)
            },
            "table": {
                "columns": [],
                "data": []
            },
            "pagination": {
                "total": 0,
                "pageSize": 10,
                "layout": "",
                "currentPage": 1
            },
            "dialogs": {
                "create": {
                    "visible": false,
                    "page": "table_demo.create"
                }
            },
            "actions": {
                "created": [ "fetch" ],
                "fetch": [
                    {
                        "name": "flows/fetch",
                        "url": "xxx",
                        "method": "get",
                        "response": {
                            "table.data": "data.results",
                            "pagination.total": "data.count"
                        }
                    }
                ],
                "openCreateDialog": [
                    {
                        "name": "flows/assgin",
                        "response": {
                            "dialogs.create.visible": true
                        }
                    }
                ],
                "closeCreateDialog": [
                    {
                        "name": "flows/assign",
                        "response": {
                            "dialogs.create.visible": false
                        }
                    }
                ]
            }
        }
    },
    "table_demo.create": {
        "type": "FormPage",
        "state": {
            "items": [
                {
                    "prop": "name",
                    "label": "姓名",
                    "type": "Input",
                    "state": {
                        "value": ""
                    }
                }
            ],
            "buttons": [
                {
                    "label": "取消",
                    "action": "table_demo.closeCreateDialog"
                },
                {
                    "label": "确认",
                    "action": "create",
                    "type": "primary"
                }
            ],
            "actions": {
                "create": [
                    {
                        "name": "flows/update",
                        "url": "xxx",
                        "method": "post",
              			"request": {
                            "name": "items[0].state.value"
                        }
                    },
                    "table_demo.closeCreateDialog",
                    "table_demo.fetch"
                ]
            }
        }
    }
}
```

##### Form-Page

```json
{
	"": ""
}
```

##### Tree-Page

```json
{
    "": ""
}
```