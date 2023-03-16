const addBtn = document.querySelector('.add');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const deleteBtns = document.getElementsByClassName('delete-note');
const deleteAll = document.querySelector('.delete-all');
const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const category = document.querySelector('#category');
const textarea = document.querySelector('#text');
const error = document.querySelector('.error');

let selectedValue;
let cardID = 0;

const openPanel = () => {
	notePanel.style.display = 'flex';
};

const closePanel = () => {
	notePanel.style.display = 'none';
	error.style.visibility = 'hidden';
	textarea.value = '';
	category.selectedIndex = 0;
};

const addNote = () => {
	if (textarea.value !== '' && category.value !== '0') {
		error.style.visibility = 'hidden';
		createNote();
	} else {
		error.style.visibility = 'visible';
	}
};

const createNote = () => {
	const newNote = document.createElement('div');
	const noteBody = document.createElement('div');
	noteBody.classList.add('note-body');
	newNote.classList.add('note');
	newNote.setAttribute('id', cardID);
	newNote.innerHTML = `
    <div class="note-header">
    <h3 class="note-title">${selectedValue}</h3>
    <button class="delete-note">
	<i class="fas fa-times icon"></i>
    </button>
	</div>
	
    `;
	noteArea.appendChild(newNote);
	newNote.appendChild(noteBody);
	noteBody.textContent = textarea.value;
	closePanel();
	checkColor(newNote);

	cardID++;
};

const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text;
};

const checkColor = note => {
	switch (selectedValue) {
		case 'Zakupy':
			note.style.backgroundColor = 'rgb(72,255,0)';
			break;
		case 'Praca':
			note.style.backgroundColor = 'rgb(255,243,0)';
			break;
		case 'Inne':
			note.style.backgroundColor = 'rgb(0,170,255)';
			break;
	}
};

const deleteNote = e => {
	if (e.target.classList.contains('delete-note')) {
		e.target.closest('.note').remove();
	}
};

const deleteAllNotes = () => {
	noteArea.textContent = '';
};

addBtn.addEventListener('click', openPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', addNote);
deleteAll.addEventListener('click', deleteAllNotes);
noteArea.addEventListener('click', deleteNote);
