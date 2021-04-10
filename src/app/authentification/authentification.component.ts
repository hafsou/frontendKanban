import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Utilisateur} from '../models/utilisateur.model';
import {ServiceUtilisateurService} from '../services/service-utilisateur.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css'],
  providers: [ServiceUtilisateurService]
})
export class AuthentificationComponent implements OnInit {
  closeResult!: String;
  users: Utilisateur[] = [];
  profileForm = new FormGroup({
    nom: new FormControl(''),
    mail: new FormControl(''),
  });
  constructor(private serviceUtilisateurService: ServiceUtilisateurService, 
    private router: Router, private modalService: NgbModal, private http: HttpClient) { }

  ngOnInit(): void {
    this.refreshPeople();
  }

  showKanbans(email: String){
    console.log(email);
    this.router.navigate(["kanbans", email]);
  }
  // open the modal 
  open(content: any) { 
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  // close the modal
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  //submit form to create user 
  submitAddUser() {
    console.log(this.profileForm.value)
    let user: any = {
      nom: this.profileForm.controls['nom'].value,
      mail:this.profileForm.controls['mail'].value,
      kanbanBoards: [],
      fiches: []
    }
    this.addUser(user);
    this.modalService.dismissAll(); //dismiss the modal
    this.profileForm.reset();
  }

  refreshPeople() {
    this.serviceUtilisateurService.getAllUsers().subscribe((users) =>{
      this.users = users;
    });    
 
  }
 
  addUser(user:Utilisateur) {
    this.serviceUtilisateurService.addUser(user).subscribe((result) =>{
      this.refreshPeople();
    });       
  }

  deleteUser(email: String){
    this.serviceUtilisateurService.deleteUser(email).subscribe((result)=>{
      this.refreshPeople();
    }
    )
  }
}
