export class Device {
    type: string;
    _id: string;
    userId: string;
    config: DeviceConfiguration;

}

export class DeviceConfiguration{
    name: string;
}