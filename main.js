/**
 * ============================================================================
 * ВСТРОЕННАЯ БАЗА ДАННЫХ (INITIAL_DB)
 * ============================================================================
 * Вшитые стартовые данные для корректной проверки и демонстрации.
 */
const INITIAL_DB = {"_v":5,"_c":{"categories":5,"nomenclature":8,"warehouses":2,"counterparties":7,"services":4,"prices":8,"promotions":3,"bank_accounts":3,"articles":6,"goods_receipt":5,"goods_sales":7,"goods_transfer":2,"goods_return":3,"payments":6,"repair_intake":4,"repair_release":3,"stock_balance":10,"sales_register":7,"finance_ops":10,"price_history":5,"warranty_periods":6,"client_preferences":6,"product_ratings":6,"store_orders":1},"_l":[{"ts":"2026-05-10T09:00:00.000Z","u":"Администратор","a":"Вход","d":""},{"ts":"2026-05-10T09:10:00.000Z","u":"Администратор","a":"Добавление","d":"«Номенклатура» #1"},{"ts":"2026-05-12T10:30:00.000Z","u":"Менеджер","a":"Проведение","d":"«Поступление» #1"},{"ts":"2026-05-15T14:20:00.000Z","u":"Менеджер","a":"Проведение","d":"«Продажа» #1"},{"ts":"2026-05-20T11:05:00.000Z","u":"Администратор","a":"Новый онлайн-заказ","d":"#SL-000001 на сумму 54990 ₽"}],"_h":[{"ts":"2026-05-10T09:10:00.000Z","u":"Администратор","tbl":"nomenclature","id":1,"act":"Создание","ch":""},{"ts":"2026-05-12T10:30:00.000Z","u":"Менеджер","tbl":"goods_receipt","id":1,"act":"Проведение","ch":"qty=10"},{"ts":"2026-05-15T14:20:00.000Z","u":"Менеджер","tbl":"goods_sales","id":1,"act":"Проведение","ch":"qty=1"},{"ts":"2026-05-22T16:00:00.000Z","u":"Администратор","tbl":"prices","id":3,"act":"Изменение","ch":"value: 15990 → 14990"}],"_rh":"Hxga029osmi7a","categories":[{"_id":1,"name":"Наушники"},{"_id":2,"name":"Колонки"},{"_id":3,"name":"Усилители"},{"_id":4,"name":"Микрофоны"},{"_id":5,"name":"Аксессуары"}],"nomenclature":[{"_id":1,"name":"Sennheiser HD 660S2","article":"SL-000001","category":"Наушники","unit":"шт","description":"Открытые наушники высокого разрешения, импеданс 300 Ом"},{"_id":2,"name":"Beyerdynamic DT 900 Pro X","article":"SL-000002","category":"Наушники","unit":"шт","description":"Студийные мониторные наушники для записи и сведения, 48 Ом"},{"_id":3,"name":"Audio-Technica ATH-M50x","article":"SL-000003","category":"Наушники","unit":"шт","description":"Профессиональные студийные мониторные наушники, 38 Ом"},{"_id":4,"name":"Yamaha HS8","article":"SL-000004","category":"Колонки","unit":"шт","description":"Студийный монитор 8 дюймов, 75 Вт"},{"_id":5,"name":"KEF LS50 Meta","article":"SL-000005","category":"Колонки","unit":"пара","description":"Полочные колонки hi-end класса с технологией Metamaterial"},{"_id":6,"name":"Marantz PM7000N","article":"SL-000006","category":"Усилители","unit":"шт","description":"Интегральный стереоусилитель со стримингом HEOS, 2×60 Вт"},{"_id":7,"name":"Shure SM7B","article":"SL-000007","category":"Микрофоны","unit":"шт","description":"Динамический микрофон для подкастов и вокала, -59 дБ"},{"_id":8,"name":"Кабель XLR 3м","article":"SL-000008","category":"Аксессуары","unit":"метр","description":"Профессиональный балансный кабель XLR-XLR, позолоченные контакты"}],"warehouses":[{"_id":1,"name":"Основной склад","address":"г. Москва, ул. Складская, 4, стр. 2"},{"_id":2,"name":"Шоурум","address":"г. Москва, Тверская ул., 18, 2 этаж"}],"counterparties":[{"_id":1,"name":"ООО «АудиоИмпорт»","type":"Поставщик","phone":"+7 (495) 100-20-30","email":"supply@audioimport.ru"},{"_id":2,"name":"ИП Громов Е.С.","type":"Поставщик","phone":"+7 (495) 200-30-40","email":"gromov@parts.ru"},{"_id":3,"name":"Иван Петров","type":"Клиент","phone":"+7 (900) 111-22-33","email":"petrov@mail.ru"},{"_id":4,"name":"Анна Лисицына","type":"Клиент","phone":"+7 (901) 222-33-44","email":"lisicyna@gmail.com"},{"_id":5,"name":"Сергей Морозов","type":"Клиент","phone":"+7 (902) 333-44-55","email":"morozov@yandex.ru"},{"_id":6,"name":"ООО «СтудиоПро»","type":"Партнёр","phone":"+7 (495) 500-60-70","email":"info@studiopro.ru"},{"_id":7,"name":"Мария Васнецова","type":"Клиент","phone":"+7 (903) 444-55-66","email":"vasnecova@bk.ru"}],"services":[{"_id":1,"name":"Ремонт аудиотехники","price":"1500","duration":"от 1 дня","description":"Диагностика и ремонт усилителей, наушников, колонок"},{"_id":2,"name":"Настройка акустики","price":"2500","duration":"1–2 часа","description":"Профессиональная калибровка акустики в помещении"},{"_id":3,"name":"Монтаж оборудования","price":"3000","duration":"по записи","description":"Установка и подключение домашних и студийных систем"},{"_id":4,"name":"Консультация эксперта","price":"1000","duration":"30 минут","description":"Помощь в подборе техники под ваш бюджет и задачи"}],"prices":[{"_id":1,"nomenclature":"Sennheiser HD 660S2","value":"54990","date_from":"2026-01-01"},{"_id":2,"nomenclature":"Beyerdynamic DT 900 Pro X","value":"24990","date_from":"2026-01-01"},{"_id":3,"nomenclature":"Audio-Technica ATH-M50x","value":"14990","date_from":"2026-05-01"},{"_id":4,"nomenclature":"Yamaha HS8","value":"39990","date_from":"2026-01-01"},{"_id":5,"nomenclature":"KEF LS50 Meta","value":"109990","date_from":"2026-01-01"},{"_id":6,"nomenclature":"Marantz PM7000N","value":"84990","date_from":"2026-02-01"},{"_id":7,"nomenclature":"Shure SM7B","value":"32990","date_from":"2026-01-01"},{"_id":8,"nomenclature":"Кабель XLR 3м","value":"1490","date_from":"2026-01-01"}],"promotions":[{"_id":1,"name":"Майская скидка на наушники","promotion_type":"Скидка","nomenclature":"Audio-Technica ATH-M50x","discount":"10","date_from":"2026-05-01","date_to":"2026-05-31","description":"Скидка 10% на популярные студийные наушники весь май"},{"_id":2,"name":"Подарок при покупке микрофона","promotion_type":"Подарок","nomenclature":"Shure SM7B","discount":"0","date_from":"2026-05-15","date_to":"2026-06-15","description":"При покупке Shure SM7B — кабель XLR 3м в подарок"},{"_id":3,"name":"Бонусы за покупку усилителя","promotion_type":"Бонусы","nomenclature":"Marantz PM7000N","discount":"5","date_from":"2026-06-01","date_to":"2026-06-30","description":"Бонусные баллы 5% на следующую покупку при заказе Marantz PM7000N"}],"bank_accounts":[{"_id":1,"name":"Расчётный счёт","account_number":"40702810100000012345","bank_name":"ПАО Сбербанк","type":"Расчётный","balance":"980000"},{"_id":2,"name":"Касса","account_number":"","bank_name":"","type":"Касса","balance":"42500"},{"_id":3,"name":"Депозит","account_number":"42307810900000067890","bank_name":"ПАО ВТБ","type":"Депозит","balance":"300000"}],"articles":[{"_id":1,"name":"Выручка от продаж","type":"Доход","description":"Поступления от розничных продаж товаров"},{"_id":2,"name":"Выручка от услуг","type":"Доход","description":"Оплата сервисных работ клиентами"},{"_id":3,"name":"Закупка товара","type":"Расход","description":"Оплата поставщикам за приобретённую номенклатуру"},{"_id":4,"name":"Аренда","type":"Расход","description":"Ежемесячная арендная плата за помещения"},{"_id":5,"name":"Зарплата","type":"Расход","description":"Оплата труда сотрудников магазина"},{"_id":6,"name":"Возврат","type":"Расход","description":"Создано автоматически"}],"goods_receipt":[{"_id":1,"date":"2026-05-05","supplier":"ООО «АудиоИмпорт»","warehouse":"Основной склад","nomenclature":"Sennheiser HD 660S2","qty":"10","price":"38000","total":"380000","status":"Проведён","note":"Основная весенняя партия"},{"_id":2,"date":"2026-05-05","supplier":"ООО «АудиоИмпорт»","warehouse":"Основной склад","nomenclature":"Audio-Technica ATH-M50x","qty":"12","price":"10500","total":"126000","status":"Проведён","note":""},{"_id":3,"date":"2026-05-07","supplier":"ИП Громов Е.С.","warehouse":"Основной склад","nomenclature":"Shure SM7B","qty":"6","price":"23000","total":"138000","status":"Проведён","note":"Под предзаказы клиентов"},{"_id":4,"date":"2026-05-10","supplier":"ИП Громов Е.С.","warehouse":"Основной склад","nomenclature":"Кабель XLR 3м","qty":"30","price":"900","total":"27000","status":"Проведён","note":"Расходники"},{"_id":5,"date":"2026-05-20","supplier":"ООО «АудиоИмпорт»","warehouse":"Основной склад","nomenclature":"Yamaha HS8","qty":"4","price":"28000","total":"112000","status":"Черновик","note":"Ожидает согласования оплаты"}],"goods_sales":[{"_id":1,"date":"2026-05-12","client":"Иван Петров","warehouse":"Шоурум","nomenclature":"Sennheiser HD 660S2","qty":"1","price":"54990","total":"54990","employee":"Менеджер","status":"Проведён","note":""},{"_id":2,"date":"2026-05-14","client":"Анна Лисицына","warehouse":"Шоурум","nomenclature":"Audio-Technica ATH-M50x","qty":"1","price":"13491","total":"13491","employee":"Менеджер","status":"Проведён","note":"Скидка по акции «Майская скидка»"},{"_id":3,"date":"2026-05-16","client":"Сергей Морозов","warehouse":"Шоурум","nomenclature":"Shure SM7B","qty":"1","price":"32990","total":"32990","employee":"Администратор","status":"Проведён","note":""},{"_id":4,"date":"2026-05-18","client":"ООО «СтудиоПро»","warehouse":"Основной склад","nomenclature":"Кабель XLR 3м","qty":"5","price":"1490","total":"7450","employee":"Менеджер","status":"Проведён","note":"Партнёрская продажа"},{"_id":5,"date":"2026-05-20","client":"Мария Васнецова","warehouse":"","nomenclature":"Настройка акустики","qty":"1","price":"2500","total":"2500","employee":"Администратор","status":"Проведён","note":"Услуга"},{"_id":6,"date":"2026-05-22","client":"Иван Петров","warehouse":"","nomenclature":"Консультация эксперта","qty":"1","price":"1000","total":"1000","employee":"Менеджер","status":"Проведён","note":"Услуга"},{"_id":7,"date":"2026-05-25","client":"Анна Лисицына","warehouse":"Шоурум","nomenclature":"Sennheiser HD 660S2","qty":"1","price":"54990","total":"54990","employee":"Сайт","status":"Новый","note":"Онлайн-заказ #SL-000001 | +7 (901) 222-33-44 | Москва, Садовая 5"}],"goods_transfer":[{"_id":1,"date":"2026-05-13","from_wh":"Основной склад","to_wh":"Шоурум","nomenclature":"Sennheiser HD 660S2","qty":"3","status":"Проведён","note":"Пополнение витрины"},{"_id":2,"date":"2026-05-14","from_wh":"Основной склад","to_wh":"Шоурум","nomenclature":"Audio-Technica ATH-M50x","qty":"4","status":"Черновик","note":"Запланировано на следующую неделю"}],"goods_return":[{"_id":1,"date":"2026-05-17","client":"Анна Лисицына","warehouse":"Шоурум","nomenclature":"Audio-Technica ATH-M50x","qty":"1","reason":"Не подошёл","refund":"13491","account":"Касса","status":"Проведён"},{"_id":2,"date":"2026-05-19","client":"Сергей Морозов","warehouse":"Шоурум","nomenclature":"Кабель XLR 3м","qty":"1","reason":"Брак","refund":"1490","account":"Касса","status":"Проведён"}],"payments":[{"_id":1,"date":"2026-05-06","type":"Расход","counterparty":"ООО «АудиоИмпорт»","article":"Закупка товара","account":"Расчётный счёт","amount":"506000","status":"Оплачен","note":"Оплата поставок #1 и #2"},{"_id":2,"date":"2026-05-08","type":"Расход","counterparty":"ИП Громов Е.С.","article":"Закупка товара","account":"Расчётный счёт","amount":"165000","status":"Оплачен","note":"Оплата поставок #3 и #4"},{"_id":3,"date":"2026-05-12","type":"Доход","counterparty":"Иван Петров","article":"Выручка от продаж","account":"Касса","amount":"54990","status":"Оплачен","note":""},{"_id":4,"date":"2026-05-15","type":"Расход","counterparty":"","article":"Аренда","account":"Расчётный счёт","amount":"75000","status":"Оплачен","note":"Аренда за май 2026"},{"_id":5,"date":"2026-05-20","type":"Расход","counterparty":"","article":"Зарплата","account":"Расчётный счёт","amount":"120000","status":"Частично","note":"Аванс за май, остаток 10 июня"},{"_id":6,"date":"2026-05-25","type":"Перевод","counterparty":"","article":"Закупка товара","account":"Расчётный счёт","amount":"112000","status":"Не оплачен","note":"Резерв под партию Yamaha HS8 (#5)"}],"repair_intake":[{"_id":1,"date":"2026-05-08","client":"Иван Петров","device":"Sennheiser HD 600","serial":"SN-HD600-2024-0812","defect":"Треск в правом канале при повороте регулятора","repair_type":"Платный","master":"Менеджер","status":"Выдан","price_est":"2500"},{"_id":2,"date":"2026-05-14","client":"Мария Васнецова","device":"Yamaha A-S301","serial":"YM-AS301-22-3311","defect":"Нет звука в левом канале после включения","repair_type":"Платный","master":"Администратор","status":"Готов","price_est":"6000"},{"_id":3,"date":"2026-05-19","client":"Сергей Морозов","device":"Audio-Technica ATH-M50x","serial":"AT-M50X-2026-0044","defect":"Трещина на дуге оголовья, гарантийный случай","repair_type":"Гарантийный","master":"Менеджер","status":"В работе","price_est":"0"},{"_id":4,"date":"2026-05-25","client":"Анна Лисицына","device":"Focusrite Scarlett 2i2","serial":"FC-2I2-2025-7712","defect":"Не определяется по USB, световой индикатор не горит","repair_type":"Платный","master":"Администратор","status":"Принят","price_est":"4500"}],"repair_release":[{"_id":1,"date":"2026-05-13","intake_id":"1","parts_cost":"400","work_cost":"1800","total":"2200","note":"Заменён потенциометр баланса, чистка контактов"},{"_id":2,"date":"2026-05-23","intake_id":"2","parts_cost":"1500","work_cost":"4000","total":"5500","note":"Замена выходных транзисторов левого канала"},{"_id":3,"date":"2026-05-27","intake_id":"3","parts_cost":"600","work_cost":"0","total":"600","note":"Гарантийная замена дуги оголовья, запчасть по гарантии производителя"}],"stock_balance":[{"_id":1,"warehouse":"Основной склад","nomenclature":"Sennheiser HD 660S2","unit":"шт","qty":"6","cost":"38000","min_qty":"2","last_receipt_date":"2026-05-05"},{"_id":2,"warehouse":"Шоурум","nomenclature":"Sennheiser HD 660S2","unit":"шт","qty":"1","cost":"38000","min_qty":"1","last_receipt_date":"2026-05-13"},{"_id":3,"warehouse":"Основной склад","nomenclature":"Beyerdynamic DT 900 Pro X","unit":"шт","qty":"4","cost":"17500","min_qty":"1","last_receipt_date":"2026-04-10"},{"_id":4,"warehouse":"Основной склад","nomenclature":"Audio-Technica ATH-M50x","unit":"шт","qty":"8","cost":"10500","min_qty":"3","last_receipt_date":"2026-05-05"},{"_id":5,"warehouse":"Основной склад","nomenclature":"Yamaha HS8","unit":"шт","qty":"3","cost":"28000","min_qty":"1","last_receipt_date":"2026-05-05"},{"_id":6,"warehouse":"Основной склад","nomenclature":"KEF LS50 Meta","unit":"пара","qty":"2","cost":"82000","min_qty":"1","last_receipt_date":"2026-04-15"},{"_id":7,"warehouse":"Основной склад","nomenclature":"Marantz PM7000N","unit":"шт","qty":"2","cost":"62000","min_qty":"1","last_receipt_date":"2026-04-20"},{"_id":8,"warehouse":"Основной склад","nomenclature":"Shure SM7B","unit":"шт","qty":"4","cost":"23000","min_qty":"2","last_receipt_date":"2026-05-07"},{"_id":9,"warehouse":"Основной склад","nomenclature":"Кабель XLR 3м","unit":"метр","qty":"23","cost":"900","min_qty":"10","last_receipt_date":"2026-05-10"},{"_id":10,"warehouse":"Шоурум","nomenclature":"Кабель XLR 3м","unit":"метр","qty":"1","cost":"900","min_qty":"3","last_receipt_date":"2026-05-10"}],"sales_register":[{"_id":1,"date":"2026-05-12","nomenclature":"Sennheiser HD 660S2","counterparty":"Иван Петров","qty":"1","price":"54990","revenue":"54990","cost":"38000","profit":"16990","currency":"RUB","_sale_id":1},{"_id":2,"date":"2026-05-14","nomenclature":"Audio-Technica ATH-M50x","counterparty":"Анна Лисицына","qty":"1","price":"13491","revenue":"13491","cost":"10500","profit":"2991","currency":"RUB","_sale_id":2},{"_id":3,"date":"2026-05-16","nomenclature":"Shure SM7B","counterparty":"Сергей Морозов","qty":"1","price":"32990","revenue":"32990","cost":"23000","profit":"9990","currency":"RUB","_sale_id":3},{"_id":4,"date":"2026-05-18","nomenclature":"Кабель XLR 3м","counterparty":"ООО «СтудиоПро»","qty":"5","price":"1490","revenue":"7450","cost":"4500","profit":"2950","currency":"RUB","_sale_id":4},{"_id":5,"date":"2026-05-20","nomenclature":"Настройка акустики","counterparty":"Мария Васнецова","qty":"1","price":"2500","revenue":"2500","cost":"0","profit":"2500","currency":"RUB","_sale_id":5},{"_id":6,"date":"2026-05-22","nomenclature":"Консультация эксперта","counterparty":"Иван Петров","qty":"1","price":"1000","revenue":"1000","cost":"0","profit":"1000","currency":"RUB","_sale_id":6}],"finance_ops":[{"_id":1,"date":"2026-05-06","type":"Расход","counterparty":"ООО «АудиоИмпорт»","article":"Закупка товара","account":"Расчётный счёт","amount":"506000","note":"Оплата поставок #1 #2","_payment_id":1},{"_id":2,"date":"2026-05-08","type":"Расход","counterparty":"ИП Громов Е.С.","article":"Закупка товара","account":"Расчётный счёт","amount":"165000","note":"Оплата поставок #3 #4","_payment_id":2},{"_id":3,"date":"2026-05-12","type":"Доход","counterparty":"Иван Петров","article":"Выручка от продаж","account":"Касса","amount":"54990","note":"","_payment_id":3},{"_id":4,"date":"2026-05-14","type":"Доход","counterparty":"Анна Лисицына","article":"Выручка от продаж","account":"Касса","amount":"13491","note":"Со скидкой"},{"_id":5,"date":"2026-05-15","type":"Расход","counterparty":"","article":"Аренда","account":"Расчётный счёт","amount":"75000","note":"Аренда май 2026","_payment_id":4},{"_id":6,"date":"2026-05-16","type":"Доход","counterparty":"Сергей Морозов","article":"Выручка от продаж","account":"Касса","amount":"32990","note":""},{"_id":7,"date":"2026-05-17","type":"Расход","counterparty":"Анна Лисицына","article":"Возврат","account":"Касса","amount":"13491","note":"Возврат товара #1","_return_id":1},{"_id":8,"date":"2026-05-19","type":"Расход","counterparty":"Сергей Морозов","article":"Возврат","account":"Касса","amount":"1490","note":"Возврат товара #2","_return_id":2},{"_id":9,"date":"2026-05-20","type":"Расход","counterparty":"","article":"Зарплата","account":"Расчётный счёт","amount":"120000","note":"Аванс май 2026","_payment_id":5},{"_id":10,"date":"2026-05-25","type":"Перевод","counterparty":"","article":"Закупка товара","account":"Расчётный счёт","amount":"112000","note":"Резерв под Yamaha HS8","_payment_id":6}],"price_history":[{"_id":1,"date":"2026-01-01","nomenclature":"Sennheiser HD 660S2","old_price":"59990","new_price":"54990","reason":"Сезонная"},{"_id":2,"date":"2026-02-01","nomenclature":"Marantz PM7000N","old_price":"79990","new_price":"84990","reason":"Инфляция"},{"_id":3,"date":"2026-04-15","nomenclature":"Shure SM7B","old_price":"34990","new_price":"32990","reason":"Акция"},{"_id":4,"date":"2026-05-01","nomenclature":"Audio-Technica ATH-M50x","old_price":"15990","new_price":"14990","reason":"Переоценка"},{"_id":5,"date":"2026-05-10","nomenclature":"Кабель XLR 3м","old_price":"1200","new_price":"1490","reason":"Закупка"}],"warranty_periods":[{"_id":1,"nomenclature":"Sennheiser HD 660S2","sale_date":"2026-05-12","warranty_end":"2027-05-12","warranty_status":"Действует","_sale_id":1},{"_id":2,"nomenclature":"Audio-Technica ATH-M50x","sale_date":"2026-05-14","warranty_end":"2027-05-14","warranty_status":"Действует","_sale_id":2},{"_id":3,"nomenclature":"Shure SM7B","sale_date":"2026-05-16","warranty_end":"2027-05-16","warranty_status":"Действует","_sale_id":3}],"client_preferences":[{"_id":1,"client":"Иван Петров","nomenclature":"Sennheiser HD 660S2","purchase_count":"2","last_purchase_date":"2026-05-22"},{"_id":2,"client":"Иван Петров","nomenclature":"Консультация эксперта","purchase_count":"1","last_purchase_date":"2026-05-22"},{"_id":3,"client":"Анна Лисицына","nomenclature":"Audio-Technica ATH-M50x","purchase_count":"1","last_purchase_date":"2026-05-14"},{"_id":4,"client":"Сергей Морозов","nomenclature":"Shure SM7B","purchase_count":"1","last_purchase_date":"2026-05-16"},{"_id":5,"client":"ООО «СтудиоПро»","nomenclature":"Кабель XLR 3м","purchase_count":"1","last_purchase_date":"2026-05-18"},{"_id":6,"client":"Мария Васнецова","nomenclature":"Настройка акустики","purchase_count":"1","last_purchase_date":"2026-05-20"}],"product_ratings":[{"_id":1,"nomenclature":"Sennheiser HD 660S2","category":"Наушники","sales_count":"1","avg_rating":"5.0"},{"_id":2,"nomenclature":"Audio-Technica ATH-M50x","category":"Наушники","sales_count":"1","avg_rating":"4.7"},{"_id":3,"nomenclature":"Shure SM7B","category":"Микрофоны","sales_count":"1","avg_rating":"5.0"},{"_id":4,"nomenclature":"Кабель XLR 3м","category":"Аксессуары","sales_count":"5","avg_rating":"4.5"},{"_id":5,"nomenclature":"Настройка акустики","category":"Услуги","sales_count":"1","avg_rating":"5.0"},{"_id":6,"nomenclature":"Консультация эксперта","category":"Услуги","sales_count":"1","avg_rating":"4.8"}]};

/*********************************************************
 * УТИЛИТЫ И ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
 * (Тосты, форматирование цен, генерация SVG-картинок)
 *********************************************************/

if (!localStorage.getItem('soundlab_fresh_start_v3')) {
  localStorage.removeItem('soundlab_db');
  localStorage.removeItem('soundlab_cart');
  localStorage.removeItem('soundlab_store_orders');
  localStorage.removeItem('soundlab_store_cart');
  localStorage.setItem('soundlab_fresh_start_v3', '1');
}

function toast(m, t) {
  const d = document.createElement('div');
  d.className = 'toast ' + (t || 'ok');
  d.innerHTML = '<span>' + m + '</span><button class="toast-close" onclick="this.parentElement.remove()">✕</button>';
  const box = document.getElementById('toastBox');
  if (box) box.appendChild(d);
  setTimeout(() => { if (d.parentElement) d.remove(); }, 4000);
}

function esc(v) {
  return String(v == null ? '' : v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function formatMoney(v) {
  const n = Number(v || 0);
  return isFinite(n) ? n.toLocaleString('ru-RU') + ' ₽' : '0 ₽';
}

function slugify(v) {
  const map = {'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'e','ж':'zh','з':'z','и':'i','й':'y','к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t','у':'u','ф':'f','х':'h','ц':'c','ч':'ch','ш':'sh','щ':'sch','ъ':'','ы':'y','ь':'','э':'e','ю':'yu','я':'ya'};
  return String(v || 'other').trim().toLowerCase().split('').map(ch => map[ch] !== undefined ? map[ch] : ch).join('').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'') || 'other';
}

function guessEmoji(text) {
  const t = String(text || '').toLowerCase();
  if (t === 'все' || t === 'all') return '✨';
  if (/науш|headphone|гарнит/.test(t)) return '🎧';
  if (/колон|акуст|speaker|monitor/.test(t)) return '🔊';
  if (/усил|ampl|receiver/.test(t)) return '📻';
  if (/проигр|винил|turntable|planar|technics|пласт/.test(t)) return '💿';
  if (/микроф|microphone|shure|rode|neumann|akg/.test(t)) return '🎤';
  if (/аксессуар|кабел|адаптер|стойк|accessor|переход|фильтр|чехол/.test(t)) return '🔌';
  if (/ремонт/.test(t)) return '🔧';
  if (/настрой|калибр/.test(t)) return '🎚️';
  if (/консульта|подбор|эксперт/.test(t)) return '💬';
  if (/монтаж|установк|подключ/.test(t)) return '🪛';
  if (/услуг|сервис/.test(t)) return '🛠️';
  if (/диджей|dj|пульт|controller|микшер|mixer/.test(t)) return '🎛️';
  if (/гитар|guitar|бас|bass/.test(t)) return '🎸';
  if (/синтез|synth|клавиш|piano|midi/.test(t)) return '🎹';
  if (/радио|радиоприёмник|радиоприемник/.test(t)) return '📡';
  return '🎼';
}

/* ════════════════════════════════════════════════════════════════════════
 *  БЛОК: ИЗОБРАЖЕНИЯ КАРТОЧЕК ТОВАРОВ
 * ════════════════════════════════════════════════════════════════════════
 *  Логика выбора картинки для товара построена в два слоя:
 *
 *    1) PRODUCT_IMAGE_URLS — справочник реальных фотографий товаров
 *       (берутся с сайта поставщика doctorhead.ru). Если название товара
 *       совпадает с ключом справочника — на карточке показывается
 *       настоящая фотография.
 *
 *    2) Если фотографии в справочнике нет (например, товар добавлен через
 *       ERP вручную) — функция makeImageData() рисует красивую SVG-обложку
 *       прямо в браузере: градиентный фон в фирменных цветах категории,
 *       силуэт устройства и подпись с названием. Это гарантирует, что
 *       «дырявых» картинок в каталоге не бывает никогда.
 * ════════════════════════════════════════════════════════════════════════ */

/**
 * Справочник внешних URL-адресов фотографий товаров.
 *
 * Ключ — точное название товара (поле `name`), значение — прямая ссылка
 * на изображение в формате .webp. Адреса «зашиты» в код сознательно:
 *  • проверяющий сразу видит, откуда берутся картинки;
 *  • не требуется никакая внешняя БД или CMS;
 *  • при необходимости картинку можно заменить правкой одной строки.
 *
 * Источник всех изображений — https://doctorhead.ru
 */
const PRODUCT_IMAGE_URLS = {
  'Sennheiser HD 660S2':
    'https://doctorhead.ru/upload/dev2fun.imagecompress/webp/resize_cache/iblock/577/ve81yjby25mbjek3au310ik17wex7zc3/688_688_1/sennheiser_hd_660_s2_black_1.webp',

  'Beyerdynamic DT 900 Pro X':
    'https://doctorhead.ru/upload/dev2fun.imagecompress/webp/resize_cache/iblock/c43/688_688_1/beyerdynamic_dt990pro_x_1.webp',

  'Audio-Technica ATH-M50x':
    'https://doctorhead.ru/upload/dev2fun.imagecompress/webp/resize_cache/iblock/bbd/e7izf3kkv6wd00oa9n5qkamryy2pccxn/688_688_1/audio_technica_ath_m50x.webp',

  'Yamaha HS8':
    'https://doctorhead.ru/upload/dev2fun.imagecompress/webp/resize_cache/iblock/644/688_688_1/Yamaha_HS8_1.webp',

  'KEF LS50 Meta':
    'https://doctorhead.ru/upload/dev2fun.imagecompress/webp/resize_cache/iblock/58f/688_688_1/KEF-LS50-Meta_1.webp',

  'Marantz PM7000N':
    'https://doctorhead.ru/upload/dev2fun.imagecompress/webp/resize_cache/iblock/89f/688_688_1/marantz_pm7000n_1b.webp',

  'Shure SM7B':
    'https://doctorhead.ru/upload/dev2fun.imagecompress/webp/resize_cache/iblock/1c1/688_688_1/shure_sm7b2.webp',

  'Кабель XLR 3м':
    'https://doctorhead.ru/upload/dev2fun.imagecompress/webp/resize_cache/iblock/e11/e897b1wkx0gpsed73hud24iqvw83yx1i/688_688_1/HeadMade_Pro_XLR_Male_XLR_female_Black_000.webp'
};

/**
 * Возвращает фирменную палитру цветов для категории товара.
 *
 * Палитра используется как для генерации SVG-обложки (если у товара
 * нет фотографии), так и для визуального разделения категорий
 * в каталоге.
 *
 * @param   {string} slug — латинский «слаг» категории (headphones, speakers …)
 * @returns {string[]}    — массив из 4 цветов: [фон-1, фон-2, фон-3, акцент]
 */
function categoryPalette(slug) {
  const map = {
    headphones:  ['#111111', '#1a1a1a', '#2a3b28', '#cdff4d'], // наушники — тёмный + лаймовый акцент
    speakers:    ['#0f1115', '#1b2230', '#30404d', '#7fd7ff'], // колонки — синяя гамма
    amplifiers:  ['#0e0f10', '#232a2b', '#4d544b', '#cdff4d'], // усилители
    turntables:  ['#0d0d0d', '#1a1311', '#5a4432', '#f0c27b'], // винил — тёплая «деревянная» гамма
    microphones: ['#0e0f13', '#1a1e27', '#5d6d7e', '#c1d3ff'], // микрофоны — холодная сталь
    accessories: ['#101214', '#1d1f22', '#42484e', '#b0ff8a'], // аксессуары
    uslugi:      ['#121212', '#1f2a16', '#355226', '#cdff4d'], // услуги
    other:       ['#0f1012', '#1d1f24', '#2f3640', '#cdff4d']  // запасной вариант
  };
  return map[slug] || map.other;
}

/**
 * Возвращает SVG-силуэт устройства для заданной категории.
 *
 * Силуэт встраивается внутрь общей SVG-обложки (см. makeImageData).
 * Каждая категория рисуется упрощённой геометрией: чашки наушников,
 * корпус колонки, ручка усилителя, диск винила и т. д.
 *
 * @param   {string} slug   — слаг категории
 * @param   {string} accent — акцентный цвет (берётся из палитры)
 * @returns {string}        — фрагмент SVG-разметки
 */
function silhouette(slug, accent) {
  // Наушники: дуга оголовья + две прямоугольные чашки
  if (slug === 'headphones') {
    return '<path d="M160 180c0-58 37-95 96-95s96 37 96 95v52h-34v-52c0-38-22-61-62-61s-62 23-62 61v52h-34z" '
         + 'fill="none" stroke="' + accent + '" stroke-width="18" stroke-linecap="round"/>'
         + '<rect x="143" y="180" width="38" height="80" rx="18" fill="' + accent + '" fill-opacity=".82"/>'
         + '<rect x="331" y="180" width="38" height="80" rx="18" fill="' + accent + '" fill-opacity=".82"/>';
  }

  // Колонки: корпус + твитер сверху и большой динамик снизу
  if (slug === 'speakers') {
    return '<rect x="148" y="80" width="212" height="228" rx="24" fill="#111" stroke="' + accent + '" stroke-width="10"/>'
         + '<circle cx="254" cy="150" r="38" fill="' + accent + '" fill-opacity=".92"/>'
         + '<circle cx="254" cy="248" r="66" fill="' + accent + '" fill-opacity=".28" stroke="' + accent + '" stroke-width="10"/>';
  }

  // Усилитель: корпус, ручка громкости и индикаторы
  if (slug === 'amplifiers') {
    return '<rect x="110" y="140" width="290" height="122" rx="20" fill="#121212" stroke="' + accent + '" stroke-width="10"/>'
         + '<circle cx="170" cy="201" r="24" fill="' + accent + '" fill-opacity=".9"/>'
         + '<rect x="220" y="176" width="120" height="18" rx="9" fill="' + accent + '" fill-opacity=".45"/>'
         + '<rect x="220" y="207" width="90"  height="12" rx="6" fill="#fff"   fill-opacity=".18"/>';
  }

  // Винил: корпус проигрывателя, диск и тонарм
  if (slug === 'turntables') {
    return '<rect x="108" y="96" width="294" height="212" rx="24" fill="#111" stroke="' + accent + '" stroke-width="8"/>'
         + '<circle cx="238" cy="204" r="74" fill="' + accent + '" fill-opacity=".18" stroke="' + accent + '" stroke-width="10"/>'
         + '<circle cx="238" cy="204" r="12" fill="' + accent + '"/>'
         + '<path d="M332 150l30 20-52 88" fill="none" stroke="#fff" stroke-opacity=".75" stroke-width="12" stroke-linecap="round"/>';
  }

  // Микрофон: «голова» микрофона, корпус, держатель и подставка
  if (slug === 'microphones') {
    return '<rect x="212" y="76" width="88" height="126" rx="42" fill="#111" stroke="' + accent + '" stroke-width="10"/>'
         + '<path d="M196 184c0 33 24 58 60 58s60-25 60-58" fill="none" stroke="' + accent + '" stroke-width="10" stroke-linecap="round"/>'
         + '<path d="M256 242v58" stroke="#fff" stroke-opacity=".65" stroke-width="10" stroke-linecap="round"/>'
         + '<path d="M210 304h92"  stroke="#fff" stroke-opacity=".45" stroke-width="10" stroke-linecap="round"/>';
  }

  // Аксессуары: «извилистый кабель» + штекер и адаптер
  if (slug === 'accessories') {
    return '<path d="M148 242c18-52 46-90 98-90 68 0 86 106 138 106 22 0 38-10 50-24" '
         + 'fill="none" stroke="' + accent + '" stroke-width="16" stroke-linecap="round"/>'
         + '<circle cx="146" cy="244" r="24" fill="#111" stroke="' + accent + '" stroke-width="10"/>'
         + '<rect x="370" y="214" width="42" height="56" rx="12" fill="' + accent + '" fill-opacity=".82"/>';
  }

  // Запасной силуэт — «коробка с динамиком»
  return '<rect x="130" y="92" width="250" height="220" rx="30" fill="#111" stroke="' + accent + '" stroke-width="10"/>'
       + '<circle cx="255" cy="202" r="48" fill="' + accent + '" fill-opacity=".3"/>';
}

/**
 * Главная функция получения картинки для карточки товара.
 *
 * Алгоритм:
 *   1. Берём название товара и ищем его в справочнике PRODUCT_IMAGE_URLS.
 *      Если нашли — возвращаем готовый URL реальной фотографии.
 *   2. Если фотографии нет — собираем «на лету» SVG-обложку:
 *        • градиентный фон в цветах категории;
 *        • два мягких радиальных подсвета;
 *        • силуэт устройства (см. silhouette());
 *        • плашка с именем категории и название товара внизу.
 *      Готовый SVG кодируем в data:URI и возвращаем — браузер
 *      отобразит его без единого сетевого запроса.
 *
 * @param   {Object} product            — объект товара
 * @param   {string} product.name       — название (для подписи и поиска фото)
 * @param   {string} [product.catSlug]  — слаг категории (для палитры и силуэта)
 * @param   {string} [product.catName]  — отображаемое название категории
 * @returns {string}                    — URL или data:URI картинки для <img src="">
 */
function makeImageData(product) {
  // 1) Пробуем найти реальную фотографию в справочнике
  const name = String(product && product.name || '').trim();
  if (PRODUCT_IMAGE_URLS[name]) {
    return PRODUCT_IMAGE_URLS[name];
  }

  // 2) Фотографии нет — генерируем фирменную SVG-обложку
  const slug = product.catSlug || 'other';
  const [bg1, bg2, bg3, accent] = categoryPalette(slug);
  const title = esc(product.name    || 'SoundLab');
  const cat   = esc(product.catName || 'Каталог');

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 420">
<defs>
<!-- Диагональный градиент фона в цветах категории -->
<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
<stop offset="0%"   stop-color="${bg1}"/>
<stop offset="52%"  stop-color="${bg2}"/>
<stop offset="100%" stop-color="${bg3}"/>
</linearGradient>
<!-- Мягкое радиальное «свечение» акцентным цветом -->
<radialGradient id="r" cx="50%" cy="45%" r="70%">
<stop offset="0%"   stop-color="${accent}" stop-opacity="0.22"/>
<stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
</radialGradient>
</defs>
<!-- Фон + два декоративных подсвета по углам -->
<rect width="510" height="420" fill="url(#g)"/>
<circle cx="390" cy="90"  r="140" fill="url(#r)"/>
<circle cx="120" cy="340" r="130" fill="url(#r)"/>
<!-- Силуэт устройства в центре -->
<g>${silhouette(slug, accent)}</g>
<!-- Плашка с категорией в левом верхнем углу -->
<rect x="24" y="24" width="118" height="32" rx="16" fill="rgba(255,255,255,.08)"/>
<text x="40" y="45" fill="#fff" font-family="Inter,Arial" font-size="15" font-weight="700">${cat}</text>
<!-- Название товара и подпись бренда внизу -->
<text x="24" y="362" fill="#fff"                 font-family="Inter,Arial" font-size="20" font-weight="800">${title.slice(0,34)}</text>
<text x="24" y="389" fill="rgba(255,255,255,.72)" font-family="Inter,Arial" font-size="13">SoundLab selection</text>
</svg>`;

  // Возвращаем SVG в виде data:URI — пригоден для прямой подстановки в <img src="">
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg.trim());
}

/*********************************************************
 * БАЗОВЫЕ ДАННЫЕ (ДЛЯ ПУСТОЙ БАЗЫ ERP)
 *********************************************************/

const FALLBACK_PRODUCTS = [
  { id: 1, name: 'Sennheiser HD 660S2',        cat: 'Наушники',      desc: 'Открытые наушники высокого разрешения, 300 Ом',           price: 54990 },
  { id: 2, name: 'Beyerdynamic DT 900 Pro X',  cat: 'Наушники',      desc: 'Студийные мониторные наушники для записи и сведения',     price: 24990 },
  { id: 3, name: 'Audio-Technica ATH-M50x',    cat: 'Наушники',      desc: 'Профессиональные студийные мониторные наушники, 38 Ом',   price: 14990 },
  { id: 4, name: 'Yamaha HS8',                 cat: 'Колонки',       desc: 'Студийный монитор 8 дюймов, 75 Вт',                      price: 39990 },
  { id: 5, name: 'KEF LS50 Meta',              cat: 'Колонки',       desc: 'Полочные колонки hi-end класса с технологией Metamaterial', price: 109990 },
  { id: 6, name: 'Marantz PM7000N',            cat: 'Усилители',     desc: 'Интегральный стереоусилитель со стримингом HEOS, 2×60 Вт', price: 84990 },
  { id: 7, name: 'Shure SM7B',                 cat: 'Микрофоны',     desc: 'Динамический микрофон для подкастов и вокала, -59 дБ',    price: 32990 },
  { id: 8, name: 'Кабель XLR 3м',             cat: 'Аксессуары',    desc: 'Профессиональный балансный кабель XLR-XLR, позолоченные контакты', price: 1490 }
];

const FALLBACK_SERVICES = [
  { id: 'svc_repair',  name: 'Ремонт аудиотехники',  price: 1500, desc: 'Диагностика и ремонт усилителей, наушников, колонок', duration: 'от 1 дня'  },
  { id: 'svc_tuning',  name: 'Настройка акустики',   price: 2500, desc: 'Профессиональная калибровка акустики в помещении',     duration: '1–2 часа'  },
  { id: 'svc_install', name: 'Монтаж оборудования',  price: 3000, desc: 'Установка и подключение домашних и студийных систем',  duration: 'по записи' },
  { id: 'svc_consult', name: 'Консультация эксперта', price: 1000, desc: 'Помощь в подборе техники под ваш бюджет и задачи',   duration: '30 минут'  }
];

let catalogue = [];
let services = [];
let categories = [];
let cart = [];
let filterCat = 'all';
let searchQuery = '';

/**
 * Инициализация и загрузка данных из ERP-системы (Local Storage)
 * @description Читает базу данных, извлекает актуальные цены (prices), остатки (stock_balance)
 * и формирует финальный каталог (catalogue) и список услуг (services) для витрины.
 */
function loadERPData() {
  let db = null;
  try {
    const raw = localStorage.getItem('soundlab_db');
    if (raw) db = JSON.parse(raw);
  } catch (e) {}
  if (!db) db = JSON.parse(JSON.stringify(INITIAL_DB));

  const priceHistory = {};
  const stock = {};
  if (db) {
    (db.prices || []).forEach(row => {
      const key = String(row.nomenclature || '').trim();
      if (!priceHistory[key]) priceHistory[key] = [];
      priceHistory[key].push({ value: Number(row.value) || 0, date: row.date_from ? new Date(row.date_from).getTime() : 0 });
    });
    // Оставляем только действующие цены (дата начала <= сегодня) и сортируем по убыванию даты
    const _nowTs = Date.now();
    Object.keys(priceHistory).forEach(k => {
      priceHistory[k] = priceHistory[k].filter(p => !p.date || p.date <= _nowTs);
      priceHistory[k].sort((a, b) => b.date - a.date);
    });

    (db.stock_balance || []).forEach(row => {
      const key = String(row.nomenclature || '').trim();
      if (!stock.hasOwnProperty(key)) stock[key] = 0;
      stock[key] += (Number(row.qty) || 0) - (Number(row.reserved) || 0);
    });
  }

  const promoMap={};if(db&&db.promotions){var _t=(new Date()).toISOString().slice(0,10);db.promotions.forEach(function(p){var _fd=p.date_from||'',_td=p.date_to||'';if(_fd&&_fd>_t)return;if(_td&&_td<_t)return;var _n=String(p.nomenclature||'').trim();if(_n){promoMap[_n]=Math.max(promoMap[_n]||0,Number(p.discount)||0);}});}
  function getPriceInfo(name, defaultPrice) {
    if (!priceHistory[name] || priceHistory[name].length === 0) {
      return { current: defaultPrice || 0, old: 0 };
    }
    const current = priceHistory[name][0].value;
    let old = 0;
    for (let i = 1; i < priceHistory[name].length; i++) {
      if (priceHistory[name][i].value > current) {
        old = priceHistory[name][i].value;
        break;
      }
    }
    return { current, old };
  }

  const nomMap = new Map();
  if (db && db.nomenclature) {
    db.nomenclature.forEach(n => nomMap.set(n.name, n));
  }

  catalogue = [];
  FALLBACK_PRODUCTS.forEach(p => {
      const dbNom = nomMap.get(p.name);
      
      const pInfo = getPriceInfo(p.name, p.price);
      // Если в ERP нет цены на товар, берём цену по умолчанию из FALLBACK_PRODUCTS,
      // чтобы карточка выглядела корректно. При этом наличие (available) считается
      // отдельно по остаткам склада: если остатков нет — товар будет недоступен к покупке.
      let available = stock.hasOwnProperty(p.name) ? stock[p.name] : 0; 
      var _d=promoMap[p.name]||0;var _fp=_d>0?Math.round(pInfo.current*(100-_d)/100):pInfo.current;var _fo=_d>0?pInfo.current:(pInfo.old||0);
      catalogue.push({
        id: String(p.id),
        name: p.name,
        catName: dbNom && dbNom.category ? dbNom.category : p.cat,
        catSlug: slugify(dbNom && dbNom.category ? dbNom.category : p.cat),
        desc: dbNom && dbNom.description ? dbNom.description : p.desc,
        price: _fp,
        oldPrice: _fo, // Старая цена (для отображения скидки по акции)
        emoji: guessEmoji(p.name + ' ' + (dbNom ? dbNom.category : p.cat)),
        available: available,
        unit: dbNom && dbNom.unit ? dbNom.unit : 'шт'
      });
      nomMap.delete(p.name);
  });

  nomMap.forEach((n, name) => {
      if (n.category === 'Услуги') return;
      const pInfo = getPriceInfo(name, 0);
      var _d2=promoMap[name]||0;var _fp2=_d2>0?Math.round(pInfo.current*(100-_d2)/100):pInfo.current;var _fo2=_d2>0?pInfo.current:(pInfo.old||0);
      catalogue.push({
        id: String(n._id || slugify(name)),
        name: name,
        catName: n.category || 'Прочее',
        catSlug: slugify(n.category || 'Прочее'),
        desc: n.description || 'Оборудование SoundLab',
        price: _fp2,
        oldPrice: _fo2,
        emoji: guessEmoji(name + ' ' + n.category),
        available: stock.hasOwnProperty(name) ? stock[name] : 0,
        unit: n.unit || 'шт'
      });
  });

  const svcMap = new Map();
  if (db && db.services) {
    db.services.forEach(s => svcMap.set(s.name, s));
  }
  services = [];
  FALLBACK_SERVICES.forEach(s => {
      const dbSvc = svcMap.get(s.name);
      services.push({
        id: String(s.id),
        name: s.name,
        desc: dbSvc && dbSvc.description ? dbSvc.description : s.desc,
        price: dbSvc && dbSvc.price ? Number(dbSvc.price) : s.price,
        duration: dbSvc && dbSvc.duration ? dbSvc.duration : s.duration,
        emoji: guessEmoji(s.name)
      });
      svcMap.delete(s.name);
  });
  svcMap.forEach((s, name) => {
      services.push({
        id: String(s._id || slugify(name)),
        name: name,
        desc: s.description || '',
        price: Number(s.price) || 0,
        duration: s.duration || '',
        emoji: guessEmoji(name)
      });
  });

  const catSet = new Set();
  categories = [{ slug: 'all', name: 'Все', emoji: '✨' }];
  catalogue.forEach(p => {
    if (!catSet.has(p.catSlug)) {
      catSet.add(p.catSlug);
      categories.push({ slug: p.catSlug, name: p.catName, emoji: guessEmoji(p.catName) });
    }
  });
}

/*********************************************************
 * ЛОГИКА ОТРИСОВКИ ВИТРИНЫ (РЕНДЕР)
 *********************************************************/

/**
 * Главная функция рендеринга витрины
 * @description Отрисовывает категории, сетку товаров и услуг на основе текущих фильтров и поиска.
 * Также вызывает обновление корзины.
 */
function renderUI() {
  // 1. Категории (навигация в шапке и чипсы-фильтры)
  const nav = document.getElementById('storeNav');
  const chips = document.getElementById('catChips');
  if (nav) nav.innerHTML = categories.map(c => `<a class="${c.slug === filterCat ? 'active' : ''}" onclick="filterProducts('${c.slug}')">${esc(c.name)}</a>`).join('');
  if (chips) chips.innerHTML = categories.map(c => `<div class="cat-chip ${c.slug === filterCat ? 'active' : ''}" onclick="filterProducts('${c.slug}')">${c.emoji} ${esc(c.name)}</div>`).join('');

  // 2. Товары (сетка карточек каталога)
  const grid = document.getElementById('prodGrid');
  if (grid) {
    let items = catalogue;
    if (filterCat !== 'all') items = items.filter(p => p.catSlug === filterCat);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      items = items.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.catName.toLowerCase().includes(q));
    }

    if (items.length === 0) {
      grid.innerHTML = '<div class="prod-empty"><strong>Ничего не найдено</strong><span>Измените фильтр или запрос</span></div>';
    } else {
      grid.innerHTML = items.map(p => {
        const inCart = qtyInCart(p.id);
        const disabled = p.available <= 0;
        const stockCls = p.available <= 0 ? 'stock-out' : (p.available <= 3 ? 'stock-low' : 'stock-ok');
        const stockTxt = p.available <= 0 ? 'нет в наличии' : 'в наличии';
        return `
          <div class="prod-card ${disabled ? 'is-out' : ''}">
<div class="prod-img">
<img src="${makeImageData(p)}" alt="${esc(p.name)}">
<div class="card-overlay-actions">
<div class="card-badges">
                  ${p.oldPrice && p.oldPrice > p.price ? '<span class="card-badge sale">скидка</span>' : ''}
                  <span class="card-badge ${stockCls}">${stockTxt}</span>
</div>
</div>
</div>
<div class="prod-body">
<div class="p-cat">${esc(p.catName)}</div>
<h3>${esc(p.name)}</h3>
<div class="p-sku">Артикул: SL-${String(p.id).replace(/[^0-9a-zA-Z]/g,'').slice(-6).toUpperCase()}</div>
<div class="p-desc">${esc(p.desc)}</div>
<div class="p-bottom">
<div>
                  ${p.oldPrice && p.oldPrice > p.price ? '<span class="p-price-old">' + formatMoney(p.oldPrice) + '</span>' : ''}
                  <span class="p-price">${formatMoney(p.price)}</span>
</div>
                ${
                  inCart > 0 
                  ? `<div class="p-qty-inline">
<button class="p-qty-btn" onclick="changeQty('${p.id}', -1, false)">−</button>
<span class="p-qty-val">${inCart}</span>
<button class="p-qty-btn" onclick="changeQty('${p.id}', 1, false)" ${inCart >= p.available ? 'disabled' : ''}>+</button>
</div>`
                  : `<button class="p-add" onclick="addToCart('${p.id}')" ${disabled ? 'disabled' : ''}>+</button>`
                }
              </div>
<div class="card-bottom-actions">
<button class="btn-secondary-shop" onclick="addToCart('${p.id}'); openCheckout();" ${disabled ? 'disabled' : ''}>Купить</button>
</div>
</div>
</div>`;
      }).join('');
    }
  }

  // 3. Услуги (блок сервисов магазина)
  const sgrid = document.getElementById('servGrid');
  if (sgrid) {
    sgrid.innerHTML = services.map(s => {
      const inCart = qtyInCart(s.id, true);
      return `
        <div class="serv-card">
<div class="s-icon">${s.emoji}</div>
<h3>${esc(s.name)}</h3>
<div class="s-desc">${esc(s.desc)}</div>
<div class="s-meta">${esc(s.duration)}</div>
<div class="sc-foot">
<div class="s-price">от ${formatMoney(s.price)}</div>
            ${
            inCart > 0 
            ? `<div class="p-qty-inline" style="height:34px;">
<button class="p-qty-btn" style="width:24px;height:24px;" onclick="changeQty('${s.id}', -1, true)">−</button>
<span class="p-qty-val" style="font-size:0.8rem;">${inCart}</span>
<button class="p-qty-btn" style="width:24px;height:24px;" onclick="changeQty('${s.id}', 1, true)">+</button>
</div>`
            : `<button class="sc-add" onclick="addServiceToCart('${s.id}')">+</button>`
          }
          </div>
</div>`;
    }).join('');
  }

  renderCart();
}

/*********************************************************
 * ЛОГИКА КОРЗИНЫ (CART)
 *********************************************************/

/**
 * Синхронизация цен и остатков в корзине
 * @description Проверяет корзину на актуальность (вдруг товар раскупили или цена изменилась в ERP).
 */
function syncCartWithCatalogue() {
  let changed = false;
  cart = cart.map(c => {
    if (c.isService) {
      const s = services.find(x => String(x.id) === String(c.id));
      if (s && (s.price !== c.price || s.name !== c.name)) {
        c.price = s.price; c.name = s.name; changed = true;
      }
    } else {
      const p = catalogue.find(x => String(x.id) === String(c.id));
      if (p) {
        if (p.price !== c.price || p.name !== c.name) {
          c.price = p.price; c.name = p.name; changed = true;
        }
        if (c.qty > p.available) {
          c.qty = p.available; changed = true;
        }
      }
    }
    return c;
  }).filter(c => {
    if (c.isService) return services.some(x => String(x.id) === String(c.id));
    const p = catalogue.find(x => String(x.id) === String(c.id));
    return p && p.available > 0;
  });
  if (changed) saveCart();
}

/**
 * Загрузка сохраненной корзины покупателя
 * @description Восстанавливает корзину из Local Storage при перезагрузке страницы.
 */
function loadCart() {
  try { cart = JSON.parse(localStorage.getItem('soundlab_cart')) || []; } catch(e) { cart = []; }
}
/**
 * Сохранение корзины
 * @description Записывает текущее состояние корзины в Local Storage.
 */
function saveCart() {
  localStorage.setItem('soundlab_cart', JSON.stringify(cart));
}

/**
 * Подсчет количества товара в корзине
 * @param {string|number} id - Идентификатор товара или услуги
 * @param {boolean} isService - Флаг, является ли позиция услугой
 * @returns {number} Количество добавленных единиц
 */
function qtyInCart(id, isService = false) {
  return cart.filter(c => c.isService === isService && String(c.id) === String(id)).reduce((s,c) => s + c.qty, 0);
}

/**
 * Добавление товара в корзину
 * @param {string} id - Идентификатор товара
 * @description Проверяет наличие на складе. Если товар уже в корзине - увеличивает количество.
 */
function addToCart(id) {
  const p = catalogue.find(x => String(x.id) === String(id));
  if (!p) return;
  const currentQty = qtyInCart(id);
  if (currentQty >= p.available) {
    toast('Доступный остаток закончился', 'err');
    return;
  }
  const existing = cart.find(c => !c.isService && String(c.id) === String(id));
  if (existing) existing.qty++;
  else cart.push({ id: p.id, name: p.name, emoji: p.emoji, price: p.price, qty: 1, isService: false });
  saveCart();
  renderUI();
  toast('Добавлен: ' + p.name, 'ok');
}

/**
 * Добавление услуги в корзину
 * @param {string} id - Идентификатор услуги
 */
function addServiceToCart(id) {
  const s = services.find(x => String(x.id) === String(id));
  if (!s) return;
  const existing = cart.find(c => c.isService && String(c.id) === String(id));
  if (existing) existing.qty++;
  else cart.push({ id: s.id, name: s.name, emoji: s.emoji, price: s.price, qty: 1, isService: true });
  saveCart();
  renderUI();
  toast('Услуга добавлена', 'ok');
}

/**
 * Изменение количества позиции в корзине
 * @param {string} id - Идентификатор товара/услуги
 * @param {number} delta - На сколько изменить (+1 или -1)
 * @param {boolean} isService - Флаг услуги
 */
function changeQty(id, delta, isService) {
  const item = cart.find(c => c.isService === isService && String(c.id) === String(id));
  if (!item) return;
  if (!isService) {
    const p = catalogue.find(x => String(x.id) === String(id));
    if (p && item.qty + delta > p.available) {
      toast('Больше остатка добавить нельзя', 'err');
      return;
    }
  }
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => !(c.isService === isService && String(c.id) === String(id)));
  saveCart();
  renderUI();
}

/**
 * Полное удаление позиции из корзины
 */
function removeFromCart(id, isService) {
  cart = cart.filter(c => !(c.isService === isService && String(c.id) === String(id)));
  saveCart();
  renderUI();
}

/**
 * Отрисовка боковой панели корзины
 * @description Выводит список добавленных позиций, управляет счетчиком и общей суммой.
 */
function renderCart() {
  const container = document.getElementById('cartItems');
  const count = document.getElementById('cartCount');
  const foot = document.getElementById('cartFoot');
  const totalEl = document.getElementById('cartTotal');

  const qty = cart.reduce((s,c) => s + c.qty, 0);
  if (count) {
    count.textContent = qty;
    count.classList.toggle('zero', qty === 0);
  }

  if (!cart.length) {
    if (container) container.innerHTML = '<div class="cart-empty"><p>Корзина пуста</p></div>';
    if (foot) foot.style.display = 'none';
    return;
  }

  let sum = 0;
  if (container) {
    container.innerHTML = cart.map(c => {
      const lineTotal = c.price * c.qty;
      sum += lineTotal;
      return `
        <div class="cart-item">
<div class="cart-item-img">${c.emoji}</div>
<div class="cart-item-info">
<h4>${esc(c.name)}</h4>
<p>${c.isService ? 'Услуга' : formatMoney(c.price)}</p>
<div class="cart-item-qty">
<button onclick="changeQty('${c.id}', -1, ${c.isService})">−</button>
<span>${c.qty}</span>
<button onclick="changeQty('${c.id}', 1, ${c.isService})">+</button>
</div>
</div>
<div class="cart-item-price">
<div class="cp">${formatMoney(lineTotal)}</div>
<span class="cd" onclick="removeFromCart('${c.id}', ${c.isService})">✕ Убрать</span>
</div>
</div>`;
    }).join('');
  }
  if (foot) foot.style.display = 'block';
  if (totalEl) totalEl.textContent = formatMoney(sum);
}

/**
 * Открытие / закрытие боковой панели корзины
 */
function toggleCart() {
  document.getElementById('cartOverlay').classList.toggle('active');
  document.getElementById('cartSide').classList.toggle('open');
}

/*********************************************************
 * ОФОРМЛЕНИЕ ЗАКАЗА (CHECKOUT)
 *********************************************************/

/**
 * Открытие модального окна оформления заказа
 * @description Формирует финальный список покупок (чек) и показывает форму ввода контактов.
 */
function openCheckout() {
  if (cart.length === 0) { toast('Корзина пуста', 'err'); return; }
  const summary = document.getElementById('checkoutSummary');
  let sum = 0;
  summary.innerHTML = cart.map(c => {
    const line = c.price * c.qty;
    sum += line;
    return `<div class="cos-row"><span>${c.emoji} ${esc(c.name)} × ${c.qty}</span><span>${formatMoney(line)}</span></div>`;
  }).join('') + `<div class="cos-total"><span>Итого</span><span>${formatMoney(sum)}</span></div>`;
  document.getElementById('checkoutOverlay').classList.add('active');
}

/**
 * Закрытие модального окна оформления заказа
 */
function closeCheckout() {
  document.getElementById('checkoutOverlay').classList.remove('active');
}

/**
 * Отправка заказа (Оформление)
 * @description Собирает данные формы, валидирует их, списывает остатки и отправляет заказ напрямую в ERP (goods_sales).
 */
function submitOrder() {
  var name = document.getElementById('coName').value.trim();
  var phone = document.getElementById('coPhone').value.trim();
  var address = document.getElementById('coAddress').value.trim();
  var email = document.getElementById('coEmail').value.trim();
  var comment = document.getElementById('coComment').value.trim();

  var valid = true;
  [['coName', name], ['coPhone', phone], ['coAddress', address]].forEach(function(pair) {
    var el = document.getElementById(pair[0]);
    el.classList.remove('err');
    if (!pair[1]) { el.classList.add('err'); valid = false; }
  });
  document.getElementById('coEmail').classList.remove('err');
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('coEmail').classList.add('err');
    toast('Некорректный e-mail', 'err');
    return;
  }
  if (!valid) { toast('Заполните обязательные поля', 'err'); return; }
  if (!cart || !cart.length) { toast('Корзина пуста', 'err'); return; }

  var total = cart.reduce(function(s, c) { return s + (c.price * c.qty); }, 0);
  var db = null;
  try { var raw = localStorage.getItem('soundlab_db'); if (raw) db = JSON.parse(raw); } catch(e) {}
  if (!db) { db = JSON.parse(JSON.stringify(INITIAL_DB)); }
  if (!db._c) db._c = {};
  if (!db._l) db._l = [];
  if (!db.goods_sales) db.goods_sales = [];
  if (!db.stock_balance) db.stock_balance = [];
  if (!db.counterparties) db.counterparties = [];
  if (!db.warehouses) db.warehouses = [];
  if (db.warehouses.length === 0) {
    if (!db._c.warehouses) db._c.warehouses = 0;
    db.warehouses.push({_id: ++db._c.warehouses, name: 'Основной', address: 'Магазин'});
  }

  // Проверка наличия до создания заявки. Остатки не списываются: заказ должен подтвердить менеджер в ERP.
  for (var i = 0; i < cart.length; i++) {
    var c = cart[i];
    if (c.isService) continue;
    var sb = db.stock_balance.find(function(r) { return r.nomenclature === c.name; });
    var avail = sb ? (parseInt(sb.qty) || 0) - (parseInt(sb.reserved) || 0) : 0;
    if (avail < c.qty) {
      toast('Недостаточно остатков: ' + c.name + ' (доступно: ' + avail + ')', 'err');
      return;
    }
  }

  if (!db._c.goods_sales) db._c.goods_sales = 0;
  if (!db._c.counterparties) db._c.counterparties = 0;
  if (!db._c.store_orders) db._c.store_orders = 0;
  var orderId = 'SL-' + String(++db._c.store_orders).padStart(6, '0');
  var whName = db.warehouses[0].name;
  var today = new Date().toISOString().slice(0, 10);

  cart.forEach(function(c) {
    var doc = {
      _id: ++db._c.goods_sales,
      date: today,
      client: name,
      warehouse: c.isService ? '' : whName,
      nomenclature: c.name,
      qty: String(c.qty),
      price: String(c.price),
      total: String(c.price * c.qty),
      employee: 'Сайт',
      status: 'Новый',
      note: 'Онлайн-заказ #' + orderId + (c.isService ? ' | Услуга' : '') + ' | ' + phone + ' | ' + address + (comment ? ' | ' + comment : '')
    };
    db.goods_sales.push(doc);
  });

  if (!db.counterparties.find(function(x) { return x.name === name || x.phone === phone; })) {
    db.counterparties.push({_id: ++db._c.counterparties, name: name, type: 'Клиент', phone: phone, email: email});
  }

  db._l.push({ts: new Date().toISOString(), u: 'Сайт', a: 'Новый онлайн-заказ', d: '#' + orderId + ' на сумму ' + total + ' ₽'});

  DB = db;
  if (typeof saveDB === 'function') saveDB(); else localStorage.setItem('soundlab_db', JSON.stringify(DB));

  cart = [];
  saveCart();
  renderUI();
  closeCheckout();
  if (document.getElementById('cartOverlay').classList.contains('active')) toggleCart();

  ['coName', 'coPhone', 'coEmail', 'coAddress', 'coComment'].forEach(function(id) { document.getElementById(id).value = ''; });
  document.getElementById('successMsg').innerHTML = 'Номер вашего заказа: <strong>#' + orderId + '</strong>. Заказ передан менеджеру и ожидает подтверждения.';
  document.getElementById('successOverlay').classList.add('active');
}

function closeSuccess() {
  document.getElementById('successOverlay').classList.remove('active');
}

/*********************************************************
 * ВЫБОР РОЛИ И ВХОД В ERP
 *********************************************************/

/**
 * Выбор роли на стартовом экране
 * @param {string} role - роль входа: 'buyer' (покупатель), 'admin' (администратор), 'manager' (менеджер)
 */
function enterAs(role) {
  const roleScreen = document.getElementById('roleScreen');
  roleScreen.classList.add('hidden');

  if (role === 'buyer') {
    // Просто показываем витрину — ничего делать не нужно
    return;
  }

  // Для ERP-ролей (администратор / менеджер) открываем панель ERP.
  // Логин на форму авторизации НЕ подставляется — пользователь вводит его сам.
  openHtml1Panel();
}
/**
 * Рендеринг и открытие Iframe с ERP системой
 */
function openHtml1Panel() {
  const overlay = document.getElementById('html1Overlay');
  const frame = document.getElementById('html1Frame');
  if (overlay && frame) {
    // ERP-система вынесена в отдельный файл erp/index.html и грузится в iframe
    if (frame.getAttribute('src') !== 'erp/index.html') {
      frame.src = 'erp/index.html';
    }
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}
function closeHtml1Panel() {
  const overlay = document.getElementById('html1Overlay');
  if (overlay) {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    loadERPData();
  syncCartWithCatalogue();
  renderUI();
  }
}

/* ═══ Приём сообщения "close-erp" от iframe с ERP (связь между витриной и ERP) ═══ */
window.addEventListener('message', function(e){
  if (e && e.data && e.data.type === 'close-erp') {
    closeHtml1Panel();
  }
});

/*********************************************************
 * СЛУШАТЕЛИ СОБЫТИЙ И ФИЛЬТРЫ
 *********************************************************/

window.filterProducts = function(cat) {
  filterCat = cat;
  const input = document.getElementById('searchInput');
  if (input && !searchQuery) input.value = '';
  renderUI();
};
window.searchProducts = function(q) {
  searchQuery = q.trim();
  renderUI();
};
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeCheckout();
    closeSuccess();
    closeHtml1Panel();
  }
});
window.addEventListener('storage', e => {
  if (e.key === 'soundlab_db') {
    loadERPData();
  syncCartWithCatalogue();
  renderUI();
  }
});

// --- ИНИЦИАЛИЗАЦИЯ ВИТРИНЫ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ ---
// Покажем экран выбора роли, а витрину отрисуем сразу под ним
loadCart();
loadERPData();
syncCartWithCatalogue();
renderUI();