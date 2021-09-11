import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/Dispatcher';
import { refresh } from '../dispatcher/StaffActionConstants';

class StaffStore extends EventEmitter {
    _staff = [];

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

const store = new StaffStore();
export default store;

dispatcher.register(({ action, payload }) => {
    if (action !== refresh) return;
    store._staff = payload;
    store.emitChange();
})