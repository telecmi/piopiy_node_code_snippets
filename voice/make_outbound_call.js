const Piopiy = require('piopiy');
const piopiy = new Piopiy(YOUR_APP_ID, 'YOUR_APP_SECRET');

piopiy.voice.make(
     TO_NUMBER,
     FROM_NUMBER,
     'YOUR_ANSWER_URL'
).then((result) => {

}).catch((error) => {

});
