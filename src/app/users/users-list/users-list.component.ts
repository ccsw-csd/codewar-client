import { Component, Inject, OnInit } from '@angular/core';
import { UserItemList } from '../to/UserItemList';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from '../services/users.service';
import { FormControl } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { debounceTime, finalize, switchMap, tap } from 'rxjs/operators';
import { iif } from 'rxjs';
import { DialogComponent } from 'src/app/core/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  dataSource = new MatTableDataSource<UserItemList>();
  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'email', 'role', 'delete' ];
  searchUsersCtrl = new FormControl();
  isLoading = false;
  users: any[];
  errorMsg: string;

  constructor(
    private usersService: UsersService, 
    public dialog: MatDialog,
    @Inject (MatAutocompleteModule) public auto: string
  ) { }

  ngOnInit(): void {


    this.usersService.findList().subscribe(
      (res: UserItemList[]) => {
        this.dataSource.data = res;
      }
    );


    this.searchUsersCtrl.valueChanges
    .pipe(
      debounceTime(100),
      tap(() => {
        this.errorMsg = '';
        this.users = [];
        this.isLoading = true;
      }),
      switchMap(value =>
        iif(() => value.length > 2,
        this.usersService.findUsersByFilter(value))
        .pipe(
          finalize(() => { this.isLoading = false; }),
        )
      )
    )
    .subscribe((data: any) => {
      this.users = data;
    }
  );
  }

  addUser(user: UserItemList) {

    this.usersService.updateUserRole(user.username, "MANAGER").subscribe(result => {
      this.ngOnInit();
    }); 

  }

  deleteUser(user: UserItemList) {

    const dialogRef = this.dialog.open(DialogComponent, {
      data: { title: "Eliminar usuario", description: "¿Estas seguro de eliminar el usuario: " + user.username + "?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.usersService.updateUserRole(user.username, "DEVELOP").subscribe(result => {
          this.ngOnInit();
        }); 
      }
    });
  }  
}
