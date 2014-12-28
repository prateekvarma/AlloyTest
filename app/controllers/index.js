var song = Alloy.createModel('song', {song_name:'The four horsemen', artist:'Metallica!'});
var song_name = song.get('song_name');
var artist = song.get('artist');

$.label.text = song_name + 'by' + artist;


function doClick(e) {
    alert($.label.text);
}

$.index.open();
