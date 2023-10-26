/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epcmqoi1cihqmws")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "px4op7gh",
    "name": "verres",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3lfpf10t",
    "name": "materiau",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epcmqoi1cihqmws")

  // remove
  collection.schema.removeField("px4op7gh")

  // remove
  collection.schema.removeField("3lfpf10t")

  return dao.saveCollection(collection)
})
