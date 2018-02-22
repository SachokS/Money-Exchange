// PLEASE DON'T change function name
module.exports = function makeExchange(currency)

    {
        var answer = {};
    if(currency===0)
      {
        return(answer);
    	}
      if(currency>9999)
      {
        var m = {error : "You are rich, my friend! We don't have so much coins for exchange"};
        return (m);
      }
      var P=0;
      var N=0;
      var D=0;
      var Q=0;
      var H=0;
      while(currency >= 50)
      {
        currency=currency-50;
        H = H + 1;
        answer.H = H;
      }
        while(currency >= 25)
      {
        currency=currency-25;
        Q = Q + 1;
        answer.Q = Q;
      }
       while(currency >= 10)
      {
        currency=currency-10;
        D = D + 1;
        answer.D = D;
      }
       while(currency >= 5)
      {
        currency=currency-5;
        N = N + 1;
        answer.N = N;
      }
       while(currency >= 1)
      {
        currency=currency-1;
        P = P + 1;
        answer.P = P;
      }
    return answer;
  }
