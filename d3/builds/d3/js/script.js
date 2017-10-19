// var ringText = (function() {

//     var $fancyTitle = $('.fancy_title');
//     var $formButton = $('#submit');
//     var $userInput = $('#tText');
//     var char1;
//     var char2;
//     var char3;
//     var char4;
//     var char5;
//     var char6;
//     var char7;

//     var init = function() {
//         $fancyTitle.text('CAVS');
//     }

//     var updateText = function() {
//         $fancyTitle.text("");
//         if ($userInput.val() != "" && $userInput.val().length <= 7) {
//             $userInput.css({
//                 'border': '1px solid #ccc'
//             });

//             switch ($userInput.val().length) {
//                 case 1:
//                     render(1);
//                     break;
//                 case 2:
//                     render(2);
//                     break;
//                 case 3:
//                     render(3);
//                     break;
//                 case 4:
//                     render(4);
//                     break;
//                 case 5:
//                     render(5);
//                     break;
//                 case 6:
//                     render(6);
//                     break;
//                 case 7:
//                     render(7);
//                     break;
//                 default:
//                     console.log("error");
//                     break;
//             }
//         } else {
//             $userInput.css({
//                 'border': '1px solid red'
//             });
//         }
//     }

//     var render = function(num) {
//         if (num === 1) {
//             $fancyTitle.text($userInput.val().toUpperCase()).lettering();
//             $fancyTitle.css({
//                 'font-size': '75px',
//                 'letter-spacing': '22px'
//             });
//             char1 = $('.char1');
//             char1.css({
//                 'left': '95px',
//                 'top': '3px',
//                 'transform': 'scaleY(1) rotate(0deg)'
//             });
//         } else if (num === 2) {
//             $fancyTitle.text($userInput.val().toUpperCase()).lettering();
//             $fancyTitle.css({
//                 'font-size': '85px',
//                 'letter-spacing': '22px',
//                 'left':'125px'
//             });
//             char1 = $('.char1');
//             char2 = $('.char2');
//             char1.css({
//                 'left': '75px',
//                 'top': '0px',
//                 'transform': 'scale(1) rotate(0deg)'
//             });
//             char2.css({
//                 'left': '60px',
//                 'top': '0px',
//                 'transform': 'scale(1) rotate(0deg)'
//             });
//         } else if (num === 3) {
//             $fancyTitle.text($userInput.val().toUpperCase()).lettering();
//             $fancyTitle.css({
//                 'left':'130px',
//                 'font-size': '83px',
//                 'letter-spacing': '15px'
//             });
//             char1 = $('.char1');
//             char2 = $('.char2');
//             char3 = $('.char3');
//             char1.css({
//                 'left': '40px',
//                 'top': '4px',
//                 'transform': 'scaleY(1.1) rotate(-10deg)'
//             });
//             char2.css({
//                 'left': '40px',
//                 'top': '1px',
//                 'transform': 'scaleY(1)'
//             });
//             char3.css({
//                 'left': '40px',
//                 'top': '5px',
//                 'transform': 'scaleY(1.1) rotate(15deg)' //
//             });
//         } else if (num === 4) {
//             // whatLetter($userInput.val().toUpperCase());
//             $fancyTitle.text($userInput.val().toUpperCase()).lettering();
//             $fancyTitle.css({
//                 'width':'285px',
//                 'left': '138px',
//                 'font-size': '70px',
//                 'letter-spacing': '14px'
//             });
//             char1 = $('.char1');
//             char2 = $('.char2');
//             char3 = $('.char3');
//             char4 = $('.char4');
//             char1.css({
//                 // 'width':'75px',
//                 'top': '10px',
//                 'transform': 'rotate(-6deg) scaleY(1.15)' 
//             });
//             char2.css({
//                 // 'width':'65px',
//                 'top': '-2px',
//                 'transform': 'scaleY(1.2) rotate(-4deg)' 
//             });
//             char3.css({
//                 // 'width':'55px',
//                 'bottom':'0px',
//                 'transform ': 'scaleY(1.1) rotate(4deg)'
//             });
//             char4.css({
//                 //  'width':'50px',
//                 'top': '6px',
//                 'transform': 'scaleY(1.4) rotate(7deg)'  
//             });
//         } else if (num === 5) {
//             $fancyTitle.text($userInput.val().toUpperCase()).lettering();
//             $fancyTitle.css({
//                 'left': '136px',
//                 'font-size': '85px',
//                 'letter-spacing': '7px'
//             });
//             char1 = $('.char1');
//             char2 = $('.char2');
//             char3 = $('.char3');
//             char4 = $('.char4');
//             char5 = $('.char5');
//             char1.css({
//                 'top': '6px',
//                 'transform': 'scale(1,1.30) rotate(-9deg)'
//             });
//             char2.css({
//                 'top': '1px',
//                 'transform': 'scaleY(1.1) rotate(-6deg)'
//             });
//             char3.css({
//                 'top': '-2px',
//                 'transform': 'scaleY(1.1) rotate(0)'
//             });
//             char4.css({
//                 'top': '1px',
//                 'transform': 'scaleY(1.1) rotate(6deg)'
//             });
//             char5.css({
//                 'top': '8px',
//                 'transform': 'scaleY(1.2) rotate(9deg)'
//             });
//         } else if (num === 6) {
//             $fancyTitle.text($userInput.val().toUpperCase()).lettering();
//             $fancyTitle.css({
//                 'font-size': '85px',
//                 'letter-spacing': '-3px'
//             });
//             char1 = $('.char1');
//             char2 = $('.char2');
//             char3 = $('.char3');
//             char4 = $('.char4');
//             char5 = $('.char5');
//             char6 = $('.char6');
//             char1.css({
//                 'top': '5px',
//                 'transform': 'scale(1,1.30) rotate(-8deg)'
//             });
//             char2.css({
//                 'top': '1px',
//                 'transform': 'rotate(-6deg) scaleY(1.1)'
//             });
//             char3.css({
//                 'top': '-2px',
//                 'transform': 'rotate(0)'
//             });
//             char4.css({
//                 'top': '-3px',
//                 'transform': 'scaleY(1) rotate(1deg)'
//             });
//             char5.css({
//                 'top': '0px',
//                 'transform': 'scaleY(1.1) rotate(6deg)'
//             });
//             char6.css({
//                 'top': '4px',
//                 'transform': 'scale(1,1.3) rotate(9deg)'
//             });
//         } else if (num === 7) {
//             $fancyTitle.text($userInput.val().toUpperCase()).lettering();
//             $fancyTitle.css({
//                 'left': '135px',
//                 'font-size': '65px',
//                 'letter-spacing': '-1px'  
//             }); 
//             char1 = $('.char1');
//             char2 = $('.char2');
//             char3 = $('.char3');
//             char4 = $('.char4');
//             char5 = $('.char5');
//             char6 = $('.char6');
//             char7 = $('.char7');
//             char1.css({
//                 'top': '8px',
//                 'transform': 'scaleY(1,1.3) rotate(-6deg)'
//             });
//             char2.css({
//                 'top': '-2px',
//                 'transform': 'scaleY(1.5) rotate(-6deg)'
//             });
//             char3.css({
//                 'top': '-4px',
//                 'transform': 'scaleY(1.3) rotate(-6deg)'
//             });
//             char4.css({
//                 'top': '-5px',
//                 'transform': 'scaleY(1.3) rotate(2deg)'
//             });
//             char5.css({
//                 'top': '-4px',
//                 'transform': 'scaleY(1.3) rotate(2deg)'
//             });
//             char6.css({
//                 'top': '3px',
//                 'transform': 'scaleY(1.2) rotate(8deg)'
//             });
//             char7.css({
//                 'top': '4px',
//                 'transform': 'scaleY(1.6) rotate(9deg)'
//             });
//         }
//     }

//     var evaluate = function(charChar){
//       console.log(charChar);
//        if(charChar.toUpperCase() === 'a'.toUpperCase()){
//          return 'scaleX(1.0)';
//        }else if(charChar.toUpperCase() === 'b'.toUpperCase()){
//          return 'scaleX(1.2)'
//        }else if(charChar.toUpperCase() === 'c'.toUpperCase()){
         
//        }else if(charChar.toUpperCase() === 'd'.toUpperCase()){
         
//        }else if(charChar.toUpperCase() === 'e'.toUpperCase()){
         
//        }else if(charChar.toUpperCase() === 'f'.toUpperCase()){
         
//        }else if(charChar.toUpperCase() === 'g'.toUpperCase()){
         
//        }else if(charChar.toUpperCase() === 'h'.toUpperCase()){
         
//        }else if(charChar.toUpperCase() === 'i'.toUpperCase()){
         
//        }else if(charChar.toUpperCase() === 'j'.toUpperCase()){
         
//        }else if(charChar.toUpperCase() === 'k'.toUpperCase()){
         
//        }else if(charChar.toUpperCase() === 'l'.toUpperCase()){
         
//        }else if(charChar.toUpperCase() === 'm'.toUpperCase()){
//          return 'scaleX(1.0)';
//        }else if(charChar.toUpperCase() === 'n'.toUpperCase()){
         
//        }else if(charChar.toUpperCase() === 'o'.toUpperCase()){
         
//        }else if(charChar.toUpperCase() === 'p'.toUpperCase()){
         
//        }else if(charChar.toUpperCase() === 'q'.toUpperCase()){
         
//        }else if(charChar.toUpperCase() === 'r'.toUpperCase()){
         
//        }else if(charChar.toUpperCase() === 's'.toUpperCase()){
         
//        }else if(charChar.toUpperCase() === 't'.toUpperCase()){
         
//        }else if(charChar.toUpperCase() === 'u'.toUpperCase()){
         
//        }else if(charChar.toUpperCase() === 'v'.toUpperCase()){
         
//        }else if(charChar.toUpperCase() === 'w'.toUpperCase()){
         
//        }else if(charChar.toUpperCase() === 'x'.toUpperCase()){
         
//        }else if(charChar.toUpperCase() === 'y'.toUpperCase()){
         
//        }else if(charChar.toUpperCase() === 'z'.toUpperCase()){

//  }  
// //       // case 'a': return 'scaleX(4.5)'
// //       // case 'b': return 'scaleX(1.2)'
// //       // case 'c': return 'scaleX(1.2)'
// //       // case 'd': return 'scaleX(1.2)'
// //       // case 'e': return 'scaleX(1.2)'
// //       // case 'f': return 'scaleX(1.2)'
// //       // case 'g': return 'scaleX(1.2)'
// //       // case 'h': return 'scaleX(1.2)'
// //       // case 'i': return 'scaleX(1.2)'
// //       // case 'j': return 'scaleX(1.2)'
// //       // case 'k': return 'scaleX(1.2)'
// //       // case 'l': return 'scaleX(1.2)'
// //       // case 'm': return 'scaleX(1.2)'
// //       // case 'n': return 'scaleX(1.2)'
// //       // case 'o': return 'scaleX(1.2)'
// //       // case 'p': return 'scaleX(1.2)'
// //       // case 'q': return 'scaleX(1.2)'
// //       // case 'r': return 'scaleX(1.2)'
// //       // case 's': return 'scaleX(1.2)'
// //       // case 't': return 'scaleX(1.2)'
// //       // case 'u': return 'scaleX(1.2)'
// //       // case 'v': return 'scaleX(1.2)'
// //       // case 'w': return 'scaleX(1.2)'
// //       // case 'x': return 'scaleX(1.2)'
// //       // case 'y': return 'scaleX(1.2)'
// //       // case 'z': return 'scaleX(1.2)'

// //     }

//     return {
//         init: init,
//         $formButton: $formButton,
//         updateText: updateText
//     };
// })();

// ringText.init();
// ringText.$formButton.click(function(e) {
//   e.preventDefault();
//   ringText.updateText();
// });

var renderThis = (function(){

      //cache
      var submit = $('#submit'); 
      var svg = d3.select("#viz").append("svg");
      var arcDegree = 'A200';
      var name = 'NAME';
      var newName;
      var size = '85px';
      var spacing = '15px';

      var init = function(){
        render();
      }

      //renders svg to the screen
      var render = function(str,arr){
        newName = str;

        if(newName !== undefined && arr !== undefined){
          name = newName;
          size = arr.fSize;
          spacing = arr.lSpacing;

        }else{
          name = name;
          size = size;
          spacing = spacing;
          arcDegree = arcDegree;
        }

        svg
          .attr("width", 400)
          .attr("height", 600);

        svg.append("path")
          .attr("id", "wavy") //very important to give the path element a unique ID to reference later
          .attr("d", " M80,350 "+ arcDegree +",70 0 0,1 335,350") //Notation for an SVG path, from bl.ocks.org/mbostock/2565344
          .style("fill", "none");
          // .style("stroke", "red");

        svg.append("text") 
          .append("textPath") //append a textPath to the text element
          .attr("xlink:href", "#wavy") //place the ID of the path here
          .style("text-anchor","middle") //place the text halfway on the arc
          .attr('stroke','#000')
          .style('font-size',size)
          .style('letter-spacing',spacing)
          .attr('fill','#000')
          .attr("startOffset", "50%")
          .attr('class','ringText')
          .text(name);
          
        //   var charss = $('.ringText').text().split('');
        

        var second = Object.entries(myObj);

        // second.forEach(function(element) {
       
        // });
      
      }
      
      //changes svg text
      var changeName = function($input,arr){
        render($input,arr);
      }

      //makes variables and functions public
      return {
        svg:svg,
        submit: submit,
        init: init,
        changeName: changeName
      };
})();

function textCal(length){
  var fSize;
  var lSpacing;
  var arc;

  if(length <= 4){
    fSize = '88px';
    lSpacing = '15px';

}else if(length == 5){
    fSize = '88px';
    lSpacing = '2px';

  }else if(length == 6){
    fSize = '83px';
    lSpacing = '-5px';

  }else if(length == 7){
    fSize = '72px';
    lSpacing = '-4px';
    arc = 'A250';   
  }

  return { fSize: fSize, 
          lSpacing: lSpacing,
          arc: arc,
        };
};

function entryInvalid($input){
    $('.form-control').css({'border':'1px solid red'});
}

function entrySuccess($input){
  var calResults = textCal($input.length);
  $('svg').children('text').remove();
  renderThis.changeName($input,calResults);
}

renderThis.init();

/* when button is clicked, grab value from input box , transform it to uppercase and calculate how many characters were entered into the text box. Change font-size and letter spacing based on those values
if

*/
renderThis.submit.click(function(e){
  var $input =  $('#tText').val().toUpperCase();
  var textlength = $input.length;  
    if($input.length == 0 || $input.length > 7){
        InvalidEntry($input);
      }else{
        entrySuccess($input);         
      }
 });