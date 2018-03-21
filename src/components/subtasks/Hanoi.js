function hanoi(str, action){

    function changeAllToWhite(length, src, dest, temp){
        if (length==0){
            return;
        }

        changeAllToWhite(length-1, src, temp, dest);
        switch (src + "|" +dest) {
            case "B|G":
                stackG.push(stackB.pop());
                result.push([stackG[stackG.length-1], src, dest]);
                console.log(stackG[stackG.length-1]+" "+src+" -> "+dest);
                break;

                case "B|W":
                stackW.push(stackB.pop());
                result.push([stackW[stackW.length-1], src, dest]);
                console.log(stackW[stackW.length-1]+" "+src+" -> "+dest);
                break;

                case "G|B":
                stackB.push(stackG.pop());
                result.push([stackB[stackB.length-1], src, dest]);
                console.log(stackB[stackB.length-1]+" "+src+" -> "+dest);
                break;


                case "G|W":
                stackW.push(stackG.pop());
                result.push([stackW[stackW.length-1], src, dest]);
                console.log(stackW[stackW.length-1]+" "+src+" -> "+dest);
                break;

                case "W|G":
                stackG.push(stackW.pop());
                result.push([stackG[stackG.length-1], src, dest]);
                console.log(stackG[stackG.length-1]+" "+src+" -> "+dest);
                break;

                case "W|B":
                stackB.push(stackW.pop());
                result.push([stackB[stackB.length-1], src, dest]);
                console.log(stackB[stackB.length-1]+" "+src+" -> "+dest);
                break;


        }
        changeAllToWhite(length-1, temp,dest,src);
    }

    let puzzleArray = [];
    var stackB = [];
    var stackG = [];
    var stackW = [];

    puzzleArray = str.split(' ').map(item => item.split(''))  ;
    puzzleArray.map( ( elem  )=>{
      switch (elem[1]) {
        case 'B':
          stackB.push(elem[0]);
          break;

        case 'G':
          stackG.push(elem[0]);
          break;

        case 'W':
          stackW.push(elem[0]);
          break;
      }
    });

    stackB.sort();
    stackG.sort();
    stackW.sort();

    let order = [];
    if (stackB.length>stackG.length){
      order.push('B', 'G');
    }else{
      order.push('G','B');
    }


    let result = [];

    if (action === "CHANGE_ALL_TO_WHITE"){
      changeAllToWhite(puzzleArray.length, order[0], 'W', order[1]  );
    }

    return result;

}



export default hanoi;
