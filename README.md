# <img width="198" height="64" alt="Screenshot 2023-08-15 at 10 39 23 PM" src="https://github.com/vivienphang/booking-app/assets/101629147/dcac909f-b1d0-4f74-bd47-5638d7e6a0c7">


**book it.** is an app that manages meeting room booking management system. I was inspired to build this app because I have worked with companies that has meeting rooms, but without a scheduler. Whenever my teammates and I needed a room for discussion, we had to walk around to look for available rooms. Hence, **book it.** is the ultimate solution for effortless meeting room booking and management which saves my coworkers' time and efficiency. Now, booking a room only takes a few clicks! Check out the deployed app [here](https://book-it-topaz.vercel.app/).


## Features

1. User can **view** all available meeting rooms in the company.
2. User can **add, edit and delete** a booking made.

## User Stories

1. User can choose to click "Tell me more" to be redirected to **Overview page** or select the image cards and be redirected to **Room Display page**.
2. Once a specific meeting room is selected, user is redirected to **Room Display page** where all the room amenities are displayed.
3. If user has decided on a meeting room, click View Availability to be redirected to **View Availability page**.
4. The **View Availability page** consisted a Full calendar and a booking form. User can filter the calendar based on week, day, or month.
5. User can start booking a meeting room by filling out the form. **Note:** Leave no fields blank.
6. Once booking is done, the event will be shown in the calendar.
7. User can click on the event in the calendar and a popup containing the event details will be shown.
8. User can choose to edit or delete the event details.
9. Click the **book it.** logo to return to **Landing page**.


## App Walkthrough

**1. Landing page**

- Upon clicking "Tell me more", user will be redirected to the Overview page.
- Alternatively, when user clicks the image card on the carousel image, user will be redirected to the Room Display page.
![1](https://github.com/vivienphang/booking-app/assets/101629147/4b15f1e8-ee32-4ce2-beed-170bf6c610f5)
![2](https://github.com/vivienphang/booking-app/assets/101629147/7c0fc503-b1e2-438e-8849-a945c3a1184d)


**2. Overview page**
![3](https://github.com/vivienphang/booking-app/assets/101629147/02f48f66-8f44-4d2f-b291-037b616f8c4c)

**3. Room display page**
![4](https://github.com/vivienphang/booking-app/assets/101629147/0a8622b5-c15a-4b41-bb3f-664777a47553)

**3. View availability page** 

- Features the calendar overview filtered by week, day, month and a booking form

![5](https://github.com/vivienphang/booking-app/assets/101629147/47e50b49-1269-4706-8ad8-623aed224d12)
![6](https://github.com/vivienphang/booking-app/assets/101629147/e3cd2b05-d754-4253-ac99-6658b5a10b5c)

**4. View availability page** 

- Upon clicking the event, a modal pops up showing the event details.
- User can choose to edit or delete the event.
![7](https://github.com/vivienphang/booking-app/assets/101629147/76e34e99-07d0-49dc-990b-b31f7cc6a58a)

Future add-ons for the app:
1. Checking of double-booking of events.

## Technologies Used

**Client-side**

<ul>
<li>JavaScript</li>
<li>React</li>
<li>React Router DOM </li>
<li>Material UI</li>
<li>Firebase</li>
<li>FullCalender.io</li>
</ul>



## Learning Outcomes

The biggest outcome was to incorporate Firebase to seed all the meeting rooms' data and to use Material UI to style each components and pages. I have also learnt that using e.g.: ```index.module.css``` will prevent clashing of CSS naming convention as opposed to using just ```index.css```. 

**_Project Schedule_**

| Week 1   | Week 2  | Week 3       |
| -------- | ------- | ----------   |
| Ideation | MVP     | Presentation |

## Getting Started

**1. Clone the repo**

  `git clone https://github.com/vivienphang/booking-app.git`

**2. Install the packages**

  `npm install` or  `npm i`
  
## Credits
All images were from Pinterest.


