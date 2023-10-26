/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "56cfpsgf6u3kj0y",
    "created": "2023-10-26 12:37:19.301Z",
    "updated": "2023-10-26 12:37:19.301Z",
    "name": "NombreLunettes",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3ug9mpjs",
        "name": "NombreLunettes",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id, COUNT(Lunette.id) as NombreLunettes FROM Lunette"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("56cfpsgf6u3kj0y");

  return dao.deleteCollection(collection);
})
