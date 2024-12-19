<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DiemDanhmodel extends Model
{
    use HasFactory;
    protected $table = 'diem_danh';
    protected $primaryKey = 'id';
    protected $fillable = [
        'ma_hoc_phan',
        'ma_nguoi_dung',
        'ngay_di_hoc',
        'di_hoc',
    ];
    public $timestamps = false;
}
