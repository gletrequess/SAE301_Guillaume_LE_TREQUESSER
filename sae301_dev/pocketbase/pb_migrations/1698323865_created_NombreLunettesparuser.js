/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vuoazgzqmhhw92u",
    "created": "2023-10-26 12:37:45.638Z",
    "updated": "2023-10-26 12:37:45.638Z",
    "name": "NombreLunettesparuser",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hupnv2uh",
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
      },
      {
        "system": false,
        "id": "t4bceoci",
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id, COUNT(Lunette.id) as NombreLunettes, name FROM Lunette, users WHERE users.id = Lunette.relationUser GROUP BY relationUser"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vuoazgzqmhhw92u");

  return dao.deleteCollection(collection);
})
