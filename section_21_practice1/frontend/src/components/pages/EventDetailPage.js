import { defer, json, redirect, useRouteLoaderData, Await } from 'react-router-dom';

import EventItem from '../EventItem';
import EventsList from '../EventsList';
import { Suspense } from 'react';

function EventDetailPage () {
    const { events, event } = useRouteLoaderData('event-detail');

    return (
        <>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={event}>
                    {(loadedEvent) => <EventItem event={loadedEvent} />}
                </Await>
            </Suspense>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={events}>
                    {(loadedEvents) => <EventsList events={loadedEvents} />}
                </Await>
            </Suspense>
        </>
    )
};

export default EventDetailPage;

async function loadEvent (id) {
    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw json(
            {message: 'Could not find the event page.'},
            { status: 500 },
        );
    } else {
        const resData = await response.json();
        return resData.event
    }
}

async function loadEvents () {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
      //error handling
      //return { isError: true, message: 'could not fetch events.'}
    //   throw new Response(JSON.stringify({ message: 'Could not fetch events.'}), {
    //     status: 500,
    //   })
        throw json(
            { message: 'Could not fetch events.'},
            { status: 500 }
            )
    } else {
    //   return response;
        const resData = await response.json();
        return resData.events;
    }
}

export async function loader ({request, params}) {
    const id = params.eventId;
    
    return defer({
        event: await loadEvent(id),
        events: loadEvents(),
    })
};

export const action = async function ({request, params}) {
    const id = params.eventId;

    const response = await fetch('http://localhost:8080/events/' + id, {
        method: request.method
    } )

    if (!response.ok) {
        throw json(
            {message: 'Could not delete the event.'},
            { status: 500 },
        );
    } 

    return redirect('/events');
};