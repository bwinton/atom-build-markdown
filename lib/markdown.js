/* globals atom:false */

'use strict';

var spawnSync = require('child_process').spawnSync;

exports.provideBuilder = function () {
  return class MarkdownBuilder {

    getNiceName() {
      return 'Markdown';
    }

    isEligible() {
      var textEditor = atom.workspace.getActiveTextEditor();
      if (!textEditor || !textEditor.getPath()) {
        return false;
      }
      var path = textEditor.getPath();
      return path.endsWith('.md') || path.endsWith('.mkd');
    }

    settings() {
      var app = spawnSync('mdfind', ['kMDItemCFBundleIdentifier == "com.brettterpstra.mark*"']);
      app = app.stdout.toString().split('\n')[0];

      return [ {
        name: 'Markdown: view',
        sh: false,
        exec: 'open',
        args: [ '-a', app || 'Marked 2', '{FILE_ACTIVE}' ]
      }];
    }
  }
};
