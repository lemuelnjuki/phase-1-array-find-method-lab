// code your solution here
 function superbowlWin(record) {
    const result = record.find( the=> the.result === "W" );
   if (result){
    return result.year;
   }
  } 