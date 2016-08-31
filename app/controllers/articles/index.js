import Ember from 'ember';

export default Ember.Controller.extend({
		delete(friend) {
			friend.destroyRecord();
		}
});
