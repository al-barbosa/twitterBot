interface TweetResponse {
  text: string;
  id_str: string;
  user: {
    screen_name: string;
  };
  in_reply_to_status_id_str: string | null;
  created_at: string;
  entities: {
    hashtags: any[];
    symbols: any[];
    user_mentions: any[];
    urls: any[];
  };
}