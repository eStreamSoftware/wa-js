/*!
 * Copyright 2021 WPPConnect Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Debug from 'debug';

import * as webpack from '../../webpack';
import { StatusV3Store } from '../../whatsapp';
import { eventEmitter } from '../eventEmitter';

const debug = Debug('WA-JS:blocklist');

webpack.onInjected(() => registerSyncedEvent());

function registerSyncedEvent() {
  StatusV3Store.on('sync', () => {
    debug('synced');
    eventEmitter.emit('sync');
  });

  debug('synced event registered');
}
