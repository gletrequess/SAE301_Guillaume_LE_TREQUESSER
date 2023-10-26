/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("49xhspzuogoc3bl");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "49xhspzuogoc3bl",
    "created": "2023-10-24 11:10:43.961Z",
    "updated": "2023-10-24 11:10:43.961Z",
    "name": "Materiau",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wfyiijil",
        "name": "libelle_materiau",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
