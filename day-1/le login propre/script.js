/**
 * Created by Wrex on 22/03/2016.
 */
window.onload = function (){
    'use strict';
    var btnLog = document.getElementById('loginField');
    var pop = document.getElementById('popUp');
    btnLog.onclick =function(){
        pop.style.display = 'block'
    };
};