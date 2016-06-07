'use strict';
(function exportModule(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else {
    // Browser globals
    root.loot = root.loot || {};
    root.loot.Settings = factory();
  }
}(this, () => class {
  constructor(obj) {
    this.enableDebugLogging = obj.enableDebugLogging || false;
    this.updateMasterlist = obj.updateMasterlist || true;
    this.game = obj.game || 'auto';
    this.language = obj.language || 'en';
    this.lastGame = obj.lastGame || 'auto';
    this.lastVersion = obj.lastVersion || '';
    this.games = obj.games || [];
    this.filters = {};

    this.tempGames = undefined;
  }
}));
