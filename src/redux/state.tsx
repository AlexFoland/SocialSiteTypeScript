import Thrall from '../images/Thrall.jpg';
import Hogwarts from '../images/Hogwarts.jpg';
import MK from '../images/MK.jpg';


export type PostType = {
    message: string
    imgUrl: string
    likesCount: number
    id: number
}
export type DialogType = {
    id: number;
    name: string;
}
export type MessageType = {
    id: number;
    message: string;
}


export type PostsDataType = {
    postsData: PostType[]
}


export type ProfilePageType = {
    postsData: PostType[]
}
export type MessagesPageType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
}


export type AppDataType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}
export type AppPropsType = {
    state: AppDataType
}
let state: AppDataType = {
    profilePage: {
        postsData: [
            { id: 1, message: "How are you?", likesCount: 12, imgUrl: Thrall },
            { id: 2, message: "How are you?", likesCount: 19, imgUrl: Hogwarts },
            { id: 3, message: "Hi", likesCount: 29, imgUrl: MK },
            { id: 4, message: "Bro", likesCount: 39, imgUrl: Thrall },
            { id: 5, message: "What do you do? Lets go party What do you do? Lets go party What do you do? Lets go party", likesCount: 21, imgUrl: MK },
        ]
    },
    messagesPage: {
        dialogsData: [
            { id: 1, name: "Marina" },
            { id: 2, name: "Valera" },
            { id: 3, name: "Alina" },
            { id: 4, name: "Alena" },
            { id: 5, name: "Leila" },
        ],
        messagesData: [
            { id: 1, message: "How are you?" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "Hi" },
            { id: 4, message: "Bro" },
            { id: 5, message: "What do you do? Lets go party What do you do? Lets go party What do you do? Lets go party" },
        ]
    }
}

export default state;

