/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "epcmqoi1cihqmws",
    "created": "2023-10-24 11:11:54.606Z",
    "updated": "2023-10-24 11:11:54.606Z",
    "name": "Lunette",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "j81ko8ju",
        "name": "anti_bleu",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "okcslpbu",
        "name": "couleur_cadre",
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
        "id": "zzjjlx01",
        "name": "couleur_branches",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("epcmqoi1cihqmws");

  return dao.deleteCollection(collection);
})
