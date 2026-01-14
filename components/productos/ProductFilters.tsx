'use client';

import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal, X } from 'lucide-react';

const categories = [
	{ id: 'textiles', label: 'Textiles' },
	{ id: 'ceramica', label: 'Cerámica' },
	{ id: 'retablos', label: 'Retablos' },
	{ id: 'tallados', label: 'Tallados en Piedra' },
];

const artisans = [
	{ id: 'maria-quispe', label: 'María Quispe' },
	{ id: 'jose-cardenas', label: 'José Cárdenas' },
	{ id: 'manuel-huaman', label: 'Manuel Huamán' },
	{ id: 'ana-lopez', label: 'Ana López' },
];

export default function ProductFilters() {
	const [priceRange, setPriceRange] = useState([50, 500]);
	const [selectedCategories, setSelectedCategories] = useState<string[]>(['textiles']);
	const [selectedArtisans, setSelectedArtisans] = useState<string[]>([]);

	const clearFilters = () => {
		setPriceRange([0, 1000]);
		setSelectedCategories([]);
		setSelectedArtisans([]);
	};

	// Componente interno para filas de Checkbox interactivas
	const FilterCheckbox = ({
		id,
		label,
		checked,
		onCheckedChange,
	}: {
		id: string;
		label: string;
		checked: boolean;
		onCheckedChange: (checked: boolean) => void;
	}) => (
		<div
			className="flex items-center gap-3 p-2 rounded-lg transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
			onClick={() => onCheckedChange(!checked)}
		>
			<Checkbox
				id={id}
				checked={checked}
				onCheckedChange={onCheckedChange}
				className="h-5 w-5 rounded border-neutral-300 dark:border-neutral-700 data-[state=checked]:bg-primary-600 data-[state=checked]:border-primary-600 text-white"
			/>
			<label
				htmlFor={id}
				className="text-sm font-medium text-neutral-600 dark:text-neutral-300 cursor-pointer select-none"
			>
				{label}
			</label>
		</div>
	);

	return (
		// Contenedor principal
		<div className="space-y-8 bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
			<div className="flex items-center justify-between">
				<h3 className="text-xl font-bold font-playfair text-neutral-900 dark:text-white flex items-center gap-3">
					<SlidersHorizontal className="h-5 w-5 text-primary-600" />
					<span>Filtros</span>
				</h3>
				<Button
					variant="ghost"
					size="sm"
					onClick={clearFilters}
					className="text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-white transition-colors h-8"
				>
					<X className="h-3.5 w-3.5 mr-1.5" />
					Limpiar
				</Button>
			</div>

			{/* Sección de Categorías */}
			<div className="space-y-3">
				<h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
					Categorías
				</h4>
				<div className="space-y-1">
					{categories.map((category) => (
						<FilterCheckbox
							key={category.id}
							id={category.id}
							label={category.label}
							checked={selectedCategories.includes(category.id)}
							onCheckedChange={(checked: boolean) => {
								setSelectedCategories((prev) =>
									checked
										? [...prev, category.id]
										: prev.filter((id) => id !== category.id)
								);
							}}
						/>
					))}
				</div>
			</div>

			{/* Sección de Rango de Precio */}
			<div className="space-y-4 pt-2 border-t border-neutral-100 dark:border-neutral-800">
				<h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mt-4">
					Rango de Precio
				</h4>
				<div className="px-2">
					<Slider
						value={priceRange}
						onValueChange={setPriceRange}
						min={0}
						max={1000}
						step={10}
						className="[&>span:first-child]:h-1.5 [&>span:first-child>span]:bg-primary-600 [&>span:last-child]:border-primary-600"
					/>
					<div className="flex justify-between mt-4">
						<span className="text-xs font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
							S/ {priceRange[0]}
						</span>
						<span className="text-xs font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
							S/ {priceRange[1]}
						</span>
					</div>
				</div>
			</div>

			{/* Sección de Artesanos */}
			<div className="space-y-3 border-t border-neutral-100 dark:border-neutral-800 pt-4">
				<h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
					Artesanos
				</h4>
				<div className="space-y-1">
					{artisans.map((artisan) => (
						<FilterCheckbox
							key={artisan.id}
							id={artisan.id}
							label={artisan.label}
							checked={selectedArtisans.includes(artisan.id)}
							onCheckedChange={(checked: boolean) => {
								setSelectedArtisans((prev) =>
									checked
										? [...prev, artisan.id]
										: prev.filter((id) => id !== artisan.id)
								);
							}}
						/>
					))}
				</div>
			</div>

			{/* Botón de Acción Final */}
			<div className="pt-2">
				<Button
					size="lg"
					className="w-full h-12 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold hover:bg-black dark:hover:bg-neutral-200 shadow-md rounded-xl transition-all"
				>
					Aplicar Filtros
				</Button>
			</div>
		</div>
	);
}