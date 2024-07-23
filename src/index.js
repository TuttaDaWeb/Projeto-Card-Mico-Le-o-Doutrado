var hide_text = $("h1");

hide_text.hide();

$(".card").mouseover(e=>{ 
    hide_text.show();
});
$(".card").mouseout(e=>{ 
    hide_text.hide();
});