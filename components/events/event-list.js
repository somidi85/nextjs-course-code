import EventItem from "./event-item";

function EventList(props) {
  const { items } = props;
  return (
    <div>
      <ui>
        {items.map((event) => (
          <EventItem
            key={event.id}
            id={event.id}
            titl={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        ))}
      </ui>
    </div>
  );
}

export default EventList;
