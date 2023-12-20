import { json, useLoaderData, Await, defer } from 'react-router-dom';

import EventsList from '../EventsList';
import { Suspense } from 'react';

function EventsPage() {
//   const data = useLoaderData();
//   const events = data.events;

//   if (data.isError) {
//     return <p>{data.message}</p>
//   }
    const { events } = useLoaderData();
  
  return (
    <Suspense fallback={<p style={{ textAlign: 'center'}}>Loading...</p>} >
        <Await resolve={events}>
            {(loadedData) =>  <EventsList events={loadedData} />}
        </Await>  
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
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

//this won't execute on a server. this is still in the browser, client-side code
export const loader = () => {
    return defer({
        events: loadEvents()
    })
};

  