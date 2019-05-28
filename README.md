# roundoff
`This moudule simply roundoff the floating number to the decimal place you supplied.`

## Installation
```bash
npm install --save roundoff
```
## Usage
```js
const RoundOff = require('roundoff');

const roundValue = RoundOff(4.5678, 3);
console.log(roundValue);
// 4.568 should be the rounded value
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)