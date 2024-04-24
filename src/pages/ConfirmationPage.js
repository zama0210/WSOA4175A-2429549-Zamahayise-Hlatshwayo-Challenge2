import { useLocation } from "react-router-dom";

function Confirmation() {
  const { state } = useLocation();

  if (!state || !state.selectedTickets) {
    return <div>No tickets selected</div>;
  }

  const totalAmountDue = state.selectedTickets.reduce(
    (acc, ticket) => acc + ticket.price,
    0
  );

  return (
    <div>
      <h1>Confirmation</h1>
      <ul>
        {state.selectedTickets.map((ticket) => (
          <li key={ticket.id}>
            <p>{ticket.name}</p>
            <p>Price: {ticket.price}</p>
            <p>
              Date & Time: {ticket.date} {ticket.time}
            </p>
            <p>Passenger: {ticket.passengerName}</p>
          </li>
        ))}
      </ul>
      <p>Total Amount Due: {totalAmountDue}</p>
      <p>Payment Method: Credit Card</p>
      <p>Delivery Method: Email</p>
    </div>
  );
}

export default Confirmation;
