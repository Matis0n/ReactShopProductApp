import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";


const products = [
    {
        id: "01",
        title: "Бургер с курицей",
        price: 124.0,
        image01: product_01_image_01,
        image02: product_01_image_02,
        image03: product_01_image_03,
        category: "Burger",
        category_ru: "Бургер",
        desc: "Мини – бургер с сочной, хрустящей котлетой из рубленного куриного филе в панировке, с разными листьями салата, свежими овощами, маринованным огурцом, сыром чеддер и специальными соусами, которые придают бургеру насыщенный вкус. Подается с картофелем фри и кетчупом. ",
    },
    {
        id: "02",
        title: "Вегетарианская пицца",
        price: 415.0,
        image01: product_02_image_01,
        image02: product_02_image_02,
        image03: product_02_image_03,
        category: "Pizza",
        category_ru: "Пицца",
        desc: "Основа вегетарианской пиццы - это тесто, которое не содержит запрещенных продуктов для веганов. Тесто готовится из муки, дрожжей, соли и воды. Некоторые рецепты допускают добавление оливкового масла. Также некоторые клиенту заказывают вкусную вегетарианскую пиццу без дрожжей.",
    },

    {
        id: "03",
        title: "Маргаритта",
        price: 410.0,
        image01: product_03_image_01,
        image02: product_03_image_02,
        image03: product_03_image_03,
        category: "Pizza",
        category_ru: "Пицца",
        desc: "Пицца «Маргарита» - классическая итальянская пицца. Мягкое внутри и хрустящее снаружи тесто, сочетание расплавленного сыра и помидоров, пикантный аромат базилика сделали это блюдо любимым во всем мире. Пицца «Маргарита» - классическая итальянская пицца.",
    },

    {
        id: "04",
        title: "Зеленая волна",
        price: 410.0,
        image01: product_04_image_01,
        image02: product_04_image_02,
        image03: product_04_image_03,
        category: "Pizza",
        category_ru: "Пицца",
        desc: "Традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и прочие продукты.",
    },

    {
        id: "05",
        title: "Чиз Бургер",
        price: 124.0,
        image01: product_05_image_01,
        image02: product_05_image_02,
        image03: product_05_image_03,
        category: "Burger",
        category_ru: "Бургер",
        desc: "Гамбургер с сыром. Традиционно ломтик сыра кладется поверх мясной котлеты. Сыр обычно добавляют в готовящийся гамбургер незадолго до подачи на стол, что позволяет сыру расплавиться.",
    },
    {
        id: "06",
        title: "Королевский чизбургер",
        price: 154.0,
        image01: product_01_image_01,
        image02: product_01_image_02,
        image03: product_01_image_03,
        category: "Burger",
        category_ru: "Бургер",
        desc: "Состав: котлета из мяса свинины и говядины, сыр чеддер – 2 слайса, помидор, огурцы свежие, лук красный, соус цезарь, булочка.",
    },

    {
        id: "07",
        title: "Пицца с морепродуктами",
        price: 430.0,
        image01: product_02_image_02,
        image02: product_02_image_01,
        image03: product_02_image_03,
        category: "Pizza",
        category_ru: "Пицца",
        desc: "Традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и прочие продукты.",
    },

    {
        id: "08",
        title: "Тонкая сырная пицца",
        price: 415.0,
        image01: product_03_image_02,
        image02: product_03_image_01,
        image03: product_03_image_03,
        category: "Pizza",
        category_ru: "Пицца",
        desc: "«Сырная» пицца — море сливочно-творожной начинки из качественных молочных продуктов. Моцарелла и сулугуни сплетаются воедино, чтобы создать нежнейшую тягучесть в каждом куске пиццы. Хороший способ получить заряд энергии полезными жирами и белками после тренировки или трудоемких рабочих часов.",
    },

];

export default products;