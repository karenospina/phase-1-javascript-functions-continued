    function saturdayFun(activity) {
    if (activity) {
      return "This Saturday, I want to " + activity + "!";
    } else {
      return "This Saturday, I want to roller-skate!";
    }
  }
    
    const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
    console.log(mondayWork());


    function wrapAdjective(flair = "*") {
        return function(adjective = "special") {
          return `You are ${flair}${adjective}${flair}!`;
        }
      }
      const result = wrapAdjective("*")("wonderful");
      console.log(result); 
      
