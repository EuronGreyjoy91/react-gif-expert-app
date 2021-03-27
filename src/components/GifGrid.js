import React, {Fragment} from 'react';
import {GifGridItem} from '../components/GifGridItem';
import {useFetchGifs} from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    const {data, loading} = useFetchGifs(category);

    return (
        <Fragment>
            <h3>{category}</h3>

            {loading && <p>loading</p>}

            <div className = "card-grid">
                {
                    data.map(img => {
                        return (
                                <GifGridItem 
                                    key = {img.id}
                                    {...img}>
                                </GifGridItem>
                            )
                    })
                }
            </div>
        </Fragment>
    )
}
