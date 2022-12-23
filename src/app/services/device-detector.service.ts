import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
@Injectable({
  providedIn: 'root'
})
export class DeviceDetector {
  constructor(private deviceService : DeviceDetectorService) {}
  public deviceInfo:any = null;

  get isMobile():boolean{
    return this.deviceService.isMobile();
  }
  get isTablet():boolean{
    return this.deviceService.isTablet();
  }
  get isDesktopDevice():boolean{
    return this.deviceService.isDesktop();
  }
}
