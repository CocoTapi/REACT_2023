import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import Header from '../Header.jsx';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import Modal from '../UI/Modal.jsx';

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState()
  const params = useParams();
  const navigate = useNavigate();

  const { data, isPending, isError, error} = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({signal}) => fetchEvent({signal, id: params.id}),
  });

  const { mutate, isPending: isPendingDeletion, isError: isErrorDeleting, error: deletingError } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      //to update all events page
      queryClient.invalidateQueries({
        queryKey: ['events'],
        //this current page won't trigger to refetch
        refetchType: 'none',
      })
      navigate('/events');
    }
  });

  function handleStartDelete() {
    setIsDeleting(true);
  }

  function handleStopDelete() {
    setIsDeleting(false);
  }

  function handleDeleteEvent() {
    mutate({ id: params.id});
  }

  let content;

  if(isPending) {
    content = (
      <div id="event-details-content" className='center'>
        <p>Fetching data...</p>
      </div>
    )
  }

  if (isError) {
    content = (
      <div id="event-details-content" className='center'>
        <ErrorBlock 
          title="Error is occured!" 
          message={error.info?.message || "Failed to fetch the event"} />
      </div>
    )
  }

  if (data) {
    const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })

    content = (
      <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={handleStartDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>{formattedDate} @ {data.time}</time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
    {isDeleting && (
      <Modal onClose={handleStopDelete}>
        <h2>Are you sure?</h2>
        <p>Do you want to delete this event? This action cannot be undone. </p>
         {isPendingDeletion && <p>Deleting the event. Please wait...</p>}
         {!isPendingDeletion && (
          <>
            <div className='form-actions'>
              <button onClick={handleStopDelete}className='button-text' >Cancel</button>
              <button onClick={handleDeleteEvent} className='button'>Delete</button>
            </div>
          </> 
         )}
         {isErrorDeleting && <ErrorBlock title="Error is Occured!" message={deletingError.info?.message || "Failed to delete this event. Please try later. "}/>}
      </Modal>
      )
    }
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
        <article id="event-details">
          {content}
        </article>
    </>
  );
}
