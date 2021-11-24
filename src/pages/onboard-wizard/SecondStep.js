import classes from './SecondStep.module.css';
import { useHistory } from 'react-router-dom';
import { useRef } from 'react';

import Paginator from '../../components/onboard-wizard/Paginator';

import { useSelector, useDispatch } from 'react-redux';

function SecondStepPage() {
    const name = useSelector(state => state.name);
    const dispatch = useDispatch();

    const selected = useSelector(state => state.selected);
    const lifeStyleInputRef = useRef();
    const beautyInputRef = useRef();
    const foodInputRef = useRef();

    const history = useHistory();

    const submitHandler = (event) => {
        event.preventDefault();

        history.push('/onboard/3');
    }

    const onChangeLifestyleHandler = (event) => {
        event.preventDefault();

        const selectedVal = lifeStyleInputRef.current.value;
        if (selectedVal && selectedVal === '1') {
            dispatch({ type: 'selected', value: selectedVal });
        }
        
    }

    const onChangeBeautyHandler = (event) => {
        event.preventDefault();

        const selectedVal = beautyInputRef.current.value;
        if (selectedVal && selectedVal === '1') {
            dispatch({ type: 'selected', value: selectedVal });
        }
        
    }

    const onChangeFoodHandler = (event) => {
        event.preventDefault();

        const selectedVal = foodInputRef.current.value;
        if (selectedVal && selectedVal === '1') {
            dispatch({ type: 'selected', value: selectedVal });
        }
        
    }

    const goBackHandler = () => {
        history.push('/onboard/1')
    }

    const isCheckedHandler = (value) => {
        return selected.some(item => value === item);
    }

    return (
        <div>
            <div className={classes.header}>
                <h1>Hi {name}</h1>
                <p>What are your expertise?</p>
            </div>
            <form>
                <div className={classes.checkbox}>
                    <input type="checkbox" id="lifestyle" name="lifestyle" value="1"/>
                    <label for="lifestyle">Lifestyle</label>
                </div>

                <div>
                    <input type="checkbox" id="beauty" name="beauty" value="2" />
                    <label for="beauty">Beauty</label>
                </div>

                <div>
                    <input type="checkbox" id="food" name="food"  value="3"/>
                    <label for="food">Food</label>
                </div>
            </form>
            <div className={classes.footer}>
                <button onClick={goBackHandler}>Back</button>
                <Paginator currentPage='2' />
                <button onClick={submitHandler}>Next</button>
            </div>
        </div>
    );
}

export default SecondStepPage;