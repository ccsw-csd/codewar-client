import { Component, Inject, OnInit } from '@angular/core';
import { ListUser } from '../to/ListUser';
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

  dataSource = new MatTableDataSource<ListUser>();
  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'email', 'role', 'delete' ];
  searchUsersCtrl = new FormControl();
  isLoading = false;
  users: any[];
  errorMsg: string;
  userUpdate: import("c:/Users/asolerpa/codewar/codewar-client/src/app/core/to/User").User;

  constructor(
    private usersService: UsersService, 
    public dialog: MatDialog,
    @Inject (MatAutocompleteModule) public auto: string
  ) { }

  ngOnInit(): void {


    this.usersService.getUsers().subscribe(
      (res: ListUser[]) => {
        let list = [];
        for(let user of res) {

          if(user.role != "Developer"){
            list.push(user);
          }
        }
        this.dataSource.data = list;
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
        this.usersService.getUsersByFilter(value))
        .pipe(
          finalize(() => { this.isLoading = false; }),
        )
      )
    )
    .subscribe((data: any) => {

      this.users = [];

      for(let user of data) {
        if(user.role == "Developer"){
          this.users.push(user);
        }
      }
    }
  );
  }

  addUser(user: ListUser) {

    user.role = "Manager";
    this.usersService.update(user).subscribe(result => {
      this.ngOnInit();
    }); 

  }

  deleteUser(user: ListUser) {

    const dialogRef = this.dialog.open(DialogComponent, {
      data: { title: "Eliminar usuario", description: "¿Estas seguro de eliminar el usuario: " + user.username + "?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        user.role = "Developer";
        this.usersService.update(user).subscribe(result => {
          this.ngOnInit();
        }); 
      }
    });
  }  
}
