
# Star-wars-app

Это веь-приложение, которое показывает описание персонажей, планет, и космических кораблей из вселенной star-wars.




## Run Locally

скопируйте проект 

```bash
  git clone https://link-to-project
```



```bash
  cd nfac-app-2
  cd backend
```

Установите пакеты

```bash
  npm install
```
Создайте файл .env и напишите порт на котором хотите установить сервер PORT=__port__ (реклмендую 3500)

Запустите сервер

```bash
  npm run dev
```
Далее
```bash
cd ..
cd frontend
cd my-app
npm install
npm start dev
```



## Tech Stack

**Client:** React, bootstrap

**Server:** Node, Express


## Things to improve

- Нужно улучшить клиентскую часть
- Данные на mongodb есть, но когда при написании запросов появляются ошибки. Нужно их исправить + создать датасет где будет обширная информация про вселенную 
- когда клиентская часть делает запросы на бэк, почему-то клиентская часть повторяет некоторые запросы, то выходит в то что на странице появляется одна и таже информация 