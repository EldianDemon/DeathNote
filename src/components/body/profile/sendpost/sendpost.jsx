import React from "react";
import { addPostCreator } from "../../../../store";

const Sendpost = (props) => {

    const TextRef = React.createRef();

    const TextRef2 = React.createRef();

    const AddPost = () => {
        debugger
        let postname = TextRef.current.value;
        let posttext = TextRef2.current.value;
        let action = addPostCreator(postname, posttext);
        props.dispatch(action)
    }
    return (
        <div>
            <h3>Создать пост</h3>
            <h4>Имя поста</h4>
            <textarea ref={TextRef}>

            </textarea>
            <h4>Текст поста</h4>
            <textarea ref={TextRef2}>

            </textarea>
            <button onClick={AddPost}>Отправить</button>
        </div>
    );
}

export default Sendpost;