var fibonacci = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var series = fibonacci(n - 1);
    series.push(series[series.length - 1] + series[series.length - 2]);
    return series;
  }
};

// Uncomment the code below to print to console
//  console.log(fibonacci(10));
