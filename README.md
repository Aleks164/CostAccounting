# CostAccounting

"Приложение для учета расходов"

На странице настроек можно заводить категории, и у каждой могут быть подкатегории (вложенность категорий можно ограничить 2, но, если очень хочется, то можно и не ограничивать) В каждую категорию или подкатегорию на определенную дату можно вносить сумму которую пользователь потратил, если в подкатегории есть расходы, то они должны учитываться и в категории.

Например: Категория "Машина" имеет 2 подкатегории:

"Сервис"
"Заправка"
Если на одно и тоже число на "сервис" потрачено 20 единиц, а на "заправку" 10 единиц, то суммарные затраты на это число для категории "машина" должны быть 20 + 10 =30 единиц. Если на это число пользователь не выбрал подкатегорию и занес затраты 5 единиц просто в категорию “машина”, то эти затраты должны тоже учитываться и тогда суммарные затраты - 20 + 10 + 5 = 35 единиц  

Нужно иметь возможность выводить расходы за день за неделю за месяц и за произвольный промежуток времени вывод таблицей и диаграммой   

Хранение данных должно быть сделано в базе Firebase. База должна быть независимой для каждого пользователя (поддержка авторизации через react-firebase)  

Ожидаемые страницы:  

главная (с заглушкой для не зарегистрированных пользователей)  
о проекте  
страница логина / регистрации  
Остальные страницы должны быть доступны после авторизации:  

настройки  
главная (где можно добавлять доходы и расходы, просматривать данные за последнюю неделю)
просмотр данных за неделю/месяц/произвольный период. Просмотр в виде таблицы или диаграммы - период и тип просмотра должен отображаться на урл, чтобы состояние можно было сохранить  
При попытке входа на страницу без регистрации должен быть редирект на страницу логина  

Задачи

приложение поддерживает авторизацию  
приложение поддерживает создание категорий и под-категорий  
приложение поддерживает ввод данных  
приложение поддерживает просмотр статистики  
приложение хранит данных отдельно для каждого пользователя  
покрытие кода тестами от 60%  
приложение доступно для просмотра и проверки на github pages  