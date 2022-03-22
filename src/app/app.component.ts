import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  cadastroCliente: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cpf: new FormControl('', [Validators.required, Validators.minLength(11)]),
    telephone: new FormArray ([
      new FormControl('')
    ]),
    adress: new FormControl('', [Validators.required, Validators.minLength(10)]),
    complement: new FormControl(''),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    confpassword: new FormControl('', [Validators.required, Validators.minLength(3)]),

  })

  tels: FormArray = this.cadastroCliente.get('telephone') as FormArray

  constructor(

    public dialog: MatDialog

  ){}

  ngOnInit(): void{
  }

  submit():void{
    console.log(`Name = ${this.cadastroCliente.controls['name'].value}`)
    console.log(`LastName = ${this.cadastroCliente.controls['lastname'].value}`)
    console.log(`CPF = ${this.cadastroCliente.controls['cpf'].value}`)
    console.log(`Telephone = ${this.cadastroCliente.controls['telephone'].value}`)
    console.log(`Adress = ${this.cadastroCliente.controls['adress'].value}`)
    console.log(`Complement = ${this.cadastroCliente.controls['complement'].value}`)
    console.log(`Username = ${this.cadastroCliente.controls['username'].value}`)
    console.log(`Password = ${this.cadastroCliente.controls['password'].value}`)
    console.log(`Confpassword= ${this.cadastroCliente.controls['confpassword'].value}`)

    ////////////////////////////  VERIFICAÇÃO DA SENHA POLLY //////////////////////////

    if
      (this.cadastroCliente.controls['password'].value !=
        this.cadastroCliente.controls['confpassword'].value) {
      alert("As senhas digitadas estão diferentes ! Digite senhas iguais");
      return ;
    }

    console.log('sucesso!')

    this.openDialog()

  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Cadastro de Cliente',
      name: this.cadastroCliente.controls['name'].value,
      lastname: this.cadastroCliente.controls['lastname'].value,
      cpf: this.cadastroCliente.controls['cpf'].value,
      telephone: this.cadastroCliente.controls['telephone'].value,
      adress: this.cadastroCliente.controls['adress'].value,
      complement: this.cadastroCliente.controls['complement'].value,
      username: this.cadastroCliente.controls['username'].value,
      password: this.cadastroCliente.controls['password'].value

    };

    this.dialog.open(DialogComponent, dialogConfig);

  }


}















////////////////DIALOG FEITO E PASSADO OS PARAMETROS POLLY/////////////////////
