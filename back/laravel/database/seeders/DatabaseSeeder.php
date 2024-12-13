<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\PeliculasSeeder;
use Database\Seeders\SesionSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Llamamos a los seeders
        $this->call([
            PeliculesSeeder::class,
            SesionSeeder::class,
        ]);
    }
}
