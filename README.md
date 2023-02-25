
# twitterBot

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)

This is a simple Twitter bot built with Node.js and Twit that responds to tweets from a specific user with random messages.
## Features
The bot has the following features:
- Monitors a Twitter user's timeline for new tweets.
- Responds to the tweets from the user with a random message from an array of predefined messages.
- Uses environment variables to securely store API keys and access tokens.
## How to use
#### 1. Clone the repository and navigate to the project directory:
On bash:
```
git clone https://github.com/your-username/twitter-bot.git
cd twitter-bot
```
#### 4. Install the required dependencies:
```
npm install
```

#### 5. Create a .env file (or edit the .env.example) in the project directory and add your Twitter API keys and access tokens:

```
CONSUMER_KEY=consumer_key
CONSUMER_SECRET=consumer_secret
ACCESS_TOKEN=access_token
ACCESS_TOKEN_SECRET=access_token_secret
USER_ID=twitter_handle
```

Replace consumer_key, consumer_secret, access_token, and access_token_secret with your actual Twitter API keys and access tokens, and user_twitter_handle with the Twitter handle of the user you want to monitor.

#### 6. Edit the phrases array in the script.ts file to include the messages you want the bot to randomly select from.


#### 7.  Compile the TypeScript code into JavaScript:
```
tsc script.ts
```
This will create a JavaScript file with the compiled code.

#### 8.  Start the bot:
```
node script.js
```
The bot will now monitor the specified user's timeline for new tweets and respond with a random message.

  

## Conclusion

  

This bot is a simple example of how to build a Twitter bot with Node.js and Twit. You can customize the bot by adding more features or modifying the behavior to fit your specific use case.