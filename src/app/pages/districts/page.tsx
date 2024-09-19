import React from 'react';
import Map from '../../components/map/map'
import LoadingLane from "@/app/components/loading-lane/loading-lane";

const Page = () => {
    return (
        <div>
            <LoadingLane/>
            <Map />
        </div>
    );
};

export default Page;
