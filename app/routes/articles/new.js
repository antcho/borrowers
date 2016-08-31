import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('article');
	},

	resetController(controller, isExiting){
		if(isExiting){
			var model = controller.get('model');
			if(model.get('isNew')){
				model.destroyRecord();
			}
		}
	}
});
