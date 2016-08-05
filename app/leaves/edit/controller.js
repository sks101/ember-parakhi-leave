import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		formUpdate: function() {
			var controller = this;
			// console.log(status);
			controller.model.save().then(function(){
			controller.transitionTo('leaves');
			})

		}
	}
});