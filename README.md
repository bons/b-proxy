# b-proxy

## Getting Started
Create the file `routes.json` in the root directory. This file indicates the url and the port to forward the request.
If there is no match the proxy redirects to the last route, in this case "example.com"

```JSON
{
  "*.other-example.com": 3201,
  "sub.example.com": 3101,
  "example.com": 3002
}

```

Create the file `config.js` in the root directory of the project

```javascript
'use strict';

//Configuration file

module.exports = {
  port: 8080 //This overrides process.env.PORT
};
```
## License
Copyright (c) 2015 BONS  
Licensed under the MIT license.
