// Сначало идут абсолютные пути, потом относительные.
const validator = require('validator');
// Оно идёт в папочку node_modules в файл index.js где благодаря export подтягивает объект в код
// var _default = validator;
// exports.default = _default;
// module.exports = exports.default;
// module.exports.default = exports.default;
const greeter = require('./greeter')
greeter('Hello my pussy friend! ヽ(°□° )ノ')
// В том файле, где я хочу поюзать экспортируемую сущность использую
// функцию require() в которую передаём путь того файла который хотим юзать(в строку'')
// расшерение по умолчанию js поэтому можем неуказывать

// Перед инииализацией проекта - лупим имя и почту
// npm config set init.author.name "YOUR_NAME"
// npm config set init.author.email "YOUR_EMAIL"

// После чего, можем инициализировать: npm init --yes (сокращённо -y)

// npm "Script" (in package.json) - отличный способ, заменить сложные команды до одного имени
// В "Script" in package.json можно записывать команды, которые мы бы хотели вызвать из терминала
// Например: команда "hello": будет выполнять "node index.js" Прописываем это и вызываем: npm run hello
// Используя в названии команды ключевое имя start - вызывать return, нет необходимости

// Пакетики.. 
// Для установки пакетов идём на сайт  https://www.npmjs.com/ выбираем "вкусняшку". Ставим через команду npm i validator
// Создаётся файлик package-lock.json который нужем нашему package.json и хранит версии "зависимостей". Нам он нах не нужен.
// Пакетики все хранятся в скрытой папочке   node_modules и её НУЖНО ОБЯЗАТЕЛЬНО игнорировать в Гите!!!
// Для этого отправляем\прописываем имя файлика с слешем node_modules/ в .gitignore

// Внизу файла package.js мы можем лицезреть установленные пакеты в "зависимостях" "dependencies": {"validator": "^13.5.1"}

// Чтобы юзать эти пакеты, из папки node_modules мы можем забирать / require их абсолютным путём.В доках(там где мы брали
// инстолятор пакета на npmjs.com) смотрим какой путь необходимо указать в "require"



