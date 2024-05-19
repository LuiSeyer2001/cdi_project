/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4tecogkdgfdpaxl",
    "created": "2024-05-19 01:10:34.925Z",
    "updated": "2024-05-19 01:10:34.925Z",
    "name": "medicalBackgrounds",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "m0axxcma",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "upe12jma",
        "name": "description",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4tecogkdgfdpaxl");

  return dao.deleteCollection(collection);
})
