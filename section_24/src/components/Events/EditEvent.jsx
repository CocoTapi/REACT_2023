import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { fetchEvent, updateEvent, queryClient } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();

  const { data, isPending, isError, error} = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({signal}) => fetchEvent({ signal, id: params.id})
  })

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    //once "mutate" is executed, this is called. not waited until mutation is done
    onMutate: async (data) => {
      const newEvent = data.event

      //this not cancel mutation. just cancel query. this changes the detail page immediatery after pushing updating button
      await queryClient.cancelQueries({ queryKey: ['events', params.id]});
      const previousEvent =  queryClient.getQueryData(['events', params.id]);

      queryClient.setQueriesData(['events', params.id], newEvent);
      return { previousEvent }
    },
    //this avoid unacceptable updating
    onError: (error, data, context) => {
      queryClient.setQueryData(['events', params.id], context.previousEvent)
    },
    //no matter if this mutation succeed or not, it will be called. 
    //even if the above optimistic updating became different from backend, this helps sync again
    onSettled: () => {
      queryClient.invalidateQueries(['events', params.id])
    }
  })

  function handleSubmit(formData) {
    mutate({ id: params.id, event: formData });
    //go to the page I'm comming from
    navigate('../');
  }

  function handleClose() {
    navigate('../');
  }

  let content;

  if (isPending) {
    content = (
      <div className='center'>
        <LoadingIndicator />
      </div>
    )
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock title="Failed to load event" message={error.info?.message || " Failed to load event. Please check your inputs and try again later. "} />
        <div className='form-actions'>
          <Link to="../" className='button'>Okay</Link>
        </div>
      </>
    )
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button" onClick={handleSubmit}>
          Update
        </button>
      </EventForm>
    )
  }



  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}
