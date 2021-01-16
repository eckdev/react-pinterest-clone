import {useState,useEffect} from 'react'
import {apiStates,useApi} from '../../utils/UseApi'
import CarList from './CarList'

function Cars() {
    const CARS_API = "https://api.backendless.com/DC4BB865-019A-E495-FF26-687FC4426D00/39EC2F40-BBB0-4ABC-91EC-C48C87DA349B/data/cars";
    const {state,data} = useApi(CARS_API);
    const [isSuccess,setIsSuccess] = useState(false);

    useEffect(() => {
       if (state === apiStates.SUCCESS) {
           setIsSuccess(true);
       }
       else if(state === apiStates.ERROR)
        setIsSuccess(false);
    }, [state]);
    return (
       <>
        {
            isSuccess && <CarList cars={data} />
        }
       </>
    )
}

export default Cars
