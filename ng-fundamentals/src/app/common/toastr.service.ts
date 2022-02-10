import { Injectable } from "@angular/core";

declare let toastr:any

@Injectable()
export class ToastrService {
  static success: any;
  static info: any;
  static warning: any;
  static error: any;
  
  success(message: string, title?: string) {
    ToastrService.success(message, title)
  }
  info(message: string, title?: string) {
    ToastrService.info(message, title)
  }
  warning(message: string, title?: string) {
    ToastrService.warning(message, title)
  }
  error(message: string, title?: string) {
    ToastrService.error(message, title)
  }
}
