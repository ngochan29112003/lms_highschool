<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuyenModel extends Model
{
    use HasFactory;
    protected $table = 'quyen';
    protected $primaryKey = 'ma_quyen';
    public $timestamps = false;
}
