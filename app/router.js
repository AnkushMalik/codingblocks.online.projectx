import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('courses', function() {
    this.route('id', {path: '/:courseId'});
  });
  this.route('classroom', function() {
    this.route('timeline', {path: '/course/:courseId/run/:runId'}, function () {
      this.route('overview');
      this.route('contents');
      this.route('announcements');
      this.route('doubts');
    })
  });
  this.route('attempt', {path: '/player/:runAttemptId'}, function() {
    this.route('content', {path: '/content/:contentId'}, function() {});
  });
  this.route('error');
  this.route('loading');
  this.route('application-loading');
});

export default Router;
