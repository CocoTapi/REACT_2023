import { json, useLoaderData } from 'react-router-dom';

import EventItem from '../EventItem';

function EventDetailPage () {
    const data = useLoaderData();

    return (
        <>
            <EventItem event={data.event} />
        </>
    )
};

export default EventDetailPage;

export const loader = async function ({request, params}) {
    const id = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw json(
            {message: 'Could not find the event page'},
            { status: 500 },
        );
    } else {
        return response;
    }
};