export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    name: 'Starters',
    items: [
      {
        id: '1',
        name: 'Classic Caesar Salad',
        description: 'Crisp romaine lettuce, parmesan cheese, croutons, and creamy Caesar dressing.',
        price: 9.75,
        image: '/images/salad.jpg',
      },
      {
        id: '6',
        name: 'Garlic Bread with Cheese',
        description: 'Toasted baguette slices topped with garlic butter and melted mozzarella.',
        price: 6.50,
        image: '/images/garlic-bread.webp',
      },
      {
        id: '7',
        name: 'Tomato Bruschetta',
        description: 'Grilled bread rubbed with garlic and topped with ripe tomatoes, fresh basil, and olive oil.',
        price: 8.00,
        image: '/images/bruschetta.webp',
      },
      {
        id: '13',
        name: 'Mushroom Soup',
        description: 'Creamy mushroom soup, garnished with fresh parsley and a swirl of cream.',
        price: 7.25,
        image: '/images/mushroom-soup.webp',
      },
      {
        id: '14',
        name: 'Shrimp Cocktail',
        description: 'Classic shrimp cocktail served in a chilled martini glass with a vibrant red cocktail sauce.',
        price: 11.50,
        image: '/images/shrimp-cocktail.webp',
      },
    ],
  },
  {
    name: 'Main Courses',
    items: [
      {
        id: '2',
        name: 'Margherita Pizza',
        description: 'Fresh mozzarella, basil, and San Marzano tomato sauce on a hand-tossed crust.',
        price: 15.50,
        image: '/images/pizza.jpg',
      },
      {
        id: '3',
        name: 'Classic Burger',
        description: 'A juicy beef patty with lettuce, tomato, onion, and pickles on a brioche bun.',
        price: 12.99,
        image: '/images/burger.jpg',
      },
      {
        id: '4',
        name: 'Spaghetti Carbonara',
        description: 'Classic Italian pasta dish with eggs, hard cheese, cured pork, and black pepper.',
        price: 14.00,
        image: '/images/carbonara.jpg',
      },
      {
        id: '8',
        name: 'Grilled Salmon',
        description: 'Pan-seared salmon fillet with roasted asparagus and lemon-dill sauce.',
        price: 18.75,
        image: '/images/salmon.webp',
      },
      {
        id: '9',
        name: 'Vegetable Lasagna',
        description: 'Layers of pasta, rich tomato sauce, ricotta, and seasonal vegetables, baked to perfection.',
        price: 13.50,
        image: '/images/lasagna.webp',
      },
      {
        id: '15',
        name: 'Filet Mignon',
        description: 'Perfectly cooked filet mignon with a seared crust and a juicy, pink interior.',
        price: 29.99,
        image: '/images/filet-mignon.webp',
      },
      {
        id: '16',
        name: 'Chicken Alfredo',
        description: 'Fettuccine pasta in a rich, creamy parmesan sauce with tender grilled chicken breast strips.',
        price: 16.75,
        image: '/images/chicken-alfredo.webp',
      },
      {
        id: '17',
        name: 'Mushroom Risotto',
        description: 'Creamy mushroom risotto with Arborio rice, wild mushrooms, and parmesan cheese.',
        price: 15.25,
        image: '/images/mushroom-risotto.webp',
      },
    ],
  },
  {
    name: 'Desserts',
    items: [
      {
        id: '5',
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with a molten chocolate center, served with vanilla ice cream.',
        price: 7.50,
        image: '/images/lava-cake.jpg',
      },
      {
        id: '10',
        name: 'New York Cheesecake',
        description: 'Creamy cheesecake on a graham cracker crust, topped with berry compote.',
        price: 6.99,
        image: '/images/cheesecake.webp',
      },
      {
        id: '18',
        name: 'Apple Pie',
        description: 'A slice of classic apple pie with a golden, flaky crust, served with vanilla ice cream.',
        price: 6.50,
        image: '/images/apple-pie.webp',
      },
      {
        id: '19',
        name: 'Tiramisu',
        description: 'A slice of tiramisu with layers of coffee-soaked ladyfingers and creamy mascarpone cheese.',
        price: 7.75,
        image: '/images/tiramisu.webp',
      },
    ],
  },
  {
    name: 'Drinks',
    items: [
      {
        id: '11',
        name: 'Fresh Orange Juice',
        description: 'Freshly squeezed oranges, pure and refreshing.',
        price: 4.00,
        image: '/images/orange-juice.webp',
      },
      {
        id: '12',
        name: 'Sparkling Water',
        description: 'Chilled sparkling mineral water.',
        price: 3.00,
        image: '/images/sparkling-water.webp',
      },
      {
        id: '20',
        name: 'Espresso',
        description: 'A cup of freshly brewed espresso with a rich, dark color and a layer of crema on top.',
        price: 3.50,
        image: '/images/espresso.webp',
      },
      {
        id: '21',
        name: 'Iced Tea',
        description: 'A tall glass of iced tea, filled with ice cubes and a lemon slice.',
        price: 3.25,
        image: '/images/iced-tea.webp',
      },
    ],
  },
];
