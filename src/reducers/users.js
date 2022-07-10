// export default (user = [], action) => {
//     switch (action.type) {
//         case "FETCH":
//             return action.payload;
//         case "CREATE":
//             return [...user, action.payload];
//         default:
//             return user;
//     }
// };

export default (user = [], action) => {
    // Object.assign(action, action.payload);
    switch (action.type) {
        case "FETCH":
            return action.payload;
        case "CREATE":
            return [...user, action.payload];
        default:
            return user;
    }
};