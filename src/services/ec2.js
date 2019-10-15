import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { requestInterceptor, responseInterceptor } from './interceptors';

const request = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  timeout: 60000
});

// This sets the mock adapter on the default instance
const mock = new MockAdapter(request, { delayResponse: 300 });
mock.onGet(/\/instances\?*/).reply(200, {
  instances: Array.from(Array(20)).map((_, index) => ({
    AmiLaunchIndex: 0,
    ImageId: 'ami-0b7b74ba8473ec232',
    InstanceId: `i-05ae0e35be3b01286  ${index}`,
    InstanceType: 't2.micro',
    KeyName: 'ln_keypair',
    LaunchTime: '2018-09-07T14:23:13.000Z',
    Monitoring: {
      State: 'disabled'
    },
    Placement: {
      AvailabilityZone: 'us-east-1a',
      GroupName: '',
      Tenancy: 'default'
    },
    Platform: 'windows',
    PrivateDnsName: '',
    ProductCodes: [],
    PublicDnsName: '',
    State: {
      Code: 48,
      Name: 'terminated'
    },
    StateTransitionReason: 'User initiated (2018-09-07 14:26:47 GMT)',
    Architecture: 'x86_64',
    BlockDeviceMappings: [],
    ClientToken: '',
    EbsOptimized: false,
    EnaSupport: true,
    Hypervisor: 'xen',
    ElasticGpuAssociations: [],
    NetworkInterfaces: [],
    RootDeviceName: '/dev/sda1',
    RootDeviceType: 'ebs',
    SecurityGroups: [],
    StateReason: {
      Code: 'Client.UserInitiatedShutdown',
      Message: 'Client.UserInitiatedShutdown: User initiated shutdown'
    },
    Tags: [],
    VirtualizationType: 'hvm',
    CpuOptions: {
      CoreCount: 1,
      ThreadsPerCore: 1
    }
  }))
});

mock.onPost('/region/zones').reply(200, {
  zones: [
    {
      State: 'available',
      Messages: [],
      RegionName: 'us-east-1',
      ZoneName: 'us-east-1a'
    },
    {
      State: 'available',
      Messages: [],
      RegionName: 'us-east-1',
      ZoneName: 'us-east-1b'
    },
    {
      State: 'available',
      Messages: [],
      RegionName: 'us-east-1',
      ZoneName: 'us-east-1c'
    },
    {
      State: 'available',
      Messages: [],
      RegionName: 'us-east-1',
      ZoneName: 'us-east-1d'
    },
    {
      State: 'available',
      Messages: [],
      RegionName: 'us-east-1',
      ZoneName: 'us-east-1e'
    },
    {
      State: 'available',
      Messages: [],
      RegionName: 'us-east-1',
      ZoneName: 'us-east-1f'
    }
  ]
});

request.interceptors.request.use(requestInterceptor);
request.interceptors.response.use(null, responseInterceptor);

export default {
  getInstances: async data => {
    try {
      const response = await request.get(
        `/instances?region=${data.region}&zone=${data.zone}`
      );
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
  },
  getZones: async region => {
    try {
      // const response = await request.get(`/zones?region=${region}`);
      const inputParam = { region };
      const response = await request.post('/region/zones', inputParam);
      return response.data;
    } catch (err) {
      console.log('err', err);
      return Promise.reject(err);
    }
  }
};
