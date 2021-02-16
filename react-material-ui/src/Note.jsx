import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';



const Note = () => {
    return (
        <>
            <div className="main_card">
                <form>
                    <input type="text" placeholder="Title" className="note-input" aur/>
                    <textarea rows="5" column="5" placeholder="Write a note " className="text-area" ></textarea>
                    <Button>
                        <AddIcon />
                    </Button>
                </form>
            </div>
        </>
    )
}

export default Note;