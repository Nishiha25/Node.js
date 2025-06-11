const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts/1', res => {
  let data = '';

  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    console.log('Response:', JSON.parse(data));
  });
}).on('error', err => {
  console.error('Error:', err);
});
