import * as EXPORTS from "../model/model.js";

function firstListen(){
    $(window).on("hashchange", EXPORTS.reRoute);
    EXPORTS.reRoute();
}


$(document).ready(function (){
    firstListen();
})