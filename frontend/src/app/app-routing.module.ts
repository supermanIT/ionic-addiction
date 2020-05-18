import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './providers/helper/auth.guard';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
            },
            {
                path: 'qr-code-scanner',
                loadChildren: () => import('./pages/qr-code-scanner/qr-code-scanner.module').then(m => m.QrCodeScannerPageModule)
            },
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'area',
                loadChildren: () => import('./pages/area/area.module').then(m => m.AreaPageModule)
            },
            {
                path: 'intensity',
                loadChildren: () => import('./pages/intensity/intensity.module').then(m => m.IntensityPageModule)
            },
            {
                path: 'summary',
                loadChildren: () => import('./pages/summary/summary.module').then(m => m.SummaryPageModule)
            },
            {
                path: 'taq',
                loadChildren: () => import('./pages/taq/taq.module').then(m => m.TaqPageModule)
            },

            {
                path: 'tagx',
                loadChildren: () => import('./pages/tagx/tagx.module').then(m => m.TagxPageModule)
            }
        ],
        canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}