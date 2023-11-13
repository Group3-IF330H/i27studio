<?php

namespace App\Models;

use App\Models\Client;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    public function Client()
    {
        return $this->belongsTo(Client::class, 'id_client');
    }

    public function Category()
    {
        return $this->belongsTo(Category::class, 'id_category');
    }
}
