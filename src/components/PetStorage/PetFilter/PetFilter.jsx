import Select from 'components/Select/Select'
import ButtonMain from 'components/buttons/ButtonMain/ButtonMain'

import "./pet-filter.scss";


const PetFilter = ({cb}) => {
    return (
        <div className='pet-filter'>
            <div className="pet-filter__title">FILTER BY</div>
            <div className="pet-filter__selects">
                <Select/>
                <Select/>
                <Select/>
                <Select/>
            </div>
            <div className="pet-filter__buttons">
                <ButtonMain cb={cb} text={"Proceed"}/>
            </div>
        </div>
    )
}

export default PetFilter