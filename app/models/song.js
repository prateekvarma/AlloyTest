exports.definition = {
    config : {
 // table schema and adapter information
 	"columns":{
 		"song_name":"String",
 		"artist":"String"
 		},
 		"defaults":{
 			"song_name":"-",
 			"artist":"-"
 		},
 		"adapter":{
 			"type":"sql",
 			"collection_name":"songs"
 		}
    },
    extendModel: function(Model) {		
        _.extend(Model.prototype, {
 // Extend, override or implement Backbone.Model 
        });
 
 return Model;
    },
    extendCollection: function(Collection) {		
        _.extend(Collection.prototype, {
 // Extend, override or implement Backbone.Collection 
        });
 
 return Collection;
    }
};