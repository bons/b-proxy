var httpProxy = require('http-proxy'),
	http = require('http'),
	port = process.env.PORT || 3000,
	routesSetup = require("./routes.json")
;

var proxy = httpProxy.createProxyServer();

http.createServer(function(req, res)
{
	var matched = false;

	proxy.on('error', function(e)
	{
	  console.log(e);
	});

	for(var routes in routesSetup)
	{
		var reg = new RegExp("^"+routes.replace("*.",".*"));

		if(req.headers.host && reg.test(req.headers.host.replace(":" + port, "")))
		{
			matched = true;
			return proxy.web(req, res, {
				target: 'http://127.0.0.1:'+routesSetup[routes]
			});
		}
  }

	if(!matched)
	{
		return proxy.web(req, res, {
			target: 'http://127.0.0.1:'+routesSetup[routes]
		});
	}

}).listen(port);
