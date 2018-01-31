var words = ["alpha","beta","gamla","delta"];
var item;

function start(){
    item = words[Math.floor(Math.random()*words.length)];
    $("#btn").fadeOut(function(){ 
        $('#word').text(item);
        $("#word").show().delay(1000).fadeOut(function(){
            
            var letters = shuffle(item);
            for (var i = 0; i< letters.length; i++){
                $('#lettersContainer').append('<div id="div'+ i +'" class="letters-div-close flex-align-center flex-content-center" onClick="revealCard(this)">' + letters[i] + '</div>');
            }
        });
     });
}
function resetGame(){
    $('#lettersContainer').html('');
    start();
    $('#reset').addClass('hide'); 
    $('.success').remove();
}
function revealCard(elem){
    $(elem).removeClass('letters-div-close');
    $(elem).addClass('letters-div-open animated flip');
    var openCards = $('.letters-div-open').length;
    var letters = item.split("");
    if ($(elem).text() != item[openCards-1]){
        setTimeout(function(){
            $('.letters-div-open').each(function(){
                $(this).addClass('letters-div-close').removeClass('letters-div-open animated flip');
            })     
        },1500);
        
    } else if (openCards == item.length) {
        $('#lettersContainer').after("<div class='fadeInDownBig animated success'>" + item + "<br>You Win!</div");
        $('#reset').removeClass('hide');      
    }
}
function shuffle(real) {
    var j, x, i;
    var tmp = real.split('');
    for (i = tmp.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = tmp[i];
        tmp[i] = tmp[j];
        tmp[j] = x;
    }
    return tmp;
}