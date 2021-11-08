import SortingOptionItem from '../sorting-option-item/sorting-option-item';
import  {PlacesSortOptions} from '../../const';

import { useState } from 'react';
import { connect } from 'react-redux';
import { State } from '../../types/types';


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


const mapStateToProps = ({activeOption}: State) => ({activeOption});

type SortingFormProps = {
  activeOption: string,
}

function SortingForm({activeOption} : SortingFormProps): JSX.Element {

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

export default connect(mapStateToProps)(SortingForm);
