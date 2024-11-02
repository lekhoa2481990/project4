
1.FE
### `npm install`
### `npm start`

2.Backend
### create todo
curl 'https://c3bhpv6ixd.execute-api.us-east-1.amazonaws.com/lk-dev/todos' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: en-US,en;q=0.9,vi;q=0.8' \
  -H 'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImxRN3Y0MENiMlNXbm95V2xrWXczbyJ9.eyJpc3MiOiJodHRwczovL2Rldi15dGw3dnY1M2p1djBhYnhvLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDEwMjA5MzEzNzM3NTEyMDExMzYyMiIsImF1ZCI6WyJodHRwczovL2Rldi15dGw3dnY1M2p1djBhYnhvLnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaHR0cHM6Ly9kZXYteXRsN3Z2NTNqdXYwYWJ4by51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNzMwNTY1MjI2LCJleHAiOjE3MzA2NTE2MjYsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJhenAiOiJMTjgyak42YkdkNzIzTllNSHhJM2docU1Kc1ZQT3FXVyJ9.U0OUO7GAICqws8R3mZFWI6YMTKl7Err8uF5i7Eka-6smyHtR12-n4GZfQCEEy8P8OLgDgubPBg542ZK1NN8MxL00hhkDbLiQxcSnX5x1QLd__Y4budotPFyT0LsYdZ5FzYRvgTLX31sFSxt2CEi3gS6M0DhY33SrHMz80sx6BCv1Kfe44qpP9vL_-xGhxIhxOOEnNEWTW-AdcaOeI8_G8o98DCM6Iazwogj54C57QU_qWKAWuKxnctlEC_Ji_KjXSsFH7NWFp9qftt27VLLxdwRzd2jlSd2Q4TbrqZC-dzmk-ArwbrbM2Jqi6o59dTKTtCbSv4KvibUbZM5fFKAEdQ' \
  -H 'content-type: application/json' \
  -H 'origin: http://localhost:3006' \
  -H 'priority: u=1, i' \
  -H 'referer: http://localhost:3006/' \
  -H 'sec-ch-ua: "Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Windows"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: cross-site' \
  -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36' \
  --data-raw '{"name":"task3","dueDate":"2024-11-09"}'

  ### update todo
  curl 'https://c3bhpv6ixd.execute-api.us-east-1.amazonaws.com/lk-dev/todos/1cbcd085-d47a-420b-b613-5ae664e9447e' \
  -X 'PATCH' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: en-US,en;q=0.9,vi;q=0.8' \
  -H 'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImxRN3Y0MENiMlNXbm95V2xrWXczbyJ9.eyJpc3MiOiJodHRwczovL2Rldi15dGw3dnY1M2p1djBhYnhvLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDEwMjA5MzEzNzM3NTEyMDExMzYyMiIsImF1ZCI6WyJodHRwczovL2Rldi15dGw3dnY1M2p1djBhYnhvLnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaHR0cHM6Ly9kZXYteXRsN3Z2NTNqdXYwYWJ4by51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNzMwNTY1MjE4LCJleHAiOjE3MzA2NTE2MTgsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJhenAiOiJMTjgyak42YkdkNzIzTllNSHhJM2docU1Kc1ZQT3FXVyJ9.V2OpSwfb7-uwuunG4LCKjOB6vvRqxdS_NFvp5XfkvE8_jG2c3pCGpAKVoNzIMjQMap5tz4RefJh5vQa-NtY-_zK9W5M3u2kg9ksY_UJd40V3VzzMy_f9CGiHGXxCok3VHPe3IHmKbrR4IXbZGeNXfBHEbF3g-24VU5WbY1WCjqQZolQXV0N48YRsFmeS-gj5CEvcvPTkPYT7zbHyOwyhy9qQzRaGzGj0jfisDXwUnX1mvD8Nls2U6F-woWBnbhlleAs5d2a0KClQGr91OQI_5twipWOh2ecqg-YxjhrHSl20z0OvKI1tGX5jG384Q9ntpZ55Gq-7JevRU70HnnYApw' \
  -H 'content-type: application/json' \
  -H 'origin: http://localhost:3006' \
  -H 'priority: u=1, i' \
  -H 'referer: http://localhost:3006/' \
  -H 'sec-ch-ua: "Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Windows"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: cross-site' \
  -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36' \
  --data-raw '{"name":"task1","dueDate":"2024-11-09","done":false}'

  ### delete todo
  curl 'https://c3bhpv6ixd.execute-api.us-east-1.amazonaws.com/lk-dev/todos/26350fa8-237c-45ea-b5d7-b4120c733fe9' \
  -X 'DELETE' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: en-US,en;q=0.9,vi;q=0.8' \
  -H 'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImxRN3Y0MENiMlNXbm95V2xrWXczbyJ9.eyJpc3MiOiJodHRwczovL2Rldi15dGw3dnY1M2p1djBhYnhvLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDEwMjA5MzEzNzM3NTEyMDExMzYyMiIsImF1ZCI6WyJodHRwczovL2Rldi15dGw3dnY1M2p1djBhYnhvLnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaHR0cHM6Ly9kZXYteXRsN3Z2NTNqdXYwYWJ4by51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNzMwNTY1MjE4LCJleHAiOjE3MzA2NTE2MTgsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJhenAiOiJMTjgyak42YkdkNzIzTllNSHhJM2docU1Kc1ZQT3FXVyJ9.V2OpSwfb7-uwuunG4LCKjOB6vvRqxdS_NFvp5XfkvE8_jG2c3pCGpAKVoNzIMjQMap5tz4RefJh5vQa-NtY-_zK9W5M3u2kg9ksY_UJd40V3VzzMy_f9CGiHGXxCok3VHPe3IHmKbrR4IXbZGeNXfBHEbF3g-24VU5WbY1WCjqQZolQXV0N48YRsFmeS-gj5CEvcvPTkPYT7zbHyOwyhy9qQzRaGzGj0jfisDXwUnX1mvD8Nls2U6F-woWBnbhlleAs5d2a0KClQGr91OQI_5twipWOh2ecqg-YxjhrHSl20z0OvKI1tGX5jG384Q9ntpZ55Gq-7JevRU70HnnYApw' \
  -H 'origin: http://localhost:3006' \
  -H 'priority: u=1, i' \
  -H 'referer: http://localhost:3006/' \
  -H 'sec-ch-ua: "Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Windows"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: cross-site' \
  -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'

  ### upload image
  curl 'https://c3bhpv6ixd.execute-api.us-east-1.amazonaws.com/lk-dev/todos/9f7412bd-e973-44e1-a226-2bdc957aeeeb/attachment' \
  -X 'OPTIONS' \
  -H 'accept: */*' \
  -H 'accept-language: en-US,en;q=0.9,vi;q=0.8' \
  -H 'access-control-request-headers: authorization,content-type' \
  -H 'access-control-request-method: POST' \
  -H 'origin: http://localhost:3006' \
  -H 'priority: u=1, i' \
  -H 'referer: http://localhost:3006/' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: cross-site' \
  -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'

3.evidence
### Refer the evidence folder
