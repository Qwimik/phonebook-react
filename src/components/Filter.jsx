import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { filterContact } from 'redux/contacts/slice';
import { Search2Icon } from '@chakra-ui/icons';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <label>
      <Search2Icon mr="15px" />
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(filterContact(e.target.value))}
        autoComplete="off"
      />
    </label>
  );
};
