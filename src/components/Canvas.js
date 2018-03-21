import React from 'react';

class Canvas extends React.Component {


  componentDidMount() {
        this.updateCanvas();

    }

    componentDidUpdate(){
      if (this.props.action === 'EXECUTE_ALL' && this.props.updateCanvas || this.props.action === 'RERENDER_ROW' && this.props.updateCanvas){
        this.updateCanvas();
      }
    }

  updateCanvas() {
    const canvas = this.refs.canvas;
     const ctx = canvas.getContext('2d');
     let height = 100;

     function drawTriangle(position, color){

         var x = position+10;
         ctx.strokeStyle= 'black';
         ctx.beginPath();
         ctx.moveTo(x, height);
         ctx.lineTo(x+40, height-50);
         ctx.lineTo(x+80, height);
         ctx.fillStyle = color;
         ctx.lineTo(x, height);
         ctx.stroke();
         ctx.fill();

     }

     function drawRect(position, color) {
         ctx.strokeStyle= 'black';
         var x = (position-1)*100+25;
         ctx.fillStyle = color;
         ctx.stroke();
         ctx.fillRect(x, height-50, 50 , 50);
         ctx.strokeRect(x, height-50, 50 , 50);

     }

     function drawPentagon(position, color) {
         ctx.strokeStyle= 'black';
         var x = (position-1)*100+25;
         ctx.fillStyle = color;
         ctx.beginPath();
         ctx.moveTo(x+10, height);
         ctx.lineTo(x, height-30);
         ctx.lineTo(x+30, height-50);
         ctx.lineTo(x+60, height-30);
         ctx.lineTo(x+50, height);
         ctx.lineTo(x+10, height);
         ctx.stroke();
         ctx.fill();
     }

     function drawHexagon(position, color){

         ctx.strokeStyle= 'black';
         var x = (position-1)*100+25;
         ctx.fillStyle = color;
         ctx.beginPath();
         ctx.moveTo(x, height);
         ctx.lineTo(x, height-40);
         ctx.lineTo(x+30, height-50);
         ctx.lineTo(x+60, height-40);
         ctx.lineTo(x+60, height);
         ctx.lineTo(x+30, height+10);
         ctx.lineTo(x, height);
         ctx.stroke();
         ctx.fill();
     }

     function drawHeptagon(position, color){
         ctx.strokeStyle="black";
         var x = (position-1)*100+25;
         ctx.fillStyle = color;
         ctx.beginPath();
         ctx.moveTo(x, height-5);
         ctx.lineTo(x+5, height-40);
         ctx.lineTo(x+30, height-50);
         ctx.lineTo(x+55, height-40);
         ctx.lineTo(x+60, height-5);
         ctx.lineTo(x+45, height+5);
         ctx.lineTo(x+15, height+5);
         ctx.lineTo(x, height-5);
         ctx.stroke();
         ctx.fill();
     }

     function drawOctagon(position, color){
       ctx.strokeStyle="black";
       var x = (position-1)*100+25;
       ctx.fillStyle = color;
       ctx.beginPath();
       ctx.moveTo(x, height);
       ctx.lineTo(x, height-40);
       ctx.lineTo(x+15, height-50);
       ctx.lineTo(x+45, height-50);
       ctx.lineTo(x+60, height-40);
       ctx.lineTo(x+60, height);
       ctx.lineTo(x+45, height+10);
       ctx.lineTo(x+15, height+10);
       ctx.lineTo(x, height);
       ctx.stroke();
       ctx.fill();
     }

     function drawStaticSolution(){

       drawTriangle(1,'black');
       drawRect(2,'black');
       drawPentagon(3,'black');
       drawHexagon(4,'black');

       height += 70;
       drawTriangle(1,'black');
       drawRect(2,'black');
       drawPentagon(3,'black');
       drawHexagon(4,'gray');

       height += 70;
       drawTriangle(1,'black');
       drawRect(2,'black');
       drawPentagon(3,'white');
       drawHexagon(4,'gray');

       height += 70;
       drawTriangle(1,'black');
       drawRect(2,'black');
       drawPentagon(3,'white+');
       drawHexagon(4,'white');

       height += 70;
       drawTriangle(1,'black');
       drawRect(2,'gray');
       drawPentagon(3,'white');
       drawHexagon(4,'white');

       height += 70;
       drawTriangle(1,'black');
       drawRect(2,'gray');
       drawPentagon(3,'white');
       drawHexagon(4,'black');

       height += 70;
       drawTriangle(1,'black');
       drawRect(2,'gray');
       drawPentagon(3,'gray');
       drawHexagon(4,'black');

       height += 70;
       drawTriangle(1,'black');
       drawRect(2,'gray');
       drawPentagon(3,'gray');
       drawHexagon(4,'gray');

       height += 70;
       drawTriangle(1,'white');
       drawRect(2,'gray');
       drawPentagon(3,'gray');
       drawHexagon(4,'gray');

       height += 70;
       drawTriangle(1,'white');
       drawRect(2,'gray');
       drawPentagon(3,'gray');
       drawHexagon(4,'white');

       height += 70;
       drawTriangle(1,'white');
       drawRect(2,'gray');
       drawPentagon(3,'black');
       drawHexagon(4,'white');

       height += 70;
       drawTriangle(1,'white');
       drawRect(2,'gray');
       drawPentagon(3,'black');
       drawHexagon(4,'black');

       height += 70;
       drawTriangle(1,'white');
       drawRect(2,'white');
       drawPentagon(3,'black');
       drawHexagon(4,'black');

       height += 70;
       drawTriangle(1,'white');
       drawRect(2,'white');
       drawPentagon(3,'black');
       drawHexagon(4,'gray');

       height += 70;
       drawTriangle(1,'white');
       drawRect(2,'white');
       drawPentagon(3,'white');
       drawHexagon(4,'gray');

       height += 70;
       drawTriangle(1,'white');
       drawRect(2,'white');
       drawPentagon(3,'white');
       drawHexagon(4,'white');



     }

     function createRow(str) {

       var queryArray = str.split(' ').map(item => item.split(''));
       console.log('thuts work: array ');
       console.log(queryArray);
       console.log(str);
       if (queryArray.length>1){

       queryArray.map( ( item ) => {
         console.log(item[0]+" "+item[1])
         switch (item[0]+'|'+item[1]) {
           case '3|W':
             drawTriangle(1, 'white');
             break;
           case '3|G':
             drawTriangle(1, 'gray');
             break;
           case '3|B':
             drawTriangle(1, 'black');
             break;

           case '4|W':
             drawRect(2, 'white');
             break;
           case '4|G':
             drawRect(2, 'gray');
             break;
           case '4|B':
             drawRect(2, 'black');
             break;

           case '5|W':
             drawPentagon(3, 'white');
             break;
           case '5|G':
             drawPentagon(3, 'gray');
             break;
           case '5|B':
             drawPentagon(3, 'black');
             break;

           case '6|W':
             drawHexagon(4, 'white');
             break;
           case '6|G':
             drawHexagon(4, 'gray');
             break;
           case '6|B':
             drawHexagon(4, 'black');
             break;

           case '7|W':
             drawHeptagon(5, 'white');
             break;
           case '7|G':
             drawHeptagon(5, 'gray');
             break;
           case '7|B':
             drawHeptagon(5, 'black');
             break;

           case '8|W':
             drawOctagon(6, 'white');
             break;
           case '8|G':
             drawOctagon(6, 'gray');
             break;
           case '8|B':
             drawOctagon(6, 'black');
             break;
               }

           });
         }

     }

     function rerender(str){
       var i = 0;
       var timerId = setInterval(function(){
         ctx.fillStyle = 'rgba(241,241,241,'+i+')';
         ctx.fillRect(0,0,canvas.width, canvas.height);
         i += 0.1;
         console.log(i);
         if (i>1.0){
           console.log('here!');
           createRow(str);
           clearInterval(timerId);
         }
       }, 50);
     }

     function executeAll(queryArray) {
       var i = 0;
       var timerId = setInterval(function(){
         console.log('current element ' + queryArray[i] + 'i');
         console.log('array '+queryArray);
         rerender(queryArray[i]);
         i++;
         if (i>=queryArray.length){
            clearInterval(timerId);
         }
       }, 10);

     }


     console.log('action: '+this.props.action);
      switch (this.props.action) {
        case 'SHOW_ROW':
        createRow(this.props.query);
          break;
        case 'RERENDER_ROW':
          rerender(this.props.query);
          break;
        case 'EXECUTE_ALL':
          executeAll(this.props.query)
          break;
        case 'DRAW_STATIC':
          drawStaticSolution();
          break;
      }
    }

    render(){
      if (this.props.action === 'RERENDER_ROW' && this.props.updateCanvas){
        this.updateCanvas();
      }
      return(
        <canvas ref="canvas" width={this.props.width} height={this.props.height}/>
      )
    }
}

export default Canvas;
