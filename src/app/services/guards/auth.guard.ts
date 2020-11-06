import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AboutComponent} from '../../components/about/about.component';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanDeactivate<unknown> {
    canActivate(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        if (localStorage.getItem('user')) {
            return true;
        }
        return false;


    }

    canDeactivate(
            component: AboutComponent,
            currentRoute: ActivatedRouteSnapshot,
            currentState: RouterStateSnapshot,
            nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (localStorage.getItem('key')) {
            return true;
        }
        return false;
    }
}
