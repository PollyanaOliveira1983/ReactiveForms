import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  description: string = "";
  name: string = "";
  lastname: string = "";
  cpf: string = "";
  telephone: string = "";
  adress: string = "";
  complement: string = "";
  username: string = "";
  password: string = "";

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {this.description = data.title
    this.name = data.name
    this.lastname = data.lastname
    this.cpf = data.cpf
    this.telephone = data.telephone
    this.adress = data.adress
    this.complement = data.complement
    this.username = data.username
    this.password = data.password
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}






////////////////DIALOG FEITO E PASSADO OS PARAMETROS POLLY/////////////////////
