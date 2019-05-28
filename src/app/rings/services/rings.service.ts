import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ring } from '../models/ring';
import { RingItemType } from '../models/ring-item-type';

@Injectable({ providedIn: 'root' })
export class RingsService {
    getAll(): Observable<Ring[]> {
        return of([
            {
                name: "Code",
                icon: "http://icons.iconarchive.com/icons/thehoth/seo/256/seo-web-code-icon.png",
                items: [
                    {
                        name: "VS Code",
                        type: RingItemType.Execute,
                        icon: "https://user-images.githubusercontent.com/49339/32078472-5053adea-baa7-11e7-9034-519002f12ac7.png",
                        args: ["D:\Microsoft VS Code\Code.exe"]
                    },
                    {
                        name: "IntelliJ",
                        type: RingItemType.Execute,
                        icon: "http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/intellij-icon.png",
                        args: ["D:\JetBrains\IntelliJ IDEA Community Edition 2018.3.3\bin\idea64.exe"]
                    },
                    {
                        name: "Android Studio",
                        type: RingItemType.Execute,
                        icon: "https://cdn0.iconfinder.com/data/icons/social-network-9/50/8-128.png",
                        args: ["D:\Android\Android Studio\bin\studio64.exe"],
                    }
                ],
            }
        ]);
    }
}
