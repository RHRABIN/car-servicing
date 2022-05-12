// import React from 'react';
// import { Helmet } from 'react-helmet-async';
// import { Link } from 'react-router-dom';
// import PageTitle from '../../Shared/PageTitle/PageTitle';

// const About = () => {
//     return (
//         <div>
//             <PageTitle title='About'></PageTitle>
//             <h2 className='mt-5'>This is about page</h2>
//             <Link to='/secreat'>Go secreat</Link>
//         </div>
//     );
// };

// export default About;
// import React from 'react'
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const containerStyle = {
//     width: '400px',
//     height: '400px'
// };

// const center = {
//     lat: 23.748909560699882,

//     lng: 90.40021830798273
// };

// function MyComponent() {
//     return (
//         <LoadScript
//             googleMapsApiKey="AIzaSyBtBR-isanIGaB7n_BPv6PI_sm2-gfWzaE"
//         >
//             <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={center}
//                 zoom={16}
//             >
//                 <Marker

//                     position={center}
//                 />
//             </GoogleMap>
//         </LoadScript>
//     )
// }

// export default React.memo(MyComponent)
import { DirectionsService, DirectionsRenderer, GoogleMap, LoadScript, } from '@react-google-maps/api';
import React, { useState } from 'react';

const About = () => {
    // const [origin, setOri] = useState('');
    // const [destination, setDes] = useState('')
    const [response, setResponse] = useState(null)
    const origin = 'Dhaka'
    const destination = 'Sylhet'
    const handleSubmit = (event) => {
        event.preventDefault();
        const start = event.target.origin.value;
        const end = event.targe.destination.value;
        // setOri(start);
        // setDes(end)
    }
    const directionsCallback = (response) => {
        console.log(response)

        if (response !== null) {
            if (response.status === 'OK') {
                setResponse(response)
            } else {
                console.log('response: ', response)
            }
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="origin" id="" /> <br />
                <input type="text" name="destination" id="" /> <br />
                <button className="btn btn-primary">Serarch</button>
            </form>
            <LoadScript
                googleMapsApiKey="AIzaSyBtBR-isanIGaB7n_BPv6PI_sm2-gfWzaE"
            >
                <GoogleMap
                    // required
                    id='direction-example'
                    // required
                    mapContainerStyle={{
                        height: '400px',
                        width: '100%'
                    }}
                    // required
                    zoom={14}
                    // required
                    center={{
                        lat: 0,
                        lng: -180
                    }}

                >
                    {
                        (
                            destination !== '' &&
                            origin !== ''
                        ) && (
                            <DirectionsService
                                // required
                                options={{
                                    destination: destination,
                                    origin: origin,
                                    travelMode: 'DRIVING'
                                }}
                                // required
                                callback={directionsCallback}

                            />
                        )
                    }

                    {
                        response !== null && (
                            <DirectionsRenderer
                                // required
                                options={{
                                    directions: response
                                }}

                            />
                        )
                    }
                </GoogleMap>
            </LoadScript>
        </div >
    );
};

export default About;