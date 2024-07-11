import {useState} from 'react';
import useBooksContext from '../hooks/useBooksContext';

function BookCreate() {
    const [title, setTitle] = useState('');
    const { createBook } = useBooksContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    }

    return (
        <div className='book-create'>
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label className='label'>Book Title</label>
                <input
                    placeholder="Enter book title"
                    onChange={handleChange}
                    value={title}
                    className='input'
                />
                <button className='button'>Submit</button>
            </form>
        </div>
    )
}

export default BookCreate;
