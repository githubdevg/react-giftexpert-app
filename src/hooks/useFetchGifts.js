import { useState, useEffect } from 'react';
import { getGifts } from '../helpers/getGifts';



export const useFetchGifts = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
        getGifts(category)
            .then(gifts => {
                setTimeout(() => {
                    setState({
                        data: gifts,
                        loading: false
                    });
                }, 1500);
            });
    }, [category])

   

    // setTimeout(() => {
    //     setState({
    //         data: [1, 2, 3],
    //         loading: false
    //     });
    // }, 3000);

    return state;
}



