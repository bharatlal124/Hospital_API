# Hospital-API

## Description :

I have design an API using Node.js and MongoDB for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients.

## Features :

There can be 2 types of Users

- _Doctors_ & _Patients_
- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps:
  - Register the patient in the app (using phone number, if the patient already exists, just return the patient info in the API)
  - After the checkup, create a Report.
- Patient Report will have the following fields
  - Created by doctor
  - Status: Can be either of: _[0 :Negative, 1:Travelled-Quarantine, 2:Symptoms-Quarantine, 3:Positive-Admit]_
  - Date

## Project Setup :

1. Clone the Repository:

```bash
   git clone https://github.com/bharatlal124/Hospital_API
   cd Hospital_API
```

2. Install Dependencies:
   **npm install**

3. Start the Server:
   **node index.js**

4. Server running at:
   **http://localhost:8000/api/v1**

## End Points:

### 1. `/doctors/register`(POST): Register the new doctor using name,email and password(all requireds).

- Path : `http://localhost:8000/api/v1/doctors/register`
- INPUT:

```JSON
{
  "name":"Doctor1",
    "email":"doctor12@gmail.com",
    "password":"doc12345"
}
```

- OUTPUT

```JSON
{
    "data": {
        "doctor": {
            "_id": "6607cb2be8f81656f4459d5c",
            "name": "Doctor1",
            "email": "doctor12@gmail.com",
            "createdAt": "2024-03-30T08:19:55.285Z",
            "updatedAt": "2024-03-30T08:19:55.285Z",
            "__v": 0
        }
    },
    "message": "Successfully registered"
}
```

### 2. `/doctors/login`(POST): Doctor can Login using email and password.

- Path : `http://localhost:8000/api/v1//doctors/login`
- INPUT:

```JSON
{
    "email":"doctor12@gmail.com",
    "password":"doc12345"
}
```

- OUTPUT(Generate JWT Token)

```JSON
{
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA3Y2IyYmU4ZjgxNjU2ZjQ0NTlkNWMiLCJuYW1lIjoiRG9jdG9yMSIsImVtYWlsIjoiZG9jdG9yMTJAZ21haWwuY29tIiwicGFzc3dvcmQiOiJkb2MxMjM0NSIsImNyZWF0ZWRBdCI6IjIwMjQtMDMtMzBUMDg6MTk6NTUuMjg1WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDMtMzBUMDg6MTk6NTUuMjg1WiIsIl9fdiI6MCwiaWF0IjoxNzExNzg2ODc1LCJleHAiOjE3MTI3ODY4NzV9.nEPy9isilOn7st0IEf1Aff-7mOf0OSQGurivYR8bm_I"
    }
}
```

### 3. `/patients/register`(POST): Doctor can Register the patient using name and Phone Number.

- Path : `http://localhost:8000/api/v1/patients/register`

#### Need for further use: *(Add token into the Header)*

```JSON
{
"Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA3Y2IyYmU4ZjgxNjU2ZjQ0NTlkNWMiLCJuYW1lIjoiRG9jdG9yMSIsImVtYWlsIjoiZG9jdG9yMTJAZ21haWwuY29tIiwicGFzc3dvcmQiOiJkb2MxMjM0NSIsImNyZWF0ZWRBdCI6IjIwMjQtMDMtMzBUMDg6MTk6NTUuMjg1WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDMtMzBUMDg6MTk6NTUuMjg1WiIsIl9fdiI6MCwiaWF0IjoxNzExNzg2ODc1LCJleHAiOjE3MTI3ODY4NzV9.nEPy9isilOn7st0IEf1Aff-7mOf0OSQGurivYR8bm_I"
}
```

- INPUT:

```JSON
{
    "name": "Patient1",
    "phone":7856253984
}
```

- OUTPUT

```JSON
{
    "data": {
        "patient": {
            "reports": [],
            "_id": "6607cc4be8f81656f4459d5d",
            "name": "Patient1",
            "phone": 7856253984,
            "createdAt": "2024-03-30T08:24:43.050Z",
            "updatedAt": "2024-03-30T08:24:43.050Z",
            "__v": 0
        }
    },
    "message": "Patient Successfully Registered"
}
```

### 4. `/patients/:id/create_report`(POST): Doctor can create report of the Patients.

- Path : `http://localhost:8000/api/v1/patients/:id/create_report`

#### Need for further use: *(Add token into the Header)*

```JSON
{
"Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA3Y2IyYmU4ZjgxNjU2ZjQ0NTlkNWMiLCJuYW1lIjoiRG9jdG9yMSIsImVtYWlsIjoiZG9jdG9yMTJAZ21haWwuY29tIiwicGFzc3dvcmQiOiJkb2MxMjM0NSIsImNyZWF0ZWRBdCI6IjIwMjQtMDMtMzBUMDg6MTk6NTUuMjg1WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDMtMzBUMDg6MTk6NTUuMjg1WiIsIl9fdiI6MCwiaWF0IjoxNzExNzg2ODc1LCJleHAiOjE3MTI3ODY4NzV9.nEPy9isilOn7st0IEf1Aff-7mOf0OSQGurivYR8bm_I"
}
```
- INPUT:send status([0:Negative, 1:Travelled-Quarantine, 2:Symptoms-Quarantine, 3:Positive-Admit]) and doctor id

```JSON
{
    "status": 3,
    "doctor":"6607cb2be8f81656f4459d5c"
}
```

- OUTPUT

```JSON
{
    "data": {
        "report": {
            "patient": "Patient1",
            "status": "Positive-Admit",
            "doctor": "Doctor1",
            "date": "2024-03-30T08:28:16.761Z"
        }
    },
    "message": "Report successfully Created"
}
```

### 5. `/patients/:id/all_reports`(GET):Retrive all reports of a patient by ID.

- Path : `http://localhost:8000/api/v1/patients/:id/all_reports`
- OUTPUT

```JSON
{
    "data": {
        "report": [
            {
                "_id": "6607cd20e8f81656f4459d5e",
                "status": "Positive-Admit",
                "doctor": {
                    "_id": "6607cb2be8f81656f4459d5c",
                    "name": "Doctor1",
                    "email": "doctor12@gmail.com",
                    "password": "doc12345",
                    "createdAt": "2024-03-30T08:19:55.285Z",
                    "updatedAt": "2024-03-30T08:19:55.285Z",
                    "__v": 0
                },
                "patient": {
                    "reports": [
                        "6607cd20e8f81656f4459d5e"
                    ],
                    "_id": "6607cc4be8f81656f4459d5d",
                    "name": "Patient1",
                    "phone": 7856253984,
                    "createdAt": "2024-03-30T08:24:43.050Z",
                    "updatedAt": "2024-03-30T08:28:16.879Z",
                    "__v": 1
                },
                "createdAt": "2024-03-30T08:28:16.761Z",
                "updatedAt": "2024-03-30T08:28:16.761Z",
                "__v": 0
            }
        ]
    },
    "message": "All reports of the patient"
}
```

### 6. `/reports/:status`(GET):Retrieve all reports from DB filter on the basis of Status sent in params.

- Path : `http://localhost:8000/api/v1/reports/3`
- OUTPUT

```JSON
{
    "data": {
        "reportstatus": [
            {
                "_id": "6607cd20e8f81656f4459d5e",
                "status": "Positive-Admit",
                "doctor": {
                    "_id": "6607cb2be8f81656f4459d5c",
                    "name": "Doctor1",
                    "email": "doctor12@gmail.com",
                    "password": "doc12345",
                    "createdAt": "2024-03-30T08:19:55.285Z",
                    "updatedAt": "2024-03-30T08:19:55.285Z",
                    "__v": 0
                },
                "patient": {
                    "reports": [
                        "6607cd20e8f81656f4459d5e"
                    ],
                    "_id": "6607cc4be8f81656f4459d5d",
                    "name": "Patient1",
                    "phone": 7856253984,
                    "createdAt": "2024-03-30T08:24:43.050Z",
                    "updatedAt": "2024-03-30T08:28:16.879Z",
                    "__v": 1
                },
                "createdAt": "2024-03-30T08:28:16.761Z",
                "updatedAt": "2024-03-30T08:28:16.761Z",
                "__v": 0
            }
        ]
    },
    "message": "All report of this status"
}
```

## Folder Structure

- **Entry point** : index.js.
- **config** : Contains configuration files of Mongoose,Passport JWT Strategies and Status.
- **controllers** : The controllers for various urls like Doctor API or Patient API or Report API.
- **models** : Mongoose Schemas for the Doctors, Patients and reports.
- **routes** : Different routes for different request urls.
