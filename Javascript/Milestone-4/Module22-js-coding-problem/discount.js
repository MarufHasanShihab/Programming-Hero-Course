/* 
1. if ticket number is less than 100, per ticket price 100
2. if ticket number is more than 100, but less than 200 first 100 ticket will be 100/ rest ticket will be 90 tk per pice
first 100 --> 100tk
rest ---> 90tk
3. if you perchase more than 200 tickets
  first 100 --> 100tk
  101-200 --> 90tk
  200+ --> 70tk
 */


function calculateTicketPrice(ticketNumber){
    if(ticketNumber <= 100){
        return ticketNumber * 100;
    }else if(ticketNumber <= 200){
        return (100 * 100) + ((ticketNumber - 100) * 90);
    }else{
        return (100 * 100) + (100 * 90) + ((ticketNumber - 200) * 70);
    }
}

// Example usage:
const ticketPrice = calculateTicketPrice(300);
console.log(ticketPrice);