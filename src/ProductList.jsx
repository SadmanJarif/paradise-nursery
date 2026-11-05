import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './App.css';

// Paradise Nursery — ProductList
// 4 categories, 6 unique houseplants per category = 24 plants in total.
// Each plant has a name, image, price (cost) and description.
// "Add to Cart" disables after a plant is added, and the navbar cart
// count (from Redux) increments via the addItem action.
const IMG = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&q=80`;

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: IMG('photo-1593482892290-f54927ae1bb6'), description: 'A hardy, low-maintenance plant that filters indoor air and thrives in low light.', cost: 15 },
      { name: 'Spider Plant', image: IMG('photo-1572688484438-313a6e50c333'), description: 'A fast-growing air purifier with arching green-and-white leaves, safe for pets.', cost: 12 },
      { name: 'Peace Lily', image: IMG('photo-1593691509543-c55fb32d8de5'), description: 'Elegant white blooms and glossy leaves that remove common indoor toxins.', cost: 18 },
      { name: 'Boston Fern', image: IMG('photo-1470058869958-2a77ade41c02'), description: 'A lush, feathery fern that humidifies the air and loves indirect light.', cost: 14 },
      { name: 'Rubber Plant', image: IMG('photo-1512428813834-c702c7702b78'), description: 'A bold, glossy-leaved plant that grows tall and cleans the air in large rooms.', cost: 20 },
      { name: 'Golden Pothos', image: IMG('photo-1485955900006-10f4d324d411'), description: 'A trailing vine that is almost impossible to kill and purifies the air.', cost: 10 },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      { name: 'Lavender', image: IMG('photo-1499002238440-d264edd596ec'), description: 'Calming purple blooms with a soothing scent, perfect for bedrooms.', cost: 16 },
      { name: 'Jasmine', image: IMG('photo-1466692476868-aef1dfb1e735'), description: 'Sweetly scented white flowers that bloom in summer and fill a room with fragrance.', cost: 19 },
      { name: 'Rosemary', image: IMG('photo-1515586000433-45406d8e6662'), description: 'A fragrant culinary herb with needle-like leaves, great for kitchens and cooking.', cost: 11 },
      { name: 'Mint', image: IMG('photo-1622979135225-d2ba269cf1ac'), description: 'Fresh, cooling mint leaves for tea, cooking and a naturally fragrant home.', cost: 9 },
      { name: 'Sweet Basil', image: IMG('photo-1618375569909-3c8616cf7733'), description: 'Aromatic basil with bright green leaves, ideal for pesto, salads and sunny windowsills.', cost: 10 },
      { name: 'Lemon Balm', image: IMG('photo-1509423350716-97f9360b4e09'), description: 'A lemon-scented herb that calms the senses and makes a refreshing tea.', cost: 12 },
    ],
  },
  {
    category: 'Insect Repellent Plants',
    plants: [
      { name: 'Citronella Grass', image: IMG('photo-1416879595882-3373a0480b5b'), description: 'The classic mosquito-repelling plant, with a strong citrus scent.', cost: 13 },
      { name: 'Marigold', image: IMG('photo-1497250681960-ef046c08a56e'), description: 'Bright orange blooms whose scent keeps aphids and mosquitoes away.', cost: 8 },
      { name: 'Catnip', image: IMG('photo-1459156212016-c812468e2115'), description: 'Cats love it, mosquitoes hate it — a fun, useful plant for sunny spots.', cost: 9 },
      { name: 'Lemongrass', image: IMG('photo-1520412099551-62b6bafeb5bb'), description: 'Tall, citrus-scented grass that repels insects and flavours Asian cooking.', cost: 12 },
      { name: 'Peppermint', image: IMG('photo-1463320726281-696a485928c7'), description: 'Strong mint scent that deters ants and mosquitoes, and freshens any room.', cost: 10 },
      { name: 'Eucalyptus', image: IMG('photo-1502672260266-1c1ef2d93688'), description: 'Silver-blue leaves with a clean, medicinal scent that insects avoid.', cost: 17 },
    ],
  },
  {
    category: 'Medicinal Plants',
    plants: [
      { name: 'Aloe Vera', image: IMG('photo-1596547609652-9cf5d8d76921'), description: 'Soothes burns and skin irritation, and stores water in its thick leaves.', cost: 14 },
      { name: 'Turmeric Plant', image: IMG('photo-1615485290382-441e4d049cb5'), description: 'Grown for its golden root, long used for its anti-inflammatory properties.', cost: 15 },
      { name: 'Ginger Plant', image: IMG('photo-1615485290382-441e4d049cb5'), description: 'Fresh ginger root for cooking and tea, known for easing nausea and colds.', cost: 13 },
      { name: 'Chamomile', image: IMG('photo-1499002238440-d264edd596ec'), description: 'Delicate daisy-like flowers that make a calming bedtime tea.', cost: 11 },
      { name: 'Echinacea', image: IMG('photo-1466692476868-aef1dfb1e735'), description: 'Purple coneflower traditionally used to support the immune system.', cost: 16 },
      { name: 'Calendula', image: IMG('photo-1497250681960-ef046c08a56e'), description: 'Bright healing flowers used in skin balms and soothing teas.', cost: 10 },
    ],
  },
];

function ProductList({ onAddToCart }) {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
    if (onAddToCart) onAddToCart(plant);
  };

  return (
    <div className="product-grid">
      {plantsArray.map((category, index) => (
        <div key={index} className="product-category">
          <h2>{category.category}</h2>
          <div className="product-list">
            {category.plants.map((plant, plantIndex) => (
              <div key={plantIndex} className="product-card">
                <img className="product-image" src={plant.image} alt={plant.name} />
                <div className="product-title">{plant.name}</div>
                <div className="product-description">{plant.description}</div>
                <div className="product-price">${plant.cost}</div>
                <button
                  className="product-button"
                  onClick={() => handleAddToCart(plant)}
                  disabled={!!addedToCart[plant.name]}
                >
                  {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
export { plantsArray };
