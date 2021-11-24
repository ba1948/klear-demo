import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './FirstStep.module.css';
import Paginator from '../../components/onboard-wizard/Paginator';

import { useSelector, useDispatch } from 'react-redux';


function FirstStepPage() {
    const history = useHistory();
    const nameInputRef = useRef();
    const name = useSelector(state => state.name);

    const dispatch = useDispatch();

    const submitNameHadler = (event) => {
        event.preventDefault();

        const name = nameInputRef.current.value;

        dispatch({ type: 'name', name });

        if (name !== null && name !== '') {
            history.push('/onboard/2');
        }
    }

    const nameChangeHandler = () => {
        const name = nameInputRef.current.value;
        dispatch({ type: 'name', name });
    }

    return (
        <div>
            <div className={classes.header}>
                <h1>Welcome</h1>
                <p>How should we call you?</p>
            </div>
            <form onSubmit={submitNameHadler}>
                <input type="text" placeholder="Name" value={name} required id="name" ref={nameInputRef} onChange={nameChangeHandler} />
            </form>
            <div className={classes.footer}>
                <Paginator currentPage='1' />
                <button className={classes.btn} onClick={submitNameHadler}>Next</button>
            </div>
            

        </div>
    );
}

export default FirstStepPage;