<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nama_project' => fake()->words(3, true),
            'kategori_project' => fake()->word(),
            'id_client' => rand(1, 10),
            'id_category' => rand(1, 10)
        ];
    }
}
