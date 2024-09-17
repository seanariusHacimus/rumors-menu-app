export const categories = [
    { name: 'Бар', subcategories: ['Безалкогольные напитки', 'Кофе'] },
];

export const menuItems = [
    // Безалкогольные напитки
    { name: 'Кола/Фанта/Спрайт', volume: '250ml', price: '20000сум', category: 'Бар', subcategory: 'Безалкогольные напитки' },
    { name: 'Чорток', volume: '500ml', price: '20000сум', category: 'Бар', subcategory: 'Безалкогольные напитки' },
    { name: 'Evita с/г', volume: '500ml', price: '7000сум', category: 'Бар', subcategory: 'Безалкогольные напитки' },
    { name: 'Evita б/г', volume: '500ml', price: '7000сум', category: 'Бар', subcategory: 'Безалкогольные напитки' },
    { name: 'Ред Булл', volume: '250ml', price: '30000сум', category: 'Бар', subcategory: 'Безалкогольные напитки' },

    // Кофе
    { name: 'Эспрессо', volume: '70ml', price: '15000сум', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Экспрессо', volume: '70ml', price: '20000сум', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Американо', volume: '250ml', price: '20000сум', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Капучино', volume: '250/350ml', price: '23000/27000сум', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Латте', volume: '350ml', price: '28000сум', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Раф классический', volume: '350ml', price: '33000сум', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Раф лавандовый', volume: '350ml', price: '35000сум', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Раф с халвой', volume: '350ml', price: '35000сум', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Флет уайт', volume: '350ml', price: '32000сум', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Карамелатте', volume: '350ml', price: '35000сум', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Моккачино', volume: '350ml', price: '35000сум', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Какао с маршмеллоу', volume: '350ml', price: '28000сум', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Матча', volume: '350ml', price: '32000сум', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Матча латте', volume: '350ml', price: '32000сум', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Айс латте', volume: '350ml', price: '32000сум', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Айс американо', volume: '350ml', price: '25000сум', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Бамбл', volume: '350ml', price: '38000сум', category: 'Бар', subcategory: 'Кофе' },
    { name: 'Фраппучино', volume: '350ml', price: '35000сум', category: 'Бар', subcategory: 'Кофе' },

    // Лимонады
    { name: 'Арбуз-малина', volume: '0.4/1л', price: '40000/85000сум', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Киви-яблоко', volume: '0.4/1л', price: '40000/85000сум', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Клубника-базилик', volume: '0.4/1л', price: '40000/85000сум', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Ананас-кокос', volume: '0.4/1л', price: '40000/85000сум', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Груша-розмарин', volume: '0.4/1л', price: '40000/85000сум', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Танжерин', volume: '0.4/1л', price: '40000/85000сум', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Манго-малина с розмарином', volume: '0.4/1л', price: '40000/85000сум', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Черная смородина-тимьян', volume: '0.4/1л', price: '40000/85000сум', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Цитрусовый', volume: '0.4/1л', price: '40000/85000сум', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Мохито', volume: '0.4/1л', price: '40000/85000сум', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Манго-маракуйя', volume: '0.4/1л', price: '40000/85000сум', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Мохито клубничный', volume: '0.4/1л', price: '40000/85000сум', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Имбирный', volume: '0.4/1л', price: '40000/85000сум', category: 'Бар', subcategory: 'Лимонады' },
    { name: 'Тархун', volume: '0.4/1л', price: '40000/85000сум', category: 'Бар', subcategory: 'Лимонады' },

    // Авторские чаи
    { name: 'Имбирно-лимонный', volume: '800ml', price: '55000сум', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Клубника-малина', volume: '800ml', price: '55000сум', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Тропический', volume: '800ml', price: '55000сум', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Цитрусовый', volume: '800ml', price: '55000сум', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Черная смородина-базилик', volume: '800ml', price: '55000сум', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Новогодний чай', volume: '800ml', price: '55000сум', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Облепиховый', volume: '800ml', price: '55000сум', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Яблоко-ваниль', volume: '800ml', price: '55000сум', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Грушевая гора с розмарином', volume: '800ml', price: '55000сум', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Марокканский', volume: '800ml', price: '55000сум', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Манго-клубника', volume: '800ml', price: '55000сум', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Вишневая сангрия', volume: '800ml', price: '55000сум', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Карибский чай', volume: '800ml', price: '55000сум', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Молочно-карамельный чай', volume: '800ml', price: '55000сум', category: 'Бар', subcategory: 'Авторские чаи' },
    { name: 'Массала', volume: '800ml', price: '55000сум', category: 'Бар', subcategory: 'Авторские чаи' },

    // Шейки
    { name: 'Сникерс', volume: '450ml', price: '55000сум', category: 'Бар', subcategory: 'Шейки' },
    { name: 'Орео', volume: '450ml', price: '55000сум', category: 'Бар', subcategory: 'Шейки' },
    { name: 'Клубника-банан', volume: '450ml', price: '55000сум', category: 'Бар', subcategory: 'Шейки' },
    { name: 'Love is', volume: '450ml', price: '55000сум', category: 'Бар', subcategory: 'Шейки' },
    { name: 'Ягодный шейк', volume: '450ml', price: '60000сум', category: 'Бар', subcategory: 'Шейки' },
    { name: 'Пина-колада шейк', volume: '450ml', price: '60000сум', category: 'Бар', subcategory: 'Шейки' },
    { name: 'Тропический шейк', volume: '450ml', price: '60000сум', category: 'Бар', subcategory: 'Шейки' },

    // Смузи
    { name: 'Клубника-банан', volume: '400ml', price: '55000сум', category: 'Бар', subcategory: 'Смузи' },
    { name: 'Манго-маракуйя', volume: '400ml', price: '55000сум', category: 'Бар', subcategory: 'Смузи' },
    { name: 'Черника-малина', volume: '400ml', price: '55000сум', category: 'Бар', subcategory: 'Смузи' },

    // Детокс
    { name: 'Яблоко-шпинат', volume: '400ml', price: '50000сум', category: 'Бар', subcategory: 'Детокс' },
    { name: 'Цитрус-щавель', volume: '400ml', price: '50000сум', category: 'Бар', subcategory: 'Детокс' },
    { name: 'Шпинат-лен-яблоко', volume: '400ml', price: '50000сум', category: 'Бар', subcategory: 'Детокс' },
    { name: 'Свекло-яблоко-морковь', volume: '400ml', price: '50000сум', category: 'Бар', subcategory: 'Детокс' },
    { name: 'Апельсин-сельдерей', volume: '400ml', price: '50000сум', category: 'Бар', subcategory: 'Детокс' },

    // Фреш соки
    { name: 'Яблочный', volume: '300ml', price: '35000сум', category: 'Бар', subcategory: 'Фреш соки' },
    { name: 'Морковный', volume: '300ml', price: '35000сум', category: 'Бар', subcategory: 'Фреш соки' },
    { name: 'Апельсиновый', volume: '300ml', price: '55000сум', category: 'Бар', subcategory: 'Фреш соки' },
    { name: 'Яблоко-морковь', volume: '300ml', price: '35000сум', category: 'Бар', subcategory: 'Фреш соки' },
    { name: 'Апельсин-морковь', volume: '300ml', price: '45000сум', category: 'Бар', subcategory: 'Фреш соки' },

    // Классические чаи
    { name: 'Черный Ассам', volume: '800ml', price: '25000сум', category: 'Бар', subcategory: 'Классические чаи' },
    { name: 'Зеленый чай', volume: '800ml', price: '25000сум', category: 'Бар', subcategory: 'Классические чаи' },
    { name: 'Леди Грей', volume: '800ml', price: '25000сум', category: 'Бар', subcategory: 'Классические чаи' },
    { name: 'Жасмин Чан Хао', volume: '800ml', price: '25000сум', category: 'Бар', subcategory: 'Классические чаи' },
    { name: 'Травяной чай', volume: '800ml', price: '30000сум', category: 'Бар', subcategory: 'Классические чаи' },
    { name: 'Навват чай', volume: '800ml', price: '35000сум', category: 'Бар', subcategory: 'Классические чаи' },
    { name: 'Чай с лимоном', volume: '800ml', price: '30000сум', category: 'Бар', subcategory: 'Классические чаи' },
];
