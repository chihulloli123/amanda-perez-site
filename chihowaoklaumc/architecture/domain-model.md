# Chihowa Okla UMC Domain Model

## Core Entity

Church

The Church owns all public content displayed on the website.

---

## Announcements

Purpose:
Communicate temporary information to church members and visitors.

Attributes

- id
- title
- message
- publishDate
- expiresOn
- priority

Relationships

Church
    └── has many Announcements

---

## Events

Purpose:
Represent upcoming church activities.

Attributes

- id
- title
- description
- startDate
- endDate
- location
- image
- featured

Relationships

Church
    └── has many Events

---

## Ministries

Purpose:
Represent ministry groups.

Attributes

- id
- name
- description
- leader
- meetingDay
- meetingTime

Relationships

Church
    └── has many Ministries

---

## People

Purpose:
Represent church leadership and staff.

Attributes

- id
- firstName
- lastName
- title
- photo
- biography

Relationships

Church
    └── has many People

---

## Photos

Purpose:
Images used throughout the website.

Attributes

- id
- title
- url
- altText
- category

Relationships

Church
    └── has many Photos