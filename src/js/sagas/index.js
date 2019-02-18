import { all } from 'redux-saga/effects';
import { postsSaga } from "./postsSaga";


export default function* sagas() {
    yield all([
        ...postsSaga,
    ]);
}
