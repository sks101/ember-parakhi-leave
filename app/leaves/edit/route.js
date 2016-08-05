import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		console.log(params.leave_id);
		return this.store.find('leave', params.leave_id);
	}
});
