import { Injectable } from '@angular/core';

const CentersMock = [
	{
		id: 0,
		address: "Ул. Пушкина дом Колотушкина",
		materials: "Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы..."
	},
	{
		id: 1,
		address: "Ул. Пушкина дом Колотушкина",
		materials: "Стекло, бумага, металл, старая одежда, батареи"
	},
	{
		id: 2,
		address: "Ул. Пушкина дом Колотушкина",
		materials: "Пластик, стекло, бумага, металл"
	},
	{
		id: 3,
		address: "Ул. Пушкина дом Колотушкина",
		materials: "Стекло, бумага, металл, старая одежда, батареи"
	},
	{
		id: 4,
		address: "Ул. Пушкина дом Колотушкина",
		materials: "Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы..."
	},
]
@Injectable({
  providedIn: 'root'
})
export class MapService {
	centers = CentersMock;
}
