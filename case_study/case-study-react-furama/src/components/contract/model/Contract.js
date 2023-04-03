contract = [
    {
        id: 1,
        startDate: '2019-11-11',
        endDate: '2019-11-17',
        deposit: "?",
        customer: {
            id: 1,
            name: 'Diamond'
        },
        facility: {
            id : 5,
            name: 'Xe đạp',
            area: 1000,
            cost: 5,
            maxPeople: 5,
            facilityType: {
                id: 1,
                name: 'Diamond'
            },
            rentType:  {
                id: 1,
                name: '?'
            },
            standardRoom: 'Vip',
            descriptionOtherCovenience: 'ổn',
            poolArea: 5,
            numberOfFloors: 5,
            facilityFree: "đèn mờ",
            status: false
    
    
        }
    }
], 
customer = [
    {
        id: 1,
        name: "Pham Quang Vinh",
        dateOfBirth: "2023-02-01",
        gender: "2",
        idCard: "24211201346",
        phoneNumber: "0989888",
        email: "6767@gmail.com",
        address: "Quang Binh",
        customerType: {
            id: 2,
            name: "Platinium"
        },

    },
    {
        id: 2,
        name: "Pham Quang Vinh",
        dateOfBirth: "2023-02-01",
        gender: "2",
        idCard: "24211201346",
        phoneNumber: "0989888",
        email: "6767@gmail.com",
        address: "Quang Binh",
        customerType: {
            id: 2,
            name: "Platinium"
        },

    }
],
customerType = [
    {
        id: 1,
        name: 'Diamond'
    },
    {
        id: 2,
        name: 'Platinium'
    },
    {
        id: 3,
        name: 'Gold'
    },
    {
        id: 4,
        name: 'Silver'
    }
],
facility = [
    {
        id : 5,
        name: 'Xe đạp',
        area: 1000,
        cost: 5,
        maxPeople: 5,
        facilityType: {
            id: 1,
            name: 'Diamond'
        },
        rentType:  {
            id: 1,
            name: '?'
        },
        standardRoom: 'Vip',
        descriptionOtherCovenience: 'ổn',
        poolArea: 5,
        numberOfFloors: 5,
        facilityFree: "đèn mờ",
        status: false


    }
],

facilityType = [
    {
        id: 1,
        name: 'Diamond'
    },
    {
        id: 2,
        name: 'Platinium'
    },
    {
        id: 3,
        name: 'Gold'
    },
    {
        id: 4,
        name: 'Silver'
    }
],

rentType = [
    {
        id: 1,
        name: '?'
    },
    {
        id: 1,
        name: '??'
    }

]

