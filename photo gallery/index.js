document.querySelectorAll('.img').forEach(function(image){
    image.addEventListener('click' , function()
{
    var overlay = document.getElementById('overlay');
    var largeImage = document.getElementById('largeImage');
    largeImage.src = this.src;
    overlay.style.display = 'flex';

});
});

document.getElementById('closeBtn').addEventListener('click' , function(){
    document.getElementById('overlay').style.display = 'none';
});