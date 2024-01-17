import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe', 
      'This is a test recipe', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSf_ST0jazyb8_nuJzOPcEVFV5vtCfd57RohzkVMGlURmbuaFCA-EnFTmtF60A3Bf-sRY&usqp=CAU'
    ),
    new Recipe(
      'Test recipe', 
      'This is a test recipe', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSf_ST0jazyb8_nuJzOPcEVFV5vtCfd57RohzkVMGlURmbuaFCA-EnFTmtF60A3Bf-sRY&usqp=CAU'
    )
  ];
}
