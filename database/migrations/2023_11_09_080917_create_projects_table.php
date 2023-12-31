<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('nama_project');
            $table->string('gambar_project')->nullable();
            $table->integer('id_client')->unsigned();
            $table->integer('id_category')->unsigned();
            $table->boolean('is_highlight')->nullable();
            $table->foreign('id_category')->references('id')->on('categories')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('id_client')->references('id')->on('clients')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
