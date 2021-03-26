# students-list-app-client

Клиентская часть приложения, использует REST API [students-list-app-api](https://github.com/akzhar/students-list-app-api) для работы с БД

URL клиентской части: https://students-list-app-client.herokuapp.com

<a id="up"></a>

## Содержание
- [1. Описание приложения](#1)
- [2. Деплой приложения](#2)
	- [2.1 Собираем приложение](#2.1)
	- [2.2 Разворачиваем клиентскую часть на Heroku](#2.2)
- [3. Команды для работы с приложением из консоли в локальном репозитории](#3)
- [4. Засыпание приложения на Heroku](#4)
	- [4.1 Проблема](#4.1)
	- [4.2 Устраняем проблему](#4.2)
	- [4.3 Проверяем результат](#4.3)
  

<a  id="1"></a>

## <a href="#up">↑</a> 1 Описание приложения

  Веб-приложение содержит 2 экрана:
1. Экран со студентами, который содержит:
	- список студентов (фото, ФИО, специальность, группу, возраст, рейтинг, любимый цвет)
	- кнопку создания нового студента
	- кнопку удаления студента
	- поле поиска студента по ФИО
	- переключатель сортировки по ФИО, рейтингу, возрасту и любимому цвету
2. Экран создания нового студента, который содержит форму для ввода данных о новом студенте

Интерфейс реализован по [этим дизайнам](https://www.figma.com/file/ZK0YeZ8CfQLBQuGE1AMKYB)
 
<a  id="2"></a>

## <a href="#up">↑</a> 2 Деплой приложения

<a  id="2.1"></a>

### <a href="#up">↑</a> 2.1 Собираем приложение

1. Делаем форк данного репозитория и клонируем проект к себе на ПК: `git clone git@github.com:<ваш аккаунт на Github>/students-list-app-client.git`
2. Открываем репозиторий проекта у себя на ПК, находим файл `webpack.config.js` и удаляем в нем строчку `devtool:  'source-map'`
	![step visualization](https://raw.githubusercontent.com/akzhar/readme-demos-media/main/students-list-app/client/3.png)

3. В консоли переходим в директорию проекта и запускаем сборку клиентской части командой `npm run build`
	![step visualization](https://raw.githubusercontent.com/akzhar/readme-demos-media/main/students-list-app/client/4.png)

4. В папке `public` теперь находятся все файлы, готовые для деплоя клиентской части приложения на Heroku
	![step visualization](https://raw.githubusercontent.com/akzhar/readme-demos-media/main/students-list-app/client/5.png)

<a  id="2.2"></a>

### <a href="#up">↑</a> 2.2 Разворачиваем клиентскую часть на Heroku

1. Регистрируемся на [heroku.com](https://www.heroku.com) → `Create free account`
2. После регистрации нажимаем кнопку `New` → `Creat new app`
	![step visualization](https://raw.githubusercontent.com/akzhar/readme-demos-media/main/students-list-app/client/1.png)

3. Даем приложению имя
	![step visualization](https://raw.githubusercontent.com/akzhar/readme-demos-media/main/students-list-app/client/2.png)

4. Устанавливаем [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), 

5. Копируем все содержимое папки `public` в новую папку за пределами репозитория `students-list-app-client`
	![step visualization](https://raw.githubusercontent.com/akzhar/readme-demos-media/main/students-list-app/client/6.png)

6. В консоли переходим в директорию, куда было скопировано содержимое папки `public` с помощью команды `cd <путь до папки>/` и выполняем команду `heroku login` (откроет окно а браузере, в котором нужно будет подтвердить авторизацию)

7. Подтверждаем авторизацию в браузере и возвращаемся в консоль, выполняем команду `git init`
	![step visualization](https://raw.githubusercontent.com/akzhar/readme-demos-media/main/students-list-app/client/7.png)

8. Затем команду `heroku git:remote -a <имя приложения на Heroku>`

![step visualization](https://raw.githubusercontent.com/akzhar/readme-demos-media/main/students-list-app/client/8.png)

9. Далее последовательно выполняем команды `git add .`, `git commit -m "<commit name>"`, `git push heroku master``
	![step visualization](https://raw.githubusercontent.com/akzhar/readme-demos-media/main/students-list-app/client/9.png)
	![step visualization](https://raw.githubusercontent.com/akzhar/readme-demos-media/main/students-list-app/client/10.png)
	![step visualization](https://raw.githubusercontent.com/akzhar/readme-demos-media/main/students-list-app/client/11.png) 

10. Убеждаемся, что деплой был выполнен успешно: запускаем логи Heroku командой `npm run logs` ИЛИ, открыв логи Heroku приложения в браузере: сделать это можно, нажав на `More` → `View logs`

![step visualization](https://raw.githubusercontent.com/akzhar/readme-demos-media/main/students-list-app/client/12.png)

![step visualization](https://raw.githubusercontent.com/akzhar/readme-demos-media/main/students-list-app/api/22.png)

11. В случае, если наше приложение не запустилось, сделать это можно вручную:
	- в консоли командой `npm run app-on`
	- в браузере, открыв свое приложение и перейдя в раздел `Resources`, там есть тумблер для включения / выключения приложения

	![step visualization](https://raw.githubusercontent.com/akzhar/readme-demos-media/main/students-list-app/client/13.png)
	![step visualization](https://raw.githubusercontent.com/akzhar/readme-demos-media/main/students-list-app/client/14.png)
	![step visualization](https://raw.githubusercontent.com/akzhar/readme-demos-media/main/students-list-app/client/15.png)

<a  id="3"></a>

## <a href="#up">↑</a> 3. Команды для работы с приложением из консоли в локальном репозитории

- `npm run logs` - открыть логи приложения прямо в консоли (также логи можно смотреть тут: `https://dashboard.heroku.com/apps/<имя приложения на Heroku>/logs`)
- `npm run app-off` - остановка приложения на Heroku
- `npm run app-on` - запуск приложения на Heroku

<a  id="4"></a>

## <a href="#up">↑</a> 4. Засыпание приложения на Heroku

Есть отличная [статья на javarush.ru](https://javarush.ru/groups/posts/1987-malenjhkie-khitrosti-s-heroku), которая описывает проблему и пути ее решения.

<a  id="4.1"></a>

### <a href="#up">↑</a> 4.1 Проблема

1. При регистрации бесплатного Heroku аккаунта вам дается 550 [free dyno hours](https://devcenter.heroku.com/articles/free-dyno-hours) в месяц. По сути это часы активности вашего приложения.
2. При отсутствии активности на протяжении 30 минут приложение на Heroku будет "засыпать. При первом обращении к нему оно "проснется", но время первого отклика будет сильно дольше обычного.
	![step visualization](https://raw.githubusercontent.com/akzhar/readme-demos-media/main/students-list-app/api/30.png)

<a  id="4.2"></a>

### <a href="#up">↑</a> 4.2 Устраняем проблему

1. Чтобы увеличить кол-во `free dyno hours` - в настройках аккаунта на Heroku (`Account settings` → `Billing`) нужно привязать банковскую карту
2. Чтобы победить "засыпание" можно воспользоваться одним из сервисов пинговальщиков, например [Kaffeine](http://kaffeine.herokuapp.com/). Сервис будет пинговать наше приложение раз в 30 минут, не давая ему "спать"
	![step visualization](https://raw.githubusercontent.com/akzhar/readme-demos-media/main/students-list-app/client/16.png)

<a  id="4.3"></a>

### <a href="#up">↑</a> 4.3 Проверяем результат

- Открываем логи и убеждаемся, что приложение Kaffeine "разбудило" наше приложение
	![step visualization](https://raw.githubusercontent.com/akzhar/readme-demos-media/main/students-list-app/api/32.png)
