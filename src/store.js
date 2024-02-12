let store = {

    _state: {

        navPage: [
            {id: 1, name: 'Профиль', root: '/profile'},
            {id: 2, name: 'Друзья', root: '/friends'},
            {id: 3, name: 'Сообщения', root: '/messeges'},
        ],

        profilePage: {
            profileData: [
                {id:1, username: 'Ivan', user2name: 'Izmaylove', age: 23},
            ],
            postsData: [
                {id: 1, postname: 'Post1', posttext: 'Post1 text'},
                {id: 2, postname: 'Post2', posttext: 'Post2 text'},
                {id: 3, postname: 'Post3', posttext: 'Post3 text'},
                {id: 4, postname: 'Post4', posttext: 'Post4 text'},
            ],
        },

        friendsPage: {
            friendsData: [
                {id: 1, username: 'Тоха', user2name: 'Логинов', age: 37},
                {id: 2, username: 'Тоха', user2name: 'Логинов', age: 42},
                {id: 3, username: 'Тоха', user2name: 'Логинов', age: 33},
            ],
        },

        messegesPage: {
            messegesData: [
                {id: 1, owner: false, text: 'Hello, whats up?'},
                {id: 2, owner: true, text: 'Kinda sad'},
                {id: 3, owner: true, text: 'And you?'},
                {id: 4, owner: false, text: 'Its okay, I guess...'},
                {id: 5, owner: false, text: 'life is shit'},
                {id: 6, owner: false, text: 'nobody cares'},
                {id: 7, owner: true, text: 'thats the way it is'},
                {id: 8, owner: false, text: 'thats the way it is...'},
            ],
        },

    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._subscriber = observer
    },

    _subscriber() {
        console.log('something is working')
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {id: action.id, postname: action.postname, posttext: action.posttext}
            this._state.profilePage.postsData.push(newPost)
            this._subscriber(this._state)
        }
        else if (action.type === 'ADD-MESSEGE') {
            let newMessege = {id: action.id, owner: true, text: action.text}
            this._state.messegesPage.messegesData.push(newMessege)
        }
        this._subscriber(this._state)
    },

}

export let addPostCreator = (postname, posttext) => {
    return {type: 'ADD-POST', id: 2, postname: postname, posttext: posttext}
}

export let addMessegeCreator = (text) => {
    return {type: 'ADD-MESSEGE', id: 2, text: text}
}

export default store;