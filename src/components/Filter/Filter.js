import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {filterContact} from "../../Redux/contacts/contacts-actions";
import {getFilter} from "../../Redux/contacts/contacts-selector";
import styles from './Filter.module.css'

export default function Filter() {
    const value = useSelector(getFilter)
    const dispatch = useDispatch()
    return (
        <label className={styles.label}>
            <input className={styles.input} type='text'
            value={value}
            onChange={e => dispatch(filterContact(e.target.value))}/>
        </label>
    )
}