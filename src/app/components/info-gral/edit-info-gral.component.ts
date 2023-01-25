import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-info-gral',
  templateUrl: './edit-info-gral.component.html',
  styleUrls: ['./edit-info-gral.component.css']
})
export class EditInfoGralComponent implements OnInit{
  
  persona: persona = null;

  constructor(private activatedRouter: ActivatedRoute, private personaService: PersonaService, private router: Router, public imageService: ImageService){}



  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data=>{
        this.persona = data;
      }, err=>{
        alert("Error al modificar la información general");
        this.router.navigate(['']);
      }
    )
  }


  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err=>{
        alert("Error al modificar la información general");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    this.imageService.uploadImage($event)
  }
  

}