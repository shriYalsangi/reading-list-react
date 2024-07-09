import {useState} from 'react';

function BookCreate({onCreate}) {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
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
