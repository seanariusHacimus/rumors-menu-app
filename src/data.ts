export const categories = [
    { name: 'Бар', subcategories: ['Напитки б/а', 'Лимонады', 'Классические чаи', 'Авторские чаи', 'Кофе', 'Добавки к кофе', 'Шейки', 'Смузи', 'Детокс', 'Фреш соки'] },
    { name: 'Кухня', subcategories: ['Салаты', 'Сэндвичи и Бургеры', 'Супы', 'Паста и Ризотто', 'Горячие Блюда', 'Пицца', 'Завтраки', 'Добавки к завтракам', 'Холодные Закуски', 'Гарниры', 'Хлеб'] },
];

export const menuItems = [
    // Напитки б/а
    { name: 'Кола/Фанта/Спрайт', volume: '250ml', price: '20000', category: 'Бар', subcategory: 'Напитки б/а' },
    { name: 'Чорток', volume: '500ml', price: '20000', category: 'Бар', subcategory: 'Напитки б/а' },
    { name: 'Evita с/г', volume: '500ml', price: '7000', category: 'Бар', subcategory: 'Напитки б/а' },
    { name: 'Evita б/г', volume: '500ml', price: '7000', category: 'Бар', subcategory: 'Напитки б/а' },
    { name: 'Red Bull', volume: '250ml', price: '30000', category: 'Бар', subcategory: 'Напитки б/а' },

    // Лимонады
    { name: 'Арбуз-малина', volume: '0.4/1л', price: '40000/85000', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Киви-яблоко', volume: '0.4/1л', price: '40000/85000', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Клубника-базилик', volume: '0.4/1л', price: '40000/85000', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Ананас-кокос', volume: '0.4/1л', price: '40000/85000', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Груша-розмарин', volume: '0.4/1л', price: '40000/85000', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Танжерин', volume: '0.4/1л', price: '40000/85000', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Манго-малина с розмарином', volume: '0.4/1л', price: '40000/85000', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Черная смородина-тимьян', volume: '0.4/1л', price: '40000/85000', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Цитрусовый', volume: '0.4/1л', price: '40000/85000', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Мохито', volume: '0.4/1л', price: '40000/85000', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Манго-маракуйя', volume: '0.4/1л', price: '40000/85000', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Мохито клубничный', volume: '0.4/1л', price: '40000/85000', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Имбирный', volume: '0.4/1л', price: '40000/85000', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Тархун', volume: '0.4/1л', price: '40000/85000', category: 'Бар', subcategory: 'Лимонады' },

    // Классические чаи
    { name: 'Черный Ассам', volume: '800ml', price: '25000', category: 'Бар', subcategory: 'Классические чаи' },
    { name: 'Зеленый чай', volume: '800ml', price: '25000', category: 'Бар', subcategory: 'Классические чаи' },
    { name: 'Леди Грей', volume: '800ml', price: '25000', category: 'Бар', subcategory: 'Классические чаи' },
    { name: 'Жасмин Чан Хао', volume: '800ml', price: '25000', category: 'Бар', subcategory: 'Классические чаи' },
    { name: 'Травяной чай', volume: '800ml', price: '30000', category: 'Бар', subcategory: 'Классические чаи' },
    { name: 'Навват чай', volume: '800ml', price: '35000', category: 'Бар', subcategory: 'Классические чаи' },
    { name: 'Чай с лимоном', volume: '800ml', price: '30000', category: 'Бар', subcategory: 'Классические чаи' },

    // Авторские чаи
    { name: 'Имбирно-лимонный', volume: '800ml', price: '55000', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Клубника-малина', volume: '800ml', price: '55000', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Тропический', volume: '800ml', price: '55000', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Цитрусовый', volume: '800ml', price: '55000', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Черная смородина-базилик', volume: '800ml', price: '55000', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Новогодний чай', volume: '800ml', price: '55000', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Облепиховый', volume: '800ml', price: '55000', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Яблоко-ваниль', volume: '800ml', price: '55000', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Грушевая гора с розмарином', volume: '800ml', price: '55000', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Марокканский', volume: '800ml', price: '55000', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Манго-клубника', volume: '800ml', price: '55000', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Вишневая сангрия', volume: '800ml', price: '55000', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Карибский чай', volume: '800ml', price: '55000', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Молочно-карамельный чай', volume: '800ml', price: '55000', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Масала', volume: '800ml', price: '55000', category: 'Бар', subcategory: 'Авторские чаи' },

    // Кофе
    { name: 'Эспрессо', volume: '70ml', price: '15000', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Экспрессо', volume: '70ml', price: '20000', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Американо', volume: '250ml', price: '20000', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Капучино', volume: '250/350ml', price: '23000/27000', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Латте', volume: '350ml', price: '28000', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Раф классический', volume: '350ml', price: '33000', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Раф лавандовый', volume: '350ml', price: '35000', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Раф с халвой', volume: '350ml', price: '35000', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Флэт уайт', volume: '350ml', price: '32000', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Карамелатте', volume: '350ml', price: '35000', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Моккачино', volume: '350ml', price: '35000', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Какао с маршмеллоу', volume: '350ml', price: '28000', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Матча', volume: '350ml', price: '32000', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Матча латте', volume: '350ml', price: '32000', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Айс латте', volume: '350ml', price: '32000', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Айс американо', volume: '350ml', price: '25000', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Бамбл', volume: '350ml', price: '38000', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Фраппучино', volume: '350ml', price: '35000', category: 'Бар', subcategory: 'Кофе' },

    // Добавки к кофе
    { name: 'Сироп', price: '5000', category: 'Бар', subcategory: 'Добавки к кофе' },
    { name: 'Кокосовое молоко', price: '5000', category: 'Бар', subcategory: 'Добавки к кофе' },
    { name: 'Безлактозное молоко', price: '5000', category: 'Бар', subcategory: 'Добавки к кофе' },
    { name: 'Маршмеллоу', price: '5000', category: 'Бар', subcategory: 'Добавки к кофе' },

    // Шейки
    { name: 'Сникерс', volume: '450ml', price: '55000', category: 'Бар', subcategory: 'Шейки' },
    { name: 'Oreo', volume: '450ml', price: '55000', category: 'Бар', subcategory: 'Шейки' },
    { name: 'Клубника-банан', volume: '450ml', price: '55000', category: 'Бар', subcategory: 'Шейки' },
    { name: 'Love is', volume: '450ml', price: '55000', category: 'Бар', subcategory: 'Шейки' },
    { name: 'Ягодный шейк', volume: '450ml', price: '60000', category: 'Бар', subcategory: 'Шейки' },
    { name: 'Пина-колада шейк', volume: '450ml', price: '60000', category: 'Бар', subcategory: 'Шейки' },
    { name: 'Тропический шейк', volume: '450ml', price: '60000', category: 'Бар', subcategory: 'Шейки' },

    // Смузи
    { name: 'Клубника-банан', volume: '400ml', price: '55000', category: 'Бар', subcategory: 'Смузи' },
    { name: 'Манго-маракуйя', volume: '400ml', price: '55000', category: 'Бар', subcategory: 'Смузи' },
    { name: 'Черника-малина', volume: '400ml', price: '55000', category: 'Бар', subcategory: 'Смузи' },

    // Детокс
    { name: 'Яблоко-шпинат', volume: '400ml', price: '50000', category: 'Бар', subcategory: 'Детокс' },
    { name: 'Цитрус-щавель', volume: '400ml', price: '50000', category: 'Бар', subcategory: 'Детокс' },
    { name: 'Шпинат-лен-яблоко', volume: '400ml', price: '50000', category: 'Бар', subcategory: 'Детокс' },
    { name: 'Свекло-яблоко-морковь', volume: '400ml', price: '50000', category: 'Бар', subcategory: 'Детокс' },
    { name: 'Апельсин-сельдерей', volume: '400ml', price: '50000', category: 'Бар', subcategory: 'Детокс' },

    // Фреш соки
    { name: 'Яблочный', volume: '300ml', price: '35000', category: 'Бар', subcategory: 'Фреш соки' },
    { name: 'Морковный', volume: '300ml', price: '35000', category: 'Бар', subcategory: 'Фреш соки' },
    { name: 'Апельсиновый', volume: '300ml', price: '55000', category: 'Бар', subcategory: 'Фреш соки' },
    { name: 'Яблоко-морковь', volume: '300ml', price: '35000', category: 'Бар', subcategory: 'Фреш соки' },
    { name: 'Апельсин-морковь', volume: '300ml', price: '45000', category: 'Бар', subcategory: 'Фреш соки' },

    // Салаты
    { name: 'Буратта с томатами', price: '120000', category: 'Кухня', subcategory: 'Салаты' },
    { name: 'Капрезе', price: '75000', category: 'Кухня', subcategory: 'Салаты' },
    { name: 'Цезарь с курицей', price: '65000', category: 'Кухня', subcategory: 'Салаты' },
    { name: 'Греческий', price: '68000', category: 'Кухня', subcategory: 'Салаты' },
    { name: 'Теплый салат из Бон филе', price: '115000', category: 'Кухня', subcategory: 'Салаты' },
    { name: 'Поло салат', price: '58000', category: 'Кухня', subcategory: 'Салаты' },
    { name: 'Салат провансаль с тыквой и страчателлой', price: '85000', category: 'Кухня', subcategory: 'Салаты' },
    { name: 'Хрустящие баклажаны со стратчателлой', price: '68000', category: 'Кухня', subcategory: 'Салаты' },
    { name: 'Микс-салат с авокадо', price: '57000', category: 'Кухня', subcategory: 'Салаты' },
    { name: 'Салат Нисуаз с тунцом', price: '85000', category: 'Кухня', subcategory: 'Салаты' },
    { name: 'Теплый салат с сибасом', price: '88000', category: 'Кухня', subcategory: 'Салаты' },
    { name: 'Салат с лососем и диким рисом', price: '88000', category: 'Кухня', subcategory: 'Салаты' },

    // Сэндвичи и Бургеры
    { name: 'Сэндвич с курицей', price: '60000', category: 'Кухня', subcategory: 'Сэндвичи и Бургеры' },
    { name: 'Сэндвич с индейкой', price: '60000', category: 'Кухня', subcategory: 'Сэндвичи и Бургеры' },
    { name: 'Сэндвич с говядиной', price: '75000', category: 'Кухня', subcategory: 'Сэндвичи и Бургеры' },
    { name: 'Биф бургер RUMORS', price: '75000', category: 'Кухня', subcategory: 'Сэндвичи и Бургеры' },
    { name: 'Чизбургер', price: '78000', category: 'Кухня', subcategory: 'Сэндвичи и Бургеры' },

    // Супы
    { name: 'Куриный бульон', price: '35000', category: 'Кухня', subcategory: 'Супы' },
    { name: 'Фрикадельки', price: '45000', category: 'Кухня', subcategory: 'Супы' },
    { name: 'Суп из Бон филе и нутом', price: '58000', category: 'Кухня', subcategory: 'Супы' },
    { name: 'Минестроне', price: '47000', category: 'Кухня', subcategory: 'Супы' },
    { name: 'Крем суп из чечевицы', price: '33000', category: 'Кухня', subcategory: 'Супы' },
    { name: 'Крем суп из грибов', price: '45000', category: 'Кухня', subcategory: 'Супы' },
    { name: 'Гуазето ди Мария', price: '75000', category: 'Кухня', subcategory: 'Супы' },

    // Паста и Ризотто
    { name: 'Фетучини с ломтиками телятины с овощами', price: '75000', category: 'Кухня', subcategory: 'Паста и Ризотто' },
    { name: 'Альфредо', price: '68000', category: 'Кухня', subcategory: 'Паста и Ризотто' },
    { name: 'Фетучини с грибами', price: '60000', category: 'Кухня', subcategory: 'Паста и Ризотто' },
    { name: 'Болоньезе', price: '68000', category: 'Кухня', subcategory: 'Паста и Ризотто' },
    { name: 'Пенне аррабьята', price: '68000', category: 'Кухня', subcategory: 'Паста и Ризотто' },
    { name: 'Пенне 4 сыра', price: '72000', category: 'Кухня', subcategory: 'Паста и Ризотто' },
    { name: 'Лазанья', price: '68000', category: 'Кухня', subcategory: 'Паста и Ризотто' },
    { name: 'Спагетти с морепродуктами', price: '93000', category: 'Кухня', subcategory: 'Паста и Ризотто' },
    { name: 'Фарфалле с лососем', price: '85000', category: 'Кухня', subcategory: 'Паста и Ризотто' },
    { name: 'Ризотто с креветкой и тыквой', price: '87000', category: 'Кухня', subcategory: 'Паста и Ризотто' },
    { name: 'Ризотто с грибами', price: '72000', category: 'Кухня', subcategory: 'Паста и Ризотто' },

    // Горячие Блюда
    { name: 'Сибас в конверте с овощами', price: '145000', category: 'Кухня', subcategory: 'Горячие Блюда' },
    { name: 'Стейк из лосося с брокколи в лимонном соусе', price: '145000', category: 'Кухня', subcategory: 'Горячие Блюда' },
    { name: 'Медальоны из Бон филе в сливочно-грибном соусе', price: '135000', category: 'Кухня', subcategory: 'Горячие Блюда' },
    { name: 'Медальоны на гриле с овощами', price: '130000', category: 'Кухня', subcategory: 'Горячие Блюда' },
    { name: 'Скалопини из Бон филе с беби картошкой и соусом демигласс', price: '145000', category: 'Кухня', subcategory: 'Горячие Блюда' },
    { name: 'Запеченый цыпленок в кисло-сладкой глазури', price: '95000', category: 'Кухня', subcategory: 'Горячие Блюда' },
    { name: 'Миланезе', price: '98000', category: 'Кухня', subcategory: 'Горячие Блюда' },

    // Пицца
    { name: 'Маргарита', price: '55000', category: 'Кухня', subcategory: 'Пицца' },
    { name: 'Пеперони', price: '75000', category: 'Кухня', subcategory: 'Пицца' },
    { name: 'Диабло', price: '79000', category: 'Кухня', subcategory: 'Пицца' },
    { name: 'Груша-горгонзола', price: '73000', category: 'Кухня', subcategory: 'Пицца' },
    { name: '4 сыра', price: '70000', category: 'Кухня', subcategory: 'Пицца' },
    { name: 'Пицца RUMORS', price: '75000', category: 'Кухня', subcategory: 'Пицца' },
    { name: 'Поло', price: '68000', category: 'Кухня', subcategory: 'Пицца' },
    { name: 'Мортаделла', price: '77000', category: 'Кухня', subcategory: 'Пицца' },
    { name: 'Капричоза', price: '77000', category: 'Кухня', subcategory: 'Пицца' },
    { name: 'Пицца с сосисками', price: '70000', category: 'Кухня', subcategory: 'Пицца' },

    // Завтраки
    { name: 'Английский завтрак', price: '65000', category: 'Кухня', subcategory: 'Завтраки' },
    { name: 'Rumors завтрак', price: '65000', category: 'Кухня', subcategory: 'Завтраки' },
    { name: 'Французский завтрак', price: '75000', category: 'Кухня', subcategory: 'Завтраки' },
    { name: 'Бенедикт', price: '55000', category: 'Кухня', subcategory: 'Завтраки' },
    { name: 'Флорентин', price: '', category: 'Кухня', subcategory: 'Завтраки' },
    { name: 'Манная каша', price: '25000', category: 'Кухня', subcategory: 'Завтраки' },
    { name: 'Каша рисовая', price: '25000', category: 'Кухня', subcategory: 'Завтраки' },
    { name: 'Каша овсяная', price: '25000', category: 'Кухня', subcategory: 'Завтраки' },
    { name: 'Яичница', price: '28000', category: 'Кухня', subcategory: 'Завтраки' },
    { name: 'Омлет классический', price: '32000', category: 'Кухня', subcategory: 'Завтраки' },
    { name: 'Скрэмбл с сосисками', price: '42000', category: 'Кухня', subcategory: 'Завтраки' },
    { name: 'Скрэмбл с авакадо и лососем', price: '68000', category: 'Кухня', subcategory: 'Завтраки' },

    // Добавки к завтракам
    { name: 'Авокадо 1шт', price: '15000', category: 'Кухня', subcategory: 'Добавки к завтракам' },
    { name: 'Лосось 50г', price: '15000', category: 'Кухня', subcategory: 'Добавки к завтракам' },
    { name: 'Охотничьи сосиски 80г', price: '10000', category: 'Кухня', subcategory: 'Добавки к завтракам' },
    { name: 'Шампиньоны 100г', price: '10000', category: 'Кухня', subcategory: 'Добавки к завтракам' },
    { name: 'Спаржа 50г', price: '5000', category: 'Кухня', subcategory: 'Добавки к завтракам' },
    { name: 'Шпинат', price: '5000', category: 'Кухня', subcategory: 'Добавки к завтракам' },
    { name: 'Микс салат', price: '5000', category: 'Кухня', subcategory: 'Добавки к завтракам' },
    { name: 'Вяленые томаты', price: '5000', category: 'Кухня', subcategory: 'Добавки к завтракам' },
    { name: 'Артишоки', price: '5000', category: 'Кухня', subcategory: 'Добавки к завтракам' },
    { name: 'Красная фасоль', price: '5000', category: 'Кухня', subcategory: 'Добавки к завтракам' },

    // Завтраки (continued)
    { name: 'Блинчики с медом', price: '22000', category: 'Кухня', subcategory: 'Завтраки' },
    { name: 'Блинчики со сметаной', price: '22000', category: 'Кухня', subcategory: 'Завтраки' },
    { name: 'Блинчики с джемом', price: '22000', category: 'Кухня', subcategory: 'Завтраки' },
    { name: 'Блинчики бананом', price: '22000', category: 'Кухня', subcategory: 'Завтраки' },
    { name: 'Блинчики с нутеллой', price: '22000', category: 'Кухня', subcategory: 'Завтраки' },
    { name: 'Блинчики с ягодами', price: '22000', category: 'Кухня', subcategory: 'Завтраки' },
    { name: 'Блинчики с ягодным соусом', price: '22000', category: 'Кухня', subcategory: 'Завтраки' },
    { name: 'Сырники', price: '38000', category: 'Кухня', subcategory: 'Завтраки' },
    { name: 'Венские вафли', price: '40000', category: 'Кухня', subcategory: 'Завтраки' },
    { name: 'Круассан с лососем', price: '65000', category: 'Кухня', subcategory: 'Завтраки' },
    { name: 'Круассан с ветчиной', price: '55000', category: 'Кухня', subcategory: 'Завтраки' },
    { name: 'Круассан с нутеллой', price: '40000', category: 'Кухня', subcategory: 'Завтраки' },

    // Холодные Закуски
    { name: 'Ассорти брускетт (3шт)', price: '133000', category: 'Кухня', subcategory: 'Холодные Закуски' },
    { name: 'Брускетта с лососем', price: '55000', category: 'Кухня', subcategory: 'Холодные Закуски' },
    { name: 'Брускетта с авокадо', price: '45000', category: 'Кухня', subcategory: 'Холодные Закуски' },
    { name: 'Брускетта с ростбифом', price: '50000', category: 'Кухня', subcategory: 'Холодные Закуски' },
    { name: 'Брускетта с томатами', price: '32000', category: 'Кухня', subcategory: 'Холодные Закуски' },

    // Гарниры
    { name: 'Картошка фри', price: '20000', category: 'Кухня', subcategory: 'Гарниры' },

    // Хлеб
    { name: 'Фокачча с розмарином', price: '15000', category: 'Кухня', subcategory: 'Хлеб' },
    { name: 'Фокачча с сыром', price: '15000', category: 'Кухня', subcategory: 'Хлеб' },
    { name: 'Тартин', price: '5000', category: 'Кухня', subcategory: 'Хлеб' },
    { name: 'Хлеб ассорти', price: '20000', category: 'Кухня', subcategory: 'Хлеб' }
];