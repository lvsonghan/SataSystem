import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {NgxEchartsModule} from 'ngx-echarts';
import {Http} from '@angular/http';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  constructor(private chart: NgxEchartsModule, private http: Http) { }
  /*获取总体的数据*/
  // noinspection JSAnnotator
  getSyssumdata(): Observable<any> {
    return this.http.get('api/data').pipe(
      map(res => res.json())
    );
  }
  /*获取在线人数*/
  getLinenumber(): Observable<Line[]> {
    return this.http.get('api/linenumber').pipe(
      map(res => res.json())
    );
  }
  /*获取当前状态的函数*/
  getStatusnumber(): Observable<Line[]> {
    return this.http.get('api/stausnumber').pipe(
      map(res => res.json())
      );
  }
  /*获取所有的系统警告*/
  getSysmessage(): Observable<any> {
      return this.http.get('api/sysmessage').pipe(
        map(res => res.json()
        ));
  }
  /*通过id获取具体的系统的警告*/
  getSysmessageByid(id: number): Observable<any> {
    return this.http.get('api/sysmessage/' + id).pipe(
      map(res => res.json()
      ));
  }
  /*通过id标记消息*/
  setSysmessageWriteByid(id: number): Observable<boolean> {
    return this.http.get('api/sysmeswrite/' + id).pipe(
      map(res => res.json()
      ));
  }
  /*获取系统的地图的分布的信息*/
  getSysdataMap(): Observable<any> {
    return this.http.get('api/sysdatamap').pipe(
      map(res => res.json())
    );
  }
  /*获取系统的开发信息*/
  getSysdevelopMess(): Observable<any> {
    return this.http.get('api/sysdevelope').pipe(
      map(res => res.json()
      )
    );
  }
  /*获取散点图的信息*/
  getAssayData(): Observable<any> {
    return this.http.get('api/syszoomdata').pipe(
      map(res => res.json())
    );
  }
  /*计算相关度*/
  accountSysNumber(par: any): Observable<any> {
    if (par.time && par.press) {
      return this.http.get('api/accountdata', { params: {press: par.time, time: par.press} }).pipe(
        map(res => res.json())
      );
    } else if (par.area) {
      console.log(par.area);
      return this.http.get('api/accountdata', { params: {area: par.area }}).pipe(
        map(res => res.json())
      );
    }
  }
}
export interface Line {
  name?: string;
  data?: Array<number>;
  xAyisIndex?: number;
  type?: string;
}
export interface Sys extends Line {
  stu?: boolean;
}
