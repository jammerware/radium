import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { first, find, filter, mergeAll } from 'rxjs/operators';
import { Ring } from '../models/ring';
import { RingItem } from '@/rings/models/ring-item';
import { RingItemType } from '../models/ring-item-type';
import { ElectronService } from '@/core-services/electron.service';
import { NotificationsService } from '@/core-services/notifications.service';
import { LoggerService } from '@/core-services/logger.service';

@Injectable({ providedIn: 'root' })
export class RingsService {
    activeRingChange = new EventEmitter<Ring>();
    newItem = new EventEmitter<Ring>();

    constructor(
        private electronService: ElectronService,
        private loggerService: LoggerService,
        private notificationsService: NotificationsService) { }

    async execute(ringItem: RingItem) {
        if (ringItem.type === RingItemType.NewItem) {
            this.get(ringItem.args[0]).subscribe(ring => {
                this.newItem.emit(ring);
            });
        }
        else if (ringItem.type === RingItemType.RingLink) {
            this.get(ringItem.args[0]).subscribe(ring => {
                this.activeRingChange.emit(ring)
            });
            return;
        }
        else if (ringItem.type === RingItemType.Execute) {
            this.electronService.childProcess.exec(`"${ringItem.args[0]}"`, error => {
                if (error) {
                    this.loggerService.error(JSON.stringify(error));
                }
                else {
                    this.notificationsService.show("Radium", `Launching ${ringItem.name}...`);
                }
            });
        }
    }

    get(name: string): Observable<Ring> {
        return this.getAll().pipe(
            mergeAll(),
            filter(r => r.name === name)
        );
    }

    getAll(): Observable<Ring[]> {
        return of([
            {
                id: '17615a1a-1561-47da-8f94-83334a853ebb',
                name: "Begin",
                icon: "https://banner2.kisspng.com/20180203/cve/kisspng-icon-welcome-png-image-5a759f9fc6afb8.2111543715176580158138.jpg",
                items: [
                    {
                        name: "Work",
                        type: RingItemType.RingLink,
                        args: ["Code"],
                    },
                    {
                        name: "Play",
                        type: RingItemType.RingLink,
                        args: ["Gaemz"]
                    }
                ]
            },
            {
                id: '2bf700f8-1e42-4221-954d-96694694e6ba',
                name: "Code",
                icon: "http://icons.iconarchive.com/icons/thehoth/seo/256/seo-web-code-icon.png",
                items: [
                    {
                        name: "VS Code",
                        type: RingItemType.Execute,
                        icon: "https://user-images.githubusercontent.com/49339/32078472-5053adea-baa7-11e7-9034-519002f12ac7.png",
                        args: ["D:\\Microsoft VS Code\\Code.exe"]
                    },
                    {
                        name: "IntelliJ",
                        type: RingItemType.Execute,
                        icon: "http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/intellij-icon.png",
                        args: ["D:\\JetBrains\\IntelliJ IDEA Community Edition 2018.3.3\\bin\\idea64.exe"]
                    },
                    {
                        name: "Android Studio",
                        type: RingItemType.Execute,
                        icon: "https://cdn0.iconfinder.com/data/icons/social-network-9/50/8-128.png",
                        args: ["D:\\Android\\Android Studio\\bin\\studio64.exe"],
                    }
                ],
            },
            {
                id: 'dbc7f941-86de-483c-be49-f7005e33bc6a',
                name: "Gaemz",
                icon: "https://cdn3.iconfinder.com/data/icons/hotel-services-facilities-2/256/Game_Room-512.png",
                items: [
                    {
                        name: "Steam",
                        type: RingItemType.Execute,
                        icon: "http://www.stickpng.com/assets/images/58aefddbc869e092af51ee70.png",
                        args: ["D:\\Steam\\Steam.exe"],
                    },
                    {
                        name: "FFXIV",
                        type: RingItemType.Execute,
                        icon: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/bc2a2cbe-29f7-464d-8396-131bdd4ccd3f/d7xn4e7-531cd7bf-e2e4-40f2-88e7-ba524acd0803.png",
                        args: ["D:\\SquareEnix\\FINAL FANTASY XIV - A Realm Reborn\\boot\\ffxivboot.exe"],
                    },
                    {
                        name: "Discord",
                        type: RingItemType.Execute,
                        icon: "https://spng.pngfly.com/20180605/cja/kisspng-discord-logo-computer-icons-decal-online-chat-5b16e4c0229104.2056172715282270081416.jpg",
                        args: ["C:\\Users\\Jammer\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Hammer & Chisel, Inc\\Discord.lnk"],
                    },
                    {
                        name: "Origin",
                        type: RingItemType.Execute,
                        icon: "https://www.shareicon.net/download/2016/07/02/634658_origin_512x512.png",
                        args: ["D:\\Origin\\Origin.exe"],
                    },
                ]
            }
        ]);
    }
}
