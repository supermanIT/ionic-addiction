import {Component, OnInit} from '@angular/core';
import {MenuController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {DeviceUUID} from 'device-uuid';

import {CodeService} from '../../providers/code/code.service';
import {HttpService} from '../../providers/http/http.service';
import {DispenseService} from '../../providers/dispense/dispense.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    code: any;

    constructor(
        private router: Router,
        private menu: MenuController,
        private codeService: CodeService,
        public toastController: ToastController,
        private httpRequest: HttpService,
        private dispenseService: DispenseService
    ) {
    }

    ngOnInit() {
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu');
    }

    code_check() {
        if (this.code === undefined || this.code === null || this.code === '') {
            this.presentToast('Bitte geben Sie Ihren Code ein.');
            return;
        }
        this.codeService.code_check(this.code).subscribe(res => {
            if (res.isExist === true) {
                if (res.isAdmin === 1) this.router.navigate(['/admin']);
                else {
                    this.httpRequest.get_dispenseByDeviceId(new DeviceUUID().get()).subscribe((response: any) => {
                        if (response.result.length > 0) {
                            this.dispenseService.setDispense(response.result[0]);
                            this.router.navigate(['/tagx']);
                        } else {
                            this.router.navigate(['/area']);
                        }
                    })
                }

            }
            else {
                this.presentToast('Dieser Code ist leider nicht korrekt');
            }
        })
    }

    async presentToast(text) {
        const toast = await this.toastController.create({
            message: text,
            duration: 2000,
            position: 'top',
        });
        toast.present();
    }
}
