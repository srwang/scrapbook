'use strict';

// Setting up route
angular.module('notes').config(['$stateProvider',
  function ($stateProvider) {
    // notes state routing
    $stateProvider
      .state('notes', {
        abstract: true,
        url: '/notes',
        template: '<ui-view/>'
      })
      .state('notes.list', {
        url: '',
        templateUrl: 'modules/notes/client/views/list-notes.client.view.html'
      })
      .state('notes.create', {
        url: '/create',
        templateUrl: 'modules/notes/client/views/create-notes.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('notes.view', {
        url: '/:notesId',
        templateUrl: 'modules/notes/client/views/view-notes.client.view.html'
      })
      .state('notes.edit', {
        url: '/:notesId/edit',
        templateUrl: 'modules/notes/client/views/edit-notes.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);