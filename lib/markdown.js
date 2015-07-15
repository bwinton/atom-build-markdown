/* globals atom:false */

'use strict';

exports.provideBuilder = function () {
  return {
    niceName: 'Markdown',

    isEligable: function () {
      var textEditor = atom.workspace.getActiveTextEditor();
      if (!textEditor || !textEditor.getPath()) {
        return false;
      }
      var path = textEditor.getPath();
      return path.endsWith('.md') || path.endsWith('.mkd');
    },

    settings: function () {
      return [ {
        name: 'Markdown: view',
        exec: 'mark',
        args: [ '{FILE_ACTIVE}' ]
      }];
    }
  };
};
