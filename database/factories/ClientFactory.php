<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Client>
 */
class ClientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        static $id = 1;
        return [
            'nama_client' => fake()->company(),
            'lokasi_client' => fake()->city(),
            'logo_client' => 'logo' . $id++ . '.webp'
        ];
    }
}
