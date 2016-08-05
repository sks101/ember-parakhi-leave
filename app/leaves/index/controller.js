import Ember from 'ember';

export default Ember.Controller.extend({
	appController: Ember.inject.controller('application'),

	actions:{
		delete: function(leave){
			// console.log(leave.get('id'));
			this.store.findRecord('leave', leave.get('id')).then(function(leave){
				leave.deleteRecord();
				leave.save();
			});
		},
		leaveStatus: function(status, leave){
			// console.log(status);
			this.store.findRecord('leave', leave.get('id')).then(function(leave){
				leave.set("status", status);
				leave.save();
			});
		},
		logout(){
			this.get('appController').logout();
		}
	}
});
