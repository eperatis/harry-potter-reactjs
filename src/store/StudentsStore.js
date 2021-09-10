import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/Dispatcher';
import { refresh } from '../dispatcher/StudentsActionConstants';

class StudentsStore extends EventEmitter {
    _students = [];

    emitChange() {
        this.emit('Change');
    }

    addChangeListener(callback) {
        this.addListener('Change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('Change', callback);
    }
}

const store = new StudentsStore();
export default store;

dispatcher.register(({ action, payload }) => {
    if (action !== refresh) return;
    store._students = payload;
    store.emitChange();
});