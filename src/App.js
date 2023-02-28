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
          "createdAt": 'December 17, 2022 03:24:00'
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
          "createdAt": 'December 17, 2022 03:24:00'
        },
        {
          "id": "fjhdskajf3",
          "price": 234,
					"createdAt": 'November 17, 2022 03:24:00'
        },
         {
          "id": "fjhdskajfa",
          "price": 200,
          "createdAt": 'December 17, 2022 03:24:00'
        },
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


const allRewards = users.map(user => {
  const userId = user.id;

  const rewards = user.purchases.reduce((acc, purchase) => {
    const month = new Date(purchase.createdAt).toLocaleString('en-US', { month: 'short' });
    const year = new Date(purchase.createdAt).getFullYear();
    const key = `${month}-${year}`;
    const newPoints = (acc[key] ?? 0) + calculatePoints(purchase.price);
    return { ...acc, [key]: newPoints };
  }, {});

  return { userId, rewards };
});

    

 console.log(allRewards);


return (
  <div className="App">
    <h1>Rewards Table</h1>
    {allRewards.map((user) => {
      return (
        <div key={user.userId}>
          <h3>User ID: {user.userId}</h3>
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(user.rewards).map(([month, points]) => {
                return (
                  <tr key={month}>
                    <td>{month}</td>
                    <td>{points}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    })}
  </div>
);

  

}

export default App;
