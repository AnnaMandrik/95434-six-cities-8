import {useState} from 'react';
import {useSelector} from 'react-redux';
import SortingOptionItem from '../sorting-option-item/sorting-option-item';
import {PlacesSortOptions} from '../../const';
import {getActiveOption} from '../../store/main-data/selectors';


type SortingOptionListProps = {
  onCloseOptionListClick: () => void,
}


function SortingOptionList({onCloseOptionListClick}: SortingOptionListProps): JSX.Element {
  const optionList = Object.keys(PlacesSortOptions).map((key) => <SortingOptionItem onCloseOptionListClick={onCloseOptionListClick} option={PlacesSortOptions[key]} key={key}/>);
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {optionList}
    </ul>
  );
}


function SortingForm(): JSX.Element {

  const activeOption = useSelector(getActiveOption);
  const [isOptionsShown, setIsOptionsShown] = useState(false);

  const handleSortOptionOpen = () => {
    setIsOptionsShown((prevState) => !prevState);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortOptionOpen}>
        {activeOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOptionsShown ? <SortingOptionList onCloseOptionListClick={handleSortOptionOpen}/> : ''}
    </form>
  );
}

export default SortingForm;
