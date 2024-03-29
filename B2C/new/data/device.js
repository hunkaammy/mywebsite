var app = angular.module('plunker', []);

app.controller('MainSam', function ($scope, useragent) {
	$scope.useragent = useragent.get();
	$scope.appCodeName = useragent.appName();
	$scope.browserName = useragent.browser();
	$scope.platform = useragent.platform();
	$scope.appVersion = useragent.appVersion();
	$scope.version = useragent.version();
	$scope.versiontrue = useragent.version(true);
	$scope.OS = useragent.OS();
	$scope.device = useragent.device();
	$scope.cookie = useragent.cookie();
	$scope.lang = useragent.lang();
	$scope.touch = useragent.touch();
	$scope.online = useragent.online();
	$scope.screen = useragent.screen();
	$scope.pixelratio = useragent.pixelratio();
});

var n = navigator,
	Agent = n.userAgent,
	CodeName = n.appCodeName,
	appVersion = n.appVersion.substr(0, n.appVersion.indexOf(' ')),
	browserName = n.appName,
	platform = n.platform,
	cookie = n.cookieEnabled,
	language = n.language,
	online = n.onLine,
	fullVersion = '' + parseFloat(n.appVersion),
	BrMajorVersion = parseInt(n.appVersion, 10),
	OffsetName, objOffsetVersion, ix,
	OSname = 'unknownOS',
	touch = Modernizr.touch,
	width = (screen.width) ? screen.width : '',
	height = (screen.height) ? screen.height : '',
	screensize = '',
	pixelratio = window.devicePixelRatio;

// In Chrome
if ((objOffsetVersion = Agent.indexOf("Chrome")) != -1) {
	browserName = "Chrome";
	fullVersion = Agent.substring(objOffsetVersion + 7);
}
// In Microsoft internet explorer
else if ((objOffsetVersion = Agent.indexOf("MSIE")) != -1) {
	browserName = "Microsoft Internet Explorer";
	fullVersion = Agent.substring(objOffsetVersion + 5);
}
// In Firefox
else if ((objOffsetVersion = Agent.indexOf("Firefox")) != -1) {
	browserName = "Firefox";
}
// In Safari
else if ((objOffsetVersion = Agent.indexOf("Safari")) != -1) {
	browserName = "Safari";
	fullVersion = Agent.substring(objOffsetVersion + 7);
	if ((objOffsetVersion = Agent.indexOf("Version")) != -1) fullVersion = Agent.substring(objOffsetVersion + 8);
}
// For other browser "name/version" is at the end of userAgent
else if ((OffsetName = Agent.lastIndexOf(' ') + 1) < (objOffsetVersion = Agent.lastIndexOf('/'))) {
	browserName = Agent.substring(OffsetName, objOffsetVersion);
	fullVersion = Agent.substring(objOffsetVersion + 1);
	if (browserName.toLowerCase() == browserName.toUpperCase()) {
		browserName = navigator.appName;
	}
}
// trimming the fullVersion string at semicolon/space if present
if ((ix = fullVersion.indexOf(";")) != -1) fullVersion = fullVersion.substring(0, ix);
if ((ix = fullVersion.indexOf(" ")) != -1) fullVersion = fullVersion.substring(0, ix);
BrMajorVersion = parseInt('' + fullVersion, 10);
if (isNaN(BrMajorVersion)) {
	fullVersion = '' + parseFloat(navigator.appVersion);
	BrMajorVersion = parseInt(navigator.appVersion, 10);
}

//OS
if (appVersion.indexOf("Win") != -1) {
	OSname = 'windowsOS';
}
if (appVersion.indexOf("Mac") != -1) {
	OSname = 'macOS';
}
if (appVersion.indexOf("X11") != -1) {
	OSname = 'unixOS';
}
if (appVersion.indexOf("Linux") != -1) {
	OSname = 'linuxOS';
}

//Device
var mobile = {
	Android: function () {
		return Agent.match(/Android/i);
	},
	BlackBerry: function () {
		return Agent.match(/BlackBerry/i);
	},
	iOS: function () {
		return Agent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return Agent.match(/Opera Mini/i);
	},
	Windows: function () {
		return Agent.match(/IEMobile/i);
	},
	any: function () {
		return (mobile.Android() || mobile.BlackBerry() || mobile.iOS() || mobile.Opera() || mobile.Windows());
	}
};

//Screen
screensize += '' + width + " x " + height;

app.factory('useragent', function () {

	return {
		get: function () {
			return Agent;
		},

		appName: function () {
			return CodeName;
		}, 

		browser: function () {
			return browserName;
		},

		appVersion: function () {
			return appVersion;
		},

		platform: function () {
			return platform;
		},

		version: function (v) {
			return v ? fullVersion : BrMajorVersion;
		},

		OS: function () {
			return OSname;
		},

		cookie: function () {
			return cookie;
		},

		lang: function () {
			return language;
		},

		online: function () {
			return online;
		},

		touch: function () {
			return touch;
		},

		screen: function () {
			return screensize;
		},

		pixelratio: function () {
			return pixelratio;
		},

		device: function () {
			return mobile.any() ? mobile.any().toString() : 'Desktop';
		}
	}

})