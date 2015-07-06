/**
* Templates
* An object with our html templates for easy access
*/
module.exports = {
	"components": {
		"adblock-parse": require("./../templates/components/adblock-parse.html"),
		"header": require("./../templates/components/header.html"),
		"json": require("./../templates/components/json.html"),
		"json-query": require("./../templates/components/json-query.html"),
		"query-json": require("./../templates/components/query-json.html"),
		"redirect-trace": require("./../templates/components/redirect-trace.html"),
		"traces": require("./../templates/components/traces.html"),
		"uri-dencoder": require("./../templates/components/uri-dencoder.html")
	},
	"modules": {
		"dashboard": require("./../templates/modules/dashboard.html")
	}
}