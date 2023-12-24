import { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import fetchEvents from '../../util/fetchEvents';
import ErrorBlock from '../UI/ErrorBlock';
import LoadingIndicator from '../UI/LoadingIndicator';
import EventItem from './EventItem';

export default function FindEventSection() {
  const searchElement = useRef();
  const [searchTerm, setSearchTerm] = useState('');

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', {search: searchTerm}],
    queryFn: ({signal}) => fetchEvents({signal, searchTerm})
  })

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchElement.current.value);
  }

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = <ErrorBlock title="Error is occured!" message={error.info?.message || 'Fail to find events.'} />
  }

  if (data) {
    content = (
      <ul className='events-list'>
        {data.map((event) => 
          <li key={event.id}><EventItem event={event}/></li>
        )}
      </ul>
    )
  }

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
