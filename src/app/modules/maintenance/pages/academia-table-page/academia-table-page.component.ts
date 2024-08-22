import { Component } from '@angular/core';
/* https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_de_Mato_Grosso_por_popula%C3%A7%C3%A3o*/
interface Country {
	name: string;
	imagem: string;
  cidade: string;
	quantidade: number;
}
const COUNTRIES: Country[] = [
	{
		name: 'Jacare',
		imagem: 'commons/thumb/b/bc/Bandeira_de_Tangar%C3%A1_da_Serra.svg/40px-Bandeira_de_Tangar%C3%A1_da_Serra.svg.png',
		cidade:'Tangara da Serra - MT',
		quantidade: 146989754,
	},
	{
		name: 'Cobra',
		imagem: 'commons/thumb/5/55/Bandeira_Nova_Ol%C3%ADmpia.png/40px-Bandeira_Nova_Ol%C3%ADmpia.png',
		cidade:'Nova Olimpia - MT',
		quantidade: 36624199,
	},
	{
		name: 'Gorila',
		imagem: 'commons/thumb/b/bc/Bandeira_de_Tangar%C3%A1_da_Serra.svg/40px-Bandeira_de_Tangar%C3%A1_da_Serra.svg.png',
		cidade:'Tangara da Serra - MT',
		quantidade: 324459463,
	},
	{
		name: 'Rato',
		imagem: 'pt/thumb/4/47/Bandeira_nortelandia.jpg/40px-Bandeira_nortelandia.jpg',
		cidade:'Nortelandia - MT',
		quantidade: 1409517397,
	},
];

@Component({
  selector: 'app-academia',
  templateUrl: './academia-table-page.component.html',
  styleUrl: './academia-table-page.component.css'
})
export class AcademiaComponent {
  countries = COUNTRIES;
}
