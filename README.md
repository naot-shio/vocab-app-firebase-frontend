
# Vocabulary App frontend

###### 英単語勉強用アプリ
わからない英単語を見つけたとき、単語と文章を登録していきます。

## Demo

https://www.youtube.com/watch?v=W_N0sOeo3OU&feature=youtu.be

## Application URL

https://vocab-d8c5e.firebaseapp.com/

## Backend GitHub URL

https://github.com/naot-shio/vocab-app-firebase-functions

## Main technologies used for frontend

- React
- Redux
- Firebase
- material-ui

## Main functionalities 

- axiosによるサーバーサイドへのリクエスト

- fetchによるgoogle dictionary APIへのリクエスト

  - URL for google dictionary API: https://googledictionaryapi.eu-gb.mybluemix.net/

- jwt authentication

- font awesomeのアイコン

- Reduxによるstateとcontextの管理

- Redux thunkによるdispatch

- ページネーション
  - ページネーションデモ https://youtu.be/IoZ8KyuK6hc

- 登録した文章を問題にして解くことができます。
  - 問題を問いているときのデモ https://www.youtube.com/watch?v=yGk0UaWGbBI

## Requirements

- create-react-app

- react 16.8.6

- redux 4.0.1
