
var ClearData = {
    clear : function( success, error ) {
        cordova.exec(success, error, "ClearData", "data", [])
    }
};

module.exports = ClearData;
