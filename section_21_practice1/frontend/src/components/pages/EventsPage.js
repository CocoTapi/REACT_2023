import { useLoaderData } from 'react-router-dom';

import EventsList from '../EventsList';

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;
  
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

//this won't execute on a server. this is still in the browser, client-side code
export const loader = async () => {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
      //error handling
    } else {
      return response;
    }
  };