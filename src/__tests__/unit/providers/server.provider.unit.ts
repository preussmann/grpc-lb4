// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/grpc
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import * as grpc from '@grpc/grpc-js';
import {expect} from '@loopback/testlab';
import {ServerProvider} from '../../..';

describe('ServerProvider', () => {
  it('returns a grpc singleton server', () => {
    const server: grpc.Server = new ServerProvider().value();
    expect(server).to.be.an.Object();
    expect(server.bind).to.be.a.Function();
    expect(server.start).to.be.a.Function();
    expect(server.addProtoService).to.be.a.Function();
  });
});
