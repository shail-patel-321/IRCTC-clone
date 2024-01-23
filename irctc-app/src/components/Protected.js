import React from 'react'

export default function Protected() {
  return (
    <div className='protected'>
        <h2>Welcome</h2>
        <p>IRCTC has revolutionized life of the common man travelling with the Indian Railways. IRCTC Online Ticket booking system is a boon to the common man, empowering him through technology. Launched in August, 2002, the Company had booked a mere 27 tickets on the first day of its commencement of Internet ticketing service in the country. From the first day 27 i-ticket bookings, the Company has reached to a record of 15.88 lakh e-tickets booked on 21st March 2022. Now after more than 20 years of a sparkling journey, it has emerged as one of the largest e-commerce website in the country and Asia Pacific. The e-Ticketing System was replaced with Next Generation E-Ticketing (NGeT) System from 28- Apr-2014 and the capacity of per minute ticket booking was increased progressively.</p>
        <br></br><br></br>

        <h4>Start Your Journey</h4>
        <h6>From:</h6>
        <input type="text" list="city"
                        placeholder="Enter Here" />
            <datalist id="city">
            <option value="Gujarat">ABU ROAD</option>
            <option value="Gujarat">AHMEDABAD</option>
            <option value="BALASORE">BALASORE</option>
            <option value="Mumbai">BANDRA</option>
            <option value="Rajastan">JAIPUR</option>
        </datalist>
        <br></br>
        <h6>To:</h6>
        <input type="text" list="city"
                        placeholder="Enter Here" />
            <datalist id="city2">
            <option value="Gujarat">ABU ROAD</option>
            <option value="Gujarat">AHMEDABAD</option>
            <option value="BALASORE">BALASORE</option>
            <option value="Mumbai">BANDRA</option>
            <option value="Rajastan">JAIPUR</option>
        </datalist>
        <br></br><br></br>
        <h3>Our Expertise</h3><div className='oe1'>
        <h4>Train Information:</h4>
        <p>The website offers comprehensive information about train schedules, routes, and stations. Users can check the departure and arrival times of trains, as well as the stops along the route.
Details about train services, including whether a train is express or local, are available to help passengers make informed decisions.</p></div>
        <br></br>
        <div className='oe2'>
        <h4>PNR Status:</h4>
        <p>Passengers can check the status of their booked tickets using the PNR status feature. PNR (Passenger Name Record) is a unique 10-digit number assigned to each booking.
The PNR status indicates whether the ticket is confirmed, on the waiting list, or on the RAC (Reservation Against Cancellation) list.</p></div>
        <br></br>
        <div className='oe3'>
        <h4>Cancellation and Refunds:</h4>
        <p>Users can cancel their booked tickets online through the IRCTC website. The cancellation process involves entering the PNR number and following the specified steps.
Information about the refund rules and the amount to be refunded is also provided. Refunds are processed based on the cancellation time and other applicable rules.</p></div>
        <br></br>
        <div className='oe4'>
        <h4>Mobile App Integration:</h4>
        <p>The IRCTC mobile app provides similar features to the website and allows users to book tickets, check PNR status, and manage their accounts through their smartphones.
The app offers a user-friendly interface for a seamless booking experience on mobile devices.</p></div>
    </div>
  )
}
