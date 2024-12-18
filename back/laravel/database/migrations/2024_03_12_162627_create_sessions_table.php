<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSessionsTable extends Migration
{
    public function up()
    {
        Schema::create('sessions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pelicula_id')->constrained('pelicules');
            $table->date('fecha');
            $table->time('hora');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::table('compras', function (Blueprint $table) {
            $table->dropForeign(['sesion_id']);
        });

        // Ahora se puede eliminar la tabla 'sessions'
        Schema::dropIfExists('sessions');
    }
}
