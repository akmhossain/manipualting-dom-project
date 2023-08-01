let p_div = document.getElementById('p-div');
function onClick_para() {
    let paragraph = document.createElement('p');
    paragraph.style.backgroundColor = 'black';
    paragraph.style.color = 'white';
    paragraph.style.display = 'flex';
    paragraph.style.justifyContent = 'center';
    paragraph.style.padding = '10px';
    paragraph.innerText = 'Mama mia, look at my pizzaria!';
    p_div.appendChild(paragraph);
    img_div.style.display = 'none';
    p_div.style.display = 'block';
}
let para_button = document.getElementById('p-button');
para_button.addEventListener('click', onClick_para);

let img_div = document.getElementById('img-div');
function onClick_img() {
    let newImg = document.createElement('img')
    newImg.src = '/image/thumbs-up.png';
    img_div.appendChild(newImg);  
    p_div.style.display = 'none';
    img_div.style.display = 'block';
}
let img_button = document.getElementById('img-button');
img_button.addEventListener('click', onClick_img);

