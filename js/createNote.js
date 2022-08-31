const icon = document.querySelector('.note-create');
const notes = document.querySelector('.notes-area');
let i = {
    'index': 0,
};



icon.addEventListener('click', function (e) {
    notes.insertAdjacentHTML('afterbegin', `<textarea name="" id="" cols="30" rows="10" class="input"></textarea>`);
    i.index++;
    localStorage.setItem('index', JSON.stringify(i.index));
    console.log('index after click')
    console.log(i.index);
});

i = { 'index': localStorage.getItem('index'), }



window.addEventListener('load', function (e) {
    i = { 'index': JSON.parse(i.index), }
    console.log(i.index);
    if (i.index === 1) {
        notes.insertAdjacentHTML('afterbegin', `<textarea name="" id="" cols="30" rows="10" class="input"></textarea>`);
    }
    if (i.index === 2) {
        notes.insertAdjacentHTML('afterbegin', `<textarea name="" id="" cols="30" rows="10" class="input"></textarea> 
<textarea name="" id="" cols="30" rows="10" class="input"></textarea>`);
    }

    if (i.index === 3) {
        notes.insertAdjacentHTML('afterbegin', `<textarea name="" id="" cols="30" rows="10" class="input"></textarea> 
<textarea name="" id="" cols="30" rows="10" class="input"></textarea> <textarea name="" id="" cols="30" rows="10" class="input"></textarea>`);
    }

    if (i.index === 4) {
        notes.insertAdjacentHTML('afterbegin', `<textarea name="" id="" cols="30" rows="10" class="input"></textarea>
<textarea name="" id="" cols="30" rows="10" class="input"></textarea> <textarea name="" id="" cols="30" rows="10" class="input"></textarea>
<textarea name="" id="" cols="30" rows="10" class="input"></textarea>`)
    }
    if (i.index === 5) {
        notes.insertAdjacentHTML('afterbegin', `<textarea name="" id="" cols="30" rows="10" class="input"></textarea>
<textarea name="" id="" cols="30" rows="10" class="input"></textarea> <textarea name="" id="" cols="30" rows="10" class="input"></textarea>
<textarea name="" id="" cols="30" rows="10" class="input"></textarea> <textarea name="" id="" cols="30" rows="10" class="input"></textarea>`)
    }

    if (i.index === 6) {
        notes.insertAdjacentHTML('afterbegin', `<textarea name="" id="" cols="30" rows="10" class="input"></textarea>
<textarea name="" id="" cols="30" rows="10" class="input"></textarea> <textarea name="" id="" cols="30" rows="10" class="input"></textarea>
<textarea name="" id="" cols="30" rows="10" class="input"></textarea> <textarea name="" id="" cols="30" rows="10" class="input"></textarea>
<textarea name="" id="" cols="30" rows="10" class="input"></textarea>`)
    }

    if (i.index === 7) {
        notes.insertAdjacentHTML('afterbegin', `<textarea name="" id="" cols="30" rows="10" class="input"></textarea>
<textarea name="" id="" cols="30" rows="10" class="input"></textarea> <textarea name="" id="" cols="30" rows="10" class="input"></textarea>
<textarea name="" id="" cols="30" rows="10" class="input"></textarea> <textarea name="" id="" cols="30" rows="10" class="input"></textarea>
<textarea name="" id="" cols="30" rows="10" class="input"></textarea> <textarea name="" id="" cols="30" rows="10" class="input"></textarea>`)
    }

    if (i.index === 8) {
        notes.insertAdjacentHTML('afterbegin', `<textarea name="" id="" cols="30" rows="10" class="input"></textarea>
<textarea name="" id="" cols="30" rows="10" class="input"></textarea> <textarea name="" id="" cols="30" rows="10" class="input"></textarea>
<textarea name="" id="" cols="30" rows="10" class="input"></textarea> <textarea name="" id="" cols="30" rows="10" class="input"></textarea>
<textarea name="" id="" cols="30" rows="10" class="input"></textarea> <textarea name="" id="" cols="30" rows="10" class="input"></textarea>
<textarea name="" id="" cols="30" rows="10" class="input"></textarea>`)
    }


});
