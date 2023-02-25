import * as dotenv from 'dotenv';
import * as Twit from 'twit';

dotenv.config();
const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY || '',
  consumer_secret: process.env.CONSUMER_SECRET || '',
  access_token: process.env.ACCESS_TOKEN || '',
  access_token_secret: process.env.ACCESS_TOKEN_SECRET || '',
  timeout_ms: 60 * 1000,
});

const phrases = [ // Put the phrases that will be presented as a response in this array
  'Hello! How can I help you?',
  'Thank you for contacting us.',
  'I am here to help you. What is your question?',
  'How can I be helpful?',
];

const stream = T.stream('statuses/filter', { follow: 'user_id' }) as Twit.Stream;

stream.on('tweet', function (tweet) {
  if (tweet.user.id_str === 'user_id') { // Insert the Twitter handle of the user to be monitored into user_id
    const status = `@${tweet.user.screen_name} ${phrases[Math.floor(Math.random() * phrases.length)]}`;
    T.post('statuses/update', { status, in_reply_to_status_id: tweet.id_str }, function (err, data, response): void {
      if (err) {
        console.log('Error answering the tweet:', err);
      } else {
        console.log('Tweet successfully answered:', (data as TweetResponse).text);
      }
    });
    
  }
});
