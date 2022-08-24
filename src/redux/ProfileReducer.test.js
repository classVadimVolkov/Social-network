import profileReducer, {addPostActionCreator, deletePost} from "./ProfileReducer";

let idPostCounter = 1;
let initialState = {
    posts: [
        {id: idPostCounter++, message: 'How are you?', likesCounter: 13},
        {id: idPostCounter++, message: "It's my first message", likesCounter: 23}
    ],
}

test('new post should be added', () => {
    let action = addPostActionCreator('Learning React')
    let newState = profileReducer(initialState, action)
    expect(newState.posts.length).toBe(3)
    expect(newState.posts[2].message).toBe('Learning React')
});

test('post should be removed', () => {
    let action = deletePost(1)
    let newState = profileReducer(initialState, action)
    expect(newState.posts.length).toBe(1)
    expect(newState.posts[0].message).toBe('It\'s my first message')
});
