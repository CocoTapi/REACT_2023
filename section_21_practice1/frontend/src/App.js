// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import EventsPage from './components/pages/EventsPage';
import EventDetailPage from './components/pages/EventDetailPage';
import EditEventPage from './components/pages/EditEventPage';
import NewEventPage from './components/pages/NewEventPage';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '', element: <HomePage /> },
      { parh: 'events', element: <EventsPage />},
      { parh: 'events/:eventId', element: <EventDetailPage />},
      { parh: 'events/:eventId/edit', element: <EditEventPage />},
      { parh: 'events/new', element: <NewEventPage />},
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
