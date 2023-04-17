import {
  FilterLabel,
  FilterSpan,
  FilterInput,
} from 'components/Filter/Filter.styled';

import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { filterContact } from 'redux/contacts/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div>
      <FilterLabel>
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
