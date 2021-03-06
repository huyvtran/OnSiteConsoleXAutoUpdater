import { Component, NgZone, OnInit                                            } from '@angular/core'                  ;
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular'                  ;
import { Log, Moment, moment, isMoment                                        } from '../../config/config.functions'  ;
import { ServerService                                                        } from '../../providers/server-service' ;
import { DBService                                                            } from '../../providers/db-service'     ;
import { AuthService                                                          } from '../../providers/auth-service'   ;
import { AlertService                                                         } from '../../providers/alert-service'  ;
import { Schedule, ScheduleBeta,                                              } from '../../domain/domain-classes'    ;

export const _sortSchedule = (a:Schedule|ScheduleBeta, b:Schedule|ScheduleBeta) => {
  let sA = a.startXL;
  let sB = b.startXL;
  let iA = a._id;
  let iB = b._id;
  return sA < sB ? 1 : sA > sB ? -1 : iA < iB ? 1 : iA > iB ? -1 : 0;
};

@IonicPage({name: 'Schedule List'})
@Component({
  selector: 'page-schedule-list',
  templateUrl: 'schedule-list.html',
})
export class ScheduleListPage implements OnInit {
  public title    : string          = "Schedule List" ;
  public schedule : Schedule                          ;
  public schedules   :Array<Schedule|ScheduleBeta> = []           ;
  public allSchedules:Array<Schedule|ScheduleBeta> = []           ;
  public showAll  : boolean         = false           ;
  public mode     : string          = "original"      ;
  public dataReady: boolean         = false           ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public zone:NgZone, public server:ServerService, public alert:AlertService) {
    window['schedulelist'] = this;
  }

  ionViewDidLoad() {
    Log.l('ionViewDidLoad ScheduleListPage');
  }

  ngOnInit() {
    Log.l("ScheduleListPage: ngOnInit() called");
    if(this.navParams.get('mode') !== undefined) {
      this.mode = this.navParams.get('mode');
    }
    if(this.navParams.get('schedule') !== undefined) {
      this.schedule = this.navParams.get('schedule');
    }
    if(this.navParams.get('schedules') !== undefined) {
      this.schedules = this.navParams.get('schedules');
    }
    let spinnerID = this.alert.showSpinner('Loading schedules...');
    this.initializeScheduleList().then((res:Array<Schedule>) => {
      this.allSchedules = res.sort(_sortSchedule);
      if(!this.showAll) {
        this.schedules = this.allSchedules.filter((a:Schedule) => {
          return a._id.indexOf("backup") === -1;
        });
      } else {
        this.schedules = this.allSchedules.slice(0);
      }
      this.alert.hideSpinner(spinnerID);
      this.dataReady = true;
    }).catch(err => {
      Log.l("ScheduleList: error loading schedule list!");
      Log.e(err);
      this.alert.hideSpinner(spinnerID);
      this.alert.showAlert("ERROR", "Error while loading schedule list:<br>\n<br>\n" + err);
    });
  }

  public async initializeScheduleList() {
    try {
      let out;
      if (this.mode === 'beta') {
        out = await this.server.getSchedulesAsBetas();
      } else {
        out = await this.server.getSchedules();
      }
      return out;
    } catch(err) {
      Log.l(`initializeScheduleList(): Error retrieving Schedules from server in mode '${this.mode}'.`);
      Log.e(err);
      throw new Error(err);
    }
  }

  public openSchedule(schedule:Schedule|ScheduleBeta) {
    Log.l("openSchedule(): Now sending schedule back to be opened:\n", schedule);
    this.viewCtrl.dismiss({schedule: schedule});
  }

  public cancel() {
    Log.l("ScheduleList: User canceled.");
    this.viewCtrl.dismiss();
  }

  public toggleShowAll() {
    this.showAll = !this.showAll;
    if(!this.showAll) {
      let schedules = this.allSchedules.filter((a:any) => {
        return a._id.indexOf("backup") === -1;
      });
    } else {
      this.schedules = this.allSchedules.slice(0);
    }

  }
}
