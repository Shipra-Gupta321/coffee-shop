const add = document.querySelectorAll('.add');
add.forEach(e => {
    e.addEventListener('click', () => {
        const textDiv = e.previousElementSibling;
        const p = textDiv.querySelector('p');
        const plus = e.children[0];
        const minus = e.children[1];
        p.classList.toggle('hide');
        plus.classList.toggle('hide');
        minus.classList.toggle('hide');

    });
});


