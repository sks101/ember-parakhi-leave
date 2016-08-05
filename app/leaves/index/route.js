import Ember from 'ember';

var session = JSON.parse(localStorage.getItem("fuse-leave-session"));

export default Ember.Route.extend({
	model(){
		return this.store.query('leave', {userId:session.userId});
	}
});
