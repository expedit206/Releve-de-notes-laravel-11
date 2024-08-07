let troisPoint = document.querySelector('.fa-list');
let menu = document.querySelector('.menu');
let simo = document.querySelector('.simo');
let classBody = document.querySelector('.body');
let parentMenu = document.querySelector('.parent-menu');
let icones= document.querySelector('.icones');



console.log(icones);


function addclass(){
menu.classList.toggle('rightfull');
simo.classList.toggle('display');
classBody.classList.toggle('gridtemplate');

parentMenu.classList.toggle('displaynone');
icones.classList.toggle('displayblock');


}

// $(function(){
//     $("bbb").click(function(){
//         $(".body").toggleClass("bodypp",1000,"easeOutsine");
//     });
// });