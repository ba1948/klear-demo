import { useHistory } from 'react-router-dom';
import { useRef } from 'react';
import Paginator from '../../components/onboard-wizard/Paginator';

import classes from './ThirdStep.module.css'

import { useSelector, useDispatch } from 'react-redux';

function ThirdStepPage() {
    const brandInputRef = useRef();
    let brands = useSelector(state => state.brands);
    const dispatch = useDispatch();
    
    const history = useHistory();

    const addBrandHandler= (event) => {
        event.preventDefault();
        const brand = brandInputRef.current.value;
        brands.push(brand);
        dispatch({type: 'brand', brand});
        brandInputRef.current.value = '';
    }

    function goBackHandler() {
        history.push('/onboard/2')
    }

    return (
        <div>
            <div className={classes.header}>
                <h1>One last thing</h1>
                <p>Have you collaborated in the past?</p>
            </div>
            <form>
                <input type="text" placeholder="Enter brand name"  required id="brand" ref={brandInputRef} />
                <button onClick={addBrandHandler} className={classes.add}>Add</button>
            </form>
            <div>
            { brands.map((brand) => '@' + brand )}
            </div>
            <div className={classes.footer}>
                <button onClick={goBackHandler} className={classes.btn}>Back</button>
                <Paginator currentPage='3' />
            </div>
        </div>
    );
}

export default ThirdStepPage;