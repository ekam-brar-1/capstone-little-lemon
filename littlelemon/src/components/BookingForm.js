import React, { useState } from 'react';

function BookingForm() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(`Booking confirmed for ${name} on ${date} at ${time} for ${guests} guests.`);
        // Reset form fields
        setName('');
        setDate('');
        setTime('');
        setGuests(1);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Date:
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Time:
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Guests:
                    <input
                        type="number"
                        value={guests}
                        min="1"
                        onChange={(e) => setGuests(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Book Table</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default BookingForm;
