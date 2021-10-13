<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $guarded = [];
    protected $table = 'category';
    protected $fillable = [
        'title','description','updated_at','created_at'
    ];

    public function news()
    {
        return $this->hasMany(News::class,'category_id','category_id');
    }
}
