import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultat-recherche',
  templateUrl: './resultat-recherche.component.html',
  styleUrls: ['./resultat-recherche.component.css']
})
export class ResultatRechercheComponent implements OnInit {
  userForm!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      titre: [''],
      auteur: [''],
      genre: ['']
    });
  }

  rechercherLivre() {
    console.log(this.userForm.get('titre').value);
    console.log(this.userForm.get('auteur').value);
    console.log(this.userForm.get('genre').value);
    // this.router.navigate(['/recherche'], { queryParams: { titre: 'titre', auteur: 'auteur', genre: 'genre' } });
  }

}