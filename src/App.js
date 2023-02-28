import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const users =
[
    {
      "id": "fjaksdfljaskljf",
      "name": "bosi yzberishtit",
      "purchases": [
        {
          "id": "fjhdskajf",
          "price": 200,
          "createdAt": new Date()
        }
      ]
    },
    {
      "id": "fjhdskajf",
      "name": "bosi zogut te zi",
      "purchases": [
        {
          "id": "fjhdskajf",
          "price": 200,
            "createdAt": new Date()
        },
        {
          "id": "fjhdskajf",
          "price": 234,
					"createdAt": new Date()
        }
      ]
    }
  ]
    






function calculatePoints(price){
 		  if (price > 100) {
      return (price - 100) * 2 + 50;
    } else if (price > 50) {
      return price - 50;
    } else {
      return 0;
    }
}


const rewards = users.map(user => {
  const userId = user.id;

  const rewards = user.purchases.reduce((acc, purchase) => {
    const month = new Date(purchase.createdAt).getMonth();
    const year = new Date(purchase.createdAt).getFullYear();
    const key = `${month}-${year}`;
    const newPoints = (acc[key] ?? 0) + calculatePoints(purchase.price);
    return { ...acc, [key]: newPoints };
  }, {});

  return { userId, rewards };
});

    

 console.log(rewards);

  // return (
  //   <div className="App">
     
  //   </div>
  // );
}

export default App;
