import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const dataRewards = [ 
 
    {
      userId: '1u',
        rewards:[
           {
            rewardId: '1r',
            purchase: 110, 
            dateTime:'December 17, 1995 03:24:00'
          },
          {
            rewardId: '1r',
            purchase: 120, 
            dateTime:'December 17, 1995 03:24:00'
          },
          {
            rewardId: '1r',
            purchase: 110, 
            dateTime:'November 17, 1995 03:24:00'
          },
         ],
  },
      {
        userId: '2u',
          rewards:[
          {
            rewardId: '1r',
            purchase: 120, 
            dateTime:'December 17, 1995 03:24:00'
          }
        ],
      }
    ]
    
    const [rewards, setRewards] = useState([])
  // useEffect(()=>{
  //   let fetchRes = fetch(
  //     "https://jsonplaceholder.typicode.com/todos/1").then(response=> response.json()).then(data=> setRewards(data))
    
  //  },[])
    
    // setRewards(dataRewards)

    //Evaluate reward pooints


    const evaluateRewardPoints = (reward) => {
      let onePoint =0;
      let twoPoint = 0;
    
      if(reward> 100){
        twoPoint = (reward-100)*2
        if(reward >50){

          onePoint = 100 - 50; 
        }
      }else if(reward >50){
          
        onePoint = reward - 50; 
      }
    
  return  onePoint + twoPoint 
    }

    const evaluateRewards = (rewards,evaluateRewardPoints)=>{
      const userRewards = []
       userRewards.push(rewards.map(user =>(
                      {
                        userId:user.userId, 
                        rewardPoints:user.rewards.map(reward => (
                          {
                          month:reward.dateTime.split(' '),
                            purchase:evaluateRewardPoints(reward.purchase)
                          }
                          ))})))
                          
  
     return userRewards

    }
    useEffect(()=>{  setRewards(evaluateRewards(dataRewards,evaluateRewardPoints))},[])

   
    const finalRewards = (rewards) =>{
 
      const array = []
      const unique =[]
      rewards[0].forEach(item => array.push({userId:item.userId, points:item.rewardPoints.forEach(
        ele => {

          const month = ele.month[0];
          const purchase = ele.purchase;
          
          const existingMonthIndex = unique.findIndex((item) => item.month === month);
  
          if (existingMonthIndex === -1) {
            unique.push({ month, points: purchase });
        
          } else {
            unique[existingMonthIndex].points += purchase;
          }
    
        // if(unique.length<1){

        //    unique.push({month:ele.month[0],points:ele.purchase})
        //    console.log(unique)
        //  }
        //  else if(unique.filter(item=> !item.month.includes(ele.month[0]))){

        //     unique.push({month:ele.month[0],points:ele.purchase})
        //     console.log(unique)
        //   }else{
        //     unique.points+=ele.purchase
      
        //   }
         
      
        }
        
      )}))

      return array
    }

    
if (rewards.length > 0) {
 console.log(finalRewards(rewards));
}
  // return (
  //   <div className="App">
     
  //   </div>
  // );
}

export default App;
