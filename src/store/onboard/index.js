import { createStore } from 'redux';

const onboardReducer = (state = { name: '', selected: [], brands: [] }, action) => {
    if (action.type === 'name') {
        return {
            name: action.name,
            selected: state.selected,
            brands: state.brands
        }
    }

    if (action.type === 'brand') {
        const brands = state.brands;
        brands.push(action.brand);

        return {
            name: action.name,
            selected: state.selected,
            brands: brands
        }
    }

    if (action.type === 'selected') {
        const selected = state.selected;
        selected.push(action.value);

        return {
            name: action.name,
            selected: state.selected,
            brands: selected
        }
    }

    return {
        name: state.name,
        selected: state.selected,
        brands: state.brands
    }
}

const store = createStore(onboardReducer);

export default store;