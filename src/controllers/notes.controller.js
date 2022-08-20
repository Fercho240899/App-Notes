const notesCtrl = {};

notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
}

notesCtrl.createNewNote = (req, res) => {
    // console.log(req.body)
    const {title, description} = req.body;
    res.send('note add post');
}

notesCtrl.renderNotes = (req, res) => {
    res.send('notas');
}
notesCtrl.renderEditForm = (req, res) => {
    res.send('note edit');

}
notesCtrl.updateNote = (req, res) => {
    res.send('note update');
}

notesCtrl.deleteNote = (req, res) => {
    res.send('note delete');
}

module.exports = notesCtrl;