export function reRoute(){
    let fullID = window.location.hash;
    let siteID = fullID.replace("#","");

    if(siteID != ""){
        $.get(`pages/${siteID}.html`, function (data){
            $("#content").html(data);
        });
    } else{
        $.get(`pages/home.html`, function (data){
            $("#content").html(data);
        });

    }
}