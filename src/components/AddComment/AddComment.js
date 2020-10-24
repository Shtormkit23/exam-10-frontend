import React, {useState} from "react";

const AddComment = props => {
    const [state, setState] = useState({
        author: "",
        news_id: props.id,
        description: "",
    });

    const submitFormHandler = e => {
        e.preventDefault();
        props.onSubmit(state);
        setState({
            author: "",
            news_id: props.id,
            description: "",
        })
    };

    const inputChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setState(prevState => {
            return {...prevState, [name]: value};
        });
    };

    return (
        <>
            <h2 className='AddFormTitle'>Add new comment</h2>
            <form onSubmit={submitFormHandler} className='AddForm'>
                <h4 className='InputText'>Author:</h4>
                <input
                    className="Input"
                    type="text"
                    id="author"
                    name="author"
                    value={state.author}
                    onChange={inputChangeHandler}
                />
                <h4 className='InputText'>Description:</h4>
                <textarea
                    className="Input TextArea"
                    id="description"
                    name="description"
                    value={state.description}
                    onChange={inputChangeHandler}
                    required
                />
                <div className='buttonForm'>
                    <button className='button'><span>Add</span></button>
                </div>
            </form>
        </>
    );
};

export default AddComment;