import { Profile } from '../../models/profile/profile';
import { Message } from '../../models/messages/message';

//creating a user
const userList: Profile[] = [
    { FirstName: 'Abdulmajid', LastName: 'Adams', email: 'mojeed4@yahoomail.com', avatar: 'assets/img/avatar.png', dateOfBirth: new Date() },
    { FirstName: 'Sayed', LastName: 'Umar', email: 'sayed@yahoomail.com', avatar: 'assets/img/avatar.png', dateOfBirth: new Date() },
    { FirstName: 'Raza', LastName: 'Mohammed', email: 'raza@yahoomail.com', avatar: 'assets/img/avatar.png', dateOfBirth: new Date() },
    { FirstName: 'John', LastName: 'Doe', email: 'johnDoe@yahoomail.com', avatar: 'assets/img/avatar.png', dateOfBirth: new Date() }
]

const messageList: Message[] = [
    { user: userList[0], date: new Date(), lastMessage: 'testing hello world' },
    { user: userList[1], date: new Date(), lastMessage: 'testing hello world' },
    { user: userList[2], date: new Date(), lastMessage: 'testing hello world' },
    { user: userList[3], date: new Date(), lastMessage: 'testing hello world' }
]

export const MESSAGE_LIST = messageList;