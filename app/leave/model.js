import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr('string'),
  name: DS.attr('string'),
  date: DS.attr('string'),
  reasons: DS.attr('string'),
  status: DS.attr('string')
});
