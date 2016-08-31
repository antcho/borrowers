import JSONAPIAdapter from 'ember-data/adapters/json-api';
import config from '../config/environment';
import Ember from 'ember';

export default JSONAPIAdapter.extend({
	host: config.host,
	pathForType: function(type){
		return Ember.String.pluralize(Ember.String.underscore(type));
	}
});
