/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "nx1e2hw1kabgnxa",
    "created": "2023-10-26 12:38:43.576Z",
    "updated": "2023-10-26 12:38:43.576Z",
    "name": "PrixTotalparUser",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "id0t6n9b",
        "name": "prix_total",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "otdfgekr",
        "name": "name",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id, SUM(prix) as prix_total, name FROM Lunette, users WHERE users.id = Lunette.relationUser GROUP BY relationUser"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nx1e2hw1kabgnxa");

  return dao.deleteCollection(collection);
})
