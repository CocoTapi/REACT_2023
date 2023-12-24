import { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import fetchEvents from '../../util/http';
import ErrorBlock from '../UI/ErrorBlock';
import LoadingIndicator from '../UI/LoadingIndicator';
import EventItem from './EventItem';

export default function FindEventSection() {
  const searchElement = useRef();
  const [searchTerm, setSearchTerm] = useState();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['events', {search: searchTerm}],
    queryFn: ({ signal }) => fetchEvents({ signal, searchTerm }),
    enabled: searchTerm !== undefined,
  })

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchElement.current.value);
  }

  let content;

  //isLoading won't be true if this Query is just disabled
  if (isLoading) {
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
