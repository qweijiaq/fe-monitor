export * from './handleEvents';
export * from './load';
export * from './replace';
import { setupReplace } from './load';
import { initOptions, log } from 'wj-fe-monitor-core';
import { _global } from 'wj-fe-monitor-utils';
import { SDK_VERSION, SDK_NAME } from 'wj-fe-monitor-shared';
import { InitOptions } from 'wj-fe-monitor-types';
function webInit(options: InitOptions = {}): void {
  if (!('XMLHttpRequest' in _global) || options.disabled) return;
  initOptions(options);
  setupReplace();
}

function init(options: InitOptions = {}): void {
  webInit(options);
}

export { SDK_VERSION, SDK_NAME, init, log };
