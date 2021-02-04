const person = { name: "Jack William", age: 17, job: "Facebooker", gfName: "Emma Watson", address: 'Kocu Khet', phone: '01712121212', friends:['Tom Hanks', 'Tom Cruise', 'Tom Yarn']};

const {phone, gfName, salary, address} = person;


const complexObject = {
    name: 'abc',
    info: {
        address: 'Kolabagan',
        leader: 'Tiger leader'
    }
}

const {leader} = complexObject.info;

// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName,phone,salary,address);
// console.log(gfName,phone,salary,address);


const friends = ['Shahrukh Khan', 'Aamir Khan', 'Salman Khan', ' Sakib Khan', 'Arman Khan']
const [biggestFriend, nextFriend, ...restFriends] = friends;
console.log(leader);