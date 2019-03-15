import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "SHELF" actions
function* fetchShelf(action) {
    console.log('shelf saga hit', action);
    
    try {
        const shelfResponse = yield axios.get('/api/shelf');
        console.log(shelfResponse);
        yield put({ type: 'GET_SHELF', payload: shelfResponse.data })
    } catch (error) {
        console.log(error);
    }

}

function* postShelf(action){
    try {
        yield axios.post('/api/shelf', action.payload);
        const nextAction = { type: 'FETCH_SHELF' };
        yield put(nextAction);
    } catch (error) {
        console.log('Error making POST request');
        alert('there was a problem');
    }

}

function* deleteShelf(action){
    try {
        yield axios.delete(`api/shelf/${action.payload}`)

        yield put({ type: 'FETCH_SHELF' })
    } catch (error) {
        console.log('DELETE ', error)
    }
}

function* shelfSaga() {
    yield takeLatest('FETCH_SHELF', fetchShelf);
    yield takeEvery('POST_SHELF', postShelf);
    yield takeEvery('DELETE_SHELF', deleteShelf)
}
export default shelfSaga;

