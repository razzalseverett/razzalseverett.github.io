const data = {
  name: 'Razzals',
  description: 'Bar & Grill',
  location: '1114 Evergreen Way E,\n Everett WA',
  hours: 'Mon-Sat 11:30am - 2:00am,\n Sun 11:30am - 1:00am',
  phone: '(425) 290-6624',
  social: {
    yelp: 'https://www.yelp.com/biz/razzals-sports-bar-and-grill-everett',
    facebook: 'https://www.facebook.com/RazzalsEverett/',
    google: 'https://www.google.com/maps/place/Razzals+Bar+%26+Grill/@47.8971496,-122.2549635,17z/data=!3m1!4b1!4m5!3m4!1s0x549006b1e3b05341:0x9f0d2a1e1b03a9e6!8m2!3d47.8971496!4d-122.2527748',
  },
  events: [
    'Happy Hour 3pm to 7pm',
    'Tuesday - Tacos and Trivia 1 for $2, 3 for $5',
    'Wednesday - Ladies night $1 off all drinks, from 7pm',
    'Friday and Saturday - Karaoke, 9pm to 1am',
    'Thursday and Sunday - Bartender\'s choice $5 shots',
  ],
  menu: {
    groups: [
      {
        name: 'Sandwiches',
        description: 'With your choice of fries, pasta, backed potato, or potato salad',
        items: [
          {
            name: 'French Dip', 
            cost: 11.49, 
            description: 'Sliced roast beef with melted jack cheese, served on a French roll and au jus',
          },
          {
            name: 'Turkey Dip', 
            cost: 11.49, 
            description: 'Sliced roast beef with melted jack cheese, served on a French roll and au jus',
          },
          {
            name: 'Prim Rib Dip', 
            cost: 13.49,
            description: 'Thinly sliced tender prime rib on a French roll, served with au jus and horseradish',
          },
          {
            name: 'Swiss Burger Dip', 
            cost: 11.99,
            description: '⅓ lb burger and Swiss cheese on a French roll served with au jus',
          },
          {
            name: 'Fish Sandwich', 
            cost: 11.99,
            description: 'Battered cod, cheddar cheese, lettuce, onion, and tartar sauce on a kaiser bun',
          },
          {
            name: 'Steak Sandwich', 
            cost: 11.99,
            description: 'Thinly sliced flank steak, sauteed onion, Swiss cheese, and mushrooms on a French roll',
          },
          {
            name: 'Philly', 
            cost: 11.99,
            description: 'Roast beef, sauteed onions, red and green peppers with Swiss cheese on a French roll',
          },
          {
            name: 'Flat Iron', 
            cost: 12.99,
            description: 'Grilled flat iron steak, served with grilled onions and mushrooms on a kaiser bun',
          },
          {
            name: 'Swiss Patty Melt', 
            cost: 10.49,
            description: '⅓ lb burger, Swiss chesse, sauteed red onion on toasted sourdough',
          },
          {
            name: 'Bacon Chicken', 
            cost: 10.49,
            description: 'Grilled chicken breast topped with bacon, Swiss cheese, lettuce, tomato, and red onion',
          },
        ],
      },
      {
        name: 'Burgers',
        description: 'With your choice of fries, pasta, backed potato, or potato salad',
        items: [
          {
            name: 'Double Cheeseburger', 
            cost: 11.49, 
            description: 'Swiss, jack, cheddar and bacon on two 1/3 beef patties on our great kaiser bun with lettuce, tomato, and red onion',
            favorite: true,
          },
          {
            name: 'Razzal\'s Burger', 
            cost: 9.99,
            description: 'Charbroiled and topped with cheddar cheese, lettuce, tomato, and red onion',
          },
          {
            name: 'Bacon Cheeseburger', 
            cost: 10.49,
            description: 'Charbroiled and topped with bacon, cheddar and Swiss cheese, lettuce, tomato, and red onion',
          },
          {
            name: 'Penut Butter Cheddar Burger', 
            cost: 10.99, 
            description: '⅓ lb house-made chuck patty topped our penut butter spread, lettuce, tomato, cheddar cheese, and crisp bacon',
          },
          {
            name: 'Sriracha Jalapeno Burger', 
            cost: 10.99,
            description: '⅓ lb house-made chuck patty topped with sliced jalapenos, jack chesse, lettuce, tomato, and our house-made sriracha ranch',
          },
          {
            name: 'Mushroom Bleu Cheese Burger', 
            cost: 10.99,
            description: '⅓ lb house-made chuck patty topped with bleu cheese, sauteed mushrooms, lettuce, tomato, and red onion',
          },
          {
            name: 'Guacamole Burger', 
            cost: 10.99, 
            description: '⅓ lb house-made chuck patty topped with our house-made guacamole, Swiss cheese, bacon, lettuce, tomato, and red onion',
          },
        ],
      },
      {
        name: 'At the Deli',
        description: 'With your choice of fries, pasta, backed potato, or potato salad',
        items: [
          {
            name: 'B.L.T.', 
            cost: 7.99, 
            description: 'Old fashion favorite with crisp bacon, lettuce, and tomato on your choice of toasted wheat or sourdough',
          },
          {
            name: 'Chicken Caesar Wrap', 
            cost: 9.99,
            description: 'Caesar salad tossed with grilled or crispy chicken in a tomato basil tortilla',
          },
          {
            name: 'Half Sandwich and Soup', 
            cost: 8.49,
            description: 'Your choice of roast beef, ham or turkey on sourdough or wheat with a cup of our fresh made soup of the day',
          },
          {
            name: 'Turkey Melt', 
            cost: 9.99,
            description: 'Grilled turkey on toasted sourdough bread topped with Swiss and cheddar cheese, bacon and tomato',
          },
          {
            name: 'Classic Club', 
            cost: 9.99,
            description: 'Ham, turkey, mayonnaise, bacon, tomato and lettuce on your choice of toasted sourdough or wheat bread',
          },
          {
            name: 'Club Wrap', 
            cost: 9.99,
            description: 'Ham, turkey, mayonnaise, bacon, tomato and lettuce rolled in a tomato basil tortilla',
          },
        ],
      },
      {
        name: 'Greate Favorites',
        description: '',
        items: [
          {
            name: 'Chicken Strips', 
            cost: 12.99, 
            description: 'Breaded chicken served with fries and BBQ sauce. A really great finger food!',
          },
          {
            name: 'Blackend Chicken Fettuccine', 
            cost: 16.99,
            description: 'Grilled chicken breast served atop fettuccine noodles with mushrooms, green and red peppers in a creamy Alfredo sauce (served a la carte)'
          },
          {
            name: 'Halibut "N" Chips', 
            cost: 15.99,
            description: 'Wild caught Alaskan halibut tempura battered. Served with fries and tartar sauce'
          },
          {
            name: 'Cod "N" Chips', 
            cost: 9.99,
            description: 'Pacific cod tempura battered, fried to a golden brown, served with fries and tartar sauce'
          },
          {
            name: 'Dungeness Crab Fettuccine', 
            cost: 16.99,
            description: 'Dungeness crab and scallops sauteed with mushrooms, green and red peppers in a creamy Alfredo sauce (served a la carte)'
          },
        ],
      },
      {
        name: '',
        description: 'With a choice of baked potato, fries, pasta or potato salad and either cup of soup or dinner salad',
        items: [
          {
            name: 'Top Sirloin Oscar', 
            cost: 18.99, 
            description: 'Thick hand-cut and tender 8-oz top sirloin, topped with hot Dungeness crab and bay shrimp with bearnaise sauce',
            favorite: true,
          },
          {
            name: 'Prime Rib', 
            cost: 16.99,
            description: 'Seasoned, slow roasted 12-oz cut of prime rib served with real house-made horseraish and au jus',
          },
          {
            name: 'Flat Iron', 
            cost: 15.99,
            description: 'Tender 8-oz flat iron steak, charbroiled to your specification and topped with grilled onions and mushrooms',
          },
          {
            name: 'Grilled Rib-eye Steak', 
            cost: 17.99,
            description: 'This 14-oz rib-eye is our largest hand-cut steak, charbroiled and garnished with crispy onion rings',
          },
          {
            name: 'Top Sirloin', 
            cost: 15.99,
            description: 'Thick hand-cut and tender 8-oz top sirloin, charbroiled just the way you want, garnished with crispy onion rings',
          },
          {
            name: 'London Broil',
            cost: 13.99,
            description: 'Marinated strips of flank steak, grilled to your liking',
          },
        ],
      },
      {
        name: 'In the Garden',
        items: [
          {
            name: 'Jamaican Shrimp Caesar', 
            cost: 14.99, 
            description: 'Crisp romaine tossed in caesar dressing and topped with sauteed shrimp, scallops and prawns in our Jamaican seasoning',
          },
          {
            name: 'Chicken Caesar', 
            cost: 13.99,
            description: 'Fresh crisp romaine, our house-made Caesar dressing and croutons topped with seasoned diced grilled chicken breast',
          },
          {
            name: 'Calamari Caesar', 
            cost: 13.99,
            description: 'Crisp romaine, our house-made Caesar dressing topped with a generous portion of lightly fried calamari. Served with garlic bread',
          },
          {
            name: 'Bleu Cheese Steak Salad', 
            cost: 14.99,
            description: 'Grilled flank steak served on top of fresh mixed greens, topped with tomato and bleu cheese crumbles',
          },
          {
            name: 'Crispy Chicken Salad', 
            cost: 13.99,
            description: 'Salad greens topped with crispy chicken slices, tomato and mixed cheese with your choice of dressing',
          },
        ],
      },
      {
        name: 'Razzal\'s Nibbler\'s',
        items: [
          {
            name: 'Beyond Famous Nachos', 
            description: 'Fresh chips smothered in cheddar and mozzarella cheese, topped with tomato and red onion, with your choice of beef or chicken. Served with sour cream, salsa and guacamole',
            favorite: true,
            items: [
              {
                name: 'Single Size',
                cost: 8.49,
              },
              {
                name: 'Double Size',
                cost: 15.99,
              },
            ],
          },
          {
            name: 'Wing Plate',
            description: 'Your choice of BBQ, teriyaki or HOT sauce. Served with bleu cheese dressing and celery sticks',
            items: [
              {
                name: '12 Wings',
                cost: 12.99,
              },
              {
                name: '18 Wings',
                cost: 15.99,
              },
            ],
          },
          {
            name: 'Asian Sampler Plate', 
            cost: 14.99, 
            description: 'Pot stickers, teriyaki wings and flank steak skewers served with sweet Thai chili and teriyaki sauce',
          },
          {
            name: 'Seafood Sampler Plate', 
            cost: 14.49,
            description: 'Popcorn shrimp, bacon prawns and calamari served with cocktail and aioli sauce',
          },
          {
            name: 'Combo Platter', 
            cost: 13.99,
            description: 'Ravioli, onion rings, mini tacos and tato bites with dipping sauces',
          },
          {
            name: 'Chicken Strips',
            cost: 9.99,
            description: 'Golden fried chicken tender served with BBQ sauce',
          },
          {
            name: 'Calamari',
            cost: 8.99,
            description: 'Tender strips of seasoned calamari served with a zesty aioli sauce',
          },
          {
            name: 'Popcorn Shrimp',
            cost: 8.99,
            description: 'Bite sized breaded shrimp served with a tangy cocktail sauce',
          },
          {
            name: 'Pot Stickers',
            cost: 8.99,
            description: 'Fried pot stickers with teriyaki and sweet chili sauce',
          },
          {
            name: 'Mozzarella Cheese Sticks',
            cost: 9.99,
            description: 'Served with marinara sauce',
          },
          {
            name: 'Tato Bites',
            cost: 8.49,
            description: 'Blend of cheese and spices in a tater tot, served with ranch dressing',
          },
          {
            name: 'Quesadilla',
            cost: 10.49,
            description: 'Your choice of beef or chicken with cheddar mozzarella blend, tomato and red onion in a tomato basil tortilla. Served with salsa and sour cream',
          },
          {
            name: 'Mini Beef Tacos',
            cost: 8.49,
            description: 'Served with salsa and sour cream',
          },
          {
            name: 'Sweet Chili Chicken Tacos',
            cost: 10.99,
            description: 'Diced garlic chicken in sweet Thai chili sauce on a flour tortilla with shredded lettuce and mixed cheese',
          },
          {
            name: 'Blackened Fish Tacos',
            cost: 10.99,
            description: 'Grilled tilapia fillets on flour tortillas with shredded lettuce and aioli sauce',
          },
          {
            name: 'Onion Rings',
            cost: 8.49,
            description: 'Tempura battered and golden fried. Served with tartar sauce',
          },
          {
            name: 'Stuffed Skins',
            cost: 9.99,
            description: 'Large potato halves sutffed with taco meat, cheddar and mozzarella cheese, tomato, and red onion',
          },
          {
            name: 'Sliders (4)',
            cost: 9.99,
            description: 'Your choice of beef patty or crispy chicken',
          },
          {
            name: 'Steamed Clams',
            cost: 9.99,
            description: 'Steamed in a garlic butter and white wine sauce. Served with garlic bread',
          },
          {
            name: 'Sriracha Chicken Bites (12)',
            cost: 9.99,
            description: 'Sriracha breaded chicken bites fried golden and served with our house-made sriracha ranch',
          },
        ],
      },
    ],
  },
};
