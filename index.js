const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');

const letters = document.querySelectorAll('span');

for (let index = 0; index < letters.length; index++) {
  letters[index].addEventListener("mouseover", () => {
    letters[index].classList.add('active')
  })
  
}

