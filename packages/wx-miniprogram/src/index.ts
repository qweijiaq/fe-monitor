import { InitOptions } from 'wj-fe-monitor-types';
import { isWxMiniEnv } from 'wj-fe-monitor-utils';
import { setupReplace } from './load';
import { initOptions, log } from 'wj-fe-monitor-core';
import { sendTrackData, track } from './initiative';
import { SDK_NAME, SDK_VERSION } from 'wj-fe-monitor-shared';
import { MonitorVue } from 'wj-fe-monitor-vue';
import { errorBoundaryReport } from 'wj-fe-monitor-react';

export function init(options: InitOptions = {}) {
  if (!isWxMiniEnv) return;
  initOptions(options);
  setupReplace();
  Object.assign(wx, { monitorLog: log, SDK_NAME, SDK_VERSION });
}
export { log, sendTrackData, track, MonitorVue, errorBoundaryReport };
