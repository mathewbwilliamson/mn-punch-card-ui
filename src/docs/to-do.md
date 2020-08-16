# BEFORE INITIAL RELEASE

- Make top font look like style guide
- Make the Card Price more oobvious

https://www.amazon.com/Sushi-Go-Pick-Pass-Card/dp/B00J57VU44/ref=as_li_tl?ie=UTF8&tag=newtamparewar-20

- Add ref to Create new product in the API

# Improvements and Tasks

- Create a yml file for API deployment
- Auth for Admins in UI and in API
- Change buttons to be less aggressive but more design-y. Look into vettery and ant design.
- Make a dev db in addition to normal DB
- Auth for kids and instructors
- Instructor dashboard that lists out all the students and allows them to increase their punch card count or decrease their punch card count. Add a dialog box for are you sure?
- Student area to view current punch card
- User DB:
  - username
  - hashed password
  - isInstructor
  - isAdmin
  - lastLogin
- Student DB:
  - firstName
  - lastName
  - Address
  - City
  - State
  - ZipCode
  - currentPunchCardSize
  - currentPunchCardPunches
  - currentPunchCardColor (EnumObjects)
  - totalFullPunchCards
