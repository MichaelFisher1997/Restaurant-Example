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
    ],
  },
];
