import DS from 'ember-data';
 
var session = JSON.parse(localStorage.getItem("fuse-leave-session"));



export default DS.RESTAdapter.extend({
	host: "http://localhost:3000",
	headers:{
		Authorization: session.token
	}
});