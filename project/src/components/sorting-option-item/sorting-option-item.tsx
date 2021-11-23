import {useDispatch, useSelector} from 'react-redux';
import {changeOptionSorting} from '../../store/action';
import {getActiveOption} from '../../store/main-data/selectors';

type SortingOptionItemProps = {
  option: string,
  onCloseOptionListClick: () => void,
}


function SortingOptionItem({option, onCloseOptionListClick}: SortingOptionItemProps): JSX.Element {

  const activeOption = useSelector(getActiveOption);
  const dispatch = useDispatch();

  const handleOptionClick = () => {
    dispatch(changeOptionSorting(option));
    onCloseOptionListClick();
  };

  return (
    <li  onClick={handleOptionClick} className={activeOption === option ?
      'places__option places__option--active' :
      'places__option'}
    tabIndex={0}
    >
      {option}
    </li>
  );
}

export default SortingOptionItem;
