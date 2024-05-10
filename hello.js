let body=document.getElementById('body')
let p = document.createElement('div')
p.className = 'gallery'
p.id='gallery'
body.appendChild(p)
console.log(p)
let counter = 0;
while (counter < 12) {
  let div_tag = document.createElement("div");
  p.appendChild(div_tag);
  for (let i = counter; i < counter + 4; i++) {
    let img_tag = document.createElement("img");
    div_tag.appendChild(img_tag);
    let path = `./gallery/image_${i + 1}.jpg`;
    img_tag.src = path;
    img_tag.alt = "picture";  
  }
  counter += 4;
}
