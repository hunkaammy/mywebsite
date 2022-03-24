const images = document.getElementsByTagName('img');

for(let img of images) {
  img.addEventListener('load', function() {
    this.className = 'loaded';
  });
}