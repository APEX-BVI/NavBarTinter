var exec = require('cordova/exec');

var BarTinter = {

    statusColor: function (hexString) {
        if (hexString.charAt(0) !== "#") {
            hexString = "#" + hexString;
        }

        if (hexString.length === 4) {
            var split = hexString.split("");
            hexString = "#" + split[1] + split[1] + split[2] + split[2] + split[3] + split[3];
        }

        exec(null, null, "BarTinter", "statusBar", [hexString]);
    },
	
	navigationColor: function (hexString) {
        if (hexString.charAt(0) !== "#") {
            hexString = "#" + hexString;
        }

        if (hexString.length === 4) {
            var split = hexString.split("");
            hexString = "#" + split[1] + split[1] + split[2] + split[2] + split[3] + split[3];
        }

        exec(null, null, "BarTinter", "navigationBar", [hexString]);
    }
};

exec(function (res) {
    if (typeof res == 'object') {
        if (res.type == 'tap') {
            cordova.fireWindowEvent('statusTap');
        }
    }
}, null, "BarTinter", "_ready", []);

module.exports = BarTinter;
