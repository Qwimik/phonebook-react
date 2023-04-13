import {
  FilterLabel,
  FilterSpan,
  FilterInput,
} from 'components/Filter/Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact, getFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div>
      <FilterLabel htmlFor="filter">
        <FilterSpan>Find contacts by name</FilterSpan>
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={e => dispatch(filterContact(e.target.value))}
          autoComplete="off"
        />
      </FilterLabel>
    </div>
  );
};
