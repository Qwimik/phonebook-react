import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { filterContact } from 'redux/contacts/slice';
import { Search2Icon } from '@chakra-ui/icons';
import {
  Input,
  InputGroup,
  InputLeftElement,
  FormHelperText,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <FormControl>
      <FormLabel width="100%">
        <FormHelperText textAlign="center">Search for Name</FormHelperText>
        <InputGroup mt="10px">
          <InputLeftElement pointerEvents="none" children={<Search2Icon />} />
          <Input
            variant="filled"
            type="text"
            placeholder="Name for search"
            name="filter"
            value={filter}
            onChange={e => dispatch(filterContact(e.target.value))}
            autoComplete="off"
          />
        </InputGroup>
      </FormLabel>
    </FormControl>
  );
};
