# Playnix for Browsers
[![npm][npm]][npm-url]
[![node][node]][node-url]
[![size][size]][size-url]


### playnix.init
Initializes the playnix client.
```html
playnix.init(API_KEY, { debug:Boolean });
```
API_KEY: application api key <br/>
options: configurations <br/>
options.debug: logger debug mode. True will display errors in console.


### lognetic.writeException
Sends a error exception.
```html
lognetic.writeException(error, data);
```
error (required): a JavaScript Error object <br/>
data: additional data to send(must contains values of string, number, or boolean)


### lognetic.writeMessage
Sends a custom info-level message.
```html
lognetic.writeMessage(message, data);
```
message (required): the custom message to log <br/>
data: additional data to send(must contains values of string, number, or boolean)

### playnix.writeMessage
Sends a custom info-level message.
```html
playnix.writeMessage(message);
```
message (required): the custom message to log <br/>
data argument cannot be passed.


### lognetic.setMetaContext
Assigns custom meta data that will be sent along with each exception.
```html
lognetic.setMetaContext(data);
```
data (required): custom meta data, can be user to store user details

### lognetic.setAppVersion
Allows you to set your application version.
```html
lognetic.setAppVersion(version);
```
version (required): application version as string



## License

[BSD 3-Clause](./LICENSE)

[npm]: https://img.shields.io/npm/v/playnix-browser.svg
[npm-url]: https://www.npmjs.com/package/playnix-browser
[node]: https://img.shields.io/node/v/playnix-browser.svg
[node-url]: https://nodejs.org
[size]: https://packagephobia.now.sh/badge?p=playnix-browser
[size-url]: https://packagephobia.com/result?p=playnix-browser