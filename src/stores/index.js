import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./player";

export default configureStore({
  reducer: {
    player: playerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
