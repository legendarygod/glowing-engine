import React, {useState} from 'react'
//styles
import { Button } from './Rate.styles';

const Rate = ({callback}) => {
    const [value, setValue] = useState(5);

    return(
        <div>
            <input type='range' min='1' max='10' value={value} onChange={e => setValue(e.currentTarget.value)} /> 
            {value}
            <p>
                {/* <button onClick={() => callback(value)}>
                    Rate
                </button> */}
                <Button onClick={() => callback(value)}><span>Rate</span></Button>
            </p>
        </div>
    )
}

export default Rate;