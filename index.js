var Twitter   = require('twitter');
var Emoji     = require('node-emoji');
var Request   = require('request');

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});


Request('https://www.kimonolabs.com/api/96pg5di8', function (error, response, body) {
    if (!error && response.statusCode == 200){

      var content = JSON.parse(body.trim());

      var bookTitle = content.results.collection1[0].property1;

      client.post('statuses/update', {status: Emoji.get('blue_book') + bookTitle + ' https://www.packtpub.com/packt/offers/free-learning'},  function(error, tweet, response){
        if(error) throw error;
        console.log(tweet);
      });

    }
});
