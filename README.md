![LOGO](./src/assets/admin-logo.png)

# JSON-Element-Vue-Admin

## ReadME目录 Catalogue

##### 思路 [Thinking Idea](https://github.com/pl-web/json-element-vue-admin#thinking-idea)

##### JSON配置页面示例 [Page JSON-Config Example](https://github.com/pl-web/json-element-vue-admin#page-json-config-example)

- [Table-Page 表格型页面](https://github.com/pl-web/json-element-vue-admin#table-page)
- [Form-Page 表单型页面](https://github.com/pl-web/json-element-vue-admin#form-page)
- [Tree-Page 树状型页面](https://github.com/pl-web/json-element-vue-admin#tree-page)
- [Multi-Page 复合型页面（主体多组合页面）](https://github.com/pl-web/json-element-vue-admin#multi-page)

## Thinking Idea

​> use json-config file initial table-page form-page tree-page ...  quickly for create base-page ... can expand more page types ...

## Page JSON-Config Example

> can browse the JSON folder

### Table-Page

```json
{
  "table_demo": {
    "type": "TablePage",
    "state": {
      "created": "created",
      "card": {
        "title": "TablePage-Title",
        "buttons": [
          {
            "label": "创建",
            "action": "openCreateDialog",
            "type": "primary"
          }
        ]
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
        "created": [
          "fetch"
        ],
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
      "card": {
        "title": "Create-FormPage-Title",
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
        ]
      },
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

### Form-Page

```json
{
  "form_demo": {
    "type": "FormPage",
    "state": {
      "created": "created",
      "card": {
        "title": "FormPage-Title",
        "buttons": [
          {
            "label": "编辑",
            "action": "openUpdateDialog",
            "type": "primary"
          }
        ]
      },
      "items": [
        {
          "label": "name",
          "prop": "name",
          "type": "Input",
          "state": {
            "value": ""
          }
        }
      ],
      "dialogs": {
        "update": {
          "visible": false,
          "page": "form_demo.update"
        }
      },
      "actions": {
        "created": [ "fetch" ],
        "fetch": [
          {
            "name": "flows/fetch",
            "url": "",
            "method": "get",
            "response": {
              "items[0].state.value": "data.name"
            }
          }
        ],
        "openUpdateDialog": [
          {
            "name": "flows/assign",
            "response": {
              "dialogs.update.visible": true
            }
          }
        ],
        "closeUpdateDialog": [
          {
            "name": "flows/assign",
            "response": {
              "dialogs.update.visible": false
            }
          }
        ]
      }
    }
  },
  "form_demo.update": {
    
  }
}
```

### Tree-Page

```json
{
  "tree_demo": {
    "type": "TreePage",
    "state": {
      "created": "created",
      "card": {
        "title": "TreePage-Title",
        "buttons": []
      },
      "tree": {
        "header": {},
        "nodes": []
      },
      "actions": {

      },
      "dialogs": {
        
      }
    }
  }
}
```

### Multi-Page

```json
[
  {
    "tree_demo": {
      "type": "TreePage",
      "state": {
        "created": "created",
        "card": {
          "title": "TreePage-Title",
          "buttons": []
        },
        "tree": {
          "header": {},
          "nodes": []
        },
        "actions": {
          "created": [ "fetch" ],
          "fetch": [],
          "openCreateDialog": [],
          "closeCreateDialog": [],
          "openUpdateDialog": [],
          "closeUpdateDialog": [],
          "delete": []
        },
        "dialogs": {
          "create": {

          },
          "update": {

          }
        }
      }
    }
  },
  {

  }
]
```
