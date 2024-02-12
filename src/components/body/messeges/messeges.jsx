import React from "react";
import m from './messeges.module.css'
import Messege from "./messege/messege";
import { addMessegeCreator } from "../../../store";

const Messeges = (props) => {

    let MessegesOut = props.messegesPage.messegesData.map(
        el => <li className={el.owner ? `${m.messeges__item} ${m.messeges__item_t}` : `${m.messeges__item} ${m.messeges__item_f}`}><Messege text={el.text} /></li>
    )

    let MessegeText = React.createRef()

    let AddMessege = () => {
        let text = MessegeText.current.value
        let action = addMessegeCreator(text)
        props.dispatch(action)
    }

    return (
        <section>
            <ul className={m.messeges__list}>
                {MessegesOut}
            </ul>
            <form action="" className={m.messeges__form}>
                <textarea ref={MessegeText} className={m.messeges__text}></textarea>
                <button onClick={AddMessege} className={m.messeges__btn}>Отправить</button>
            </form>
        </section>
    )
}

export default Messeges;