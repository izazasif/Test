<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $guarded = [];
    protected $table = 'news';
    protected $fillable = [
        'title','category_id','description','author','image'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
