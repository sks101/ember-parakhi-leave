import Ember from 'ember';


var session = JSON.parse(localStorage.getItem("fuse-leave-session"));
// console.log(session.userId);
export default Ember.Controller.extend({
	appController: Ember.inject.controller('application'),
	leave : {
		userId: session.userId
	},
	actions: {
		formSubmit: function(){
			var controller = this;
				console.log(controller.leave);
				controller.store.createRecord('leave', controller.leave ).save().then(function(){
					// console.log('here');
				controller.set('leave', {});
				controller.transitionTo('/leaves');
			});

		},
		logout(){
			this.get('appController').logout();
		}
	}
});
