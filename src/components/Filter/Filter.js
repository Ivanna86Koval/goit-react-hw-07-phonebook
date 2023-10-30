import { FilterDiv, FilterLabel, FilterName } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selector';
import {filterValue} from 'redux/filterSlice'

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(filterValue(normalizedValue));
  };

return (
      <FilterDiv>
        <FilterLabel>Find contacts by name</FilterLabel>
        <FilterName
          type="text" value={value}
          onChange={onChange}/>
    </FilterDiv>
  )
}

export default Filter;
