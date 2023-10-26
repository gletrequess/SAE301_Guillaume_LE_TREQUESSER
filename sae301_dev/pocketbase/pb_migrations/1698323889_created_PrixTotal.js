/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ciakr4at55yq6p1",
    "created": "2023-10-26 12:38:09.283Z",
    "updated": "2023-10-26 12:38:09.283Z",
    "name": "PrixTotal",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5bvg6kje",
        "name": "prix_total",
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id, SUM(prix) as prix_total FROM Lunette"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ciakr4at55yq6p1");

  return dao.deleteCollection(collection);
})
