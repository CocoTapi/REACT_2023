import { Link } from 'react-router-dom';

const dummy = [
    { id: 'e1', title: 'ice skating', description: 'go to the ice skating!'},
    { id: 'e2', title: 'Christmas market', description: 'More than 50 venders are selling delicious food, cute accessaries and greate christmas goods.'}
];

function EventsPage () {
    return (
        <>
            <h1>Events List</h1>
            <ul>
                {dummy.map((event) => {
                    return (
                        <li key={event.id}>
                            <Link to={event.id} >{event.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
};

export default EventsPage;