import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { catchError, delay, EMPTY, timeout } from 'rxjs';
import { User } from '../../../models/placeholderUser';
import { UserService } from '../../../services/user.service';

export const userResolver: ResolveFn<User> = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  const error$ = EMPTY.pipe(
    delay(2000),
    catchError(() => {
      router.navigate(['admin', 'contacts']);
      return EMPTY;
    }),
  );
  return userService.getPersonal(route.params?.['id'])
                    .pipe(
                      timeout({ first: 2000 }),
                      catchError(() => {
                        router.navigate(['admin', 'contacts']);
                        return EMPTY;
                      }),
                    );
};
