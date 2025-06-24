import { FormControl } from '@angular/forms';

export interface UserListForm {
  id: FormControl<number | null>;

  firstName: FormControl<string | null>; // Added firstName property

  lastName: FormControl<string | null>;

  genre: FormControl<string | null>;
}
